interface ICategory {
 name?: string
}

class Category {
 constructor(category: ICategory) {
  Object.assign(this, category)
 }
}

export { Category };
