import {bcuConfigService} from '../../services/bcu-config.service';

export const bcuHelpModule = angular
    .module('bcuHelpModule', [])
    .controller('BcuHelp', ['$scope', 'bcuConfigService', function ($scope, bcuConfigService) {
                  $scope.view = bcuConfigService.getView().replace(':', '-');
    }]);

