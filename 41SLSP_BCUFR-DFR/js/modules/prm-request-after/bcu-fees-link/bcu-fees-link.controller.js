export class bcuFeesLinkController {

    constructor(bcuConfigService, bcuFeesLinkConfig, $element) {
        this.bcuConfigService = bcuConfigService;
        this.config = bcuFeesLinkConfig;
        this.$element = $element[0];
        this.form = this.$element.parentElement.parentElement;
        this.reset = false;
        this.service = false;
    }


    $doCheck() {
      let form = false;
      let service = false;
      let index = 1;
      if (this.form.children[1].children[1] !== undefined) {
        if (this.form.children[1].children[1].children[0] !== undefined) {
            form = this.form.children[1].children[1].children[0];
        }
      }
      else if (this.form.children[1].children[0] != undefined) {
        form = this.form.children[1].children[0].children[0];
        let label = form.querySelector('prm-form-field:not(.hide) label[translate="almaResourceSharing.maximumFee"]');
        if (label) {
          label.parentNode.parentNode.parentNode.classList.add("hide");
        }
      }
      if (form) {
        if (this.afterCtrl.parentCtrl.formData) {
          
          if (this.afterCtrl.parentCtrl.formData.requestType) {
            service = "holding";
            index = 0;
            let pickUp = false;
            if (this.afterCtrl.parentCtrl.formData.pickupLocation || this.afterCtrl.parentCtrl.formData.pickupLocationFulNet) {
              if (this.afterCtrl.parentCtrl.formData.pickupLocation) {
                pickUp = this.afterCtrl.parentCtrl.formData.pickupLocation.split('$$');
              }
              else {
                pickUp = this.afterCtrl.parentCtrl.formData.pickupLocationFulNet.split('$$');
              }
            }
            if (pickUp && this.afterCtrl.parentCtrl.$scope.$$prevSibling.$parent.$parent.$ctrl.loc !== undefined) {
              index = 1;
              let length = this.afterCtrl.parentCtrl.$scope.$$prevSibling.$parent.$parent.$ctrl.loc.location.holKey.length;
              let holKey = this.afterCtrl.parentCtrl.$scope.$$prevSibling.$parent.$parent.$ctrl.loc.location.holKey.substring(18,length-1);
              let location = holKey.split(', ')[1].substring(10);
              if (location == pickUp[0]) {
                service = "intern";
              }
              else if (pickUp[1].slice(-8) == '_ADDRESS') {
                service = "home";
              }
              else {
                if (this.afterCtrl.parentCtrl.formData.pickupInstitution == "41SLSP_BCUFR" || this.afterCtrl.parentCtrl.formData.pickupInstitutionFulNet == "41SLSP_BCUFR") {
                  service = 'bcufr';
                }
                else {
                    service = 'slsp';
                }
              }
            }
          }
          else if (this.afterCtrl.parentCtrl.formData.partial) {
            service = "copy"
          }
          else if (this.afterCtrl.parentCtrl.formData.citationType) {
            service = "ill" + this.afterCtrl.parentCtrl.formData.citationType;
          }
          
        }
        if (service != this.service) {
          
          if (form.children.length == 3) {
            if (this.service == 'holding') {
              form.children[0].remove();
            }
            else {
              form.children[1].remove();
            }
          }
          this.service = service;
        }
        else if (form.children.length == 2 && this.service) {
          form.children[1].lastChild.firstChild.lastChild.innerHTML = form.children[1].lastChild.firstChild.lastChild.innerHTML.replace(/.\(.*\)/gi, '');
          let info = document.createElement('DIV');
          info.className = "fees bar alert-bar " + service;
          info.innerHTML =
            `<h4>${this.bcuConfigService.getLabel(this.config, service)}</h4>
            <p><a href="${this.bcuConfigService.getLabel(this.config, 'linkUrl')}" target="_blank">${this.bcuConfigService.getLabel(this.config, 'link')} <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon></a></p>`;
          if (this.service == 'holding') {
            info.innerHTML = info.innerHTML + `<p>${this.bcuConfigService.getLabel(this.config, 'holdingText')}</p>`;

          }
          form.insertBefore(info, form.children[index]);
        }
      }
    }

}

bcuFeesLinkController.$inject = [ 'bcuConfigService', 'bcuFeesLinkConfig', '$element'];