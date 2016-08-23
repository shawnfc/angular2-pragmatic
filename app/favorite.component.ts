import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: '/app/favorite.template.html',
    styles: [`
        .glyphicon-star, .glyphicon-star-empty {
            color: red;
        }
    `]
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: 'isFavorite'})
    }
}