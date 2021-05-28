export class bcuServiceButtonController {
    constructor($scope,$element) {
        if ($scope.$parent.$parent.$parent.$parent.$parent.$ctrl.memberInst === undefined) {
            let excluded = ["AlmaResourceSharing", "AlmaGeneralDigitization"];
            if (excluded.includes(this.afterCtrl.parentCtrl.service.type)) {
                $element[0].parentElement.parentElement.parentElement.classList.remove('separated-block-item');
                this.afterCtrl.parentCtrl.service.allowed = "N";
            }
        }
    }
}

bcuServiceButtonController.$inject = [ '$scope', '$element' ];

