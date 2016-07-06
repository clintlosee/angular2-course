import {Component, Input} from '@angular/core';

@Component({
    selector: 'followers',
    template: `
        <div class="media col-sm-12">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{ url }}" alt="{{ login }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ login }}
                </h4>
            </div>
        </div>
    `,
    styles: [`
        .media-object {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }
    `]
})

export class FollowersComponent {
    @Input() followerCount: number;
    @Input() login: string;
    @Input() url: string;
}