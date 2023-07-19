import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[forbiddenNames]', 
  providers:[{
    provide: NG_VALIDATORS, 
    useExisting: ForbiddenNamesDirective, 
    multi: true
  }]
})
export class ForbiddenNamesDirective implements Validator {

  @Input() forbiddenNames: string[] = [];
  
  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenNameValidator()(control);
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      console.log(this.forbiddenNames);

      if (this.forbiddenNames.find(name => name == control.value?.toLowerCase())) {
        return {forbiddenNames: {value: `no brand names allowed (${control.value})`}}
      } else {
        return null;
      }

    }
  }

}
