import {bcuLangSwitchModule} from './bcu-lang-switch/bcu-lang-switch.module';

export const bcuUserAreaExpandableAfterModule = angular
    .module(' bcuUserAreaExpandableAfterModule', [])
        .component('prmUserAreaExpandableAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-lang-switch-component after-ctrl="$ctrl"></bcu-lang-switch-component>`,
        });

bcuUserAreaExpandableAfterModule.requires.push(bcuLangSwitchModule.name);