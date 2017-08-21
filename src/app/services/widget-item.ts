import { Type } from '@angular/core';

export class WidgetItem {
    constructor(
        public component: Type<any>, 
        public id: number, 
        public title: string) { }
}