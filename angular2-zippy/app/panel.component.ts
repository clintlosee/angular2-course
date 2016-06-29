import {Component, Input} from '@angular/core';

@Component({
    selector: 'panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"
                    (click)="onClick()">
                    {{ title }}
                <i class="glyphicon pull-right"
                    [ngClass]="{
                        'glyphicon-chevron-down': !panelShow,
                        'glyphicon-chevron-up': panelShow
                    }"></i>
                </h3>
            </div>
            <div class="panel-body" *ngIf="panelShow">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .panel {
            margin: 0;
            border-radius: 0;
        }
        .panel-heading {
            cursor: pointer;
        }
    `]
})

export class PanelComponent {
    @Input() title: string;
    panelShow = false;

    onClick() {
        this.panelShow = !this.panelShow;
    }
}