import {bcuEditPersonalInfoButtonsController} from './bcu-edit-personal-info-buttons.controller.js';
import {bcuEditPersonalInfoButtonsHtml} from './bcu-edit-personal-info-buttons.html';

export const bcuEditPersonalInfoButtonsModule = angular
    .module('bcuEditPersonalInfoButtonsModule', [])
        .controller('bcuEditPersonalInfoButtonsController', bcuEditPersonalInfoButtonsController)
        .component('bcuEditPersonalInfoButtons',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuEditPersonalInfoButtonsController',
            template: bcuEditPersonalInfoButtonsHtml
        })
