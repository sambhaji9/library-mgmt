import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BooksModule } from './books/books.module';
import { StudentModule } from './student/student.module';
import { LogsModule } from './logs/logs.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BooksModule,
		StudentModule,
		LogsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
