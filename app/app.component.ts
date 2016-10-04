// Root Component
import {Component} from '@angular/core';
import {CourseService} from "./course.service";
import {AuthorsService} from "./authors.service";

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1>
                <courses></courses>
                <authors></authors>`,
    providers: [CourseService, AuthorsService]
})

export class AppComponent {}