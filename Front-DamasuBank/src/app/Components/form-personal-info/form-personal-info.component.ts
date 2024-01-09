import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CdtService } from '../../Services/cdt.services';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../NavBar/nav-bar/nav-bar.component';
import { FooterComponent } from '../Footer/footer/footer.component';


@Component({
  selector: 'app-form-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,NavBarComponent,FooterComponent],
  templateUrl: './form-personal-info.component.html',
  styleUrl: './form-personal-info.component.css',
})
export class FormPersonalInfoComponent {
  personalInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cdtService: CdtService,
    private router: Router
  ) {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.cdtService.addPersonaInfo(this.personalInfoForm.value);
    this.router.navigate(['CDT/calulate']);
  }
}
