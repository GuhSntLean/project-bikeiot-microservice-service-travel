import { Router } from "express";
import { TravelController } from "../controller/TravelController";

const travelController = new TravelController();

const routes = Router();

routes.post("/new-travel", travelController.startingRace);
routes.post("/add-point", travelController.addPointRunning);
routes.post("/finish-travel", travelController.finishRace);

routes.get("/get-travel-user");
routes.get("/get-all-travel-user");
routes.get("/get-travel");

export default routes;
