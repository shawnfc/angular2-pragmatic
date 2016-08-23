import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component"
import {LikeComponent} from "./like.component";
import {VoteComponent} from "./vote.component";


@Component({
    selector: 'my-app',
    template: `
                <img [src]="imageUrl" alt="Shawn Conrad" id="mainImage"><br>
                <like></like>
                <h1>My First Angular 2 App</h1>
                <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <i class="glyphicon glyphicon-star"></i>
                <courses></courses>
                <authors></authors>
                <div (click)="onDivClick()">
                    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'black'" (click)="onClick($event)">Loving This Stuff!</button>
                    <vote></vote>
                </div>
               `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent]
})

export class AppComponent {
    imageUrl = "https://i1.sndcdn.com/avatars-000045458808-yey622-t500x500.jpg";
    isActive = true;

    onDivClick() {
        console.log("handled by div")
    }
    onClick($event) {
        $event.stopPropagation();
        alert("Yes, you clicked the button!")
    }
    post = {
        isFavorite: true
    }
    onFavoriteChange($event) {
        console.log($event);
    }

}