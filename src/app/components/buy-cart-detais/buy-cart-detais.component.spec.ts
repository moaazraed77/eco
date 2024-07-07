import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCartDetaisComponent } from './buy-cart-detais.component';

describe('BuyCartDetaisComponent', () => {
  let component: BuyCartDetaisComponent;
  let fixture: ComponentFixture<BuyCartDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCartDetaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyCartDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
