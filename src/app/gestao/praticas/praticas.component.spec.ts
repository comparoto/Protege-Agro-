import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticasComponent } from './praticas.component';

describe('PraticasComponent', () => {
  let component: PraticasComponent;
  let fixture: ComponentFixture<PraticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});