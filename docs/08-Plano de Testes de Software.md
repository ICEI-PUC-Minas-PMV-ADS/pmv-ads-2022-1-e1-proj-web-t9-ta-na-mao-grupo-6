# 8. PLANO DE TESTES DE SOFTWARE


## RF-01 e RF-05

#### Cenário 01 – Validação de login de anunciante.

##### Caso de Teste 01

Passos:
1. Criar usuário na base de dados (localstorage), através da página de
Cadastro de anunciante;
2. Concordar com termos de uso e privacidade;
3. Validar login do usuário com credenciais criadas.
Resultados esperados:
- Usuário criado com sucesso;
- Login efetuado com sucesso.


#### Cenário 2 - Edição dos dados do anunciante.

##### Caso de teste 01

Passos:
1. Fazer login no site;
2. Editar os dados pessoais;
3. Validar os dados editados.
Resultados esperados:
- Dados alterados com sucesso;
- Exibir os dados alterados no lugar dos antigos.

## RF-02, RF-03, RF-04 e RF-06

#### Cenário 01 – Validação da página de criação anúncios e filtros (produtos e serviços).

##### Caso de teste 01

Passos:
1. Acessar página de criação de anúncios e criar anúncio de produto na
base de dados (local storage);
2. Validar a criação do anúncio acessando o filtro da página de anúncios de
produtos;
3. Acessar página de criação de anúncios e criar anúncio de serviço na base
de dados (local storage);
4. Validar a criação do anúncio acessando o filtro da página de anúncios de
serviços;
Resultados esperados:
- Anúncio de produto criado e exibido com sucesso na página de produtos;
- Anúncio de serviço criado e exibido com sucesso na página de serviços;

#### Cenário 02 - Validação da barra de busca.

##### Caso de teste 01

Passos:
1. Utilizar a massa de dados (anúncios) criados no cenário anterior ou criar
novo anúncio para teste atual seguindo o fluxo do cenário 01;
2. Utilizar a barra de busca com palavra chave do anúncio a ser procurado;
3. Validar resultado exibido.
Resultados esperados:
- Anúncio procurado exibido com sucesso como resultado, abaixo da barra
de busca.

#### Cenário 03 - Validação de paginação entre perfil e meus anúncios.

##### Caso de Teste 01

Passos:
1. Fazer login no perfil do site.
2. Alternar entre as páginas de perfil e meus anúncios.
3. Validar resultados exibidos.
Resultado esperado:
- Funcionalidade da paginação em perfeito estado de funcionamento.
