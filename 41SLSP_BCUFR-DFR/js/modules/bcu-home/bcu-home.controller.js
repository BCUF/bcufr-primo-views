export class bcuHomeController {

    constructor ($http, bcuConfigService, bcuHomeConfig) {
        this.$http = $http;
        this.bcuConfigService = bcuConfigService;
        this.bcuHomeConfig = bcuHomeConfig;
        this.lang = bcuConfigService.getLanguage();
        this.appLang = 'fr';
        let applangs = ['de', 'en'];
        if (applangs.includes(this.lang)) {
            this.appLang = this.lang;
        }
        this.onCampus = false;
        this.libs = {"bcu" : [], "uni" : [], "assoc" : []};
        this.showClass = {"bcu" : false, "uni" : false, "assoc" : false};
        this.getNews();
    }
    $onInit() {
        this.setOnCampus();
    }

    setOnCampus() {
        let $ctrl = this;
        this.$http.get("XXX")
        .then(function(response) {
            $ctrl.onCampus = response.data.status;
          }, function(response) {
            console.error('***BCUFR*** bcuOnCampus');
            console.error(response.statusText);
        });

    }

    getNews() {
        this.news = [];
        let $ctrl = this;
        let url = "XXX" + this.lang;
        this.$http.get(url)
        .then(function(response) {
            let parser=new window.DOMParser();			
            let xmlNews = parser.parseFromString(response.data, "text/xml" );
            let items = xmlNews.getElementsByTagName('item');
            let number = 3
            if (items.length < 3) {
                number = items.length
            }
            for (let i=0; i<number; i++) {
                let newsItem = {};
                newsItem["title"] = items[i].children[0].innerHTML;
                newsItem["url"] = items[i].children[1].innerHTML;
                newsItem["content"] = items[i].children[2].innerHTML;
                let dateParts = items[i].children[3].innerHTML.split(' ');
                newsItem["day"] = dateParts[1];
                newsItem["month"] = dateParts[2];
                $ctrl.news.push(newsItem);
            }
            
          }, function(response) {
            console.error('***BCUFR*** bcuNews');
            console.error(response.statusText);
        });
    };

    getLibs(libraryClass) {
        this.showClass[libraryClass] = ! this.showClass[libraryClass];
        if (this.libs[libraryClass].length == 0) {
            let $ctrl = this;
            let url = "XXX" + this.appLang + "/list/?library_class=" + libraryClass;
            this.$http.get(url)
            .then(function(response) {
                $ctrl.libs[libraryClass]=response.data.results;
            }, function(response) {
                console.error('***BCUFR*** bcuLibraries: ' + libraryClass);
            });
        }
    }
}

bcuHomeController.$inject = ['$http', 'bcuConfigService', 'bcuHomeConfig'];