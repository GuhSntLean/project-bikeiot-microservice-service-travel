import { Router } from "express";
import { TravelController } from "../controller/TravelController";

const travelController = new TravelController

const routes = Router();

routes.post("/new-travel")
routes.get("/get-travel-user")
routes.get("/get-all-travel-user")
routes.get("/get-travel")


export default routes;
