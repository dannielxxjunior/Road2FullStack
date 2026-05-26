# Algumas Propriedades do Flexbox e Como Funcionam

Propriedades Flex são propriedades CSS que podemos aplicar a containers flex para determinarmos a distribuição dos elementos filhos.

Cobriremos algumas das propriedades mais comummente usadas, como: `felx-wrap`, `justify-content` e `align-items`.

## Flex-wrap

A propriedade `flex-wrap` é usada para controlar se os itens flexíveis devem ser dispostos em uma única linha ou podem ser quebrados em várias linhas de forma a se adaptarem ao espaço disponível.

`flex-wrap` pode assumir  três valores:

- `nowrap`(valor padrão): Os itens flexíveis são dispostos em uma única linha, mesmo que isso cause transbordamento do container.
- `wrap`: Os itens flexíveis podem ser quebrados em várias linhas, se necessário, para se ajustarem ao espaço disponível.
- `wrap-reverse`: Os itens flexíveis podem ser quebrados em várias linhas, mas a ordem das linhas é invertida, ou seja, a última linha aparece primeiro.

### Exemplo de uso do `flex-wrap`:

No exemplo abaixo, temos três elementos &lt;div&gt;.
Vamos focarnos na width.
O container &lt;main&gt; tem uma width de 200px, enquanto seus três elementos filhos combinados têm  uma width de 240px (80px cada).

```html
<link rel="stylesheet" href="style.css">

<main>
  <div class="first-div"></div>
  <div class="second-div"></div>
  <div class="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  border 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Neste caso, os três elementos filhos não cabem em uma única linha dentro do container &lt;main&gt; devido à largura limitada de 200px, então por padrão os mesmos são reduzidos para caberem, o que pode resultar em um layout desorganizado e difícil de ler.

Resultando em:

![Exemplo de flex-wrap](noWrap.png)

Podemos resolver isso facilmente usando a quebra de linha caso o conteúdo exceda o espaço disponível, usando a propriedade `flex-wrap: wrap;` no container &lt;main&gt;.

```css
main {
  width: 200px;
  display: flex;
  border 2px solid red;
  flex-wrap: wrap; /* Permite que os itens sejam quebrados em várias linhas */
}
```

Resultando em:

![Exemplo de flex-wrap com wrap](wrap.png)

Como vemos, os elementos &lt;div&gt; são reorganizados em linhas quando excederam a largura do seu container pai. Tal como com a direção do nosso eixo principal, poderiamos também definir que os itens irão quebrar na orderm reversa usando `flex-wrap: wrap-reverse;`.

### Flex-flow

A propriedade `flex-flow` é uma propriedade abreviada que combina as propriedades `flex-direction` e `flex-wrap` em uma única declaração. Ela é usada para definir a direção dos itens flexíveis e se eles devem ser dispostos em uma única linha ou quebrados em várias linhas, tal como vimos anteriormente.

Seguindo o exemplo anterior, podemos agora fazer uso da propriedade `flex-flow` para definir tanto a direção dos itens quanto a quebra de linha em uma única declaração, onde teremos uma direção de coluna e uma quebra em reverso:

```css
main {
  width: 200px;
  display: flex;
  border 2px solid red;
  flex-flow: column wrap-reverse; /* Define a direção dos itens e a quebra de linha */
}
```

Resultando em:

![Exemplo de flex-flow](wrapReverse.png)

## Justify-content

A propriedade `justify-content` é usada para alinhar os itens flexíveis ao longo do eixo principal do container flexível. O eixo principal que é determinado pela propriedade `flex-direction`.

`justify-content` pode assumir os seguintes valores:

- `flex-start` (valor padrão): Os itens flexíveis são alinhados ao início do container.
- `flex-end`: Os itens flexíveis são alinhados ao final do container.
- `center`: Os itens flexíveis são centralizados dentro do container.
- `space-between`: Os itens flexíveis são distribuídos com espaço igual entre eles, mas sem espaço no início ou no final do container.
- `space-around`: Os itens flexíveis são distribuídos com espaço igual ao redor deles, incluindo o início e o final do container.
- `space-evenly`: Os itens flexíveis são distribuídos com espaço igual entre eles, incluindo o início e o final do container.

### Exemplo de uso do `justify-content`:

Seguindo o mesmo exemplo anterior, irei demonstrar apenas o valor aplicando as propriedades e CSS e seus resultados.

#### justify-content: space-between;

```css
main {
  display: flex;
  justify-content: space-between; /* Distribui os itens com espaço igual entre eles */
  border: 2px solid red;
}
```

Isto resultará em:

![Exemplo de justify-content space-between](spaceBetween.png)
