# Revisão de Acessibilidade para Web em CSS

## Ferramentas de Contraste de Cor

- **WebAIM's Color Contrast Checker**: A ferramenta online simples e fácil de usar que nos permite inserir cores de primeiro e segundo plano de nossos designs para vermos instantaneamente se elas atendem aos padrões do Web Content Accessibility Guidelines (WCAG).

- **TPGi Colour Contrast Analyzer**: Esta é uma ferramenta gratuita de verificação de contraste que nos permite checar se nossos sistes e aplicativos atendem aos padrões das Diretrizes de Acessibilidade para Conteúdo Web(WCAG). Esta ferramenta inclui ainda recursos de daltonismo que nos permite simular varias condições de daltonismo para que nos seja possivel verificar como será vista nossa página web por alguém que sofre de determinada condição.


## Árvore de Acessibilidade

A árvore de acessibilidade é uma estrutura usada por tecnologias assistivas, como leitores de tela, para interpretar e interaagir com o conteúdo em uma página web.

## A Função **max()**

A função max() retorna o maior de um conjunto de valores separados por vírgula.
Vejamos um exemplo abaixo:

```html
<head>
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>
  <img src="https://gatoImage.upYours"/>
</body>
```

```css
img {
  width: max(250px, 25vw);
}
```

Neste exemplo a largura da imagem será de 250px se a largura da viewport for menor que 1000 pixels. Se a largura da viewport for maior que os 1000 pixels a largura de nossa imagem será de 25vw(25% da viewport).

## A Função **min()**

A função `min()` faz exatamnete o mesmo de uma função max() mas buscando sempre o menor entre os valores por nós fornecidos.

## Melhores Práticas com CSS e Acessibilidade

- **display: none;**: Fazer uso da propriedade: `display: none;` ou `visibility: hidden;` significa que leitores de tela e outras tecnologias assistivas não poderão acessar este conteúdo pois ele não está incluido na árvore de acessibilidade. 

É por isso importante usarmos esses métodos quando quisermos que nenhum de nossos usuários tenha acesso ao elemento, quando o quisermos completamente removido.

- **Classe CSS .sr-only**: Já esta `sr-only`(screen readers-only) é a técnica comum usada para escondermos conteúdo mas mantendo o mesmo visualmente acessível para leitores de ecrã e outras técnologias de acessibilidade.

É muito útil quando queres fornecer contexto adicional a utilizadores com deficiência visual sem alterar o aspeto visual da página.

Vejamos um exemplo clássico de uso desta class:

```html
<button>
   🔍
  <span class="sr-only">Pesquisar</span>
</button>
```
O utilizador vê apenas o ícone da lupa, mas um leitor de ecrã anuncia "Pesquisar".

Esta é a implementação comum da class.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

  - **Casos de Uso Frequentes** :
    - Texto descritivo para ícones.
    - Rotúlos de formulários visualmente ocultos
    - Cabeçalhos que ajudam a navegar uma página complexa
    - Informação adicional para leitores de tela
<br>
- **scroll-behavior: smooth;**: Esta propriedade e seu valor habilitam um comportamento de rolagem suave.
Pode ser aplicada usando um seletor universal para que seu efeito atinja a página inteira e qualquer rolagem gerada dentro da mesma.
<br>
- **Recurso prefers-reduced-motion**: Este é um recurso de mídia que pode ser usado para detetar a preferência de animação do usuário.

## Ocultando Conteúdo com Atributos HTML

- **Atributo aria-hidden**: Usado para ocultar um elemento de pessoas que utilizam tecnologia assistiva como leitores de tela. Pode por exemplo ser usado para ocultar imagens decorativas que não fornecem nenhm conteúdo significativo.
Vejamos então um exemplo comum do uso deste atributo:

```html
<button>
  <span aria-hidden="true">🗑️</span>
  Apagar
</button>
```
<br>

- **Atributo hidden**: Este atributo é suportado pela maioria dos navegadores modernos e oculta conteúdo tanto visualmente quanto da árvore de acessibilidade. Pode ainda ser facilmente alternado usando JavaScript.

## Problema de Acessibilidade do Atributo placeholder

Usar texto de espaço reservado não é bom para acessibilidade. Muitas vezes, os usuários confundem o texto de espaço reservado como um valor real de entrada eles pensam que já há um valor no input.

