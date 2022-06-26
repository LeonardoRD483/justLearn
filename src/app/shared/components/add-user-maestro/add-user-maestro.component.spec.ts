import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserMaestroComponent } from './add-user-maestro.component';

describe('AddUserMaestroComponent', () => {
  let component: AddUserMaestroComponent;
  let fixture: ComponentFixture<AddUserMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
