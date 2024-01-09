import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalculateComponent } from './form-calculate.component';

describe('FormCalculateComponent', () => {
  let component: FormCalculateComponent;
  let fixture: ComponentFixture<FormCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalculateComponent]
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
