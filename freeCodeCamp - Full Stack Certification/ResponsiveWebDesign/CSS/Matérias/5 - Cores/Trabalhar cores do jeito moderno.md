# Trabalhar com cores de forma moderna e dinamica em CSS

O css moderno ganhou várias funções e truques muito interessantes para trabalhar com cor de forma mais inteligente dinamica e reutilizável.

A propiredade contrast-color() ainda é experimental, mas faz parte de uma nova geração de funcionalidades muito poderosas.

Iremos ver de seguida algumas das mais úteis para um Web Developer moderno:

---

## 1. color-mix() - misturar cores

- Permite combinar duas cores diretamente em css.

```css
background-color: color-mix(in srgb, red 50%, blue 50%);
```
Resultado: a propriedade mistura os dois valores fornecidos, no caso: Vermelho + Azul = Roxo.

Também podes fazer:

```css
color: color-mix(in srgb, white 80%, black);
```

Isto cria tons automaticamente sem precisares calcular hex manualmente.

Muito útil para:

- Hover states
- Dark mode
- Gerar tons de paletas
- Sistemas de Design

---

## 2. contrast-color() - contraste automático

A propriedade contrast-color escolhe automaticamente uma cor legível e contrastante baseada no valor atribuido.

```css
color: contrast-color(yellow);
```

O exemplo a cima fará o browser procurar uma opção de alto contraste para a cor com a qual alimentamos a regra(propriedade), no caso, yellow.

O browser tenta escolher:

- white
    ou
- black

Dependendo do que melhor contrastar com a nossa cor.
Isto torna esta regra css excelente para:

- Badges
- Botões dinâmicos
- Temas automáticos

---

## 3. currentColor

Uma das propriedades mais úteis e mesmo assim pouco falada e ensinada em cursos de css para iniciantes, apesar de que ajuda e facilita imenso o trabalho quando o assunto são cores.

currentColor usa automáticamente o valor atual da proprieadade 'color'.

```css
button {
    color: blue;
    border: 2px solid currentColor;
}
```

O que acontece no exemplo a cima é que definimos a cor da border para currentColor, significa que a mesma terá então a cor blue, tal como definimos para color.
A grande vantagem é que basta mudarmos o valor da propriedade color, e tudo o que estiver definido com currentColor irá mudar também, facil assim.

Resultado:

- Texto azul
- Border azul

Se mudarmos o valor de 'color', currentColor muda junto.

Muito usado em:

- SVG's
- Ícones
- Borders
- Shadows

---

## 4. Variáveis CSS (custom properties)

Variáveis em CSS são a base de muitos designs modernos, facilitam e tornam o nosso trabalho mais fluído, organizado e preciso.
Vejamos um exemplo de uso de uma variável para trabalhar com cor:

```css
/*Here we set the variable value and name*/
:root {
    --primary-color: #3498db;
}

/*Here we apply it to our button element*/
button {
    background-color: var(--primary-color);
}
```

Isto permite-nos fazer a alteração de um tema inteiro alterando apenas o valor da variável no seletor ':root'.

---

## 5. hsl() - melhor controle visual da cor

Muitos desenvolvedores web ficam apenas pelo uso do formato hexadecimal quando o assunto são cores, e não existe mal algum com isso, muitos fullStack dev's principalmente não gostam de focar tanto em design ou front-end. Mas aprimorar seus skills não fará mal algum com certeza. 
Entra o hsl, mais intuitivo que o hex, pode ser mais indicado para ti, basta experimentares, talvez prefiras usar hsl ao hex.

```css
color: hsl(200, 80%, 50%);
```

Estrutura:

- Hue - Cor
- Saturation - Saturação
- Lightness - Luminosidade

hsl é excelente para criarmo paletas de cor.
Vejamos um exemplo disso mesmo:

```css
hsl(200, 80%, 30%);
hsl(200, 80%, 50%);
hsl(200, 80%, 70%);
```

Temos no exemplo a cima, a mesma cor, com variados tons.

---

## 6. oklch() - o futuro das cores em CSS

CSS moderno introduziu espaços de cor mais avançados, no caso do oklch(), para além de mais avançado, é também mais realista, pois trabalha com o espectro de cores do olho humano, são as cores da forma que nos Humanos as percebemos, aplicadas aos nossos ecrã e ambientes digitais.
O que nos premite criar cores mais realistas.

```css
color: oklch((70% 0.15 250);
```

Vantagens:

- Gradientes mais bonitos
- Brilho mais consistente
- Melhores paletas de cor no geral

Grandes frameworks modernos estão a iniciar o uso desta propriedade para colorir seus ambientes.

---

## 7. Transparencia com /

Provavelmente foi-te ensinado que certas propriedades possuem um valor proprio para trabalharmos com transparencia, que seria em certos casos, o valor: a, como em rgba() ou hsla().
Pois bem, existe uma forma de tornar tudo isso mais simples, supondo que estamos a fazer uso de cores no formato rgb e queremos adicionar transparencia, a mesma pode ser adicionada usando uma simples /.

Vejamos como:

```css
background: rgb(255 0 0 / 50%);
```

Mais simples e limpo que usar rgba().

---


