import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';


@Directive({
  selector: '[appRange]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangeValidatorDirective, multi: true}]
})
export class RangeValidatorDirective implements Validator {

  private min: number;
  private max: number;

  constructor() {
  }

  @Input() set appRange(range: { min: number, max: number }) {
    this.min = range.min;
    this.max = range.max;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && (isNaN(control.value) || control.value < this.min || control.value > this.max)) {
      return {'range': true};
    }
    return null;
  }

}
