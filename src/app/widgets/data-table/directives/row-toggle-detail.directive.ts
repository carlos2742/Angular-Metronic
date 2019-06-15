import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appRowToggleDetail]'
})
export class RowToggleDetailDirective {
  private active: boolean;

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
    this.el.nativeElement.parentElement.classList.add('show-detail');
  }

  private removeClass() {
    this.el.nativeElement.parentElement.classList.remove('show-detail');

  }

}
