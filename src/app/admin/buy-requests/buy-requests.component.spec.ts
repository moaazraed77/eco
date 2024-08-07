import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRequestsComponent } from './buy-requests.component';

describe('BuyRequestsComponent', () => {
  let component: BuyRequestsComponent;
  let fixture: ComponentFixture<BuyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
