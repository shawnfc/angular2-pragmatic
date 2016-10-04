// Root Component
import {Component} from '@angular/core';
import {CourseService} from "./course.service";

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular 2</h1><courses></courses>',
    providers: [CourseService]
})

export class AppComponent {}