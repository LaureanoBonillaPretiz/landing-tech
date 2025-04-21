import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  private el = inject(ElementRef);

  services = [
    {
      icon: '🌐',
      title: 'Páginas Web Profesionales',
      description: 'Diseño moderno, conexión con redes y WhatsApp, compatible con todos los dispositivos.'
    },
    {
      icon: '🛒',
      title: 'Tiendas en Línea',
      description: 'Vende tus productos fácilmente con pagos automáticos, WhatsApp y notificaciones por correo.'
    },
    {
      icon: '🤖',
      title: 'Automatización y Optimización',
      description: 'Bots y programas que automatizan tareas, responden mensajes y conectan sistemas como Excel y WhatsApp.'
    },
    {
      icon: '💻',
      title: 'Software a la Medida',
      description: 'Control de clientes, ventas, inventario y reportes personalizados. Hecho a medida.'
    }
  ];
  

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.querySelector('.services')?.classList.add('in-view');
      }
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement.querySelector('.services'));
  }
}
