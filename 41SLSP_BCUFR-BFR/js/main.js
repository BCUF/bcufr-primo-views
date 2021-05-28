//import {bcuLocationItemsAfterModule} from './modules/prm-location-items-after/bcu-location-items-after.module';
import {bcuFullViewAfterModule} from './modules/prm-full-view-after/bcu-full-view-after.module';
import {bcuFullViewServiceContainerAfterModule} from './modules/prm-full-view-service-container-after/bcu-full-view-service-container-after.module';
import {bcuUserAreaExpandableAfterModule} from './modules/prm-user-area-expandable-after/bcu-user-area-expandable-after.module';
import {bcuTreeModule} from './modules/bcu-tree/bcu-tree.module'

let app = angular.module('viewCustom', ['angularLoad']);

//app.requires.push(bcuLocationItemsAfterModule.name);
app.requires.push(bcuFullViewAfterModule.name);
app.requires.push(bcuFullViewServiceContainerAfterModule.name);
app.requires.push(bcuUserAreaExpandableAfterModule.name);
app.requires.push(bcuTreeModule.name);
