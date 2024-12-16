import { Component, ElementRef, Query, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('layer1') layer!: ElementRef;

  onMouseMove = (event: MouseEvent) => {
    const container = event.currentTarget as HTMLElement;
    const { offsetX, offsetY } = event;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const rotateX = (offsetY / height - 0.6) * 40;
    const rotateY = (offsetX / width - 0.6) * -40;
    const depth = 1 * 40;
    this.layer.nativeElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`;
  };

  onMouseLeave(): void {
    this.layer.nativeElement.style.transform =
      'rotateX(0deg) rotateY(0deg) translateZ(0)';
  }
}
