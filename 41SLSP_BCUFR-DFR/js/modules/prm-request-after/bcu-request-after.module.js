import {bcuFeesLinkModule} from './bcu-fees-link/bcu-fees-link.module';

export const bcuRequestAfterModule = angular
    .module('bcuRequestAfterModule', [])
        .component('prmRequestAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-fees-link-component after-ctrl="$ctrl"></bcu-fees-link-component>`
        });

bcuRequestAfterModule.requires.push(bcuFeesLinkModule.name);
