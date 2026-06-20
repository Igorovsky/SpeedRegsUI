import {Component, OnInit} from '@angular/core';
import {SpeedMeterService} from '../service/speed-meter-service';

@Component({
  selector: 'app-speed-meter-home',
  imports: [],
  templateUrl: './speed-meter-home.html',
  styleUrl: './speed-meter-home.css',
})
export class SpeedMeterHome implements OnInit {

  constructor(private speedMeterService: SpeedMeterService) {}

  // Decide and declare all view arguments

  ngOnInit() {
  // Load all data
    this.speedMeterService.getRegistrationsList().subscribe({
      next: (data) => {
        // TODO All good
        console.log(data);
      },
      error: (error) => {
        // TODO All BAD
        console.log(error)
      },
      complete: () => {
        // TODO All CLOSED
        console.log('complete')
      }
    })
  }

  // Give the option to the USER to send a registration speeding ticket

}
