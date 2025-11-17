import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct user name', () => {
    component.userName = 'Usuário de Teste';
    fixture.detectChanges(); 
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-info span')?.textContent).toContain('Usuário de Teste');
    expect(compiled.querySelector('.welcome-section h1')?.textContent).toContain('Olá, Usuário de Teste');
  });
});