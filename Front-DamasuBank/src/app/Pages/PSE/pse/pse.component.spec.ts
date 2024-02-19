import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseComponent } from './pse.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PseComponent', () => {
  let component: PseComponent;
  let fixture: ComponentFixture<PseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseComponent, HttpClientTestingModule, RouterTestingModule ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
