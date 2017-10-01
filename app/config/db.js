const Db = {
    name : "settings",
    properties : {
      username : "string",
      email : "string",
      uid : "string",
      isLoggedIn : {type:"bool", default : 0},
      membership : {type: "int", default: 0},
      soundNotification : {type:"int", default : 0},
      pushNotification : {type:"int", default : 0}
    }

}
export default Db;
