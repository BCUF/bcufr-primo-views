import {bcuHowovpModule} from './bcu-howovp/bcu-howovp.module';

export const bcuAlmaHowovpAfterModule = angular
    .module('bcuAlmaHowovpAfterModule', [])
        .component('almaHowovpAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-howovp-component after-ctrl="$ctrl"></bcu-howovp-component>'
        });

bcuAlmaHowovpAfterModule.requires.push(bcuHowovpModule.name);
