import SQlite from 'react-native-sqlite-storage';

export default class  DatabaseOffline {
    constructor() {


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

      executeQuery(query,arg=[])
      {
        this.db.transaction((tx) => {
            let temp = [];
            tx.executeSql(query, arg, (tx, results) => {
              
              for (let i = 0; i < results.rows.length; ++i)
              {
                temp.push(results.rows.item(i));
              }
                console.log(temp);
              return temp;
            }, (error) => {
                return temp;
            });
      
          })
      }

      getAllCategoryDetails()
      {
          let query="SELECT * FROM ad_category ";
          return this.executeQuery(query);;

      }
}