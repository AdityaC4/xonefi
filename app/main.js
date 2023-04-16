/*
SPDX-License-Identifier: GPL-3.0-or-later

Copyright (c) 2020-2021 OneFi <https://onefi.io>

OneFi is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OneFi Router is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with OneFi Router.  If not, see <https://www.gnu.org/licenses/>.
*/

const { app, BrowserWindow } = require('electron');
const config = require("../api/config");

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 1024,
        minWidth: 800,
        minHeight: 600,
        resizable: true,
        title: "OneFi Manager",
        webPreferences: {
            nodeIntegration: true,
		contextIsolation: false,
		enableRemoteModule: true,
        },
        icon: 'icon.png'
    })

    config.config_init_if_absent();
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

