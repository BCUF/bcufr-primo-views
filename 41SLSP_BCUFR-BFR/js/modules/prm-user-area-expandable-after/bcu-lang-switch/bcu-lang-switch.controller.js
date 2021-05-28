export class bcuLangSwitchController {

    constructor($element, $window) {
        this.$parent = $element.parent().parent()[0];
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.$window = $window;
    }

    $onInit() {
        try {
            while (this.$parent.attributes.length > 0) {
                this.$parent.removeAttribute(this.$parent.attributes[0].name);
            }
            let children = this.$parent.childNodes.length;
            for (let i = 1; i < children; i++) {
                this.$parent.removeChild(this.$parent.firstChild);
            }
            this.languages = ["de","fr"];
            if (!this.languages.includes(this.parentCtrl.lang)) {
                this.changeLanguage("fr");
            }
            
        }
        catch (e) {
            console.error("***BCUFR*** bcuLangSwitchControler $onInit");
            console.error(e.message);
        }
    };

    changeLanguage(lang) {
        
        this.parentCtrl.changeLangService.addLangParamToUrl(lang);
        let t = this.parentCtrl;
        this.parentCtrl.i18nService.setLanguage(lang).then(function(){
            t.$timeout(function(){return t.$state.go(t.$state.current,{lang:lang},{reload:!0})})
        });
 };

}
bcuLangSwitchController.$inject = ['$element'];