import { DataBike } from "../models/DataBike";
import { TravelBasicInfo } from "../models/TravelBasicInfo";
import { TravelRouter } from "../models/TravelRouter";
import { User } from "../models/User";

class TravelUseCase {
  async startRace(iduser: string, idbike: string) {
    try {
      // const bike = await DataBike.findOne({ id: idbike });
      // const user = await User.findOne({ id: iduser });

      // if (!bike || !user) {
      //   return new Error("User or bike not found");
      // }

      // if (bike.status != "active") {
      //   return new Error("Error connecting the bike");
      // }

      const createTravel = await TravelBasicInfo.create({
        idbike: idbike,
        iduser: iduser,
        initRunning: new Date(),
        finishRunning: new Date(),
        statusRunning: true,
      });

      await TravelRouter.create({ idtravelbasic: createTravel.id });

      const returnCreatTravel = {
        idtravel: createTravel.id,
        initrunning: createTravel.initRunning,
        statusrunning: createTravel.statusRunning,
      };

      return returnCreatTravel;
    } catch (error) {
      console.log(error.message);
      return new Error("Error when starting the race");
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

      return true;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async stopRace() {}

  async findRaceUser() {}
  async listRaceUser() {}
  async listRace() {}
}

export { TravelUseCase };
