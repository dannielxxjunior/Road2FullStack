# Revisão de Posicionamento CSS

## Trabalhando com Floats

- **Definição**: Floats são usados para remover um elemento do seu fluxo normal na página e posicioná-lo à esquerda ou à direita do seu container. Quando isso acontece, o texto irá envolver esse conteúdo flutuante.

EX:
```css
float: left;
float: right;
```

- **Limpeza de Floats**: A propriedade `clear` é utilizada para controlar o comportamento de elementos em relação a elementos flutuantes(`float`). Quando um elemento recebe `clear: left`, `clear: right` ou `clear: both`, o mesmo é movido para baixo dos elementos flutuantes especificados, evitando que fique ao lado(envolva) deles. Em layouts que utilizam vários elementos com `float`, o elemento pai pode deixar de reconhecer a altura dos seus filhos flutuantes, causando o chamado "colapso do container". Para resolver esse problema foi criada a técnica do `clearfix`, que adiciona um elemento ou psudoelemento após os elementos flutuantes com a propriedade `clear`, forçando o container a expandir-se corretamente e envolver todo o seu conteúdo.

Vejamos um exemplo de uso da técnica `clearfix`:

```html
<link rel="stylesheet" href="styles.css"/>

<div class="clearfix">
  <div class="box left">Left</div>
  <div class="box right">Right</div>
</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  color: white;
  text-align: center;
  line-height: 60px;
}

.left {
  float: left;
  background: teal;
}

.right {
  float: right;
  background: purple;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```
![Resultado](clearFix.png)

Após o `clearfix` aplicado ao container pai, qualquer elemento que venha em seguida seguirá o fluxo normal do documento.

## Posicionamento Estático, Relativo e Absoluto

- **Posicionamento Estático**: Este é o fluxo normal do documento. Os elementos são posicionados de cima para baixo e da esquerda para a direita um após o outro.
<br>
- **Posicionamento Relativo**: Este é o posicionamento que nos permite usar as propriedades: `top`, `right`, `bottom` e `left` para posicionarmos os elementos dentro do fluxo normal do documento, pelo que o seu espaço reservado é mantido dentro do container. Podemos ainda usar o posicionamento relativo para fazer com que elementos se sobreponham a outros elementos na página.
<br>
- **Posicionamento Absoluto**: O posicionamento absoluto permite-nos retirar um elemento do fluxo normal do documento, pelo que o seu espaço reservado é anulado, fazendo com que ele se comporte de forma independente dos outros elementos.

## Posicionamento Fixed e Sticky

- **Posicionamento Fixed**: Quando um elemento recebo um posicionamento `fixed`, ele é removido do fluxo normal do documento e colocado em relação à viewport, o que significa que permanece na mesma posição mesmo quando o usuário rola a página. Isto é frequentemente usado para elementos como: **Headers** ou **NavBars**, que precisam permanecer visíveis o tempo todo.
<br>
- **Posicionamento Sticky**: Este tipo de posicionamento age como um híbrido entre o posicionamento relativo e o posicionamento fixed. Inicialmente o elemento se comporta como se estivesse posicionado relativamente, permanecendo dentro do fluxo do documento. No entanto uma vez que o usuário rola o elemento além de um determinado ponto, ele "gruda" na viewport(geralmente no topo) e se comporta como se estivesse fixo. isso é otimo para criar elementos como barras de navegação fixas, que só se tornam fixas quando o usuário rola até uma determinada posição.

## A Propriedade **z-index**

A propriedade **z-index** no CSS é usada para controlar a ordem de epmilhamento vertical de elementos posicionados que se sobrepõem na página.
