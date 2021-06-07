import { Input } from '@angular/core';

export class Molecule {

    @Input() name: string;
    @Input() type: string;
    @Input() classList: string[];

}