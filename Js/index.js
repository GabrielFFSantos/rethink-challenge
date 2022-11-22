// Coleta o dado inserido no formulário
const form = document.getElementById("register");
const name = document.getElementById("name");
const age = document.getElementById("age");
const profession = document.getElementById("profession");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const date = document.getElementById("date");

// Cria array pessoas
const pessoas = [
	{ name: "Fabiana Araújo", age: 33 },
	{ name: "Gabriel Gomes", age: 25 },
	{ name: "Fernando Henrique", age: 17 },
	{ name: "Ana Luiza", age: 2 },
	{ name: "Geralda do Nascimento", age: 93 },
	{ name: "Miguel Souza", age: 70 },
	{ name: "Antoni Miguel", age: 69 },
];

// Cria nova pessoa através do formulário e retorna caso ela já exista
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const novaPessoa = {
		name: name.value,
		age: age.value,
		profession: profession.value,
		mail: mail.value,
		phone: phone.value,
		date: new Date().toLocaleDateString("pt-BR"),
	};

	alert(
		"os resultados das funções podem ser observados no console, clique com o botão direito e selecione inspecionar, depois vá a aba console de seu navegador"
	);
	console.log(novaPessoa);

	const pessoa = filtraPessoa(name.value);
	console.log(pessoa);
});

// Chamada das funções
const nomes = names();
console.log(nomes);

const insereid = insertId();
console.log(insereid);

const maioridade = adulthood();
console.log(maioridade);

const media = average();
console.log(media);

function filtraPessoa(name) {
	return pessoas.filter((pessoas) => pessoas.name == name);
}

// Retorna array dos nomes
function names() {
	return pessoas.map((pessoas) => pessoas.name);
}

// Insere o campo ID no array existente
function insertId() {
	let id = 0;
	pessoas.forEach((pessoas) => {
		pessoas.id = id;
		id++;
	});
	return pessoas;
}

// Mostra as pessoas com mais de 18 anos
function adulthood() {
	return pessoas.filter((pessoas) => pessoas.age >= "18");
}

// Retorna media das idades das pessoas no array
function average() {
	let media = 0;

	pessoas.forEach((pessoas) => {
		media += pessoas.age;
	});

	return media / pessoas.length;
}
