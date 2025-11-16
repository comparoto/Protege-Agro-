import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencoesComponent } from './intervencoes.component';

describe('IntervencoesComponent', () => {
  let component: IntervencoesComponent;
  let fixture: ComponentFixture<IntervencoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervencoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntervencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});