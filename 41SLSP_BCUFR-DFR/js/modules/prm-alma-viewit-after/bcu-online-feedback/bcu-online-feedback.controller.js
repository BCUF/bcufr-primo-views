export class bcuOnlineFeedbackController {
    constructor(bcuConfigService, bcuOnlineFeedbackConfig) {
        this.config = bcuOnlineFeedbackConfig;
        this.bcuConfigService = bcuConfigService;
    }

    $onInit() {
        try{
            this.feedbackLink = '';
            // not for HSA
            //if(this.parentCtrl.item.pnx.control.originalsourceid && this.parentCtrl.item.pnx.control.originalsourceid[0].indexOf('hochschularchiv-der-eth') > -1){
            //    return;
            //}
            // not for open access
            if(this.afterCtrl.parentCtrl.item.pnx.addata.openaccess && this.afterCtrl.parentCtrl.item.pnx.addata.openaccess[0] === 'true'){
                return;
            }
            // not for cdi open access
            if(this.afterCtrl.parentCtrl.item.pnx.addata.oa && this.afterCtrl.parentCtrl.item.pnx.addata.oa[0] === 'free_for_read'){
                return;
            }
            let display = this.afterCtrl.parentCtrl.item.pnx.display;
            let token = this.bcuConfigService.getDecodedToken();
            let ip = token.userIp;
            let mmsId = this.afterCtrl.parentCtrl.item.pnx.control.recordid[0];
            let title = '';
            if(display.title && display.title.length > 0){
                title = display.title[0];
            }
            let creationdate = '';
            if(display.creationdate && display.creationdate.length > 0){
                creationdate = display.creationdate[0];
            }
            let creator = '';
            if(display.creator && display.creator.length > 0){
                creator = display.creator.join(', ');
            }
            let type = '';
            if(display.type && display.type.length > 0){
                type = display.type[0];
            }
            let identifier = '';
            if(display.identifier && display.identifier.length > 0){
                let ident = display.identifier[0];
                if(ident.indexOf('<b>ISBN')>-1){
                    identifier = display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '');
                }
                else if(ident.indexOf('<b>ISSN')>-1){
                    identifier = display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '');
                }
                else if(ident.indexOf('ISBN')>-1){
                    identifier = 'ISBN: ' + ident.substring(ident.indexOf('$$V') + 3);
                }
                else if(ident.indexOf('ISSN')>-1){
                    identifier = 'ISSN: ' + ident.substring(ident.indexOf('$$V') + 3);
                }
            }
            let userAgent = navigator.userAgent;

let subject = `${this.bcuConfigService.getLabel(this.config, 'linkText')}: ${mmsId} - "${title}"`;

let body= `${this.bcuConfigService.getLabel(this.config, 'text')}


=== ${this.bcuConfigService.getLabel(this.config, 'notDelete')} ===
Title: ${title}
Author: ${creator}
Year: ${creationdate}
Type: ${type}
DocId: ${mmsId}
Identifier: ${identifier}
USER_IP: ${ip}
USER_AGENT: ${userAgent}
URL: ${window.location.href}`;

            this.feedbackLink = 'mailto:BCU_e-resources@fr.ch?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        }
        catch(e){
            console.error("***BCU*** an error occured: bcuOnlineFeedbackController.$onInit\n\n");
            console.error(e.message);
            throw(e)
        }
    }
}


bcuOnlineFeedbackController.$inject = [ 'bcuConfigService', 'bcuOnlineFeedbackConfig' ];