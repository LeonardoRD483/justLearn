import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutMaestroComponent } from './main-layout-maestro.component';

describe('MainLayoutMaestroComponent', () => {
  let component: MainLayoutMaestroComponent;
  let fixture: ComponentFixture<MainLayoutMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
