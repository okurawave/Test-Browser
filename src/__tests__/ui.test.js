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
});