import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'like',
    template: `
        <div>
            <i
                class="glyphicon glyphicon-heart"
                [class.highlighted]="liked"
                (click)="onClick()">
            </i>
            <span>{{totalLikes}}</span>
        </div>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
            font-size: 1em;
            transition: all .5s;
        }
        .highlighted {
            color: deeppink;
        }
    `]
})

export class LikeComponent {
    @Input() liked = false;
    @Input() totalLikes = 0;

    @Output() change = new EventEmitter();

    onClick() {
        this.liked = !this.liked;
        this.totalLikes += this.liked ? 1 : -1;
        this.change.emit({likes: this.totalLikes, liked: this.liked});
    }
}