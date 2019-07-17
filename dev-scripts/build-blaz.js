const shell = require('shelljs')
const fs = require('fs')

const BLAZ_IMAGE_TAG = fs.readFileSync(__dirname + "/../server/env").toString().trim().split("=")[1]

if (process.argv[2]) {
  if (process.argv[2] == "--local") {
    console.log("************ LOCAL BUILD ***************")
    return shell.exec(`docker build -t blaz/blaz:${BLAZ_IMAGE_TAG}  -f Dockerfile.dev .`)
  }
}
shell.exec(`docker build -t blaz/blaz:${BLAZ_IMAGE_TAG} .`)
