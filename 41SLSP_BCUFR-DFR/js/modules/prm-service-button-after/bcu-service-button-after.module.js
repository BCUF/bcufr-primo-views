import {bcuServiceButtonModule} from './bcu-service-button/bcu-service-button.module';

export const bcuServiceButtonAfterModule = angular
    .module('bcuServiceButtonAfterModule', [])
        .component('prmServiceButtonAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-service-button-component after-ctrl="$ctrl"></<bcu-service-button-component>'
        });

bcuServiceButtonAfterModule.requires.push(bcuServiceButtonModule.name);
