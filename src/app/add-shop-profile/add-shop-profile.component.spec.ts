import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopProfileComponent } from './add-shop-profile.component';

describe('AddShopProfileComponent', () => {
  let component: AddShopProfileComponent;
  let fixture: ComponentFixture<AddShopProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
