# O que é o CSS Box Model e como funciona?

O CSS Box Model é um conceito fundamental no desenvolvimento web. Define como os elementos HTML são estrututrados e posicionados. Se entenderes este modelo, poderás controlar o tamnaho, o espaçamento e a aparência dos elementos em teu site.

No modelo de caixa do CSS, todo o elemento é cercado por uma caixa, esta caixa consiste em quatro elementos, a área de conteúdo, o padding, a borda e a margin.

A área de conteúdo é a parte mais interna da caixa, é o espaçamento que contém o conteúdo real de um elemento como texto ou imagens.

---

## Padding

O padding é a área imediatamente após a área de conteúdo. É o espaço entre a área de conteúdo e a borda de um elemento. Com o padding podemos adicionar espaço ao redoa do conteúdo para melhorar a sua legibilidade. Podemos definir valores diferentes para o padding superior, direito, inferior e esquerdo, por esta ordem, usando a propriedade, padding: .

Vejamos um exemplo:

```css
padding: 15px 5px 2px 8px;
```

---

## Border

A border define a borda externa ou contorno de um elemento no modelo de caixa CSS. É o limite visual do elemento. Podemos personalizar o estilo da borda, largura, cor e outras propriedades usando a propriedade broder: .
Vejamos um exemplo:

```css
bordar: 5px solid blue;
```
Se omitirmos um valor, a propriedade padrão desse valor será usada. Isso é medium para a largura, none para o estilo e a color atual para a cor.

Podemos definir essas três propriedades diretamente na propriedade abreviada 'border' se quisermos que todos os lados sejam exatamente iguais. Mas se quisermos atribuir um estilos diferente para cada lado podemos atribuir usando as propriedades borber-width, border-style e border-color.
Vejamos como:

```css
border-width: 2px 4px 7px 12px;
border-style: dashed solid dashed solid;
border-color: blue red green black;
```

Podemos escrever até quatro valores para cada uma destas propriedades. Eles serão aplicados em uma sequência no sentido horário começando pelo topo. Se você escrever apenas um valor ele será aplicado a todos os lados.

---

## Margin

Finalmente a margin é o espaço de fora da borda de un elemento. Ela determina distância entre um elemento e outros elementos ao seu redor. Podemos definir valores diferentes de margin para todos os lados tal como fizemos com as outras propriedades do box model.

---

## Conclusão

Nas proximas matérias iremos aprender e falar mais sobre como tudo isto é tratado pelo navegador e como podemos personaliza-lo.

O modelo de caixa CSS é um conceito dunfamental para o Web Develoment.

Entender como esses componentes interagem e contribuem para as dimensões de um elemento é essencial para implementar bons Web Designs.
