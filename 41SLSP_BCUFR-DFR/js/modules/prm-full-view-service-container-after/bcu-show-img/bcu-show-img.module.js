import {bcuShowImgController} from './bcu-show-img.controller';
import {bcuShowImgHtml} from './bcu-show-img.html';


export const bcuShowImgModule = angular
    .module('bcuShowImgModule', [])
        .controller('bcuShowImgController', bcuShowImgController)
        .component('bcuShowImg',  {
            bindings: {afterCtrl: '<'},
            controller: 'bcuShowImgController',
            template: bcuShowImgHtml
        })
