import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/templates/vote.template.html',
    styles: [`
        .glyphicon {
            cursor: pointer;
        }
        .voteCont {
            width: 20px;
            text-align: center;
            color: #999;
        }
        .highlight {
            color: orange;
        }
    `]
})

export class VoteComponent {
    @Input()voteCount = 0;
    @Input()myVote = 0;

    @Output()vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1)
            return;
        this.myVote++;

        this.vote.emit({newVote: this.myVote})

    }
    downVote() {
        if (this.myVote == -1)
            return;
        this.myVote--;

        this.vote.emit({newVote: this.myVote})
    }
}