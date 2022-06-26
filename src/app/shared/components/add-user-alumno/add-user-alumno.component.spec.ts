import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAlumnoComponent } from './add-user-alumno.component';

describe('AddUserAlumnoComponent', () => {
  let component: AddUserAlumnoComponent;
  let fixture: ComponentFixture<AddUserAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
