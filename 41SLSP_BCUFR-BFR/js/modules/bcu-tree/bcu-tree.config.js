export const bcuTreeConfig = ['$rootScope', function( $rootScope ){

    function getLang(){
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***bcu*** bcuConfigService: userSessionManagerService not available");
                return 'fr';
            }
            else{
                let lang = sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
                switch(lang) {
                    case "de":
                    case "fr": { 
                        break; 
                    }
                    default: { 
                        lang = "fr";
                        break; 
                    }    
                }
                return lang;
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getLanguage():");
            console.error(e.message);
            return 'fr';
        }
    }

    function getUrl() {
        return "XXX";
    }

    function getSearchUrl() {
        return "search?vid=41SLSP_BCUFR:BFR&tab=BCUFR_FriBib&search_scope=BCUFR_FriBib&query=lds49,exact,";
    }

    return {
        getLang: getLang,
        getUrl: getUrl,
        getSearchUrl: getSearchUrl,
    };
}]
