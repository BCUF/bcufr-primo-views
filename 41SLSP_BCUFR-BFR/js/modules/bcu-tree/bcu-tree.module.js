/**
* @ngdoc module
* @name bcuTreeModule
*
* @description
* - Classification tree
* @example
* on landing page
*
*/
import {bcuTreeController} from './bcu-tree.controller';
import {bcuTreeConfig} from './bcu-tree.config';
import {bcuNodeModule} from './bcu-node/bcu-node.module';


export const bcuTreeModule = angular
    .module('bcuTreeModule', [])
    .controller('bcuTreeController', bcuTreeController)
    .factory('bcuTreeConfig', bcuTreeConfig);

bcuTreeModule.requires.push(bcuNodeModule.name);
