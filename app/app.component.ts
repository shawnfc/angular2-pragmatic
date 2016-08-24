import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component"
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'


@Component({
    selector: 'my-app',
    template: `
                <img [src]="imageUrl" alt="Shawn Conrad" id="mainImage">
                <vote 
                [myVote]="post.myVote" 
                [voteCount]="post.voteCount" 
                (vote)="onVote($event)"></vote><br>
                <h1>My First Angular 2 App</h1>
                <like></like><br>
                <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <courses></courses>
                <authors></authors>
                <div (click)="onDivClick()">
                    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'black'" (click)="onClick($event)">Loving This Stuff!</button>
                    
                </div>
               `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent]
})

export class AppComponent {
    imageUrl = "https://i1.sndcdn.com/avatars-000045458808-yey622-t500x500.jpg";
    isActive = true;

    post = {
        title: "title",
        isFavorite: true,
        myVote: 0,
        voteCount: 10
    }

    onDivClick() {
        console.log("handled by div")
    }
    onClick($event) {
        $event.stopPropagation();
        alert("Yes, you clicked the button!")
    }
    onFavoriteChange($event) {
        console.log($event);
    }
    onVote($event) {
        console.log($event);
    }
}