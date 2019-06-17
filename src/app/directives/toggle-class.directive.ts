import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
  @Input('appToggleClass') className;
  private element;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  @HostListener('click', ['$event.target']) onClick(btn) {
    this.toggle();
  }

  private toggle() {
    const list = this.element.parentElement.getElementsByClassName('kt-menu__item main');
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item !== this.element){
        item.classList.remove(this.className);
      }
    }
    this.element.classList.contains(this.className) ? this.removeClass() : this.addClass();
  }

  private addClass() {
    this.element.classList.add(this.className);
  }

  private removeClass() {
    this.element.classList.remove(this.className);

  }

}
