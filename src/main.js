const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1500, height: 720})
  // mainWindow.setMenu(null)
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000')


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
