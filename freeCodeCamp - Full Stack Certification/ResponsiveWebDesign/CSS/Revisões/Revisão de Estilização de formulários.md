# Revisão de Estilização de Formulários

## Melhores práticas para estilizar inputs

Estilizando inputs: Como em todos os elementos de texto, precisamos garantir que os estilos aplicados aos inputs de texto sejam acessíveis. Isso significa que a fonte precisa ter um tamanho adequado e a cor precisa ter contraste suficiente com o fundo. Elementos de input também podem receber foco. Quando estiver editando os estilos, deve tomar cuidado para preservar um indicador visível para quando o elemento estiver com foco, como uma borda em negrito por exemplo.

---

## Usando o appearance: none; para inputs

Os navegadores aplicam estilos padrão a muitos elementos. A propriedade CSS appearance: none; dá controle total sobre estilo, mas traz algumas ressalvas. Ao criar estilos personalizados para elementos de entrada, precisamos garantir que os indicadores de foco e erro ainda estejam presentes.

---

## Problemas comuns ao estilizar as propriedades: datetime-local e color

Esses tipos especiais de entradas dependem de pseudo elementos complexos para criar coisas como seletores de data e cor. Isso apresentam um desafio significativo para estilizar essas entradas. Um desafio é que a estilização padrão depende inteiramente do navegador, então o CSS que escrevemos para fazer o seletor parecer do jeito que desejamos pode ser totalmente diferente em outro navegador.

---

## Estados de validação (:valid, :invalid, :focus-visible)

Os fomulários modernos não dependem apenas de estilos estáticos. O CSS permite reagir ao estado do input, o que melhora muito a experiência do utilizador.

- :focus-visible : ajuda a mostrar o foco apenas quando o utilizador navega com o teclado(melhor acessibilidade).
- :valid e :invalid : permitem estilizar inputs com base na validação HTML nativa.
- :required : pode ser usado para destacar campos obrigatórios.

Exemplos de uso:

```css
input:focus-visible {
    outline: 2px solid 4c9ffe;
}

input:invalid {
    border-color: red;
}

input:valid {
    border-color: green;
}
```

---

## Associação correta entre label e input

Uma boa prática essencial é garantir que cada label esteja associado a seu input.

Isso ajuda a melhorar:

- Acessibilidade (screen readers)
- Área clicável do input
- Usabilidade geral

Alternativa comun:
```html
<label for="email>Email</label>
<input id="email" type="email"/>
```

Alternativa mais moderna:
```html
<label>
    Email
    <input type="email"/>
</label>
```
---

## Tamanho de área clicável (mobile first)

Em dispositivos móveis, inputs pequenos tornam-se difíceis de usar. É recomendado garantir áreas de toque adequadas.

- Altura mínima recomendada: ~44px
- Espaçamento entre inputs para ecitar erros de clique

Exemplo:
```css
input {
    padding: 12px;
    min-height: 44px;
}
```

---

## Consistencia entre navegadores

Mesmo sem appearance: none; cada browser aplica diferentes estilos a inputs. Isso pode criar inconsistencias visuais.

Boas práticas:

- Testar em varios browsers sempre que possivel
- Evitar depender de estilos nativos
- Criar estilos base consistentes para todos os inputs

---

## Estilização de placeholders

Os placeholders não são conteúdo real e como tal devem ser usados com cuidado.

Exemplo de estilização:

```css
input:placeholder {
    color: #999;
    opacity: 1;
}
```

Evita usar placeholders como substitutos de labels - isso prejudica a acessibilidade da webPage.

---

## Layout de formulários (Flexbox / Grid)

Formulários bem etruturados não dependem só de inputs estilizados, mas também de layout.

- Flexbox para alinhamento simples
- Grid para formulários mais complexos

Exemplo simples de grid layout:

```css
.form {
    display: grid;
    gap: 12px;
}
```

---

## Estados de erro e feedback do utilizador

Um bom formulário não só valida, mas também comunica claramente em caso de erro.

- Mensagens de erro devem ser visíveis
- Não depender apenas de cor(acessibilidade)
- Usar ícones ou texto adicional

Vejamos um exemplo de estilização de uma class="error" :

```css
.error {
    color: red;
    font-size: 0.9rem;
}
```

---

## Resumo

Aqui vimos alguns parametros bastante importantes na estilização de formulários, todos eles tem sua importancia individual, mas é quando juntamos e aplicamos muitas dessas boas práticas que os resultados se mostram de maior valor. 
