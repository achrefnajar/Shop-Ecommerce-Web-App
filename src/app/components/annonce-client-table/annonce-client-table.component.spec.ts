import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceClientTableComponent } from './annonce-client-table.component';

describe('AnnonceClientTableComponent', () => {
  let component: AnnonceClientTableComponent;
  let fixture: ComponentFixture<AnnonceClientTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceClientTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceClientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
