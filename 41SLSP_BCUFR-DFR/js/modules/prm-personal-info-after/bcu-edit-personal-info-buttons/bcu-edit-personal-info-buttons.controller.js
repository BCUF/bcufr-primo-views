export class bcuEditPersonalInfoButtonsController {
    constructor(bcuConfigService) {
        let lang = bcuConfigService.getLanguage();
        this.detailsBaseEdu = "https:\/\/eduid.ch\/web\/change-account-data\/2\/?lang=" + lang;
        this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/?lang=" + lang;
        this.grpA = ['11', '91', '92'];
        this.grpB = ['12', '13', '14', '15', '16'];
        this.showButtons = this.showA = this.showB = false;
    }

    $doCheck () {
        if (this.afterCtrl.parentCtrl.personalInfoService.personalInfo !== undefined) {
            let patron = this.afterCtrl.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
            if (this.grpA.includes(patron)) {
                this.showA = true;
            }
            else if (this.grpB.includes(patron)) {
                this.showB = true;
            }
            else {
                this.showButtons = true;
            }
        }
    }

}

bcuEditPersonalInfoButtonsController.$inject = [ 'bcuConfigService' ]