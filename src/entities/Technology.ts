interface ITechnology {
 name?: string,
 categoryId?: string
}

class Technology {
 constructor(technology: ITechnology) {
  Object.assign(this, technology)
 }
}

export { Technology };
