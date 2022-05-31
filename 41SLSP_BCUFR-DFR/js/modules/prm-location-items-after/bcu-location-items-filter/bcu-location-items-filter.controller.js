export class bcuLocationItemsFilterController {

    constructor($timeout, $scope) {
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.$watch('this.$ctrl.parentCtrl.loc.location.librarycodeTranslation', (newValue, oldValue, scope) => {
                if(!scope.$ctrl.parentCtrl.isLocationsFilterVisible && newValue && newValue != ''){
                    this.$scope.$watch('this.$ctrl.parentCtrl.loc.items', (currentItemsArray) => {
                        if (angular.isArray(currentItemsArray) && currentItemsArray.length > 1){
                                this.$timeout(() => {
                                    scope.$ctrl.parentCtrl.isLocationsFilterVisible = true;
                                }, 0);
                           }      
                    })
                }
            }, true);
        }
        catch(e){
            console.error("***BCUFR*** an error occured: bcuLocationItemsFilterController\n\n");
            console.error(e.message);
        }
    }
}

bcuLocationItemsFilterController.$inject = ['$timeout', '$scope'];