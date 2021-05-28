export class bcuTreeController {

    constructor ($scope, $http, bcuTreeConfig) {
        this.$scope = $scope;
        this.$scope.data = [];
        this.$http = $http;
        this.config = bcuTreeConfig;
        this.loadData();
    }
    
    loadData() {
        let lang = this.config.getLang();
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
        let url = this.config.getUrl() + lang + "/v1/level/1/";
        let obj = this;
        this.$http.get(url).then(function (response) {
            angular.forEach(response.data, function(value, key) {
                obj.$scope.data.push({
                    id: value.id, 
                    call_number: value.call_number, 
                    title: value.title, 
                    description: value.description, 
                    parent: value.description, 
                    level: value.level, 
                    isOpen: false, 
                    hasLoad: false, 
                    isLoading: false, 
                    children: []
                });
            });
        }, function (response) {
            console.log(response);
        });
    }
}

bcuTreeController.$inject = ['$scope', '$http', 'bcuTreeConfig'];