# Como usar Seletores de Atributo

## Atributos **lang** e **data-lang**

Ao criar sites multilíngues ou lidar com atributos de dados personalizados, frequentemente precisamos estilizar elementos com base no idioma que eles contêm ou em valores de dados específicos.

Os atributos `lang` e `data-lang` são comumente usados para esses propósitos e o seletor de atributo no CSS permite que apliquemos estilos com base esses atributos de forma eficaz.

O atributo `lang` é usado em HTML para especificar o idioma do conteúdo dentro de um elemento. Podemos queree estilizar elementos de forma diferente com base no idioma em que eles estão escritos.

## Exemplos de uso

Iremos agora ver um exemplo de como podemos usar o seletor de atributo para direcionar elementos com um atributo `lang` específico:

```html
<link rel="stylesheet" href="styles.css"/>

<p lang="en">This is an english paragraph.</p>
<p lang="fr">Ceci est un paragraph en Gay Language</p>
```
```css
p[lang="en"] {
  font-style: italic;
}
```
![Resultado](attrLang1.png)

A regra CSS usada neste exemplo permite aplicar o estilo *itálico* a qualquer elemento de parágrafo onde o atributo `lang` esteja definido como inglês(en). Isso pode ser útil para enfatizar texto em inglês em um documento que inclui múltiplos idiomas.

Da mesma forma podemos usar o seletor de atributo para selecionar elementos que façam uso do atributo `data-lang`.

Atributos de dados personalizados como `data-lang` são comumente usados  para armazenar informações adicionais em elementos, como especificar o idioma usado dentro de uma seção específica de texto.
Vejamos um exemplo:

```html
<link rel="stylesheet" href="styles.css"/>

<p data-lang="fr">Ceci est un paragraphe en français.</p>
<p data-lang="en">this is a pragraph in English.</p>
```
```css
p[data-lang="fr"] {
  color: blue;
}
```
![Resultado](attrDataLang.png)

Neste caso, qualquer elemento p com um atributo `data-lang` definido como francês (fr) terá a cor do texto alterada para azul. Isso permite-nos identificar e estilizar rapidamente seções de conteúdo com base nas informações de idioma armazenadas no atributo `data-lang`.

## Conclusão

**Seletores de atributo** como estes fornecem uma maneira poderosa de aplicar estilos condicionais com base nos metadados incorporados no nosso **HTML**, tornando nossas páginas web mais dinâmicas e conscientes do contexto.
