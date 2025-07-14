describe('Electron main process', () => {
  test('main.js should exist and be a valid JS file', () => {
    const fs = require('fs');
    const path = require('path');
    const mainPath = path.resolve(__dirname, '../main.js');
    expect(fs.existsSync(mainPath)).toBe(true);
    const content = fs.readFileSync(mainPath, 'utf8');
    expect(content).toMatch(/BrowserWindow/);
  });
});
