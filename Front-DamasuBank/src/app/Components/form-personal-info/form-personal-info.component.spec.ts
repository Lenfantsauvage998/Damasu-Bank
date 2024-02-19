import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalInfoComponent } from './form-personal-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormPersonalInfoComponent', () => {
  let component: FormPersonalInfoComponent;
  let fixture: ComponentFixture<FormPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPersonalInfoComponent, HttpClientTestingModule,RouterTestingModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
