import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculateComponent } from './form-calculate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RendererFactory2 } from '@angular/core';

describe('FormCalculateComponent', () => {
  let component: FormCalculateComponent;
  let fixture: ComponentFixture<FormCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalculateComponent, HttpClientTestingModule, RendererFactory2 ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
