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
      username : {type : 'string'},
      email : {type : 'string'},
      uid : {type: 'string', default : null},
      isLoggedIn : {type:'bool', default : 0},
      membership : {type: 'int', default: 0},
      soundNotification : {type:'int', default : 0},
      pushNotification : {type:'int', default : 0}
    }
  }

  static get (realm : Realm) {
    return realm.objects(Db.schema.name);
  }
  static getCount(){
    return realm.objects(Db.schema.name).length;
  }

  insert(tableName, ...params){
    try{
        realm.write( ()=> {
          params.forEach((values) => {
            realm.create(tableName, values);
          })

        });
    }catch(error){
      console.log(error);
    }

  }

}
export default Db;
