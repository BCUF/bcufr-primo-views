export class bcuHowovpController {
    constructor(bcuConfigService, bcuHowovpConfig) {
        this.bcuConfigService = bcuConfigService;
        this.bcuHowovpConfig = bcuHowovpConfig;
    }

    $doCheck() {
        let ill = angular.element(document.querySelector('alma-howovp md-list-item span[translate]'));
        if (ill.length) {
            let span = document.createElement('div');
            let title = this.bcuConfigService.getLabel(this.bcuHowovpConfig, 'ill'); //this.afterCtrl.parentCtrl.$translate.instant('mainmenu.label.BlankIll');
            span.innerHTML = '<h3>' + this.bcuConfigService.getLabel(this.bcuHowovpConfig, 'ill') + '</h3>' + this.bcuConfigService.getLabel(this.bcuHowovpConfig, 'msg').replace('""', '<strong>"' + this.bcuConfigService.getLabel(this.bcuHowovpConfig, 'title') +'"</strong>')
            ill[0].replaceWith(span);
            let howovp = angular.element(document.querySelector('alma-howovp'));
            let ovpTitle = document.createElement('h3');
            ovpTitle.className = 'medium-uppercase-bold ill';
            ovpTitle.innerHTML = '<br><span>' + title + '</span>';
            howovp[0].insertBefore(ovpTitle,howovp[0].children[0]);
        }
    }
}

bcuHowovpController.$inject = [ 'bcuConfigService', 'bcuHowovpConfig' ];

