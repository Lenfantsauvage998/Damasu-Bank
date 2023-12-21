import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-modal-cdt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-cdt.component.html',
  styleUrl: './modal-cdt.component.css'
})
export class ModalCdtComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  public openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
