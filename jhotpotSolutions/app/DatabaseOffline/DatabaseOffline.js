import SQlite from 'react-native-sqlite-storage';

export default class DatabaseOffline {
  constructor() {

    this.data = [];

    this.db = SQlite.openDatabase(
      {
        name: 'jhotpot_service_sqllite.db',
        createFromLocation: 1 //if database in www folder then 1 means the location/ if database in another location then put location like ~data/mydbfile.sqlite
      },
      this.successToOpenDB,
      this.failToOpenDB
    )
  }

  successToOpenDB = () => {

  }

  failToOpenDB = (err) => {
    console.warn(err)
  }

  get_categories(query, arg = []) {

    return new Promise((resolve, reject) => this.db.transaction((tx) => {
      tx.executeSql(query, [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          this.data.push(results.rows.item(i));
        }
        resolve(this.data);
      }, function (tx, error) {
        reject(error);
      });
    }))
  }

  get_categories_another(query, arg = [],callback) {

    this.db.transaction((tx) => {
      tx.executeSql(query, [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          this.data.push(results.rows.item(i));
        }
          callback(this.data)
      }, function (tx, error) {
          console.log('SELECT error: ' + error.message);
      });
  })
  }

}