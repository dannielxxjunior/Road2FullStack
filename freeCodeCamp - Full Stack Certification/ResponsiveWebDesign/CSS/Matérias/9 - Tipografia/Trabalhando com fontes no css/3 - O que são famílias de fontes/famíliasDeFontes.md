# O que são famílias de fontes e como funcionam?

Uma família de fontes é um gupo de fontes que compartilham um design comum. Todas as fontes que pertencem à mesma família são baseadas na mesma tipografia principal, mas também possuem variações em seu estilo, peso e largura. Como irmãos que compartilham semelhanças e se distinguem por suas diferenças.

![Exemplo de familia de fontes](fontFam.png)

Em CSS definimos a família de fontes através da propriedade font-family.
Como no seguinte exemplo:

```html
<link rel="stylesheet" href="styles.css">
<p id="arial-font">Example paragraph using Arial font.</p>
<p>Paragraph not using Arial font.</p>
```

```css
#arial-font {
  font-family: Arial;
}
```

Caso a família de fontes desejada não seja encontrada, podemos especificar múltiplas fontes em ordem de prioridade, da mais alta(desejada) para a mais baixa(segura).

As fontes alternativas funcionam como FallBacks.
Vejamos o exemplo em seguida:

```html
<link rel="stylesheet" href="styles.css"/>

<p id="specified-font">Parágrafo de exemplo de fonte especificada.</p>
<p>Parágrafo de fonte comum.</p>
```

```css
#specified-font {
  font-family: Arial, Lato;
}
```

Aqui o navegador irá renderizar a fonte especificada em primeiro (Arial) se a mesma for encontrada no dispositivo.
Caso contrário, a segunda fonte(Lato) será renderizada.

## Bastidores do processo de seleção de fontes

O processo de seleção de fontes não para se a primeira fonte estiver disponível. A família de fontes é escolhida um caractere por vez, então se umaa fonte não tiver um caractere especifico, o navegador o procura nas fontes de prioridade inferior.

Interessante!

## Famílias Genéricas

No contexto de desenvolvimento encontramos ainda famílias genéricas de fontes, que são de enorme importancia. 
Uma família de fontes genérica é uma fonte padrão que os navegadores web irão renderizar quando as fontes de prioridade mais alta não estiverem disponíveis. Para garantir que o conteúdo ainda seja legível, o navegador substitui a fonte original pela fonte mais apropriada encontrada, com base na família de fontes genérica especificada. Alguns dos mais comumente usados são:

- serif
- sans serif
- monospace
- cursiv
- fantasy

Famílias de fonte genéricas devem sempre ser incluidas no final da lista de famílias de fontes (font-family).

Para tornarmos a experiencia do usuário ainda mais consistente, é recomendado também o uso de fontes Web-safe, que são famílias de fonte que estão instaladas na grande maioria dos dispositivos.