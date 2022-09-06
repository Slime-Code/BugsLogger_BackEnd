interface ICreateUserRequestDTO {
     _id?: string,
     name?: string,
     email?: string,
     password?: string;
     status?: string,
     typeUserId?: Number;
}

export { ICreateUserRequestDTO }