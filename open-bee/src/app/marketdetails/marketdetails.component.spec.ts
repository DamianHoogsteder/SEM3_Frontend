import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketdetailsComponent } from './marketdetails.component';

describe('MarketdetailsComponent', () => {
  let component: MarketdetailsComponent;
  let fixture: ComponentFixture<MarketdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
