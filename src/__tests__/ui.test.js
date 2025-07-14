describe('UI Elements', () => {
  test('index.html should contain required UI elements', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    expect(fs.existsSync(htmlPath)).toBe(true);
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for navigation buttons
    expect(content).toMatch(/&larr;/); // Back button
    expect(content).toMatch(/&rarr;/); // Forward button
    expect(content).toMatch(/&#x21bb;/); // Reload button
    
    // Check for address bar
    expect(content).toMatch(/input.*type="text"/);
    expect(content).toMatch(/URLを入力/);
    
    // Check for WebView element
    expect(content).toMatch(/<webview/);
    expect(content).toMatch(/allowpopups/);
    
    // Check for title bar
    expect(content).toMatch(/Test-Browser.*ページのタイトル/);
  });

  test('index.html should contain navigation JavaScript functionality', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for navigation button IDs
    expect(content).toMatch(/id="back-btn"/);
    expect(content).toMatch(/id="forward-btn"/);
    expect(content).toMatch(/id="reload-btn"/);
    expect(content).toMatch(/id="url-input"/);
    expect(content).toMatch(/id="webview"/);
    
    // Check for JavaScript event handlers
    expect(content).toMatch(/addEventListener.*keypress/);
    expect(content).toMatch(/addEventListener.*click/);
    expect(content).toMatch(/addEventListener.*dom-ready/);
    expect(content).toMatch(/addEventListener.*did-navigate/);
    expect(content).toMatch(/addEventListener.*page-title-updated/);
    
    // Check for navigation methods
    expect(content).toMatch(/webview\.canGoBack/);
    expect(content).toMatch(/webview\.canGoForward/);
    expect(content).toMatch(/webview\.goBack/);
    expect(content).toMatch(/webview\.goForward/);
    expect(content).toMatch(/webview\.reload/);
    
    // Check for disabled button styles
    expect(content).toMatch(/button:disabled/);
  });
});