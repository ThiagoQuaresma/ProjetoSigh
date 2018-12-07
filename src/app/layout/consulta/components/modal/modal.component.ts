import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [routerTransition()]
})
export class ModalComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    public myModel = ''
    public mask = ['(', /[1-9]/, /\d/, ')', ' ',/[9-9]/, ' ',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
