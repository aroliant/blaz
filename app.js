import { Logger } from './server/utils';
import AppConstants from './server/config/AppConstants';
import BlazInstaller from './server/utils/BlazInstaller';
import BlazApiServer from './server/services/BlazApiServer'


const blazInstaller = new BlazInstaller()
const blazApiServer = new BlazApiServer()

if (!blazInstaller.isInstalled()) {
  blazInstaller.install() // Start the installer if Blaz is not installed
} else {
  blazApiServer.run() // Else start the Blaz Server
}
