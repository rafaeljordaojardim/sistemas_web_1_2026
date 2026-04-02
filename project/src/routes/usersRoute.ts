import { Router } from 'express';
import { makeCreateUserController, makeListUsersController } from '../factories';

const router = Router();

const createUserController = makeCreateUserController();
const listUsersController = makeListUsersController();

router.post("/", (req, res) => createUserController.handle(req, res));
router.get("/", (req, res) => listUsersController.handle(req, res));

export default router;
