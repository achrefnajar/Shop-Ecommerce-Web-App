import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceTableComponent } from './annonce-table.component';

describe('AnnonceTableComponent', () => {
  let component: AnnonceTableComponent;
  let fixture: ComponentFixture<AnnonceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
