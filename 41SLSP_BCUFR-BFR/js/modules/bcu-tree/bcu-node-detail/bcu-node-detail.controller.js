export class bcuNodeDetailController {

    constructor ($scope, $http, bcuTreeConfig) {
        this.$scope = $scope;
        this.$http = $http;
        this.config = bcuTreeConfig;
        let labels = {'de': 'Suche', 'fr': 'Recherche'};
        this.label = labels[this.config.getLang()];

    }
    
    onClick(data) {
        if (!data.hasLoad) {
            data.hasLoad = true;
            data.isLoading = true;
            this.loadData(data);
        }
        this.openClose(data);
    }
    
    loadData(data) {
        let url = this.config.getUrl() + this.config.getLang() + "/v1/children/" + data.id + "/0/";
        this.$http.get(url).then(function (response) {
            angular.forEach(response.data, function(value, key) {
                if (value.parent == data.id) {
                    data.children.push({
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
                }
            });
            data.hasLoad = true;
            data.isLoading = false;
        }, function (response) {
            console.log(response);
            data.isLoading = false;
        });
    };

    openClose(data) {
        data.isOpen = !data.isOpen;
    }
}

bcuNodeDetailController.$inject = ['$scope', '$http', 'bcuTreeConfig'];