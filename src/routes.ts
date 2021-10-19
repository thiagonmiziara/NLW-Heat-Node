import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new Get3MessagesController().handle);

export { router };
