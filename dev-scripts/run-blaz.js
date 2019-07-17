const shell = require('shelljs')
const fs = require('fs')

const BLAZ_IMAGE_TAG = fs.readFileSync(__dirname + "/../server/env").toString().split("=")[1]
const command = `docker run -p 80:80 -p 3000:3000 -p 443:443 -v /var/run/docker.sock:/var/run/docker.sock -v /blaz:/blaz blaz/blaz:${BLAZ_IMAGE_TAG}`
console.log("Running the command on shell", command)

shell.exec(command)

