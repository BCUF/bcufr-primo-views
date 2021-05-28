import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuIllBoxController} from './bcu-ill-box.controller';

export const bcuIllBoxModule = angular
    .module('bcuIllBoxModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .controller('bcuIllBoxController', bcuIllBoxController)
        .component('bcuIllBoxComponent',{
            controller: 'bcuIllBoxController',

        })
