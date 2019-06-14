import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
  private active: boolean;
  @Input('appToggleClass') className;

  constructor(private el: ElementRef) {
    this.active = false;
  }

  @HostListener('click', ['$event.target']) onClick(btn) {
    this.toggle();
  }

  private toggle() {
    this.active ? this.removeClass() : this.addClass();
    this.active = !this.active;
  }

  private addClass() {
    this.el.nativeElement.classList.add(this.className);
  }

  private removeClass() {
    this.el.nativeElement.classList.remove(this.className);

  }

}
