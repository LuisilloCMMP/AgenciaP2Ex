import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageDetailComponent } from '../package-detail/package-detail.component';

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [CommonModule, PackageDetailComponent],
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {
  packages = [
    { name: 'Viaje a París', price: 1200, description: '5 días en la ciudad del amor.' },
    { name: 'Aventura en Machu Picchu', price: 1500, description: 'Explora la maravilla del mundo.' },
    { name: 'Safari en Kenia', price: 2000, description: 'Una experiencia única con la naturaleza.' }
  ];

  selectedPackage: any = null;

  selectPackage(pack: any) {
    this.selectedPackage = pack;
  }
}
