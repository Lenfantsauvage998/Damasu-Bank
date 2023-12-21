import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCdtComponent } from './modal-cdt.component';

describe('ModalCdtComponent', () => {
  let component: ModalCdtComponent;
  let fixture: ComponentFixture<ModalCdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCdtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
