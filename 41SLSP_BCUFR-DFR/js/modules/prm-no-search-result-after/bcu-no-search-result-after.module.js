import {bcuEasterEggModule} from './bcu-easter-egg/bcu-easter-egg.module';

export const bcuNoSearchResultAfterModule = angular
    .module('bcuNoSearchResultAfterModule', [])
        .component('prmNoSearchResultAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-easter-egg after-ctrl="$ctrl"></bcu-easter-egg>'
        });

bcuNoSearchResultAfterModule.requires.push(bcuEasterEggModule.name);
