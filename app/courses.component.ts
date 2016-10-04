import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    template: `
                <h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>
            `
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