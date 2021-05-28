import {bcuCourseReserveModule} from './bcu-course-reserve/bcu-course-reserve.module';

export const bcuJournalIndicationLineModule = angular
    .module('bcuJournalIndicationLineModule', [])
        .component('prmSearchResultJournalIndicationLineAfter',  {
            bindings: {parentCtrl: '<'},
            template: '<bcu-course-reserve after-ctrl="$ctrl"></bcu-course-reservediv>'
        });

bcuJournalIndicationLineModule.requires.push(bcuCourseReserveModule.name);