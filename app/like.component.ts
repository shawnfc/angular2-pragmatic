import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    templateUrl: 'app/templates/like.template.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }
    `]
})

export class LikeComponent {
    @Input()likeCount = 0;
    @Input()iLike = false;

    onClick() {
        this.iLike = !this.iLike;
        this.likeCount += this.iLike ? 1 : -1;
    }
}