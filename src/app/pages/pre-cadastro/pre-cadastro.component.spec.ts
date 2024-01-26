import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCadastroComponent } from './pre-cadastro.component';

describe('PreCadastroComponent', () => {
  let component: PreCadastroComponent;
  let fixture: ComponentFixture<PreCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreCadastroComponent]
    });
    fixture = TestBed.createComponent(PreCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
