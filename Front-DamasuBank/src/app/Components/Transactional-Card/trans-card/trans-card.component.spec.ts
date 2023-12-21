import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransCardComponent } from './trans-card.component';

describe('TransCardComponent', () => {
  let component: TransCardComponent;
  let fixture: ComponentFixture<TransCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
