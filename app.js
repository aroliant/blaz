import Logger from './server/utils/Logger';
import AppConstants from './server/config/AppConstants';
import BlazInstaller from './server/utils/BlazInstaller';
import BlazApiServer from './server/services/BlazApiServer'
import EnvVars from './server/utils/EnvVars'
import http from 'http'


const blazInstaller = new BlazInstaller()
const blazApiServer = new BlazApiServer()

if (!EnvVars.IS_BLAZ_INSTANCE) {
  Logger.info("Installing Blaz")
  blazInstaller.install() // Start the installer if Blaz is not installed

} else {
  const app = require('./server/blazApp')

  var port = normalizePort(process.env.PORT || '3000')
  app.set('port', port)

  var server = http.createServer(app)

  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)

}

function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false

}

function onError(error) {
  Logger.log('Error')
}


function onListening() {
  Logger.log('Listening')
}

/*

if (!blazInstaller.isInstalled()) {
  blazInstaller.install() // Start the installer if Blaz is not installed
} else {
  blazApiServer.run() // Else start the Blaz Server
}

*/