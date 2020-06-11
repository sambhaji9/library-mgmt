import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './logs/logs.component';
import { UtilityPipesModule } from '../utility-pipes/utility-pipes.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    UtilityPipesModule,
    FormsModule
  ],
  exports: [LogsComponent]
})
export class LogsModule { }
