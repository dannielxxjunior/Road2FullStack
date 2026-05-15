# Revisão Sobre Cores em CSS

## Teoria das Cores

- Definição de Teoria das Cores: Este é o estudo de como as cores interagem entre si e como elas afetam nossa percepção. Abrange relacionamentos de cores, harmonia de cores e o impacto psicológico da cor.

- Cores Primárias: Essas cores que são amarelo, azul e vermelho, são os tons fundamentais dos quais todas as outras cores são derivadas.

- Cores Secundárias: Essas cores resultam da mistura de quantidades iguais de cores primárias. Verde, laranja e roxo são exemplos de cores secundárias.

- Cores Terciárias: Essas cores resultam da combinação de uma cor primaria com uma cor secundária vizinha. Amarelo-verde, Azul-verde e Azul-violeta são exemplos de cores terciárias.

- Cores Quentes: Essas cores que incluem vermelhos laranjas e amarelos, evocam sensaçoes de conforto, calor e aconchego.

- Cores Frias: Essas cores que incluem azuis, verdes e roxos, evocam sentimentos de calma, serenidades e profissionalismo.

- Roda de Cores: A Roda de Cores é um diagrama circular que mostra como as cores se relacionam entre si. É uma ferramenta essencial para designers porque os ajuda a selecionar combinações de cores.

- Esquemas de Cores Análogas: Esses esquemas de cores criam experiencias coesas e tranquilizadoras. Eles possuem cores análogas, que são adjacentes umas às outras no círculo cromático.

- Esquema de Cores Complementares: Esses esquemas de cores criam alto contraste e impacto visual. Suas cores estão localizadas em extremos opostos do círculo cromático, em relação umas às outras.

- Esquema de Cores Monocromáatico: Para este esquema de cores, todas as cores são derivadas da mesma cor de base ajustando seu brilho, escuridão e saturação. Isso evoca uma sensação de unidade e harmonia ao mesmo tempo que cria contraste.

- Esquema de cores Triadico: Este esquema de cores contêm cores vibrantes. Feito de cores que estão aproximadamente equidistantes umas das outras. Se eles estiverem conectados, formam um triângulo equilátero na roda das cores.

## Diferentes formas de trabalhar com cores em CSS

- Cores Nomeadas: Essas cores são nomes de cores predefinidos reconhecidos pelos navegadores. Exemplos incluem blue, darkred, lightgreen.

* * * 

### Função rgb()

- RGB significa red green e blue - as cores primárias da luz. Essas três cores são combinadas em diferentes intensidades para criar uma ampla variedade de cores. A função rgb() permite que defina-mos cores usando o modelo de cores RGB.

Exemplo:
    
```html
<link rel="stylesheet" href="styles.css">
<p>RGB COLOR</P>
```

```css
p {
    color: rgb(255, 0, 0);
}
```
Resultado do exemplo:

![Resultado do Exemplo](/imagens/Exemplo1.png)

* * * 

### Função rgba()

- Esta função adiciona um quarto valor, alpha, que controla a transparência da cor. Se não for fornecido, o valor alpha padrão é 1.

Exemplo:

```html
<link rel="stylesheet" href="styles.css">
<div>RGBA BAckground</div>
```

```css
div {
    background-color: rgba(0, 0, 255, 0.5);
}
```
Resultado do Exemplo:

![Resultado do Exemplo](.imagens/exemplo2.png)

* * * 

### Função hsl()

- HSL significa Hue, Saturation e Lightness - três componentes principais que definem uma cor.

Exemplo:

```html
<link rel="stylesheet" href="styles.css"
<p>HSL Color</p>
```

```css
p {
    color: hsl(120, 100%, 50%);
}
```
Resultado do Exemplo:

![Resultado do exemplo:](./imagens/exemplohsl.png)

* * * 

### Função hsla()

- Esta função adiciona um quarto valor, alpha, que controla a opacidade da cor.

Exemplo:

