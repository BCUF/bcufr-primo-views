import {bcuEasterEggController} from './bcu-easter-egg.controller';
import {bcuEasterEggHtml} from './bcu-easter-egg.html';

export const bcuEasterEggModule = angular
    .module('bcuEasterEggModule', [])
        .controller('bcuEasterEggController', bcuEasterEggController)
        .component('bcuEasterEgg',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuEasterEggController',
            template: bcuEasterEggHtml,
        })
