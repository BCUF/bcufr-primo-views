import {bcuOffCampusModule} from './bcu-off-campus/bcu-off-campus.module';
import {bcuOnlineFeedbackModule} from './bcu-online-feedback/bcu-online-feedback.module';

export const bcuViewitAfterModule = angular
    .module('bcuViewitAfterModule', [])
        .component('prmAlmaViewitAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-online-feedback after-ctrl="$ctrl"></bcu-online-feedback><bcu-off-campus after-ctrl="$ctrl"></bcu-off-campus>'
        });

bcuViewitAfterModule.requires.push(bcuOffCampusModule.name);
bcuViewitAfterModule.requires.push(bcuOnlineFeedbackModule.name);
