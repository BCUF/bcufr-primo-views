import {bcuConfigService} from '../../services/bcu-config.service';
import {bcuHomeConfig} from './bcu-home.config';
import {bcuHomeController} from './bcu-home.controller';

export const bcuHomeModule = angular
    .module('bcuHomeModule', [])
    .factory('bcuHomeConfig', bcuHomeConfig)
    .factory('bcuConfigService', bcuConfigService)
    .controller('bcuHomeController', bcuHomeController);

//bcuHomeModule.requires.push(bcuConfigService.name);
