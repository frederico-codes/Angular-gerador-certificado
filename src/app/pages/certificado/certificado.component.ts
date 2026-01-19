import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';


@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent,RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {

  constructor(private certificadoService : CertificadoService ){}

  ngOnInit(): void{
    console.log(this.certificadoService.certificados)
  }

}
