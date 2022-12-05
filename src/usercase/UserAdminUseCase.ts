import { AdminUser } from "../models/AdminUser";

class UserAdminUseCase {
  async save(dataString: string) {
    const dataAdmin = JSON.parse(dataString);

    if (!dataAdmin) {
      console.log(`error to save`);
      return false;
    }

    var adminExist = await AdminUser.findOne({ idUser: dataAdmin.id });
    console.log(dataAdmin.id);

    if (!adminExist) {
      console.log("Create new");
      try {
        const newUser = await AdminUser.create({
          idAdmin: dataAdmin.id,
          userName: dataAdmin.username,
          email: dataAdmin.email,
          role: dataAdmin.role,
        });

        console.log(newUser);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Update user");
      try {
        adminExist.userName = dataAdmin.username;
        adminExist.email = dataAdmin.email;
        adminExist.role = dataAdmin.role;

        await adminExist.save();

        console.log(adminExist);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export { UserAdminUseCase };
