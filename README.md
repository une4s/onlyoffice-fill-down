## Overview

The only annoyance I had with switching to ONLYOFFICE was the lack of second-favorite keyboard shortcut, Ctrl+D.

This plugin replicates the fill down (Ctrl+D) behavior from Excel and LibreOffice Calc in ONLYOFFICE Spreadsheet Editor. Select a range and run the plugin to fill the first row's values and formulas down through the selection. Relative formula references are adjusted row by row automatically; absolute references (using `$`) are preserved.

It is not installed by default in cloud, [self-hosted](https://github.com/ONLYOFFICE/DocumentServer) or [desktop](https://github.com/ONLYOFFICE/DesktopEditors) versions of ONLYOFFICE editors.

## How to use

1. Select a range of cells where the top row contains the values or formulas you want to fill down.
2. Open the Plugins tab and press "Fill Down". The plugin runs instantly and closes.

### Keyboard launch
Press *and release* Alt (Option), E to navigate to the plugins menu, then note the letter under the Fill Down plugin (K on my system).

### Ctrl-D
For best results, set up a keyboard shortcut on your system:
- **Linux**: [AutoKey](https://github.com/autokey/autokey) (`sudo apt install autokey`)
- **Windows**: [AutoHotkey](https://www.autohotkey.com/)
- **Mac**: Use the built-in **Automator** (create a Quick Action that runs an AppleScript sending the keystrokes)

## How to install

### Easy

Download the .plugin file and choose "Install plugin manually" in the Plugin Manager.

### Hard
Copy the plugin folder to your ONLYOFFICE plugins directory:

- **Linux**: `~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/` (This is the location on the .deb install. Flatpak, Snap, and AppImage seem to vary slightly.)
- **Windows**: `%localappdata%\Programs\ONLYOFFICE\DesktopEditors\sdkjs-plugins\`
- **Mac**: `~/Library/Application Support/onlyoffice/desktopeditors/data/sdkjs-plugins/`

Then restart ONLYOFFICE.

For more information on plugins see https://api.onlyoffice.com/docs/plugin-and-macros/get-started/
