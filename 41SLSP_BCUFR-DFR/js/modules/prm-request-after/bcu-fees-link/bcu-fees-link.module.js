import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuFeesLinkConfig} from './bcu-fees-link.config';
import {bcuFeesLinkController} from './bcu-fees-link.controller';

export const bcuFeesLinkModule = angular
    .module('bcuFeesLinkModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuFeesLinkConfig', bcuFeesLinkConfig)
        .controller('bcuFeesLinkController', bcuFeesLinkController)
        .component('bcuFeesLinkComponent',{
            controller: 'bcuFeesLinkController',
            bindings: {afterCtrl: '<'}
        })
