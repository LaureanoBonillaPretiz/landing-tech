import { Component, ElementRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.querySelector('.contact')?.classList.add('in-view');
      }
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement.querySelector('.contact'));
  }
}
