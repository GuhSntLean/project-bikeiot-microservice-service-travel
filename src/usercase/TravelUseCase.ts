import { DataBike } from "../models/DataBike";
import { TravelRouter } from "../models/TravelRouter";

class TravelUseCase {
  async startRace(iduser: string, idbike: string) {
    try {

      // const bike = await DataBike.;
      const createRoute = await TravelRouter.create({});
      console.log(createRoute);
    } catch (error) {
      console.log(error.message);
    }
  }

  async addCoordinatesRace(id: string, lat: number, log: number) {
    const racinng = await TravelRouter.findById(id);

    if (!racinng) {
      return new Error("Travel not found");
    }

    try {
      racinng.coordenates = [
        ...racinng.coordenates,
        { lat: lat, log: log, dateHour: new Date() },
      ];
      racinng.save();
      
      return true
    } catch (error) {
      return new Error(error.message)
    }
  }

  async stopRace() {}

  async findRaceUser() {}
  async listRaceUser() {}
  async listRace() {}
}

export { TravelUseCase };
