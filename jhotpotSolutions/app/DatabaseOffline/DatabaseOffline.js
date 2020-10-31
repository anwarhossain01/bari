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

  /**
  * Execute sql queries
  * 
  * @param sql
  * @param params
  * 
  * @returns {resolve} results
  */

  //https://medium.com/infinitbility/react-native-sqlite-storage-422503634dd2

  executeQuery(sql, params = []) {

    return new Promise((resolve, reject) => this.db.transaction((tx) => {
      tx.executeSql(sql, params, (tx, results) => {

        resolve(results);

      }, function (tx, error) {
        reject(error);
      });
    }))
  }




  async get_all_categories() {
    let sql = "SELECT * FROM ad_category ";
    let params = [];

    let results = await this.executeQuery(sql);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }


  async get_all_divisions() {
    let sql = "SELECT * FROM division ";

    let results = await this.executeQuery(sql);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }


  async get_districts_for_selected_division(division_id) {
    let sql = "SELECT * FROM district where ref_district_division_id=? ";
    let params = [division_id]
    let results = await this.executeQuery(sql, params);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }


  async get_policeStation_for_selected_district(district_id) {
    let sql = "SELECT * FROM upazila where ref_upazila_district_id=? ";
    let params = [district_id]
    let results = await this.executeQuery(sql, params);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }

  async get_all_product_categories() {
    let sql = "SELECT * FROM product_category Where product_category_active = 1 ";
    let results = await this.executeQuery(sql);

    let returnData = [];


    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }

  async get_all_job_category() {
    let sql = "SELECT * FROM job_category Where job_category_active = 1";
    let results = await this.executeQuery(sql);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }

  async get_all_business_types() {
    let sql = "SELECT * FROM food_business_type Where food_business_type_active = 1";
    let results = await this.executeQuery(sql);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }

  async get_all_blood_groups() {
    let sql = "SELECT * FROM blood_groups";
    let results = await this.executeQuery(sql);

    let returnData = [];

    for (let i = 0; i < results.rows.length; ++i) {
      returnData.push(results.rows.item(i));
    }

    return returnData;
  }
}