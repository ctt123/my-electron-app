const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    console.log("createWindow")

    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
    console.log('xixi')
    app.on('activate', () => {
        console.log('BrowserWindow.getAllWindows()', BrowserWindow,BrowserWindow.getAllWindows())
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    console.log('window-all-closed')
    if (process.platform !== 'darwin') app.quit()
})
