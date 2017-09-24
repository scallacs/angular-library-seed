export * from './accordion';

import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../shared';

import { NgbdAccordionModule } from './accordion';
@NgModule({
    imports: [
        NgbdSharedModule,
        NgbdAccordionModule
    ],
    exports: [
        NgbdAccordionModule
    ]
})
export class NgbdDemoModule { }
