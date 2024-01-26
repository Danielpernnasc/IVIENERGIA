import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCadastroLoteComponent } from './pre-cadastro-lote.component';

describe('PreCadastroLoteComponent', () => {
  let component: PreCadastroLoteComponent;
  let fixture: ComponentFixture<PreCadastroLoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreCadastroLoteComponent]
    });
    fixture = TestBed.createComponent(PreCadastroLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
