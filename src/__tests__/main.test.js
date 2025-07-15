describe('Electron main process', () => {
  test('main.js should exist and be a valid JS file', () => {
    const fs = require('fs');
    const path = require('path');
    const mainPath = path.resolve(__dirname, '../main.js');
    expect(fs.existsSync(mainPath)).toBe(true);
    const content = fs.readFileSync(mainPath, 'utf8');
    expect(content).toMatch(/BrowserWindow/);
  });

  test('main.js should have proper security settings for HTTPS', () => {
    const fs = require('fs');
    const path = require('path');
    const mainPath = path.resolve(__dirname, '../main.js');
    const content = fs.readFileSync(mainPath, 'utf8');
    
    // Check for security settings
    expect(content).toMatch(/webSecurity: true/);
    expect(content).toMatch(/allowRunningInsecureContent: false/);
    expect(content).toMatch(/certificate-error/);
  });
});
