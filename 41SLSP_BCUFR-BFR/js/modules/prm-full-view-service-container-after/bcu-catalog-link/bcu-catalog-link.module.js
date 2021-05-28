/**
* @ngdoc module
* @name bcuCatalogLinkModule
*
* @description
* - Add catalog link to details
* @example
* each fullview
*
*/
import {bcuCatalogLinkController} from './bcu-catalog-link.controller';
import {bcuCatalogLinkHtml} from './bcu-catalog-link.html';


export const bcuCatalogLinkModule = angular
    .module('bcuCatalogLinkModule', [])
        .controller('bcuCatalogLinkController', bcuCatalogLinkController)
        .component('bcuCatalogLinkComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'bcuCatalogLinkController',
            template: bcuCatalogLinkHtml
        })
