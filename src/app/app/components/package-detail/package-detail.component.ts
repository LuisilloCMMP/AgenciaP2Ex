import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent {
  @Input() selectedPackage: any;

  reservar() {
    alert("¡Reserva confirmada para " + this.selectedPackage?.name + "!");
  }
}
