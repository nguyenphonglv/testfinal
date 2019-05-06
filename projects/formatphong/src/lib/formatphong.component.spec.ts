import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatphongComponent } from './formatphong.component';

describe('FormatphongComponent', () => {
  let component: FormatphongComponent;
  let fixture: ComponentFixture<FormatphongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatphongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatphongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
