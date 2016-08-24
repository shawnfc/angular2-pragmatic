import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'favorite',
    templateUrl: 'app/templates/favorite.template.html',
    styles: [
        `.glyphicon {
            font-size: 18px;
            cursor: pointer;
        }
    `]
})

export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }

    onFavoriteChange($event) {

    }
}