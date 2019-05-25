import Logger from './server/utils/Logger';
import AppConstants from './server/config/AppConstants';
import BlazInstaller from './server/utils/BlazInstaller';
import BlazApiServer from './server/services/BlazApiServer'
import EnvVars from './server/utils/EnvVars'


const blazInstaller = new BlazInstaller()
const blazApiServer = new BlazApiServer()

if (!EnvVars.IS_BLAZ_INSTANCE) {
  Logger.info("Installing Blaz")
  blazInstaller.install() // Start the installer if Blaz is not installed
} else {
  const blazApp = require('./server/blazApp')
  
}

/*
 
if (!blazInstaller.isInstalled()) {
  blazInstaller.install() // Start the installer if Blaz is not installed
} else {
  blazApiServer.run() // Else start the Blaz Server
}

*/