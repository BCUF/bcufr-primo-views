import {bcuConfigService} from '../../../services/bcu-config.service';
import {bcuOnlineFeedbackController} from './bcu-online-feedback.controller';
import {bcuOnlineFeedbackConfig} from './bcu-online-feedback.config';
import {bcuOnlineFeedbackHtml} from './bcu-online-feedback.html';

export const bcuOnlineFeedbackModule = angular
    .module('bcuOnlineFeedbackModule', [])
        .factory('bcuConfigService', bcuConfigService)
        .factory('bcuOnlineFeedbackConfig', bcuOnlineFeedbackConfig)
        .controller('bcuOnlineFeedbackController', bcuOnlineFeedbackController)
        .component('bcuOnlineFeedback',{
            bindings: {afterCtrl: '<'},
            controller: 'bcuOnlineFeedbackController',
            template: bcuOnlineFeedbackHtml

        })
