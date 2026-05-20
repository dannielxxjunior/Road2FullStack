# O modelo de cores hsl

Uma das formas mais versáteis de trabalhar com cor é usando o modelo de cor hsl. Significa Hue(matiz), Saturation e Lightness. Três componentes principais que definem uma cor.

O modelo de cores hsl representam cores de uma forma que mais alinhada com a forma como os humanos percebem a cor. Nesta lição, exploraremos o que é o modelo de cores hsl e como a função hsl() é usada no CSS.

O Hue(matiz) é o tipo de cor, representado como um ângulo no círculo cromático, que varia de 0 a 360 graus. Onde 0 graus representa a cor vermelho, 120 graus representam a cor verde e 240 graus o azul, os ajustes do Hue precorrem diferentes cores do espectro de luz.

Saturação refere-se à intensidade ou pureza da cor. É medido como uma porcentagem de 0%(uma cor completamente dessarturada ou cinza) até 100%(a forma mais vibrante dessa cor).

Já o Lightness determina o quão clara ou escura é a cor, novamente medida como uma porcentagem. um valor de 0% produzirá preto, 50% o tom normal da matiz, e 100% resultará em branco.

Vejamos agora sua sintaxe básica:

```css
elemento {
    color: hsl(hue, saturation, lightness);
}
```

Uma das grandes vantagens de trabalhar com o modelo de cores hsl é o facto de ser bastante intuitivo, Facilita o ajuste da vivacidade ou luminosidade de determinada cor ao modificarmos os valores de saturação e luminosidade sem precisar alterar a cor base(hue).

Por exemplo se quisermos criar diferentes tons ou matizes da mesma cor, podemos simplesmente ajustar o valor de lightness.
Vejamos com um exemplo:

```html
<link rel="stylesheet" href="styles.css"/>
<div class="light">This is a light blue div.</div>
<div class="dark">This is a dark blue div.</div>
```
```css
div.light {
    background-color: hsl(240, 100%, 80%);
}

div.dark {
    background-color: hsl(240, 100%, 20%);
    color: hsl(0, 0%, 100%);
}
```

Aqui, ambos os elementos div estão usando o mesmo matiz (240 graus, que é azul), mas um tem uma luminosidade de 80% (um tom mais claro de azul) e o outro tem uma luminosidade de 20% (um tom mais escuro de azul).

Assim como o modelo rgb o modelo hsl também inlcui um quarto parâmetro para transparência, que é o mesmo valor alpha representado em hsla().

Porque o hsl separe a matiz da saturação e da luminosidade, podemos manter um tema de cor consistente enquanto ajustamos a luminosidade para sombras ou realces. Este nível de flexibilidade faz do hsl um favorito entre designers e developers.

Para além disso o hsl torna os valores das cores bastante mais legiveis do que hexadecimal ou rgb. Podemos ver mais claramente a intenção da cor por detrás do código e ajustar conforme o necessario.

