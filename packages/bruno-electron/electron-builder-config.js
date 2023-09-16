require('dotenv').config({ path: process.env.DOTENV_PATH })

const config = {
  "appId": "com.usebruno.app",
  "productName": "Bruno",
  "electronVersion": "21.1.1",
  "directories": {
    "buildResources": "resources",
    "output": "out"
  },
  "files": [
    "**/*"
  ],
  "afterSign": "notarize.js",
  "win": {
    "artifactName": "${name}_${version}_${arch}_win.${ext}",
    "icon": "resources/icons/png"
  }
};

module.exports = config;