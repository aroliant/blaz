import http from 'http'
import Logger from './server/utils/Logger';
import AppConstants from './server/config/AppConstants';
import BlazInstaller from './server/utils/BlazInstaller';
import BlazApiServer from './server/services/BlazApiServer'
import EnvVars from './server/utils/EnvVars'


const blazInstaller = new BlazInstaller()
const blazApiServer = new BlazApiServer()

if (!EnvVars.IS_BLAZ_INSTANCE) {
  Logger.info('Installing Blaz')
  blazInstaller.install() // Start the installer if Blaz is not installed

} else {
  // eslint-disable-next-line global-require
  const app = require('./server/blazApp')

  const port = process.env.PORT || 3000
  //port = parseInt(port, 3000)
  console.log("PORT ___ PORT", port)
  app.set('port', port)

  const server = http.createServer(app)

  server.listen(port)
  server.on('error', (err) => {
    Logger.log('Error on http ->  start', err)
  })
  server.on('listening', (err) => {
    Logger.log('Error on http -> listening', err)
  })

}


/*

if (!blazInstaller.isInstalled()) {
  blazInstaller.install() // Start the installer if Blaz is not installed
} else {
  blazApiServer.run() // Else start the Blaz Server
}

*/