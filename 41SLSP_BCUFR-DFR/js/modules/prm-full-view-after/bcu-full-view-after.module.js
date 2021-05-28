import {bcuSectionOrderingModule} from './bcu-section-ordering/bcu-section-ordering.module';

export const bcuFullViewAfterModule = angular
    .module('bcuFullViewAfterModule', [])
        .component('prmFullViewAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-section-ordering-component after-ctrl="$ctrl"></bcu-section-ordering-component>`
        });

bcuFullViewAfterModule.requires.push(bcuSectionOrderingModule.name);
