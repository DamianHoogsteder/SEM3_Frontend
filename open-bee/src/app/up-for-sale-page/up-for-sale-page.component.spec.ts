import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpForSalePageComponent } from './up-for-sale-page.component';

describe('UpForSalePageComponent', () => {
  let component: UpForSalePageComponent;
  let fixture: ComponentFixture<UpForSalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpForSalePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpForSalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
