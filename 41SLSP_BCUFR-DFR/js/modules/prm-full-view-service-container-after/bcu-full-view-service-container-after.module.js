import {bcuShowImgModule} from './bcu-show-img/bcu-show-img.module';

export const bcuFullViewServiceContainerAfterModule = angular
    .module('bcuFullViewServiceContainerAfterModule', [])
        .component('prmFullViewServiceContainerAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-show-img class="full-view-section" after-ctrl="$ctrl" ng-if="$ctrl.parentCtrl.service.serviceName == \'brief\'"></bcu-show-img>'
        });

bcuFullViewServiceContainerAfterModule.requires.push(bcuShowImgModule.name);
