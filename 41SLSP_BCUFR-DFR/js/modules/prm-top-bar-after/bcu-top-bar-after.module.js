import {bcuIllBoxModule} from './bcu-ill-box/bcu-ill-box.module';

export const bcuTopBarAfterModule = angular
    .module('bcuTopBarAfterModule', [])
        .component('prmTopbarAfter',  {
            template: '<bcu-ill-box-component after-ctrl="$ctrl"></bcu-ill-component>'
        });

bcuTopBarAfterModule.requires.push(bcuIllBoxModule.name);
