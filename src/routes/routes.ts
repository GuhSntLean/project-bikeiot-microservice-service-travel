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

// rotas
routes.post(
  "/getall-traveluser",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.listUserTravel
);
routes.post(
  "/travel-get",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.selectTravel
);
routes.post(
  "/getcoordinates",
  authenticatedUserMiddleware.ensureAuthenticated,
  travelController.selectCoordenatesTravel
);

// Rotas Administrador
routes.post(
  "/all-traveluser",
  authenticatedAdminMiddleware.ensureAuthenticated,
  travelController.listUserTravel
);
routes.post(
  "/travel",
  authenticatedAdminMiddleware.ensureAuthenticated,
  travelController.selectTravel
);
routes.post(
  "/coordenates",
  authenticatedAdminMiddleware.ensureAuthenticated,
  travelController.selectCoordenatesTravel
);

// Admin Routes
routes.post(
  "/force-stop-travel",
  authenticatedAdminMiddleware.ensureAuthenticated,
  travelController.forceStopTravel
);

export default routes;
