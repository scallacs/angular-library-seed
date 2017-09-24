import { Component, OnInit, Input } from '@angular/core';

/**
 * Display a nice hello message
 */
@Component({
    selector: 'angular-library-seed-show-hello',
    templateUrl: './show-hello.component.html',
    styleUrls: ['./show-hello.component.css']
})
export class ShowHelloComponent implements OnInit {

    /**
     * Description test
     */
    @Input() message: string;

    constructor() { }

    ngOnInit() {
    }

}
