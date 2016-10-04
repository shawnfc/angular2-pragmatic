//Entry point of the application

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoursesComponent} from "./courses.component";
import {CourseService} from "./course.service";

@NgModule({
    imports: [BrowserModule],
    //declarations should hold components not services
    declarations: [AppComponent, CoursesComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}