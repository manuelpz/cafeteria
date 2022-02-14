import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulguitasComponent } from './pulguitas.component';

describe('PulguitasComponent', () => {
  let component: PulguitasComponent;
  let fixture: ComponentFixture<PulguitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulguitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulguitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
