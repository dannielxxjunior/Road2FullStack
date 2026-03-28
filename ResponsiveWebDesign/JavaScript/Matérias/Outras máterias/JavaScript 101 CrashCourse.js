		JavaScript 101 CrashCourse

Neste rápido inicio de máteria JavaScript iremos aprender um pouco de rudo o que é essencial para o bom funcionamento da linguagem, tocando assim em todos os conceitos principais.

Diferente de linguadens como PHP e Python o JavaScript corre directamente no browser, mas é também capaz de correr fora do mesmo, o que dá a linguagem a chance de crescer em muitas das outras áreas para além do front-end de uma página web.

Do server-side com Node.js ao desenvolvimento de apps mobile com React.

JavaScript Client-Side serve-se de ficheiros html, o que significa que a integração em páginas estaticas será facil.

Para escrevermos JavaScript em im ficheiro HTML usamos a tag <script> que é normalmente usada ou na head ou no fundo do elemento <body>.

JavaScript pode ser usado para modificar o CSS ou HTML em um documento(página). 

Exemplo:
	
	<script>
		document.body .style.background="blue";
	</script>
-------------------------------------------------------------------------------	
		
		JavaScript Externo
		
Veremos agora uma outra forma de adicionar JavaScript a nossa página web de uma outra forma, uma que nos premite manter as linguagens em separado e nosso código limpo.

Tal como fazemos com os estilos em CSS começamos por criar um ficheiro, com a extensão .js, no ficheiro HTML abrimos a tag: <script src="app.js"></script>

Usamos o atributo src para indicar o caminho para o ficheiro JavaScript.

Se quisermos usar varios ficheiros JavaScript em nossa página, basta então adicionar mais tags <script src="app2.js"></script>.

Visto isto vamos agora passar aos básicos da sintaxe JavaScript, ao como escrever e porque funciona assim e iremos começar pelas variaveis.
--------------------------------------------------------------------------------

		Variáveis
		
As variáveis são sempre um dos conceitos fudamentais de inicio de aprendizagem de uma nova linguagem de programação.

Iremos ver nesta lição:

	- o que é uma variável
	- como criar uma variável
	- como guardar valores
	
1 - O que é uma variável?

 Em programação uma variável é um local de armazenamento abstrato, que possui um nome simbolico e guarda dados, como: números ou frases(strings).
 
 Variáveis devem ter nomes autodescritivos.
 
 Para criamos uma variável em JavaScript podemos usar um dos dois comandos: let ou const.
 
 Por vezes podes depararte em código legado com variaveis iniciadas com var, mas tal já não é mais usado.
 
 Seguindo o nosso raciocínio supõe a seguinte declaração:
 
 	let usuario
 	
 Esta é uma declaração de variável, que por agora não contem qualquer dado ou valor, mas podemos atribuir algo usando após a declaração o sinal de atribuição(=). 
 Como no seguinte exemplo:
 
 usuario = 'Dan';
 
