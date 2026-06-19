import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTicketerHome } from './speed-ticketer-home';

describe('SpeedTicketerHome', () => {
  let component: SpeedTicketerHome;
  let fixture: ComponentFixture<SpeedTicketerHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedTicketerHome],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeedTicketerHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
