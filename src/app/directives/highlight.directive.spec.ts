import { HighlightDirective } from './highlight.directive';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(this.nativeElement, this.Renderer2);
    expect(directive).toBeTruthy();
  });
});
