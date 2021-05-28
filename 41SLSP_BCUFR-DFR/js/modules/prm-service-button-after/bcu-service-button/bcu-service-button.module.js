import {bcuServiceButtonController} from './bcu-service-button.controller';

export const bcuServiceButtonModule = angular
    .module('bcuServiceButtonModule', [])
        .controller('bcuServiceButtonController', bcuServiceButtonController)
        .component('bcuServiceButtonComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuServiceButtonController',

        })
