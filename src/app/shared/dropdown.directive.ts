import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  private isOpen = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    const self = this;
    document.getElementsByTagName('body')[0].addEventListener('click', function(evt) {
      if (evt.target !== self.elementRef.nativeElement) {
        if (self.isOpen) {
          self.isOpen = false;
          const dropdown = self.elementRef.nativeElement.nextElementSibling;
          self.renderer.removeClass(dropdown, 'show');
        }
      }
    });
  }


  @HostListener('click')
  onClick() {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    if (!this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}
