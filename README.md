# Partiu Front

**Bem vindo ao partiu front! Este projeto faz parte do projeto do grupo 7, que tem o intuito de apresentar uma ideia de utilização das APIs da Amadeus para fornecer uma experiência rica e satisfatória para nômades e digitais.**


## Configurações do projeto

Segue lista de variáveis utilizadas:
 > **PORT**: No arquivo package.json foi definida por padrão a porta 3001


## Instruções para Execução do Projeto

Para realizar a execução deste projeto de forma local, os seguintes passos deve ser seguido:

```
Instalação do node v.14.21.1 
Veja mais: https://nodejs.org/en/download
```
```
Instalação do yarn
Veja mais: https://www.npmjs.com/package/yarn
```
```
yarn install
```
```
yarn run dev
```

## Rotas utilizadas do back

Visto que este projeto se trata de um produto mínimo viável, optamos por integrar somente as rotas que realmente agregam valor diferencial ao projeto e nos permitem demostrar nossa integração com os serviços da Amadeus. Segue a lista de rotas utilizadas do back-end:

> **Listagem de Recomendações** GET - /recommendation/flight
> Está rota acessa nosso back-end que por sua vez utiliza dos seguintes serviços da Amadeus para compor o retorno deste payload:
> ``` Amadeus Shopping Flight Destinations ```
> ``` Amadeus Reference Data Locations ```
> ``` Amadeus Safety Safety Rated Locations ```
> ``` Amadeus Location Analytics Category Rated Areas ```
<br>
> **Voos mais baratos** POST - /shopping/summary-flights
> Está rota acessa nosso back-end que por sua vez busca as ofertas de voos para o destino origem do nomade na data mais barata recomendada pela api de recomendações da AMADEUS:
> ``` Amadeus Shopping Flight Offers Search ```

# Fluxo de navegação

Segue abaixo o fluxo de navegação pensado para o Nomade poder ter acesso a recomendações de destinos baseado em suas preferencias e dos demais nomades, bem como conseguir adquirir de forma inteligente o aéreo para este destino com as melhores datas e preços. 

## Home

Na tela inicial o nomade inicialmente terá somente a opção de entrar de forma gratuita na ferramenta, porem, no futuro haverá diversas opções prévias de destinos e promoções mais buscadas e recomendadas pelos nomeades da rede.

## Login
Na tela de login o nomade poderá criar seu acesso de forma gratuita e simples visto que toda sua experiência será personalizada baseado em suas preferencias após este passo.

## Personalização
Na tela de personalização iremos captar todas as preferencias necessárias do nomade a fim de conseguirmos tornar sua experiência relevante, considerando em nossas buscas e recomendações aquilo que realmente importa para ele. As personalizações podem ser descritas em 3 grupos, sendo eles:
> Segurança
> Comodidades / Atrações
> Voluntariado

## Recomendações
Na tela de recomendações são apresentada a lista de todas as opções de destinos ordenadas pela relevância considerando as preferencias do nomade, bem como informações relevantes do destino e a melhor data para viajar considerando o preço.

## Detalhes do destino - Opções de Voos 
Na tela Detalhes do destino é apresentado no detalhe todas as informações que utilizamos para dizer que um destino é relevante para o nomade, contendo dados detalhados das seguintes categorias:
-  Segurança
-  Documentos necessários
-  Restrições de Saúde
-  Comodidades / Atrações
-  Voluntariado
-  Avaliações de outros nomades

Nesta mesma tela o nomade tem a opção de ver as melhores opções de preço para a data e destino e podendo assim realizar a compra do mesmo diretamente em nosso site no fluxo convencional de booking. Para esta proposta de solução, implementamos somente a busca de ofertas, logo não implementamos o fluxo de booking (efetivação de compra) visto que entendemos que este é um fuxo padrão e que não atrapalha demonstrarmos a proposta da solução.
