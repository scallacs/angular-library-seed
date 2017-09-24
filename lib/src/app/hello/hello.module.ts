import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHelloComponent } from './show-hello/show-hello.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ShowHelloComponent],
    exports: [ShowHelloComponent]
})
export class HelloModule { }
