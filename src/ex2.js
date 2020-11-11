// ex 2.1

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const nomes = usuarios.map((item) => item.idade);
console.log("ex 2.1 ", nomes);

// ex 2.2

const usuarios2 = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Miguel", idade: 23, empresa: "Rocketseat" },
  { nome: "Emilio", idade: 18, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const rocket = usuarios2.filter(function (item) {
  return item.idade >= 18 && item.empresa === "Rocketseat";
});
console.log("ex 2.2 ", rocket);

// ex 2.3

const achaGoogle = usuarios.find((item) => item.empresa === "Google");
console.log("ex 2.3 ", achaGoogle);

// ex 2.4

const nomes2 = usuarios
  .map(function ({ nome, idade, empresa }) {
    return {
      nome,
      idade: idade * 2,
      empresa,
    };
  })
  .filter(({ idade }) => idade <= 50);

console.log("ex 2.4 ", nomes2);
