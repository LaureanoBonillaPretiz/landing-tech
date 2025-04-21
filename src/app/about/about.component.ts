import { Component, ElementRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.querySelector('.about')?.classList.add('in-view');
      }
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement.querySelector('.about'));
  }
}