function calcIdade(event) {
  event.preventDefault();

  const anoNascimento = document.getElementById("anoNascimento").value;
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  document.getElementById("paragrafoIdade").innerHTML = "Sua idade é " + idade;
} 