export const bcuExternalSearchService = function () {
    return {
      getController: function () {
        return this.prmFacetCtrl || false
      },
      setController: function (controller) {
        this.prmFacetCtrl = controller
      },
      addExtSearch: function addExtSearch($element, label, bcuConfigService) {
        if (bcuConfigService.getParam('tab') != 'CourseReserves') {
          let xx=this;
          xx.$element = $element;
  //        let label = labels.labels[labels.langs[lang]];

          let checkExist = setInterval(function() {

            if (xx.prmFacetCtrl.facetService.results[0] && xx.prmFacetCtrl.facetService.results[xx.prmFacetCtrl.facetService.results.length-1].name !=label) {
                if (xx.prmFacetCtrl.facetService.results.name !== label) {
                    //move expand results
                    let parent = xx.$element[0].parentNode.parentNode.children[0].children[0].children[0];
                    let childNum = 1;
                    if (parent.children[0].classList.contains("filtered-facets-section")) {
                      childNum = 2;
                    }
                    let elem = parent.children[childNum];
                    parent.appendChild(elem);
                    //add external search
                    xx.prmFacetCtrl.facetService.results.push({
                      name: label,
                      displayedType: 'exact',
                      limitCount: 0,
                      facetGroupCollapsed: true,
                      values: []
                    });
                }
                clearInterval(checkExist);
            }
          }, 100);

        }
      }
    }
};