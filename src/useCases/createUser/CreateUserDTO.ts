interface ICreateUserRequestDTO {
     name: string,
     email: string,
     password: string;
     status?: string,
     typeUserId: Number;
}

export { ICreateUserRequestDTO }