import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuOffCampusController} from './bcu-off-campus.controller';
import {bcuOffCampusConfig} from './bcu-off-campus.config';
import {bcuOffCampusHtml} from './bcu-off-campus.html';

export const bcuOffCampusModule = angular
    .module('bcuOffCampusModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuOffCampusConfig', bcuOffCampusConfig)
        .controller('bcuOffCampusController', bcuOffCampusController)
        .component('bcuOffCampus',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuOffCampusController',
            template: bcuOffCampusHtml

        })
