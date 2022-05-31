import {bcuLocationItemsFilterController} from './bcu-location-items-filter.controller';

export const bcuLocationItemsFilterModule = angular
    .module('bcuLocationItemsFilterModule', [])
        .controller('bcuLocationItemsFilterController', bcuLocationItemsFilterController)
        .component('bcuLocationItemsFilterComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'bcuLocationItemsFilterController'
        })

