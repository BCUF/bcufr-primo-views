/**
* @ngdoc module
* @name bcuNodeModule
*
* @description
* - Classification tree
* @example
* on landing page
*
*/
import {bcuNodeController} from './bcu-node.controller';
import {bcuNodeDetailModule} from '../bcu-node-detail/bcu-node-detail.module';


export const bcuNodeModule = angular
    .module('bcuNodeModule', [])
    .component('bcuNodeComponent', {
        controller: ('bcuNodeController', bcuNodeController),
        template: '<bcu-node-detail-component ng-repeat="node in $ctrl.tree" data="node"></bcu-node-detail-component>',
        bindings: {
          tree: '<'
        }
    });

bcuNodeModule.requires.push(bcuNodeDetailModule.name);
