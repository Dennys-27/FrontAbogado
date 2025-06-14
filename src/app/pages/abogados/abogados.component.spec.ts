import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadosComponent } from './abogados.component';

describe('AbogadosComponent', () => {
  let component: AbogadosComponent;
  let fixture: ComponentFixture<AbogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbogadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
