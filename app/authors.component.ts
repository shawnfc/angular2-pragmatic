import {Component} from 'angular2/core';
import {AuthorService} from "./services/author.service";

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{title}}
        <ul>
            <li *ngFor = "#author of authors">
                {{author}}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = 'Authors Title';
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}