import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCertificadoComponent } from './item-certificado/item-certificado.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemCertificadoComponent, PrimaryButtonComponent, NavbarComponent, BaseUiComponent, ItemCertificadoComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
