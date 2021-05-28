import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuAlertController} from './bcu-alert.controller';
import {bcuAlertHtml} from './bcu-alert.html';

export const bcuAlertModule = angular
    .module('bcuAlertModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .controller('bcuAlertController', bcuAlertController)
        .component('bcuAlertComponent',{
            controller: 'bcuAlertController',
            template: bcuAlertHtml
        })
