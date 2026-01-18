import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from '../../item-certificado/item-certificado.component';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent,SecondaryButtonComponent,ItemCertificadoComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

}
