import {bcuLocationItemsFilterModule} from './bcu-location-items-filter/bcu-location-items-filter.module';
import {bcuLibInfoModule} from './bcu-lib-info/bcu-lib-info.module';

export const bcuLocationItemsAfterModule = angular
    .module('bcuLocationItemsAfterModule', [])
        .component('prmLocationItemsAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-location-items-filter-component after-ctrl="$ctrl"></bcu-location-items-filter-component><bcu-lib-info-component after-ctrl="$ctrl"></bcu-lib-info-component>'
        });

bcuLocationItemsAfterModule.requires.push(bcuLocationItemsFilterModule.name);
bcuLocationItemsAfterModule.requires.push(bcuLibInfoModule.name);
