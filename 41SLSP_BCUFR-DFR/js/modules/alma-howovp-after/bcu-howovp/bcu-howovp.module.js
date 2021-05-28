import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuHowovpController} from './bcu-howovp.controller';
import {bcuHowovpConfig} from './bcu-howovp.config';

export const bcuHowovpModule = angular
    .module('bcuHowovpModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuHowovpConfig', bcuHowovpConfig)
        .controller('bcuHowovpController', bcuHowovpController)
        .component('bcuHowovpComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuHowovpController',

        })
