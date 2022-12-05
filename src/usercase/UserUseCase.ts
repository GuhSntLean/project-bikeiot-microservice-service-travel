import { User } from "../models/User";

class UserUseCase {
  async save(dataString: string) {
    const dataUser = JSON.parse(dataString);

    if (!dataUser) {
      console.log(`error to save`);
      return false;
    }
    
    var userExist = await User.findOne({idUser: dataUser.id});
    console.log(dataUser.id)

    if (!userExist) {
      console.log("Create new");
      try {
        const newUser = await User.create({
          idUser: dataUser.id,
          userName: dataUser.username,
          email: dataUser.email,
        });

        console.log(newUser);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Update user");
      try {
        userExist.userName = dataUser.username;
        userExist.email = dataUser.email;

        await userExist.save();

        console.log(userExist);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export { UserUseCase };
