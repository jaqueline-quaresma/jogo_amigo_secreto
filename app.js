
let lista = document.querySelector("h2");
let listaAmigos = [];

  function adicionarAmigo () { 
  let amigo = document.getElementById("amigo").value;

if (amigo =="") {
  alert ("Preencha o acampo abaixo.");
  } else {
    listaAmigos.push(amigo);
lista.innerHTML += `<li>${amigo}</li>`
novoNome()
  }
}

function sortearAmigo() {
  let amigos = listaAmigos.length;
  if (amigos == 0) {
      lista.innerHTML = "Acabou o Sorteio!";
  } else {
      let numeroEscolhido = parseInt(Math.random() * amigos);
      let amigoSorteado = listaAmigos[numeroEscolhido];
      lista.innerHTML = "O(a) amigo(a) sorteado(a) é: " + amigoSorteado + "!";
      listaAmigos.splice(numeroEscolhido, 1);
  }
}
function novoNome() { 
  let amigo = document.getElementById("amigo");
  amigo.value = ""; 
}
