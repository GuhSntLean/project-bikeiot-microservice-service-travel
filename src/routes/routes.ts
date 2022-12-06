import { Router } from "express";
import { TravelController } from "../controller/TravelController";
import { AuthenticatedAdminMiddleware } from "../middleware/AuthenticatedAdminMiddleware";
import { AuthenticatedUserMiddleware } from "../middleware/AuthenticatedUserMiddleware";

const travelController = new TravelController();

const authenticatedAdminMiddleware = new AuthenticatedAdminMiddleware();
const authenticatedUserMiddleware = new AuthenticatedUserMiddleware();

const routes = Router();

// User routes
routes.post(
  "/new-travel",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.startingRace
);
routes.post(
  "/add-point",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.addPointRunning
);
routes.post(
  "/finish-travel",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.finishRace
);
routes.post(
  "/get-all-travel-user",
  authenticatedUserMiddleware.ensureAuthenticated
);
routes.post("/get-travel", authenticatedUserMiddleware.ensureAuthenticated);

// Admin Routes

routes.post(
  "/force-stop-travel",
  authenticatedAdminMiddleware.ensureAuthenticated,
  travelController.forceStopTravel
);
routes.post("/get-all-travel");

export default routes;
