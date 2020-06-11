import { Component, OnInit } from '@angular/core';
import { LogsService } from './logs.service';
import { ILogs } from './logs.model';

@Component({
   selector: 'app-logs',
   templateUrl: './logs.component.html',
   styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

   logs: ILogs[];

   constructor(private logService: LogsService) { }

   ngOnInit() {
      this.logService.getLogs().subscribe(response => {
         this.logs = response;
      });
   }

}
