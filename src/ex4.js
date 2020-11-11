// 4.1
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
const resposta = mostraInfo({ nome: "Miguel", idade: 23 });
console.log(resposta);
