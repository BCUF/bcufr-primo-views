import {bcuLibInfoModule} from './bcu-lib-info/bcu-lib-info.module';

export const bcuLocationItemsAfterModule = angular
    .module('bcuLocationItemsAfterModule', [])
        .component('prmLocationItemsAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-lib-info-component after-ctrl="$ctrl"></bcu-lib-info-component>'
        });

bcuLocationItemsAfterModule.requires.push(bcuLibInfoModule.name);
