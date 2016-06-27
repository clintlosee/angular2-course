import {Component, Input, Output} from '@angular/core';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media col-sm-10">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{ tweet.photoUrl }}" alt="{{ tweet.photoAlt }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ tweet.headingTitle }} 
                    <span class="handle">{{ tweet.twitterId }}</span>
                </h4>
                <p>{{ tweet.tweet }}</p>
                <div>
                    <like
                        [totalLikes]="tweet.totalLikes" 
                        [liked]="tweet.liked"
                        (change)="onLikeChange($event)"></like>
                </div>
            </div>
        </div>
    `,
    directives: [LikeComponent],
    styles: [`
        .media {
            margin-bottom: 20px;
        }
        .media-object {
            border-radius: 5px;
        }
        .handle {
            color: #ccc;
        }
    `]
})

export class TweetComponent {
    @Input() tweet;

    onLikeChange($event) {
        console.log($event);
    }
}