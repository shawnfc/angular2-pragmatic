import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/templates/contact-form.component.html'
})

export class ContactFormComponent {
    log(x) {
        console.log(x)
    }
}