# O que é a propriedade CSS Transform e como ela funciona?

A propriedade CSS transform é uma ferramenta poderosa que permite modificar a apresentação visual dos elementos na nossa página da web sem afetar o layout de outros elementos. Ela permite que possamos aplicar várias transformações a elementos como rotacionar, escalar, inclinar ou transladar(mover) os elementos no espaço em 2D ou 3D.

A propriedade transform funciona aplicando uma transformação matemática ao sistema de coordenadas de um elemento. Isso significa que você pode manipular a forma e a posição de um elemento enquanto mantém seu lugar original e o fluxo do documento intactos.

Vamos explorara algumas funções de transformação comuns. Aqui está um exemplo de um elemento box:

```html
<link rel="stylesheet" href="styles.css"/>

<div class="box"></div>
```

```css
body {
   border: 2px solid black; 
}

.box {
    width: 200px;
    height: 200px;
    background-color: red;
}
```
Resultado:
![Resultado do exemplo](redBox.png)

No nosso exemplo, definimos o body para que o mesmo tenha uma borda preta solida, para que possas ver o elemento .box aninhado dentro do elemento body.

A função trasnlate move um elemento da sua posição atual. Aqui está um exemplo atualizado usando a função translate:

```html
<link rel="stylesheet" href="styles.css"/>

<div class="box"></div>
```

```css

body {
    border: 2px solid black;
}

.box {
    width: 200px;
    height: 200px;
    background-color: red;
    transform: translate(50px, 100px);
}
```
Resultado:
![Resultado do exemplo](translatedBox.png)

Como vemos, esta regra CSS moverá o elemento com a class .box 50 pixels para a direita e 100 pixels para baixo a partir da sua posição original.
