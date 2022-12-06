import { DataBike } from "../models/DataBike";
import { TravelBasicInfo } from "../models/TravelBasicInfo";
import { TravelRouter } from "../models/TravelRouter";
import { User } from "../models/User";

class TravelUseCase {
  async startRace(iduser: string, idbike: string) {
    try {
      const bike = await DataBike.findOne({ idbike: idbike });
      const user = await User.findOne({ idUser: iduser });

      const verifyUserActiveStart = await TravelBasicInfo.findOne({
        iduser: iduser,
        status: true,
      });

      console.log(verifyUserActiveStart);
      if (verifyUserActiveStart) {
        return new Error("Finish the previous race before starting a new race");
      }

      if (!bike || !user) {
        return new Error("User or bike not found");
      }

      if (bike.status != "active") {
        return new Error("Error connecting the bike");
      }

      const createTravel = await TravelBasicInfo.create({
        idbike: bike.idbike,
        iduser: user.idUser,
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
    const travel = await TravelBasicInfo.findById(id);

    if (!travel) {
      return new Error("Travel not found");
    }

    if (travel.statusRunning == false) {
      return new Error("Race already ended coordinate cannot be saved");
    }

    try {
      const racinng = await TravelRouter.findOne({ idtravelbasic: travel.id });

      racinng.coordenates = [
        ...racinng.coordenates,
        { lat: lat, log: log, dateHour: new Date() },
      ];
      racinng.save();

      const resultResponse = {
        savein: new Date(),
        valid: true,
        save: true,
      };

      return resultResponse;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async stopRace(id: string) {
    const travel = await TravelBasicInfo.findById(id);

    if (!travel) {
      return new Error("Travel not found");
    }

    if (travel.statusRunning == false) {
      return new Error("This race has now ended");
    }

    try {
      travel.statusRunning = false;
      travel.finishRunning = new Date();
      await travel.save();

      const resultTravelStop = await TravelBasicInfo.findById(id);

      if (resultTravelStop.statusRunning == true) {
        return new Error("Erro saving new status");
      }

      const returnResult = {
        idtravel: resultTravelStop.id,
        statustravel: resultTravelStop.statusRunning,
      };

      return returnResult;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async forceStopTravel(id: string) {
    const travel = await TravelBasicInfo.findById(id);
    console.log(travel)
    if (!travel) {
      return new Error("Travel not found");
    }

    if (travel.statusRunning == true) {
      try {
        travel.statusRunning = false;
        travel.finishRunning = new Date();
        await travel.save();

        const resultTravelStop = await TravelBasicInfo.findById(id);

        if (resultTravelStop.statusRunning == true) {
          return new Error("Erro saving new status");
        }

        const returnResult = {
          idtravel: resultTravelStop.id,
          statustravel: resultTravelStop.statusRunning,
          timeclosetravel: resultTravelStop.finishRunning,
        };

        return returnResult;
      } catch (error) {
        return new Error(error.message);
      }
    } else {

      const returnResult = {
        idtravel: travel.id,
        statustravel: travel.statusRunning,
        timeclosetravel: travel.finishRunning,
      };

      return returnResult
    }
  }
}

export { TravelUseCase };
