import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesListComponent } from './personajes-list.component';

describe('PersonajesListComponent', () => {
  let component: PersonajesListComponent;
  let fixture: ComponentFixture<PersonajesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
