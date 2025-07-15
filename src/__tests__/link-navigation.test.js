describe('Link Navigation and HTTPS Support', () => {
  test('index.html should contain new-window event handler for link navigation', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for new-window event listener
    expect(content).toMatch(/addEventListener.*new-window/);
    expect(content).toMatch(/webview\.src = url/);
    expect(content).toMatch(/will-navigate/);
  });

  test('index.html should contain disabled button CSS styles', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for disabled button styles
    expect(content).toMatch(/button:disabled/);
    expect(content).toMatch(/cursor:not-allowed/);
    expect(content).toMatch(/opacity:0\.5/);
  });

  test('WebView should have allowpopups attribute for link handling', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for allowpopups attribute
    expect(content).toMatch(/<webview.*allowpopups/);
  });

  test('URL input should support both HTTP and HTTPS protocols', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for protocol handling
    expect(content).toMatch(/http:\/\//);
    expect(content).toMatch(/https:\/\//);
    expect(content).toMatch(/url = 'https:\/\/' \+ url/);
  });

  test('Navigation events should be properly handled', () => {
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    // Check for navigation event handlers
    expect(content).toMatch(/addEventListener.*did-navigate/);
    expect(content).toMatch(/addEventListener.*did-navigate-in-page/);
    expect(content).toMatch(/urlInput\.value = event\.url/);
    expect(content).toMatch(/updateNavigationButtons/);
  });
});