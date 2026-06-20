import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpeedMeterService} from '../service/speed-meter-service';
import {GeneralTrafficStatsResponse, RegistrationsList} from '../model/models';
import {
  MatCell, MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableModule
} from '@angular/material/table';
import {JsonPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-speed-meter-home',
  imports: [
    MatTable,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatButton
  ],
  templateUrl: './speed-meter-home.html',
  styleUrl: './speed-meter-home.scss',
})
export class SpeedMeterHome implements OnInit {

  // Decide and declare all view arguments
  regsFetched: boolean = false;
  registrationsListLocal: RegistrationsList[] = [];
  registrationsStats: GeneralTrafficStatsResponse = {
    "highestSpeedVehicle": {
      "plate": "----",
      "avgSpeed": 0.0,
      "overtaken": 0
    },
    "percentSpeedingVehicles": 0.0,
    "totalRegistrations": 0,
    "totalRegistrationsBeforeNine": 0
  };

  displayedColumns: string[] = ['id', 'plateNumber', 'timeIn', 'timeOut'];

  constructor(private speedMeterService: SpeedMeterService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // Load all data
    this.speedMeterService.getRegistrationsList().subscribe({
      next: (data) => {
        console.log(data);
        this.registrationsListLocal = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
        this.regsFetched = true;
        this.cdr.detectChanges(); // DO D DUM REFRESH
      }
    })
  }


  getAllRegistrationsStats() {
    console.log("Hey")
    this.speedMeterService.getAllRegistrationsStats().subscribe({
      next: (data) => {
        console.log(data);
        this.registrationsStats = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
        this.cdr.detectChanges(); // DO D DUM REFRESH
      }
    })
  }
}
