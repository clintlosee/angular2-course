import {Component} from '@angular/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="let tweet of tweets">
            <tweet [tweet]="tweet"></tweet>
        </div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})

export class TweetsComponent {
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}