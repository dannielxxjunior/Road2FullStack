# O que é a propriedade CSS `filter`?

A propriedade CSS `filter` é usada para aplicar efeitos visuais a um elemento, como desfoque, brilho, contraste, entre outros. Ela permite que você modifique a aparência de um elemento sem alterar seu conteúdo. A sintaxe básica é:

```css
seletor {
  filter: function(amount);
}
```

Onde `function` é o tipo de filtro que você deseja aplicar (como `blur`, `brightness`, `contrast`, etc.) e `amount` é o valor que define a intensidade do efeito.

## Exemplos de uso

1. **Desfoque (Blur)**

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: blur(2px);
}
```

Neste exemplo, a imagem do gato será desfocada com um raio de 2 pixels.
O efeito `blur` pode ser útil paracriar um fundo desfocado ou para destacar um elemento em primeiro plano.

![Resultado](blurCat.png)

2. **Brilho (Brightness)**

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: brightness(150%);
}
```

Neste exemplo, a imagem do gato terá seu brilho aumentado em 150%, tornando-a mais clara. O valor de `brightness` pode ser ajustado para aumentar ou diminuir o brilho da imagem.

![Resultado](brightnessCat.png)

3. **Combinações de filtros**

Um dos aspectos mais poderosos da propriedade `filter` é a capacidade de combinar múltiplos filtros em um único elemento. Você pode aplicar vários efeitos ao mesmo tempo, separando-os por espaços.

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: contrast(150%) brightness(110%) sepia(30%);
}
```
Neste exemplo, a imagem do gato terá seu `contraste` aumentado em 150%, `brilho` aumentado em 110% e um efeito `sépia` de 30%. A combinação de filtros pode criar efeitos visuais únicos e interessantes.

![Resultado](combinedFiltersCat.png)

## Conclusão

Embora tenhamos abordado estes poucos exemplos, a propriedade `filter` oferece muitas outras opções de filtros, como `grayscale`, `hue-rotate`, `invert`, entre outros. Ela é uma ferramenta poderosa para estilizar elementos de forma criativa e pode ser usada para melhorar a estética de um site ou destacar certos elementos. Experimenta diferentes combinações de filtros para veres o que funciona melhor no teu design!
