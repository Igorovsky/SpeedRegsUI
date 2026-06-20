import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpeedMeterService} from '../service/speed-meter-service';
import {RegistrationsList} from '../model/models';
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
    MatHeaderCellDef
  ],
  templateUrl: './speed-meter-home.html',
  styleUrl: './speed-meter-home.scss',
})
export class SpeedMeterHome implements OnInit {

  // Decide and declare all view arguments
  regsFetched: boolean = false;
  registrationsListLocal: RegistrationsList[] = [];
  displayedColumns: string[] = ['id', 'plateNumber', 'timeIn', 'timeOut'];

  constructor(private speedMeterService: SpeedMeterService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  // Load all data
    this.speedMeterService.getRegistrationsList().subscribe({
      next: (data) => {
        // TODO All good
        console.log(data);
        this.registrationsListLocal = data;
      },
      error: (error) => {
        // TODO All BAD
        console.log(error)
      },
      complete: () => {
        // TODO All CLOSED
        console.log('complete')
        this.regsFetched = true;
        this.cdr.detectChanges(); // DO D DUM REFRESH
      }
    })
  }

  // Give the option to the USER to send a registration speeding ticket

}
