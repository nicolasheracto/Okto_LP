# Okto Sistemas - Landing Page

Esta é a Landing Page oficial da **Okto Sistemas**, focada em apresentar as soluções completas de tecnologia que organizam e aceleram negócios, desde ERPs robustos até sistemas de locadoras e plataformas de agendamento.

O projeto foi construído com foco em **Alta Performance, SEO e Clean Code**, utilizando um processo de build moderno para garantir tempos de carregamento instantâneos e uma experiência de usuário (UX) premium com Glassmorphism.

## 🚀 Tecnologias Utilizadas

- **HTML5 & CSS3**
- **[Vite](https://vitejs.dev/)**: Ferramenta de build de frontend super rápida.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário configurado nativamente no Vite.
- **[Lucide Icons](https://lucide.dev/)**: Biblioteca de ícones moderna e limpa, gerenciada pelo NPM.

## 📦 Como rodar o projeto localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 1. Instalação
Clone este repositório e instale as dependências:
```bash
# Clone o repositório
git clone https://github.com/nicolasheracto/Okto_LP.git

# Entre na pasta do projeto
cd Okto_LP

# Instale as dependências
npm install
```

### 2. Ambiente de Desenvolvimento
Para rodar a aplicação em um servidor de desenvolvimento com Hot-Module Replacement (HMR) ativado (as mudanças aparecem na tela instantaneamente):
```bash
npm run dev
```
A página estará disponível, por padrão, em `http://localhost:5173`.

### 3. Build para Produção
Para gerar a versão estática minificada e otimizada pronta para hospedagem:
```bash
npm run build
```
Os arquivos finais compactados serão gerados na pasta `/dist`.

Para testar a versão de produção gerada localmente, rode:
```bash
npm run preview
```

## 📐 Padrões Adotados
*   **Imagens WebP**: Ativos visuais ficam dentro da pasta `/public` para evitar gargalos na resolução de caminhos durante o build, otimizados no formato WebP.
*   **Modularização JS**: A lógica interativa e de inicialização (ícones, observers de animação, Navbar scroll e menu mobile) está concentrada no arquivo `src/main.js`.
*   **CSS Limpo**: Estilização concentrada via classes utilitárias no HTML, e customizações específicas (animações) configuradas em `src/style.css`.
