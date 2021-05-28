export class bcuCatalogLinkController {

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.url ='';
            this.label = 'Accéder au document dans Discovery Fribourg-Freiburg';
            if (typeof this.parentCtrl.service !== 'undefined' && this.parentCtrl.service.scrollId == 'details') {
              this.url = 'https://bcufr.swisscovery.slsp.ch/permalink/41SLSP_BCUFR/13cv4r8/' + this.parentCtrl.item.pnx.control.recordid;
              if (typeof this.parentCtrl.fullViewService.$location.$$search.lang !== undefined && this.parentCtrl.fullViewService.$location.$$search.lang == 'de') {
                this.label = 'Zugang zum Dokument in Discovery Fribourg-Freiburg';
              }
            }
        } catch (e) {
            console.error("***BCUFR*** bcuCatalogLinkControler $onInit");
            console.error(e.message);
        }
    };

}
