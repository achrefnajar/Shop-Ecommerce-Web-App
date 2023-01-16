import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceUserTableComponent } from './annonce-user-table.component';

describe('AnnonceUserTableComponent', () => {
  let component: AnnonceUserTableComponent;
  let fixture: ComponentFixture<AnnonceUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
