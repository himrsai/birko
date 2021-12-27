import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirkoUserComponent } from './birko-user.component';

describe('BirkoUserComponent', () => {
  let component: BirkoUserComponent;
  let fixture: ComponentFixture<BirkoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirkoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirkoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
