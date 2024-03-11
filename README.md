# project-html


# Projeto HTML TechNation| Unecont


Projeto desenvolvido como parte do processo seletivo de desenvolvedor frontend junior. Foi utilizado HTML, CSS, Javascript e as bibliotecas bootstrap e chart.js

## Installation and usage

Para visualização do projeto, recomendo o uso do visual studio code com a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


```bash
git clone git@github.com:vhprestes/project-html.git
cd project-html
code .
```
Então, instale e execute a extensão.


## Requisitos

Para facilitar a operação do software pelos responsáveis do financeiro, a página deve conter as seguintes informações e funcionalidades:

- [x] Dashboard com Indicadores: indicadores com opções de filtro por mês, trimestre e ano. As seguintes informações devem ser mostradas no dashboard:

```bash
  ○ Valor total das notas emitidas;
  ○ Valor total das notas emitidas, mas sem ter a cobrança feita;
  ○ Valor total das notas vencidas - Inadimplência;
  ○ Valor total das notas a vencer;
  ○ Valor total das notas pagas;
  ○ Gráfico de evolução da inadimplência mês a mês;
  ○ Gráfico de evolução da receita recebida mês a mês;
```


  - [x] Lista de notas emitidas: Parte da tela onde podemos ver e filtrar as notas fiscais presentes no sistema e aplicar filtros para encontrar as notas desejadas.

```bash

  - Informações necessárias:
      Nome pagador;
      Número de identificação da nota;
      Data de emissão da nota;
      Data cobrança;
      Data pagamento;
      Valor da nota;
      Documento da nota fiscal;
      Documento boleto bancário;
  - Status da nota:
      Emitida;
      Cobrança realizada;
      Pagamento em atraso;
      Pagamento realizado;
```

○ Filtros necessários:

- [x] Filtrar por mês de emissão da nota;
- [x] Filtrar pelo mês que a cobrança foi realizada:
- [x] Filtrar pelo mês que o pagamento foi realizado:
- [x] Filtrar pelo status da nota;
