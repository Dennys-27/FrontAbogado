import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoclientesComponent } from './contactoclientes.component';

describe('ContactoclientesComponent', () => {
  let component: ContactoclientesComponent;
  let fixture: ComponentFixture<ContactoclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoclientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
