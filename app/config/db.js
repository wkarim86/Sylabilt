import Realm from 'realm';
var realm;
class Db {

  constructor(){

    try{
      realm = new Realm({ schema : [Db.schema]});
    }catch(error){
      console.log(error);
    }



  }

  static schema = {
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

  // static UserSchema = {
  //   name : 'users',
  //   primaryKey: 'id',
  //   properties : {
  //     id : {type : 'int'},
  //     username : {type : 'string'},
  //     email : {type : 'string'},
  //     uid : {type: 'string', default : null},
  //     dob : {type : 'string', optional : true},
  //     phone : {type : 'string', optional :true},
  //     gender : {type :'int', optional : true},
  //     name : {type :'string', optional : true},
  //     school : {type :'string', optional : true},
  //     status : {type :'int', optional : true},
  //     isLoggedIn : {type:'bool', default : false},
  //     membership : {type: 'int', default: 0, optional : true}
  //
  //   }
  // }

  static get () {
    return realm.objects(Db.schema.name).filtered("id=1");
  }
  static getCount(){
    return realm.objects(Db.schema.name).length;
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
