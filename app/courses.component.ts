import {Component} from 'angular2/core';
import {CourseService} from './services/course.service';
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
        template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow [(ngModel)]="inputContent">
         <input type="button" (click)="inputContent = ''" value="Clear">
        <h3>Preview: {{inputContent}}</h3> 
        <ul>
            <li *ngFor = "#course of courses">
                {{course}}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    $event;
    title = "Course Title";
    inputContent = "Input content stuff";
    courses;
    constructor (courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}