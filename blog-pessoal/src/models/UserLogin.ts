interface UserLogin {
    id: number;
    nome?: string | null;
    usuario: string;
    senha: string;
    foto?: string | null;
    token?: string| null
}

export default UserLogin;