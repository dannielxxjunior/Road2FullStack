# O que é um CSS Reset ?

Um Reset em CSS é uma folha de estilo que remove toda ou parte da formatação padrão que os navegadores aplicam aos elementos HTML. Por exemplo, podes ter notado que certos elementos, como parágrafos e títulos, já possuem margens por padrão mesmo que não as definas.

Isso acontece com uma ampla variedade de elementos HTML. Navegadores diferentes também podem aplicar estilos padrão diferentes aos mesmos elementos HTML.
Isto pode resultar em estilos inconsistentes entre os navegadores, algo que devemos evitar ao máximo.

Para lidarmos com isso usamos um Reset CSS que irá remover os estilos padrão, de forma a que possamos obter uma base estável para nossos designs, mesmo entre os varios navegadores diferentes.

Existem duas abordagens principais para resets em CSS: podemos definir um reset personalizado ou usar um reset de terceiros.

## Reset CSS Personalizado

Estes são as folhas de estilo que criamos do zero para atender à necessidade de nosso projeto. Dessa forma podemos então controlar cada estilo especifico que será resetado.
Vejamos um exemplo muito comum para definir a margem e o padding de todos os elementos HTML:

```html
<link rel="stylesheet" href="styles.css">
<h1>Example Heading</h1>
<p>This is a paragraph.</p>
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Este seletor especifico que nos permite selecionar todos os elementos HTML irá ficar normalmente no topo da página.

Criar resets complexos pode ser um processo que acaba consumindo algum tempo em projetos grandes que requerem uma atenção especifica a determinados elementos ao invez desta simples seleção por inteiro usando (*).
