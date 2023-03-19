import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase("items.db");

const dropTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "drop table users",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log("error dropping table");
          reject(error);
        }
      );
    });
  });
};

const createTable = async () => {
  console.log(`db --> ${db}`);

  await db.transaction(
    (tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);",
        [],
        () => {
          return true;
        }
      );
    },
    {},
    () => {
      console.log("Transaction successful");
    }
  );

  await db.transaction((tx) => {
    tx.executeSql(
      "insert into items (done, value) values (0, 'Jack')",
      [],
      (tx, results) => {
        console.log(`Inserted items - ${tx}`);
      }
    );
    tx.executeSql("select * from items", [], (_, { rows }) => {
      console.log("-------------------");
      console.log("Fetch items - ", JSON.stringify(rows._array));
    });
  }, null);
};

const insertItems = async () => {
  await db.transaction((tx) => {
    tx.executeSql(
      "insert into items (done, value) values (0, 'Jack')",
      [],
      (tx, results) => {
        console.log("-------------------");
        console.log("inserting - ", JSON.stringify(results.rows));
        return JSON.stringify(results.rows);
      }
    );
  }, null);
};

const getItems = async () => {
  await db.transaction((tx) => {
    tx.executeSql("select * from items", [], (tx, { rows }) => {
      console.log(`Returning all items`, rows);
      return JSON.stringify(rows);
    });
  }, null);
};

export const database = { createTable, insertItems, getItems };
