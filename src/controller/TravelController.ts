import { Request, Response } from "express";
import { TravelUseCase } from "../usercase/TravelUseCase";

class TravelController {
  async startingRace(request: Request, response: Response) {
    const { iduser, idbike } = request.body;

    if (!iduser || !idbike) {
      return response.status(400).json({ error: "Field is missing" });
    }

    try {
      const travel = new TravelUseCase();
      const result = await travel.startRace(iduser, idbike); 

      if (result instanceof Error) {
        return response.status(400).json({error: result.message});
      }

      return response.status(201).json({ result });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error.message });
    }
  }

  async finishRace(request: Request, response: Response) {}

  async addPointRunning(request: Request, response: Response) {
    const { idrunnning, lat, log } = request.body;

    if (!idrunnning || !lat || !log) {
      return response.status(400).json({ error: "Field is missing" });
    }

    try {
      const travel = new TravelUseCase();
      const result = travel.addCoordinatesRace(idrunnning, lat, log);

      if (result instanceof Error) {
        return response.status(400).json({ error: result.message });
      }

      return response.status(201).json({ result });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error.message });
    }
  }

  async listUserTravel(request: Request, response: Response) {}

  async selectTravel(request: Request, response: Response) {}
}

export { TravelController };
