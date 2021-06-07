import { Input } from '@angular/core';

export class Atom {

    @Input() classList: string[]
    @Input() type: string

    constructor() {

    }
}