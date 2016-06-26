import {Component, Input, Output} from '@angular/core';
// import {LikeComponent} from './like.component'; // TODO: need to add this

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people" alt="Profile Pic">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <like></like>
            </div>
        </div>
    `,
    styles: [`
        .media-object {
            // width: 100px;
            // height: 100px;
        }
    `]
})

export class TweetComponent {
    
}