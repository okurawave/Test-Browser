describe('URL Synchronization', () => {
  test('index.html should contain all required URL synchronization event listeners', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for did-navigate event listener
    expect(content).toMatch(/addEventListener.*did-navigate/);
    expect(content).toMatch(/urlInput\.value = event\.url/);
    
    // Check for did-navigate-in-page event listener
    expect(content).toMatch(/addEventListener.*did-navigate-in-page/);
    
    // Check for will-navigate event listener
    expect(content).toMatch(/addEventListener.*will-navigate/);
    
    // Check for did-fail-load event listener
    expect(content).toMatch(/addEventListener.*did-fail-load/);
    
    // Check for loading state event listeners
    expect(content).toMatch(/addEventListener.*did-start-loading/);
    expect(content).toMatch(/addEventListener.*did-stop-loading/);
    
    // Check for load-commit event listener
    expect(content).toMatch(/addEventListener.*load-commit/);
    
    // Verify that URL input is updated in navigation events
    const urlUpdatePattern = /urlInput\.value = event\.url/g;
    const matches = content.match(urlUpdatePattern);
    expect(matches.length).toBeGreaterThanOrEqual(3);
    
    // Verify that navigation buttons are updated after URL changes
    expect(content).toMatch(/updateNavigationButtons\(\)/);
  });

  test('URL synchronization should handle all navigation scenarios', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for comprehensive event handling
    const eventHandlers = [
      'did-navigate',
      'did-navigate-in-page',
      'will-navigate',
      'new-window',
      'did-fail-load',
      'did-start-loading',
      'did-stop-loading',
      'load-commit'
    ];
    
    eventHandlers.forEach(eventName => {
      expect(content).toMatch(new RegExp(`addEventListener.*${eventName}`));
    });
  });

  test('URL input should be updated consistently across all navigation events', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Count occurrences of URL input updates
    const urlUpdatePattern = /urlInput\.value = event\.url/g;
    const webviewSrcPattern = /urlInput\.value = webview\.src/g;
    
    const eventUrlMatches = content.match(urlUpdatePattern) || [];
    const webviewSrcMatches = content.match(webviewSrcPattern) || [];
    
    // Should be updated in multiple events
    expect(eventUrlMatches.length).toBeGreaterThanOrEqual(3);
    expect(webviewSrcMatches.length).toBeGreaterThanOrEqual(1);
    
    // Verify URL validation in new-window handler
    expect(content).toMatch(/url\.startsWith\('http:\/\/'\)/);
    expect(content).toMatch(/url\.startsWith\('https:\/\/'\)/);
    
    // Verify error handling in did-fail-load
    expect(content).toMatch(/event\.isMainFrame/);
  });

  test('URL synchronization should work with manual navigation', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for Enter key handling in URL input
    expect(content).toMatch(/addEventListener.*keypress/);
    expect(content).toMatch(/e\.key === 'Enter'/);
    expect(content).toMatch(/webview\.src = url/);
    
    // Check for protocol handling
    expect(content).toMatch(/!url\.startsWith\('http:\/\/'\)/);
    expect(content).toMatch(/!url\.startsWith\('https:\/\/'\)/);
    expect(content).toMatch(/url = 'https:\/\/' \+ url/);
  });

  test('Navigation buttons should be updated when URL changes', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check that updateNavigationButtons is called in navigation events
    const navigationEventHandlers = [
      'did-navigate',
      'did-navigate-in-page',
      'dom-ready',
      'did-fail-load',
      'did-start-loading',
      'did-stop-loading',
      'load-commit'
    ];
    
    navigationEventHandlers.forEach(eventName => {
      const eventHandlerRegex = new RegExp(`addEventListener.*${eventName}[\\s\\S]*?updateNavigationButtons\\(\\)`);
      expect(content).toMatch(eventHandlerRegex);
    });
    
    // Check updateNavigationButtons function implementation
    expect(content).toMatch(/function updateNavigationButtons\(\)/);
    expect(content).toMatch(/backBtn\.disabled = !webview\.canGoBack\(\)/);
    expect(content).toMatch(/forwardBtn\.disabled = !webview\.canGoForward\(\)/);
  });

  test('Error handling and loading states should be properly managed', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for proper error handling in did-fail-load
    expect(content).toMatch(/addEventListener.*did-fail-load/);
    expect(content).toMatch(/event\.isMainFrame/);
    expect(content).toMatch(/urlInput\.value = webview\.src/);
    
    // Check for loading state management
    expect(content).toMatch(/addEventListener.*did-start-loading/);
    expect(content).toMatch(/addEventListener.*did-stop-loading/);
    
    // Check for redirect handling in load-commit
    expect(content).toMatch(/addEventListener.*load-commit/);
    expect(content).toMatch(/Load commit/);
    
    // Verify console logging for debugging
    expect(content).toMatch(/console\.log.*Navigation failed/);
    expect(content).toMatch(/console\.log.*Load commit/);
  });
});