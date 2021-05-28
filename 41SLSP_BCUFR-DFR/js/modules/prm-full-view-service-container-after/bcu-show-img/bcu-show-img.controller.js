export class bcuShowImgController {

    $onInit() {
        try {
            let types = ['bild', 'image', 'immagine'];
            this.images = [];
            if (types.includes(this.afterCtrl.parentCtrl.item.pnx.display.type[0].toLowerCase()) && this.afterCtrl.parentCtrl.item.delivery.bestlocation) {
                for (let link of this.afterCtrl.parentCtrl.item.delivery.link) {
                    if (link.linkType == 'linktorsrc') {
                        this.images.push(link.linkURL);
                    }
                }
            }
        } catch (e) {
            console.error("***BCUFR*** bcuShowImgControler $onInit");
            console.error(e.message);
        }
    }

    show(id) {
        let mms = this.afterCtrl.parentCtrl.item.pnx.display.mms;
        let urlElems = this.images[id].split('/');
        window.open('https://www.fr.ch/app/fonds_photo/' + mms + '-' + urlElems[4] +'/detail');
    }
}
