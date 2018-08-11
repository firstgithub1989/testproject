import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InrwalletComponent } from './inrwallet.component';

describe('InrwalletComponent', () => {
  let component: InrwalletComponent;
  let fixture: ComponentFixture<InrwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InrwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InrwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
