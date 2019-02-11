const {app, BrowserWindow, Menu} = require('electron')
const {resolve} = require('path')
const {format} = require('url')

let mainFrame = null

function createWindow() {
  const options = {
    show: false,
    title: app.getName(),
    width: 800,
    height: 600,
    acceptFirstMouse: true,
    affinity: 'default',
    webPreferences: {
      experimentalFeatures: true,
    },
  }
  const frame = new BrowserWindow(options)
  loadHTMLFile(frame, 'src/index.html')
  if (process.platform !== 'darwin') {
    createWindowMenu(frame)
  }
  // gracefully show window
  frame.once('ready-to-show', () => {
    frame.show()
  })
  // reference to avoid GC
  collectWindow(frame)
}

function loadHTMLFile(frame, path) {
  frame.loadURL(format({
    protocol: 'file',
    slashes: true,
    pathname: resolve(__dirname, path),
  }))
}

function collectWindow(frame) {
  mainFrame = frame
  mainFrame.on('closed', () => {
    mainFrame = null
  })
}

function createApplicationMenu() {
  const menu = Menu.buildFromTemplate([
    {
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'quit'},
      ],
    },
    {role: 'editMenu'},
    {role: 'windowMenu'},
    {
      role: 'help',
      submenu: [
        {role: 'toggledevtools'},
      ],
    },
  ])
  Menu.setApplicationMenu(menu)
}

function createWindowMenu(frame) {
  const menu = Menu.buildFromTemplate([
    {role: 'editMenu'},
    {role: 'windowMenu'},
    {
      label: 'Help',
      submenu: [
        {role: 'toggledevtools'},
      ],
    },
  ])
  frame.setMenu(menu)
  frame.setMenuBarVisibility(false)
}

app.on('ready', () => {
  if (process.platform === 'darwin') {
    createApplicationMenu()
  }
  createWindow()
})

app.on('activate', () => {
  if (!frames.length && app.isReady()) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
