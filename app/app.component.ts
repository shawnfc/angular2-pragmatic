import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {BootstrapPanel} from './bootstrap.panel.component'
import {ZippyComponent} from './Zippy.component'

@Component({
    selector: 'my-app',
    template: `
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
        
        <zippy>
            <div class="zipheading1"></div>
            <div class="zipbody1">The body for Zip 1</div>
            <div class="zipheading2">Zip Heading 2</div>
            <div class="zipbody2">The body for Zip 2</div>
        </zippy>
</div>
    `,
    directives: [ZippyComponent]

})

export class AppComponent {
    viewMode = 'map';
}