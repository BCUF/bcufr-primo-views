export class bcuPrmFacetExactAfterController {
    constructor($scope, $location, bcuConfigService, bcuSearchTargets, bcuExternalSearchLabels) {
        this.$scope = $scope;
        this.$location = $location;
        this.searchTargets = bcuSearchTargets;
        this.searchLabels = bcuExternalSearchLabels;
        this.label = bcuConfigService.getLabel(bcuExternalSearchLabels, 'label');
        this.$scope.vid = bcuConfigService.getView().replace(':', '-');
    }
    $onInit() {
        this.$scope.display = false;
        if (this.label == this.parentCtrl.facetGroup.name) {
            this.$scope.display = true;
            this.$scope.targets = this.searchTargets
            let query = this.$location.search().query
            let filter = this.$location.search().pfilter
            this.$scope.queries = Object.prototype.toString.call(query) === '[object Array]' ? query : query ? [query] : false
            this.$scope.filters = Object.prototype.toString.call(filter) === '[object Array]' ? filter : filter ? [filter] : false
        }
    }
}

bcuPrmFacetExactAfterController.$inject = ['$scope', '$location', 'bcuConfigService', 'bcuSearchTargets', 'bcuExternalSearchLabels'];
