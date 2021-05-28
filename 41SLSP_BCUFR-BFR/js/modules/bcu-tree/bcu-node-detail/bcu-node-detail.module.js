/**
* @ngdoc module
* @name bcuNodeDetailModule
*
* @description
* - Show node detail
* @example
* on landing page
*
*/
import {bcuNodeDetailController} from './bcu-node-detail.controller';
import {bcuNodeDetailHtml} from './bcu-node-detail.html';


export const bcuNodeDetailModule = angular
    .module('bcuNodeDetailModule', [])
    .component('bcuNodeDetailComponent',  {
        controller: ('bcuNodeDetailController', bcuNodeDetailController),
        bindings: {data: '<'},
        template: bcuNodeDetailHtml
    })
