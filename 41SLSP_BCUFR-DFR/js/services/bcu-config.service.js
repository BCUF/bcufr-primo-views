export const bcuConfigService = ['$rootScope','jwtHelper', function($rootScope, jwtHelper){

    function getLanguage(){
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***bcu*** bcuConfigService: userSessionManagerService not available");
                return 'fr';
            }
            else{
                return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getLanguage():");
            console.error(e.message);
            return 'fr';
        }
    }

    function getView() {
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***bcu*** bcuConfigService: userSessionManagerService not available");
                return '';
            }
            else{
                return sms.vid;
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getVid():");
            console.error(e.message);
            return 'fr';
        }
    }

    function getParam(param) {
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService.$stateParams;
            if (!sms) {
                console.error("***bcu*** bcuConfigService: userSessionManagerService not available");
                return '';
            }
            else{
                return sms[param];
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getVid():");
            console.error(e.message);
            return 'fr';
        }
    }

    function getLabel(config, key) {
        try{
            let lang = getLanguage();
            if (!config[key]) {
                console.error("***bcu*** bcuConfigService.getLabel: '" + key + "' not in config");
                return key;
            }
            if(config[key][lang]){
                return config[key][lang];
            }
            else{
                return config[key]['fr'];
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getLabel():");
            console.error(e.message);
            return '';
        }
    }

    function getDecodedToken(){
        try{
            if (!sessionStorage){
                console.error("***BCU*** no session storage")
                return null;
            }
            let jwt = sessionStorage.getItem('primoExploreJwt');
            if (!jwt){
                return null;
            }
            return jwtHelper.decodeToken(jwt);
        }
        catch(e){
            console.error("***BCU*** an error occured: bcuConfigService.getDecodedToken:");
            console.error(e.message);
        }
    }

    function isGuest() {
        let decodedToken = getDecodedToken();
        if (!decodedToken) {
            return null;
        }
        let userName = decodedToken.userGroup !== 'GUEST' ? decodedToken.userName : '';
        if (userName) {
            return false
        }
        else {
            return true;
        }
    }

    function onCampus() {
        try {
            let decodedToken = getDecodedToken();
            if (!decodedToken) {
                return null;
            }
            if (decodedToken.onCampus === 'true') {
                return true;
            }
            else {
                return false;
            }
        }
        catch(e){
            console.error("***BCU*** an error occured:bcuConfigService.onCampus:");
            console.error(e.message);
        }
    }

    
/*
    function getUrl(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.url[key]) {
                console.error("***bcu*** bcuConfigService.getUrl: '" + key + "' not in config");
                return '';
            }
            if(config.url[key][lang]){
                return config.url[key][lang];
            }
            else{
                return config.url[key]['fr'];
            }
        }
        catch(e){
            console.error("***bcu*** an error occured: bcuConfigService.getUrl():");
            console.error(e.message);
            return '';
        }
    }
*/
    return {
        getLanguage: getLanguage,
        getLabel: getLabel,
        getView: getView,
        getParam: getParam,
        isGuest: isGuest,
        getDecodedToken: getDecodedToken,
        onCampus: onCampus
//        getUrl: getUrl
    };
}]
