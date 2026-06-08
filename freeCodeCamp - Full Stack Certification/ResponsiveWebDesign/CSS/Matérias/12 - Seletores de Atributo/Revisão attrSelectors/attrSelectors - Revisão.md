# Revisão de Seletores de Atributo em CSS

## Trabalhando com diferentes Seletores de atributo e links

- **Definição**: O seletor `atribute` permite que direionemos elementos HTML com base em seus atributos como os atributos `href` ou `title`.
Vejamos:

```html
<link rel="stylesheet" href="sytles.css"/>

<a href="https://www.freecodecamp.org">Link With href</a>
<a>No href</a>
```
```css
a[href] {
  color: blue;
  text-decoration: underline;
}
```
![Resultado](attrSelector1.png)

---

- **Atributo `title`**: Este atributo fornece informações adicionais sobre um elemento. Aqui está um exemplo de como podemos direcionar links com o atributo `title`.
Vejamos:

```html
<link rel="stylesheet" href="styles.css"/>

<a href="#" title="tooltip">Link with title</a>
<a href="#">Normal link</a>
```
```css
a[title] {
  font-weight: bold;
  text-decoration: none;
}
```
![Resultado](attrTitle.png)

---

- **Combinando Seletores**: Combina múltiplos seletores de atributo.
