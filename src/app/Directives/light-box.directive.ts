import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input() highlightColor:string = "yellow"
  @Input('LightBox') defaultColor:string = "gray" //read value from html

  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = "2px solid gray"
    // this.elemRef.nativeElement.style.padding = "5px"

  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = "2px solid gray"
    this.elemRef.nativeElement.style.padding = "5px"    
  }

  //Decorator Method, Function
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highlightColor}`
  }
}
