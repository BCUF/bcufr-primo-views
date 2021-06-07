export class bcuEditPersonalInfoButtonsController {
    constructor() {
        this.detailsBaseEdu = "https:\/\/test.eduid.ch";
        this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/";
        this.exclude = ['STAFF', '11', '12', '13', '14', '15', '16', '91', '92'];
    }

    getPatronGrp () {
        if (this.afterCtrl.parentCtrl.personalInfoService.personalInfo !== undefined) {
            let patron = this.afterCtrl.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
            if (!this.exclude.includes(patron)) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }

}