import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuCourseReserveConfig} from './bcu-course-reserve.config';
import {bcuCourseReserveController} from './bcu-course-reserve.controller';
import {bcuCourseReserveHtml} from './bcu-course-reserve.html';

export const bcuCourseReserveModule = angular
    .module('bcuCourseReserveModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuCourseReserveConfig', bcuCourseReserveConfig)
        .controller('bcuCourseReserveController', bcuCourseReserveController)
        .component('bcuCourseReserve',{
            controller: 'bcuCourseReserveController',
            bindings: {afterCtrl: '<'},
            template: bcuCourseReserveHtml
        });