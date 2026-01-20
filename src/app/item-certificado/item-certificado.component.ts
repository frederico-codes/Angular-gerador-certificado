import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from '../_components/secondary-button/secondary-button.component';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  @Input() nomeAluno : string =''
  @Input() dataEmissao : string = ''
  @Input() id: string = ''

  constructor(private router: Router){ }

  redirecionaCertificado(){
    this.router.navigate(['/certificados', this.id])
  }
}
