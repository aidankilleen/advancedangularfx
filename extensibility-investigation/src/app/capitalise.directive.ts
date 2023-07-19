import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[capitalise]'
})
export class CapitaliseDirective implements OnChanges {

  @Input() capitalise: string = "upper";
  
  ngOnChanges(changes: any) {
    console.log("@Input() values have changed");
    this.updateControl();
  }

  constructor(private elRef: ElementRef) { 
    console.log("capitalise constructor called");
  }

  @HostListener('focus')
  onFocus() {
    console.log("focus event called");
  }

  @HostListener('blur')
  onBlur() {
    this.updateControl();
  }

  updateControl() {
    console.log(`capitalise: ${this.capitalise}`);

    let value:string = this.elRef.nativeElement.value;

    if (this.capitalise == 'lower') {
      value = value.toLowerCase();
    } else if (this.capitalise == 'title') {

      // split to words, capitalise the first letter, join with spaces
      value = value.split(" ")
           .map(word=>`${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
           .join(" ");
    } else {
      value = value.toUpperCase();
    }
    this.elRef.nativeElement.value = value;
  }
}
