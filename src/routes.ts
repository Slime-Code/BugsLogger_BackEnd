import { Router } from 'express'
import userController from './controller/userController'
import { createUserController } from './useCases/createUser';
import { createCategoryController } from './useCases/createCategory';
import { createBugController } from './useCases/createBug';
import { createTechnologyController } from './useCases/createTechnology';
import { authMiddleware } from './middleware/authMiddleware'

const router = Router();

//User
router.post("/", (req, res) => {
 return createUserController.create(req, res)
})

router.post("/login", (req, res) => {
 return createUserController.login(req, res)
})

router.get("/update/:email", (req, res) => {
 return createUserController.findUsersAndUpdateStatus(req, res)
})

router.get("/find/users", authMiddleware, (req, res) => {
 return createUserController.findUsers(req, res)
})

//Bugs
router.post("/create/bug", authMiddleware, (req, res) => {
 return createBugController.create(req, res)
})
router.get("/find/bug", (req, res) => {
 return createBugController.findAll(req, res)
})

//Category
router.post("/create/category", (req, res) => {
 return createCategoryController.create(req, res)
})
router.get("/find/category", (req, res) => {
 return createCategoryController.findAll(req, res)
})

//Category
router.post("/create/technology", (req, res) => {
 return createTechnologyController.create(req, res)
})
router.get("/find/technology", (req, res) => {
 return createTechnologyController.findAll(req, res)
})

export default router;