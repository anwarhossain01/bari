/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SQLite from 'react-native-sqlite-storage';

 var db = SQLite({ name: '~db.sqlite' });

export default class App extends React.Component {
  constructor() {
    super();
    SQLite.DEBUG = true;
  }

  /**
  * Execute sql queries
  * 
  * @param sql
  * @param params
  * 
  * @returns {resolve} results
  */
  // ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
  //   db.transaction((trans) => {
  //     trans.executeSql(sql, params, (trans, results) => {
  //       resolve(results);
  //     },
  //       (error) => {
  //         reject(error);
  //       });
  //   });
  // });
  componentDidMount()
  {
    alert(1);
    this.CreateTable();
  }

  componentWillMount()
  {
    alert(7);
  }
  // Create Table
  async CreateTable() {alert(8);
    let Table = await this.ExecuteQuery("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, first_name VARCHAR(16), last_name VARCHAR(16), is_deleted INTEGER)",[]);
    console.log(Table);
  }

  render()
  {
    this.CreateTable();

    return(<View>
      <Text>HIiii</Text>
    </View>);

  }
  

}