import { execSync } from "child_process";

async function openFolderWithVScode() {
  if (utools.isLinux()) alert("暂不支持linux");

  try {
    const url = await window.utools.readCurrentFolderPath();
    const cmd = utools.isWindows()
      ? `code ${url}`
      : `zsh -l -c "code --folder-uri ${url}"`;
    execSync(cmd, {
      timeout: 3000,
      windowsHide: true,
      encoding: "utf-8",
    });
  } catch (error) {
    alert(error);
  }
}

openFolderWithVScode();
