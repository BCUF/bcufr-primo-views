export class bcuAlertController {
    constructor($http, bcuConfigService) {
        if (sessionStorage && sessionStorage.getItem('bcu-topbar-hide') === '1') {
            this.alert = false;
        }
        else {
            this.$http = $http;
            this.bcuConfigService = bcuConfigService;
            let langs = ["de", "en", "fr"];
            let lang = this.bcuConfigService.getLanguage();
            if(!langs.includes(lang)) {
                lang = 'fr';
            }
            let obj = this;
            let url = "XXX" + lang + "/primo_alerts/BCU";
            this.$http.get(url)
            .then(function(response) {
                obj.alert = response.data;
            }, function(response) {
                console.error('***BCUFR*** primoAlert');
                console.error(response.statusText);
                obj.alert = false;
            });
        }
    }

    onClose(){
        let topbar = document.querySelector('.bcu-topbar');
        angular.element(topbar).remove();
        if (sessionStorage) {
            sessionStorage.setItem('bcu-topbar-hide', '1');
        }
        return;
    }   
}

bcuAlertController.$inject = [ '$http', 'bcuConfigService' ];

