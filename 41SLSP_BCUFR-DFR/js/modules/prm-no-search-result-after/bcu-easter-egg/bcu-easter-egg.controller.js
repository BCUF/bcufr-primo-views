export class bcuEasterEggController {
    constructor() {
            this.control = 0;
    }

    $onInit() {
        if (this.afterCtrl.parentCtrl.searchStateService.searchObject.mode == 'advanced') {
            this.control = 1;
        }
        if (this.afterCtrl.parentCtrl.searchStateService.searchObject.scope == 'MyInst_and_CI') {
            this.control = this.control + 1;
        }
        let elems = this.afterCtrl.parentCtrl.searchStateService.searchObject.query.split(",AND");
        let proofs = ["title,exact,Discovery Fribourg-Freiburg","creator,exact,Super8","rtype,exact,other","dr_s,exact,20190101","dr_e,exact,20211231"];
        for (let elem of elems) {
            if (elem.substring(0,1) == ';') {
                elem = elem.substring(1);

            }
            if (proofs.includes(elem)) {
                this.control = this.control + 1;
            }

        }
    }
}
