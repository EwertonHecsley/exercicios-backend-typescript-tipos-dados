type Usuario = {
    nome: String,
    idade: number,
    status: boolean
}

const usuarios: Usuario[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const buscarUsuario = (parteUsuario: string, arr: Usuario[]): Usuario | undefined => {
    const usuarioEncontrado = arr.find((usuario) => usuario.nome.includes(parteUsuario));

    return usuarioEncontrado;
};


