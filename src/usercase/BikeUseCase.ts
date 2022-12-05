import { DataBike } from "../models/DataBike";

class BikeUseCase {
  async save(dataString: string) {
    const dataBike = JSON.parse(dataString);

    if (!dataBike) {
      console.log(`error to save`);
      return false;
    }

    var bikeExist = await DataBike.findOne({ idbike: dataBike.id });
    console.log(dataBike.id);

    if (!bikeExist) {
      console.log("Create new");
      try {
        const newUser = await DataBike.create({
          idbike: dataBike.id,
          serialnumber: dataBike.serialnumber,
          mac: dataBike.mac,
          status: dataBike.status,
          modelbike: dataBike.modelbike,
        });

        console.log(newUser);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Update user");
      try {
        bikeExist.serialnumber = dataBike.serialnumber
        bikeExist.mac = dataBike.mac
        bikeExist.status = dataBike.status
        bikeExist.modelbike = dataBike.modelbike
        await bikeExist.save();

        console.log(bikeExist);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export { BikeUseCase };
