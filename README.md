<p align="center">
  <img 
    src="public/certificate/Cover.svg"
    alt="Gestão de Certificados - Cover"
    width="100%"
  />
</p>

# 🎓 Gestão de Certificados

Projeto desenvolvido em **Angular** com foco em **SPA (Single Page Application)** para criação, listagem, visualização e download de certificados em formato de imagem.

Este projeto explora conceitos fundamentais do Angular até a construção completa de uma aplicação funcional, com rotas, componentes reutilizáveis, formulários, serviços e manipulação do DOM.

---

## ✨ Visão Geral

A aplicação permite:

* Criar certificados personalizados
* Listar certificados gerados
* Visualizar um certificado individual
* Realizar download do certificado como imagem PNG
* Persistir dados localmente usando `localStorage`

Tudo isso sem recarregar a página, seguindo o modelo **SPA**.

---

## 🧠 Conceitos Aplicados

* Angular Standalone Components
* Componentização
* Template-Driven Forms
* Injeção de Dependência (DI)
* Serviços para centralização de estado
* Roteamento com parâmetros (`:id`)
* Diretivas (`ngIf`, `ngFor`, `ngClass`, `ngStyle`)
* Ciclo de vida (`ngOnInit`)
* Manipulação segura do DOM com `@ViewChild`
* Renderização de HTML em imagem com `html2canvas`

---



## 🔁 Roteamento

As rotas são definidas em `app.routes.ts`:

```ts
export const routes: Routes = [
  { path: '', component: CertificadosComponent },
  { path: 'certificados/novo', component: CertificadoFormComponent },
  { path: 'certificados/:id', component: CertificadoComponent },
];
```

* `/` → Lista de certificados
* `/certificados/novo` → Criação de certificado
* `/certificados/:id` → Visualização de certificado

---

## 🧩 Componentes Principais

### CertificadosComponent

Responsável por listar todos os certificados armazenados no serviço.

* Consome o estado centralizado
* Renderiza lista com `@for`
* Usa `track $index` para performance

---

### CertificadoFormComponent

Responsável pela criação de certificados.

* Template-Driven Form (`ngModel`)
* Validações simples
* Uso de imutabilidade ao salvar (`{ ...certificado }`)

---

### CertificadoComponent

Responsável pela visualização e download do certificado.

* Lê o `id` da rota via `ActivatedRoute`
* Busca o certificado no serviço
* Converte HTML em imagem

```ts
this.route.paramMap.subscribe(params => {
  this.id = params.get('id')
  this.certificado = this.certificadoService.certificados
    .find(item => item.id === this.id)
})
```

---

## 📦 Serviço (Centralização de Estado)

### CertificadoService

```ts
@Injectable({ providedIn: 'root' })
export class CertificadoService {
  certificados: Certificado[] = []

  adicionarCertificado(certificado: Certificado) {
    this.certificados.unshift({ ...certificado })
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
}
```

* Centraliza os dados
* Evita compartilhamento de referências
* Persiste estado no `localStorage`

---

## 🖼️ Download do Certificado

A funcionalidade de download utiliza **html2canvas**:

```ts
html2canvas(this.certificadoElement.nativeElement, { scale: 2 })
  .then(canvas => {
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `certificado_${this.certificado?.nome}.png`
    link.click()
  })
```

**Fluxo:**

1. HTML é renderizado em um `canvas`
2. Canvas é convertido em Data URL
3. Um link é criado dinamicamente
4. Download é disparado programaticamente

---

## 🧪 Imutabilidade e Boas Práticas

* Objetos são copiados com spread (`{ ...obj }`)
* Evita mutações não intencionais
* Facilita debug e previsibilidade

---

## 🎨 Design

O layout foi baseado no seguinte design do Figma:

🔗 **Figma (Community):**
[https://www.figma.com/design/ip6AWmRLZTA9ycV5VEbBJB/Gest%C3%A3o-de-Certificados--Community](https://www.figma.com/design/ip6AWmRLZTA9ycV5VEbBJB/Gest%C3%A3o-de-Certificados--Community)

---

## 🚀 Tecnologias Utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* html2canvas
* Figma

---

## 📌 Conclusão

Este projeto consolida conceitos essenciais do Angular moderno, explorando desde a arquitetura SPA até detalhes de manipulação do DOM e gerenciamento de estado.

Ele demonstra uma aplicação real, organizada, escalável e alinhada às boas práticas do ecossistema Angular.




