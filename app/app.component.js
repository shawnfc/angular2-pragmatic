System.register(['angular2/core', "./courses.component", "./authors.component", "./favorite.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.imageUrl = "https://i1.sndcdn.com/avatars-000045458808-yey622-t500x500.jpg";
                    this.isActive = true;
                    this.post = {
                        isFavorite: true
                    };
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log("handled by div");
                };
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    alert("Yes, you clicked the button!");
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <img [src]=\"imageUrl\" alt=\"Shawn Conrad\" id=\"mainImage\">\n                <h1>My First Angular 2 App</h1>\n                <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n                <courses></courses>\n                <authors></authors>\n                <div (click)=\"onDivClick()\">\n                    <button class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'green' : 'black'\" (click)=\"onClick($event)\">Loving This Stuff!</button>\n                </div>\n               ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map