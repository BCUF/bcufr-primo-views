export class bcuIllBoxController {
    constructor(bcuConfigService) {
        let myEl = angular.element(document.querySelector('primo-explore'));
        if (bcuConfigService.isGuest() == true) {
            myEl.addClass('logged-out');
        }
        else {
            myEl.removeClass('logged-out');
        }
    }
}

bcuIllBoxController.$inject = [ 'bcuConfigService' ];