import {Component} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading title">
                <ng-content select=".zipheading1"></ng-content>
                <i class="glyphicon glyphicon-chevron-down"></i>
            </div>
            <div class="panel-body">
                <ng-content select=".zipbody1"></ng-content>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading title">
                <ng-content select=".zipheading2"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".zipbody2"></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .title {
            font-weight: bold;
        }
    `]
})

export class ZippyComponent {
    title1 = "This Is Title 1";
}