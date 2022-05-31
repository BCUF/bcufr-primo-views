export class bcuLibInfoController {
    constructor($http, bcuConfigService, bcuLibInfoConfig) {
            this.$http = $http;
            this.bcuConfigService = bcuConfigService;
            this.config = bcuLibInfoConfig;
   }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.libraryCode = '';
            this.oldLib = 'first';
            this.library = {};
            this.showLib = false;
        }
        catch(e){
            console.error("***BCU*** an error occured: bcuLibInfoController.$onInit()");
            console.error(e.message);
        }
    }

    $doCheck() {
        try{
            if (!this.parentCtrl.loc || !this.parentCtrl.loc.location || !this.parentCtrl.loc.location.libraryCode || this.parentCtrl.loc.location.subLocationCode === "EL") {
                return;
            }
            if (!this.parentCtrl.userSessionManagerService.isGuest() &&
                 this.afterCtrl.parentCtrl.loc.location.organization =="41SLSP_BCUFR" &&
                 this.afterCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl._locationServices &&
                 this.afterCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl._locationServices.itemInfo.results[0][0] &&
                 this.afterCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl._locationServices.itemInfo.results[0][0].items[0].itemFields[1] == ' ' &&
                 this.afterCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl._locationServices.itemInfo.results[0][0].location.availabilityStatus == 'available') {
                 this.afterCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl._locationServices.itemInfo.results[0][0].items[0].itemFields[1] = this.bcuConfigService.getLabel(this.config, 'onSite');
            }
            this.libraryCode = this.parentCtrl.loc.location.libraryCode.slice(5);
          
            if(this.libraryCode.slice(0,3) == 'BLL') {
                this.libraryCode = "BLL-" + this.parentCtrl.loc.location.subLocation.slice(0,3);
            }
            this.mainLocation = this.parentCtrl.loc.location.mainLocation;
            if (this.mainLocation == 'EMPTY') {
                this.library={};
            }
        }
        catch(e){
            console.error("***BCUF*** bcuLibraryInfoController.$doCheck:");
            console.error(e.message);
        }
    }

    getInfo() {
        if (this.mainLocation.substr(0,3) != 'FR ') {
            window.open("https://registration.slsp.ch/libraries/?library=" + this.parentCtrl.currLoc.location.libraryCode + "&lang=" + this.bcuConfigService.getLanguage());
        }
        else {
            let obj = this;
            angular.element(libinfo).removeClass('hide');
            if (this.oldLib == 'first') {
                let backButton = document.getElementsByTagName('prm-opac-back-button');
                angular.element(backButton).on('click', function () {
                    obj.showLib = false;
                });
            }
            if (this.oldLib != this.libraryCode) {
                let langs = ["de", "en", "fr"];
                let lang = this.bcuConfigService.getLanguage();
                if(!langs.includes(lang)) {
                    lang = 'fr';
                }

                let url = "https://svw-uo1061bcu.unifr.ch/bcu_api/libraries/" + lang + "/library_short/"+ this.libraryCode;
                console.log(url);
                this.$http.get(url)
                .then(function(response) {
                    obj.library = response.data;
                    let url = "https://svw-uo1061bcu.unifr.ch/bcu_api/libraries/" + lang + "/current_openings/"+ obj.libraryCode;
                    obj.$http.get(url)
                    .then(function(response) {
                        obj.library.openings = response.data.slice(0,4);
                        obj.oldLib = obj.libraryCode;
                        obj.showLib = true;
                    }, function(response) {
                        console.error('***BCUFR*** libInfoOpenings');
                        console.error(response.statusText);
                        console.error(url);
                        obj.library = false;
                    });
                    obj.oldLib = obj.libraryCode;
                }, function(response) {
                    console.error('***BCUFR*** libInfoLibrary');
                    console.error(response.statusText);
                    console.error(url);
                    obj.library = false;
                });
            }
            else {
                this.showLib = true;
            }
        }
    }
}

bcuLibInfoController.$inject = [ '$http', 'bcuConfigService', 'bcuLibInfoConfig' ];