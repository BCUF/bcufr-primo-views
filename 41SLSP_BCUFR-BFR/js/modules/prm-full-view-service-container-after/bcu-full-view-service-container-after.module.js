import {bcuCatalogLinkModule} from './bcu-catalog-link/bcu-catalog-link.module';

export const bcuFullViewServiceContainerAfterModule = angular
    .module('bcuFullViewServiceContainerAfterModule', [])
        .component('prmFullViewServiceContainerAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-catalog-link-component after-ctrl="$ctrl"></bcu-catalog-link>`
        });

bcuFullViewServiceContainerAfterModule.requires.push(bcuCatalogLinkModule.name);
