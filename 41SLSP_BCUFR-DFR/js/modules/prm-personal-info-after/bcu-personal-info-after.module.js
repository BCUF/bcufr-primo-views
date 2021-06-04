import {bcuEditPersonalInfoButtonsModule} from './bcu-edit-personal-info-buttons/bcu-edit-personal-info-buttons.module';

export const bcuPersonalInfoModule = angular
    .module('bcuPersonalInfoModule', [])
        .component('prmPersonalInfoAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-edit-personal-info-buttons after-ctrl="$ctrl"></bcu-edit-personal-info-buttons>'
        });

bcuPersonalInfoModule.requires.push(bcuEditPersonalInfoButtonsModule.name);