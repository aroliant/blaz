#!/usr/bin/env node

console.log('Blaz Starting');

import AppConstants from '../server/config/AppConstants';
import BLazInstaller from '../server/utils/BlazInstaller';

// const AppConstants = require('../server/config/AppConstants');
// const BLazInstaller = require('../server/utils/BlazInstaller');

BLazInstaller.install();


