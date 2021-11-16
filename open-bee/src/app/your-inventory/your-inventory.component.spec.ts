import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInventoryComponent } from './your-inventory.component';

describe('YourInventoryComponent', () => {
  let component: YourInventoryComponent;
  let fixture: ComponentFixture<YourInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