```html
<link rel"stylesheet" href="styles.css">
<div>HSLA background</div>
```

```css
div {
    background-color: hsla(0, 100%, 50%, 0.5);
}
```
Resultado do Exemplo:

![Resultado do Exemplo:](imagens/exemplohsla.png)

* * * 

### Hexadecimal

- Um código hexadecimal é uma string de seis caracteres usada para representear cores no modelo de cores RGB. O "hex" refere-se ao sistema de numeração base 16, que usa os digitos de 0 a 9 e letras de A a F.

Exemplo:

```html
<link rel="stylesheet" href="styles.css">
<h1 class="hex-text">Hex Text</h1>
<p class="hex-bg">Hex Background</p>
```

```css
h1 {
    color: #FF5733;
}

p {
    background-color: #4CAF50;
}
```
Resultado do Exemplo:

![Resultado do exemplo](imagens/exemplohex.png)

* * * 

## A Propriedade Box-Shadow

- Definição: A propriedade box-shadow aplica uma ou mais sombras ao redor de um elemento.

- Valores de Offset: Devemos especificar valores horizontais(offset-x) e verticais(offset-y). Valores positivos de offset-x movem a sombra para a direita, enquanto valores negativos a movem para a esquerda. Valores postivos de offset-y movem a sombra para baixo, enquanto que valores negativos movem a sombra para cima. Se o valor for 0 não é necessario incluir uma unidade (px, %, rm).

- Raio de desfoque: Este valor opcional controla o quão borrada a sombra aparece. Se não for incluído, o padrão é 0, que cria bordas nítidas. Quanto maior o valor, mais suave é a sombra.

- Spread Radius: Este valor opcional controla o quanto a sombra se expande ou encolhe. Se não for incluído, o padrão é 0.

- Cor da Sombra: Podemos especificar a cor usando, cores nomeadas, valores hexadecimais, funções rgb(), rgba(), hsl() ou hsla().

- Palavra-chave inset: Adicionar a palavra-chave inset coloca a sombra dentrodo elemento em vez de fora dele (otimo para dar a sensação de um botão a ser pressionado por exemplo).

- Aplicando múltiplas sombras de caixa: Podemos aplicar múltiplas sombras separando-as por uma vírgulas, as sombras são empilhadas da frente para trás.

### Sintaxe:

- box-shadow: offset-x offset-y blur-radius spread-raius color;

Exemplo:

```html
<link rel="stylesheet" href="styles.css">
<div class="shadow-box">Shadow Color Example</div>
```

```css
.shadow-box {
    width: 200px;
    padding: 20px;
    background-color: lightblue;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```
Resultado do Exemplo:

![Resultado do exemplo:](imagens/exemploshadow.png)

* * * 

## Gradientes Lineares e Radiais

### Gradientes Lineares:

- Esses gradientes criam uma mistura gradual entre cores ao longo de uma linha reta. Podemos controlar a direção dessa linha usando palavras-chave como: to top, to right, to bottom ou ângulos como: 45deg, 90deg. Podemos usar qualquer cor CSS válida e quantas paradas de cor desejarmos.

Exemplo:

```html
<link rel="stylesheet" href="styles.css">
<div class="linear-gradient">Linear Gradient</div>
```

```css
.linear-gradient {
    background: linear-gradient(45deg, red, #33FF11, rgba(100, 100, 255, 0.5));
}
```
Resultado do Exemplo:

![Resultado do exemplo:](imagens/exemploGradientLinear.png)

* * * 

### Gradientes Radiais:

- Estes são gradientes circulares ou elipticos que erradiam de um ponto central.

Exemplo:

```html
<link rel="stylesheet" href="styles.css">
<div class="radial-gradient">Gradiente Radial</div>
```

```css
.radial-gradient {
    background: radial-gradient(circle, red, blue);
    height: 40vh;
}
```
Resultado do Exemplo:

![Resultado do exemplo](imagens/exemploGradientRadial.png)

* * * 

