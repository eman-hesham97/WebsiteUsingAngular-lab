import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfLoginComponent } from './tdf-login.component';

describe('TdfLoginComponent', () => {
  let component: TdfLoginComponent;
  let fixture: ComponentFixture<TdfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
