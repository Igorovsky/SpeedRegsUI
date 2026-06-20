import { TestBed } from '@angular/core/testing';

import { SpeedMeterService } from './speed-meter-service';

describe('SpeedMeter', () => {
  let service: SpeedMeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedMeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
