import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../_components/secondary-button/secondary-button.component';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  id:string='6'

  constructor(private router: Router){ }

  redirecionaCertificado(){
    this.router.navigate(['/certificados', 2])  //certificados/2
    
  }
}
