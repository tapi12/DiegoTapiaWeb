import { Directive, ElementRef, inject, OnInit} from '@angular/core';
import {AnimationBuilder, style, animate} from '@angular/animations';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit{
  elementRef:ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder.build([
    style({opacity: 0}),
    animate('1.5s ease-in', style({opacity: 1}))
  ]).create(this.elementRef.nativeElement);

  ngOnInit(){
    this.player.play();
  }

}
