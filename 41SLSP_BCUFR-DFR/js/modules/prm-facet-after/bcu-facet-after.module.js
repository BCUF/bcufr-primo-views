import {bcuConfigService} from '../../services/bcu-config.service';
import {bcuSearchTargets} from './bcu-search-targets.config';
import {bcuPrmFacetExactAfterHtml} from './bcu-prm-facet-exact-after.html';
import {bcuExternalSearchLabels} from './bcu-external-search-labels';
import {bcuExternalSearchService} from './bcu-external-search.service';
import {bcuPrmFacetExactAfterController} from './bcu-prm-facet-exact-after.controller';

export const bcuFacetAfterModule = angular
  .module('bcuFacetAfterModule', [])
  .value('bcuSearchTargets', bcuSearchTargets)
  .factory('bcuConfigService', bcuConfigService)
  .factory('bcuExternalSearchLabels', bcuExternalSearchLabels)
  .factory('externalSearch', bcuExternalSearchService)
  .component('prmFacetAfter', {
      bindings: { parentCtrl: '<' },
      controller: ['externalSearch', '$element', 'bcuConfigService', 'bcuExternalSearchLabels', function (externalSearch, $element, bcuConfigService, bcuExternalSearchLabels) {
        this.$onInit = function () {
          let label = bcuConfigService.getLabel(bcuExternalSearchLabels,'label');
          externalSearch.setController(this.parentCtrl)
          externalSearch.addExtSearch($element, label, bcuConfigService)
        }
      }]
  })
  .component('prmPageNavMenuAfter', {
    controller: ['externalSearch', function (externalSearch) {
      this.$onInit = function () {
        if (externalSearch.getController()) externalSearch.addExtSearch()
      }
    }]
  })
  .component('prmFacetExactAfter', {
      bindings: { parentCtrl: '<' },
      template: bcuPrmFacetExactAfterHtml,
      controller: bcuPrmFacetExactAfterController
  });
  

  