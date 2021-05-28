export class bcuOffCampusController {
    constructor(bcuConfigService, bcuOffCampusConfig) {
        console.log('offCampus');
        this.config = bcuOffCampusConfig;
        this.bcuConfigService = bcuConfigService;
    }

    $onInit() {
        this.processDoCheck = false;
        this.deliveryCategory = [];
        if (this.afterCtrl.parentCtrl.item.pnx.addata.openaccess && this.afterCtrl.parentCtrl.itm.pnx.addata.openaccess[0] === 'true') {
            return;
        }
        let delivery = this.afterCtrl.parentCtrl.item.delivery;
        console.log(delivery);
        if (delivery && delivery.deliveryCategory && (delivery.deliveryCategory.indexOf('Alma-E') > -1 || delivery.deliveryCategory.indexOf('Remote Search Resource') > -1)) {
            this.deliveryCategory = delivery.deliveryCategory;
            this.processDoCheck = true;
        }
    }

    $doCheck() {
        if(!this.processDoCheck) {
            return;
        }
        let delivery = this.afterCtrl.parentCtrl.item.delivery;
        if(!delivery || !delivery.electronicServices || delivery.electronicServices.length === 0){
            return;
        }
        if(delivery.deliveryCategory.indexOf('Remote Search Resource') > -1 && delivery.electronicServices[0].ilsApiId.indexOf("cdi_") === -1){
            this.processDoCheck = false;
            return;
        }
        let aFilteredElectronicServices = delivery.electronicServices.filter( e => {
            if(e.publicNote && e.publicNote === "Onlinezugriff via World Wide Web"){
                return true;
            }
        })
        if(aFilteredElectronicServices.length > 0){
            this.processDoCheck = false;
            return;
        }

        this.isOffCampusWarning = this.evaluateIsOffCampusWarning();
        this.processDoCheck = false;
    }

    evaluateIsOffCampusWarning() {
        if (!this.bcuConfigService.getDecodedToken()) {
            return false;
        }
        if (this.bcuConfigService.onCampus()) {
            return false;
        }
        return true;
    }

}

bcuOffCampusController.$inject = [ 'bcuConfigService', 'bcuOffCampusConfig' ];