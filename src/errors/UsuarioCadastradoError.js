export class UsuarioCadastradoError extends Error {
    constructor() {
        super('Usuário já cadastrado');
    }
}