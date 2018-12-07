import { Component, TemplateRef  } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.scss']
})

export class NewModalComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
