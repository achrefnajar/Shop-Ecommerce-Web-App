import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnnonceComponent } from './display-annonce.component';

describe('DisplayAnnonceComponent', () => {
  let component: DisplayAnnonceComponent;
  let fixture: ComponentFixture<DisplayAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
