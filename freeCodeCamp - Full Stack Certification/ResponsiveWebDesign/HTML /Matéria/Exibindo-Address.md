# Exibindo Elementos de Contacto
 		
Quando se trata de construir as secções de contacto em um website, devemos fazer uso do elemento semântico &lt;address&gt; em vez de um elemento genérico como &lt;div&gt;, como no seguinte exemplo:
 
```html
<address>
    <h2>Company name</h2>
 	<p> 1234 Elm Street <br>
		SpringField, Il 2625
		Europe
 	</p>
 	<p> Phone: <a href="tel:+351960000000">+351-960-000-000</a></p>
 	<p> Email: <a href="mailto:contact@email.com">contact via e-mail</a></p>
</address>
```
 	
 Neste exemplo temos, nome da empresa, morada, telefone e email, o elemento &lt;br&gt; é usado para adicionar uma quebra de linha.
Para o número de telefone, temos um elemento (Anchor)&lt;a&gt; com o valor no atributo href="" definido para : tel:, o que cria um link clicavél dentro do elemento, para que o usuardio faça uma chamada directamentee ao carregar no mesmo.

