import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaRiscoComponent } from './alerta-risco.component';

describe('AlertaRiscoComponent', () => {
  let component: AlertaRiscoComponent;
  let fixture: ComponentFixture<AlertaRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertaRiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertaRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});