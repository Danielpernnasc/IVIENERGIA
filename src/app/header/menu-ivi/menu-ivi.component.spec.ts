import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIviComponent } from './menu-ivi.component';

describe('MenuIviComponent', () => {
  let component: MenuIviComponent;
  let fixture: ComponentFixture<MenuIviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuIviComponent]
    });
    fixture = TestBed.createComponent(MenuIviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
