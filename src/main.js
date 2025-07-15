// Electron メインプロセスのエントリポイント
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    title: 'Test-Browser',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true, // 追加: webviewタグ有効化
      webSecurity: true, // Enable web security for HTTPS
      allowRunningInsecureContent: false, // Don't allow mixed content
    },
  });
  win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Handle certificate errors for HTTPS support
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  // For development purposes, you may want to allow self-signed certificates
  // In production, you should validate certificates properly
  console.log('Certificate error:', error, 'for URL:', url);
  // For this simple browser, we'll use default behavior (reject invalid certificates)
  callback(false);
});
