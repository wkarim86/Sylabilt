import Realm from 'realm';
var realm;
class Db {

  constructor(){

    try{
      realm = new Realm({ schema : [Db.SettingsSchema, Db.UserSchema]});
    }catch(error){
      console.log(error);
    }



  }

  static SettingsSchema = {
    name : 'settings',
    primaryKey: 'id',
    properties : {
      id : {type : 'int'},
      isLoggedIn : {type:'bool', default : false},
      memebershipId : {type : 'int', default : 0, optional : true},
      soundNotification : {type:'int', default : 0, optional : true},
      pushNotification : {type:'int', default : 0, optional: true}
    }
  }

  static UserSchema = {
    name : 'users',
    primaryKey: 'id',
    properties : {
      id : {type : 'int'},
      user_id : {type : 'int', optional: true},
      username : {type : 'string', optional: true},
      name : {type :'string', optional : true},
      email : {type : 'string', optional: true},
      dob : {type : 'string', optional : true},
      phone : {type : 'string', optional :true},
      gender : {type :'int', optional : true},
      school : {type :'string', optional : true},
      status : {type :'int', default :0,  optional : true}
    }
  }

  static get (schema) {
    return realm.objects(schema.name).filtered("id=1");
  }
  static getCount(schema){
    return realm.objects(schema.name).length;
  }

  insert(...params){
    try{
        realm.write( ()=> {
          params[0].values.forEach((value) => {
            realm.create(params[0].schema, value, params[0].isUpdate);
          })

        });
    }catch(error){
      console.log(error);
    }

  }

}
export default Db;
