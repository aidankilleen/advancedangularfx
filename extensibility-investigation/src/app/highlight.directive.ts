import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.highlight'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef) { 
    console.log("appHighlight constructor called");

    this.elRef.nativeElement.style.background = "yellow";
  }

}

