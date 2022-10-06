interface ICreateBugRequestDTO {
 title: string,
 description: string,
 solution: string,
 link: Array<string>,
 technologyId: string,
 userId: string
}

export { ICreateBugRequestDTO }