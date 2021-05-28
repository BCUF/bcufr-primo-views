/**
* @ngdoc module
* @name bcuSectionOrderingModule
*
* @description
* - The order of sections is changed: action_list is moved to the end.
* - fullview and toc of fullview
*
*
* <b>AngularJS Dependencies</b><br>
*
*
* <b>CSS/Image Dependencies</b><br>
* CSS bcu-section-ordering.css
*
*
* @example
* each fullview
*
*/
import {bcuSectionOrderingController} from './bcu-section-ordering.controller';

export const bcuSectionOrderingModule = angular
    .module('bcuSectionOrderingModule', [])
        .controller('bcuSectionOrderingController', bcuSectionOrderingController)
        .component('bcuSectionOrderingComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'bcuSectionOrderingController'
        })
