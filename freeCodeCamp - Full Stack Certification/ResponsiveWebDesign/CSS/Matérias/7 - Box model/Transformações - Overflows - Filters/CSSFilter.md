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

![Resultado]()
