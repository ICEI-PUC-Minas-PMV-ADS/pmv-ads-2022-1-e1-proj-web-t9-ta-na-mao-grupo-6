# 5. ARQUITETURA DA SOLUÇÃO

O objetivo principal é que as soluções de softwares funcionem perfeitamente. Com isso, a Arquitetura da solução mostra o sistema e seus recursos específicos que permitem o projeto “Tá na Mão” atingir seus objetivos. Acompanhe a seguir e entenda o que foi utilizado.

## 5.1. DIAGRAMA DE COMPONENTES

Para desenvolver o projeto proposto a composição dos componentes e artefatos no sistema são:

Imagem 16 – Diagrama de componentes
![Diagrama de componentes](img/componentes.png)
Fonte: Criado pelos autores.

Diagrama simplificado de comunicação e hospedagem

- Navegador – Interface básica do sistema
  - Página Web – Documento renderizado pelo navegador que agrupa todos os conjuntos de arquivos HTML, CSS, JavaScript e imagens que efetiva as funcionalidades do sistema;
  - Local Storage – Um objeto JavaScript que utilizamos para rmazenar dados no navegador, os bancos de dados implementados nele ão baseados em JSON. São eles:
    - Anúncio - Seção de anúncios implementados;
    - Login – Os componentes do login são e-mail e senha o usuário. Isto serve para o usuário conseguir anunciar.
- Hospedagem – o ambiente na internet que possui o serviço de manter o site no ar, tal que as páginas são mantidas e acessadas pelo browser.

## 5.2. HOSPEDAGEM

O local de hospedagem do site do projeto “Tá na Mão” é o GitHub Pages. Tal que é acessado pela URL:

> - [https://tanamao.github.io](https://tanamao.github.io/)

A fonte de publicação padrão para sites de projeto no GitHub Pages é a raiz do branch gh-pages.
