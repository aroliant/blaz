const shell = require('shelljs')
const fs = require('fs')

const BLAZ_IMAGE_TAG = fs.readFileSync(__dirname + "/../server/env").toString().split("=")[1]

shell.exec(`docker build -t blaz/blaz:${BLAZ_IMAGE_TAG} .`)
