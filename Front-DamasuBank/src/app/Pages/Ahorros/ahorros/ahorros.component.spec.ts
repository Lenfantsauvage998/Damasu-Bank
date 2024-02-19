import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AhorrosComponent } from './ahorros.component';

describe('AhorrosComponent', () => {
  let component: AhorrosComponent;
  let fixture: ComponentFixture<AhorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorrosComponent,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
