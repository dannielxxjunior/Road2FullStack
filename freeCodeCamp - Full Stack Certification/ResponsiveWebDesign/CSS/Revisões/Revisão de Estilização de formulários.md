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

---

