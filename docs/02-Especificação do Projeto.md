# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

- Cleyde Fabiana 

 Idade: 39 anos 

Ocupação: Atua como diarista e manicure de maneira autônoma, com valores diversos a depender dos serviços contratados nas suas diárias. 

Motivações: Busca divulgar seus serviços com fim de conseguir trabalhos, assim como adquirir materiais para realizar suas atividades e revende produtos cosméticos ex: Avon, Natura, Jequiti, O boticário, Hinode. 

 - Jhonny Valter  

 Idade: 27 anos 

Ocupação: Motoboy freelancer, atua como entregador de maneira autônoma com valores referentes ao trajeto e tipo de objeto ou pessoas. 

Motivações: Comprar produtos de segunda mão para uso pessoal e em sua residência. 

Quebra de Página
 

- João Santana  

 Idade: 43 anos 

Ocupação: Proprietário de uma pequena padaria, vende além da linha de pães comuns, bolos, salgados e doces sob encomenda. 

Motivações: Busca expandir seu negócio para clientes nas adjacências, e potencializar a venda de produtos sob encomenda. 

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                        |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------                       |----------------------------------------|
|Cleyde Fabiana      | Inserir o anúncio dos seus serviços.                      | Divulgar o seu trabalho.             |
|Cleyde Fabiana      | Pesquisar anúncios de produtos.                           | Compra de itens com finalidade de realizar seus serviços.|
|Cleyde Fabiana      | Inserir a divulgação de produtos cosméticos.              | Para realizar a revenda de seus produtos.
|Jhonny Valter       | Procurar anúncios de equipamentos usados de menor preço.  | Adquirir acessórios de segunda mão com o melhor custo-benefício. 
|João Santana        | Anunciar e alavancar a venda de seus produtos.            | Expandir público alvo e aumentar seu lucro.   
|João Santana        | Sondar produtos de seus concorrentes.                     | Comparar e ajustar os preços dos seus produtos em relação ao mercado. 
|João Santana        | Buscar entregadores que residem na região do comércio.    | Para aumentar o alcance de entregas e dar comodidade com entregas à domicílio.



> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                                           | Prioridade |
|------|-----------------------------------------|----|
|RF-01 | O site na sua página inicial deve exibir alguns dos anúncios mais recentes e uma barra superior com links rápidos.               | ALTA  | 
|RF-02 | O site deve possuir uma página de login com usuário e senha                                                                      | Alta  |
|RF-03 | O site deve apresentar um link para criar e gerenciar os anúncios pós login.                                                     | Alta  |
|RF-04 | O site deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, endereço e dados de contato.    | Alta  |
|RF-05 | O site deve oferecer opções de filtro para os produtos e serviços prestados, bem como uma barra de busca por palavras-chave.     | Alta  |
|RF-06 | O site deve apresentar uma dinâmica que mostre detalhes dos anúncios hospedados.                                                 | Média |
|RF-07 | O site deve apresentar uma opção para avaliar os anúncios.                                                                       | Baixo |
|RF-08 | O site deve permitir favoritar os anúncios com fim de ranqueá-los e exibir em destaques na página inicial.                       | Baixo |
|RF-09 | O site deve permitir verificar os anúncios salvos como favoritos.                                                                | Baixo |
|RF-10 | O site deve exigir leitura e que os usuários estejam de acordo os termos de conduta e uso da plataforma antes de anunciar.       | Alta  |
|RF-11 | O site deve exibir uma mensagem para que o usuário aceite os termos de sua Política de Privacidade.                              | Alta  |
|RF-12 | A plataforma oferecerá um campo nos anúncios para texto alternativo (alt texts) onde serão descritas as imagens dos anúncios com detalhes. (Recurso de acessibilidade).                                                                                                                          | Alta  |
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve ser publicado em um ambiente acessível publicamente na Internet via GitHub. | Alta | 
|RNF-02| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.  |  Alta | 
|RNF-03| O site deve ter alto nível de contraste entre os elementos da tela tornando-o acessível para pessoas daltônicas. | Média |
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).  | Alta | 
|RNF-05| O site deve triar todo conteúdo dos anúncios antes de torná-los disponíveis aos usuários, com fim de manter as diretrizes da plataforma baseada no marco civil da internet garantindo segurança aos usuários.         | Alta | 
|RNF-06| A plataforma se compromete em não compartilhar históricos de pesquisa, localização em tempo real e dados sensíveis dos usuários.      | Alta | 
|RNF-07| O site deve possuir interface simplificada tornando-o acessível para pessoas com limitações de velocidade de acesso a internet. Visto que o público alvo está em comunidades periféricas.                  | Alta | 
|RNF-08| O site ficará online e disponível aos usuários 24 horas por dias os 7 dias da semana. Com manutenções programadas em horários com baixo número de usuários ativos.                   | Alta | 
|RNF-09| O site irá adotar cores que remetem sensações boas em pessoas com altismo.           | Média | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 24/04/2022|
|RE-02 | O aplicativo deve se restringir às tecnologias básicas da Web no Front-end (HTML, CSS, Javascript).       |
|RE-03 | A equipe não pode subcontratar o desenvolvimento do trabalho. 

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
