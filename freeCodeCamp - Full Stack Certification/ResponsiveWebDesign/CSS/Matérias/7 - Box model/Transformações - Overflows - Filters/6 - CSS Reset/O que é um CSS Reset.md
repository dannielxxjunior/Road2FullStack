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

Criar resets complexos pode ser um processo que acaba consumindo algum tempo em projetos grandes que requerem uma atenção especifica a determinados elementos ao invez desta simples seleção por inteiro usando (*), podemos fazer uso de um reset já pré-fabricado.

## Reset CSS Pré-feito

Resets pré-fabricados são básicamente folhas de estilo que já estão pré-construídas, pelo que bastanos baixar o ficheiro e aplicar o mesmo a nosso projeto atravéz do documento HTML.

Um ótimo exemplo de um reset de terceiros é o [Normalize.css](https://github.com/necolas/normalize.css/). Esta folha de estilo normaliza alguns estilos de uma ampla variedade de elementos em CSS mantendo alguns estilo padrão úteis especialmente aqueles que são importantes para a acessibilidade.

Corrige também alguns bugs comuns e inonsistências de estilo.

Outra opção bastante usada seria o sanitize.css, que é uma biblioteca que podemos usar para garantirmos que os estilos padrão sejam consistentes em todos os principais navegadores modernos.

No que toca a resets de terceiros existem realmente imensas opções disponíveis, mas devemos realmente perder algum tempo estudando-as para entender o qeu melhor se adequa a nosso projeto.

---

## Notas finais

Ao trabalharmos com resets de CSS, é também importante levar em conta a acessibilidade. Nossa aplicação deve ser acessivel a todos os usuários, então não devemos redifinir estilos CSS que sejam essenciais ao bom funcionamento de leitores de tela ou outras tecnologias assistivas.
