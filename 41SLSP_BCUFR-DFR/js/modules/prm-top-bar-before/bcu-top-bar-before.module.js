import {bcuAlertModule} from './bcu-alert/bcu-alert.module';

export const bcuTopBarBeforeModule = angular
    .module('bcuTopBarBeforeModule', [])
        .component('prmTopBarBefore',  {
            template: '<bcu-alert-component after-ctrl="$ctrl"></bcu-alert-component>'
        });

bcuTopBarBeforeModule.requires.push(bcuAlertModule.name);
