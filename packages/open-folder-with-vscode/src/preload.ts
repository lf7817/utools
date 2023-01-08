import { execSync } from 'child_process';

async function openFolderWithVScode() {
  try {
    const url = await window.utools.readCurrentFolderPath();
    const preCmd = utools.isWindows() ? '' : 'zsh -l -c';
    const cmd = `${preCmd} "code --folder-uri ${url}"`;
    execSync(cmd, {
      timeout: 3000,
      windowsHide: true,
      encoding: "utf-8",
    });
  } catch(error) {
    alert(error);
  }
}

openFolderWithVScode();