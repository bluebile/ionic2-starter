/**
 * Created by Chico on 08/02/17.
 */
import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    host: {
        '(keyup)': 'onKeyUp($event)'
    },
    selector: 'input[textMask],ion-input[textMask]'
})
export class MaskFixDirective  {
    constructor() {}

    /**
     * Corrige a posição do cursor após aplicar máscara pelo textMask
     */
    onKeyUp(event: any) {

        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Enter':
            case 'Escape':
            case 'Backspace':
            case 'Space':
                console.log('Ignora tecla');
                break;
            default:
                event.target.setSelectionRange(event.target.value.length, event.target.value.length);
                console.log('Aplica correção de mascara ( input-mask-fix )');
                // console.log(event);
                break;
        }
    }
}

@NgModule({
    declarations: [MaskFixDirective],
    exports: [MaskFixDirective],
    imports: [CommonModule]
})
export class MaskFix {}
