import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByAlumnoComponent } from './list-by-alumno.component';

describe('ListByAlumnoComponent', () => {
  let component: ListByAlumnoComponent;
  let fixture: ComponentFixture<ListByAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
