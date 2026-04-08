            Google Background.color.change
            
/*Este é um programa simples em JavaScript qu irá alterar a cor de fundo de uma página Web como a home page do Google.com, abre as DeveloperTools e dentro da console corre este codigo.*/



const htmlBody = document.querySelector('body');

htmlBody

const randomClickFunction = function () {
	const colors = ["#002942", "#334433", "#55ff33", "grey", "purple"]
	
	const randomIndex = Math.floor(Math.random() * colors.length);
	
	const randomColor = colors(randomIndex);
	
	htmlBody.style.backgroundColor = randomColor;
	
	console.log('The user clicked and set the color to' + randomColor);
}

/*Para veres o código funcionando basta escreveres no console: randomClickFunction*/
