export class bcuSectionOrderingController {

    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.$watch('this.$ctrl.parentCtrl.services[this.$ctrl.parentCtrl.services.length-1].serviceName', (newValue, oldValue, scope) => {
                if(newValue && newValue != 'action_list'){
                    scope.$ctrl.orderSections(scope.$ctrl.parentCtrl.services);
                }
            }, true);
        } catch (e) {
            console.error("***BCUFR*** bcuSectionOrderingController $onInit");
            console.error(e.message);
        }
    };

    orderSections(sections) {
        try {
            let filterResultActionList = sections.filter((s, i) => {return s.serviceName === 'action_list';} );
            sections.splice(sections.indexOf(filterResultActionList[0]), 1);
            sections.push(filterResultActionList[0]);
            let filterResultLinks = sections.filter((s, i) => {return s.serviceName === 'links';} );
            sections.splice(sections.indexOf(filterResultLinks[0]), 1);
            sections.push(filterResultLinks[0]);

        } catch (e) {
            console.error("***BCUFR*** bcuSectionOrderingController orderSections");
            console.error(e.message);
        }
    };
}
bcuSectionOrderingController.$inject = ['$scope'];