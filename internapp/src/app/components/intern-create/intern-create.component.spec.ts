import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternCreateComponent } from './intern-create.component';

describe('InternCreateComponent', () => {
  let component: InternCreateComponent;
  let fixture: ComponentFixture<InternCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
