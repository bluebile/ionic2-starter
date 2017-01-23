export class UserModel {
  constructor(private mapper: UserMapper) {}

  get nome() {
    return this.mapper.nome;
  }

  get cpf() {
    return this.mapper.cpf;
  }

  get senha() {
    return this.mapper.senha;
  }

  get endereco() {
    return this.mapper.endereco;
  }

  get telefones() {
    return this.mapper.telefones;
  }
}

interface UserMapper {
  nome: string;
  cpf: string;
  endereco: string;
  senha: string;
  telefones: Array<{ telefone: string}>;
}
