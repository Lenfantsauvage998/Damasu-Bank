import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CdtService } from '../../Services/cdt.services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cdt } from '../../models/cdt.model';
import { ModalCdtComponent } from '../modal-cdt/modal-cdt.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form-calculate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-calculate.component.html',
  styleUrl: './form-calculate.component.css',
})
export class FormCalculateComponent {
  calculateform: FormGroup;
  costView = new FormControl(0);
  modal = ModalCdtComponent;

  constructor(
    private formBuilder: FormBuilder,
    private cdtService: CdtService,
    private modalService: BsModalService
  ) {
    this.calculateform = this.formBuilder.group({
      amount: ['', [Validators.required]],
      time: ['', [Validators.required]],
      cost: [{ value: '', disabled: true }],
    });
  }

  public ngOnInit(): void {
    console.log(this.cdtService.estado.value);
    this.costView.disable();
  }

  public onSubmit() {
    const valorFormulario = this.calculateform.value;

    const objeto: Cdt = {
      personalInfo: this.cdtService.estado.value,
      calculate: {
        amount: valorFormulario.amount,
        time: valorFormulario.time,
        cost: Number(this.costView.value),
      },
    };
    this.cdtService.addCdtInfo(objeto).subscribe(() => {
      this.modalService.show(ModalCdtComponent);
    });
  }
  public onCalculate() {
    const valorFormulario = this.calculateform.value;
    let rentabilidad = 0;
    console.log(valorFormulario.time);

    if (Number(valorFormulario.time) === 180) {
      rentabilidad = valorFormulario.amount * (14.7 / 100) * (180 / 365);
    } else {
      rentabilidad = valorFormulario.amount * (14.6 / 100) * (360 / 365);
    }
    this.costView.setValue(rentabilidad);
  }
}
