type Usuario = {
    nome: String,
    pets: String[]
};

const usuarios: Usuario[] = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const buscarDonoPet = (lista: Usuario[], nomePet: String) => {
    let usuarioEncontrado: Usuario | undefined;

    for (const usuario of lista) {
        if (usuario.pets.includes(nomePet)) {
            usuarioEncontrado = usuario;
        }
    }

    if (usuarioEncontrado) {
        console.log(`O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}`);
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`);
    }
}

buscarDonoPet(usuarios, 'Guido');