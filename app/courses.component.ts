import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
                <h2>{{title}}</h2>
                <input type="text" autoGrow>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>
            `,
    directives: [AutoGrowDirective]
})

export class CoursesComponent {

    title = "Our Courses";

    //variable created to ref data
    courses;

    // create a constructor that takes a parameter name where the type is our service
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

}