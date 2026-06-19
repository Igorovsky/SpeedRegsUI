import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedMeterHome } from './speed-meter-home';

describe('SpeedMeterHome', () => {
  let component: SpeedMeterHome;
  let fixture: ComponentFixture<SpeedMeterHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedMeterHome],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeedMeterHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
