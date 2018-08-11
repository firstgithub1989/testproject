import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinwalletComponent } from './coinwallet.component';

describe('CoinwalletComponent', () => {
  let component: CoinwalletComponent;
  let fixture: ComponentFixture<CoinwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
