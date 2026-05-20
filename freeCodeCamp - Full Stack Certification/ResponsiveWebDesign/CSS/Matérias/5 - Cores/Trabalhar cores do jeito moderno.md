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


