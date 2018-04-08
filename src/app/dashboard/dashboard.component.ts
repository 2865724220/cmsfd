import { Component } from '@angular/core';
import { DashBoardService } from './dashboard.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

    constructor(private _service: DashBoardService) {
        //
    }

    ngOnInit () {
        // console.log(this)
    }

}
