import {bcuFacetAfterModule} from './modules/prm-facet-after/bcu-facet-after.module';
import {bcuFullViewAfterModule} from './modules/prm-full-view-after/bcu-full-view-after.module';
import {bcuFullViewServiceContainerAfterModule} from './modules/prm-full-view-service-container-after/bcu-full-view-service-container-after.module';
import {bcuJournalIndicationLineModule} from './modules/prm-search-result-jounral-indication-line-after/bcu-journal-indication-line.module';
import {bcuLocationItemsAfterModule} from './modules/prm-location-items-after/bcu-location-items-after.module';
//import {bcuOtherMembersAfterModule} from './modules/prm-alma-other-members-after/bcu-other-members-after.module';
import {bcuRequestAfterModule} from './modules/prm-request-after/bcu-request-after.module';
import {bcuSearchBarAfterModule} from './modules/prm-search-bar-after/bcu-search-bar-after.module'
import {bcuServiceButtonAfterModule} from './modules/prm-service-button-after/bcu-service-button-after.module';
import {bcuTopBarAfterModule} from './modules/prm-top-bar-after/bcu-top-bar-after.module';
import {bcuTopBarBeforeModule} from './modules/prm-top-bar-before/bcu-top-bar-before.module';
import {bcuAlmaHowovpAfterModule} from './modules/alma-howovp-after/alma-how-after.module';
import {bcuViewitAfterModule} from './modules/prm-alma-viewit-after/bcu-viewit-after.module';
import {bcuHomeModule} from './modules/bcu-home/bcu-home.module';
import {bcuHelpModule} from './modules/bcu-help/bcu-help.module';
import {bcuNoSearchResultAfterModule} from './modules/prm-no-search-result-after/bcu-no-search-result-after.module';

//import {bcuUserAreaExpandableAfterModule} from './modules/prm-user-area-expandable-after/bcu-user-area-expandable-after.module';

let app = angular.module('viewCustom', ['angularLoad']);
 
app.requires.push(bcuFacetAfterModule.name);
app.requires.push(bcuFullViewAfterModule.name);
app.requires.push(bcuFullViewServiceContainerAfterModule.name);
app.requires.push(bcuJournalIndicationLineModule.name);
app.requires.push(bcuLocationItemsAfterModule.name);
app.requires.push(bcuRequestAfterModule.name);
//app.requires.push(bcuOtherMembersAfterModule.name);
app.requires.push(bcuSearchBarAfterModule.name);
app.requires.push(bcuServiceButtonAfterModule.name);
app.requires.push(bcuTopBarAfterModule.name);
app.requires.push(bcuTopBarBeforeModule.name);
app.requires.push(bcuHomeModule.name);
app.requires.push(bcuHelpModule.name);
app.requires.push(bcuAlmaHowovpAfterModule.name);
app.requires.push(bcuViewitAfterModule.name);
//app.requires.push(bcuUserAreaExpandableAfterModule.name);
app.requires.push(bcuNoSearchResultAfterModule.name);
