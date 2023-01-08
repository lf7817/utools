// src/preload.ts
var import_child_process = require("child_process");
async function openFolderWithVScode() {
  try {
    const url = await window.utools.readCurrentFolderPath();
    const preCmd = utools.isWindows() ? "" : "zsh -l -c";
    const cmd = `${preCmd} "code --folder-uri ${url}"`;
    (0, import_child_process.execSync)(cmd, {
      timeout: 3e3,
      windowsHide: true,
      encoding: "utf-8"
    });
  } catch (error) {
    alert(error);
  }
}
openFolderWithVScode();
