import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuLibInfoController} from './bcu-lib-info.controller';
import {bcuLibInfoHtml} from './bcu-lib-info.html';
import {bcuLibInfoConfig} from './bcu-lib-info.config';

export const bcuLibInfoModule = angular
    .module('bcuLibInfoModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuLibInfoConfig', bcuLibInfoConfig)
        .controller('bcuLibInfoController', bcuLibInfoController)
        .component('bcuLibInfoComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuLibInfoController',
            template: bcuLibInfoHtml,
        })
