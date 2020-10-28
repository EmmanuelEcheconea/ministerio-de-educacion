import React from "react";
import {
  capOpenStorageOptions,
  capDataStorageResult,
  CapacitorDataStorageSqlite,
  capDataStorageOptions,
} from "capacitor-data-storage-sqlite";

const funcionesPrueba: any = async () => {
  const OpenStorage: capOpenStorageOptions = {
    database: "mi_bbdd",
    table: "usuario",
  };
  const openResult: capDataStorageResult = await CapacitorDataStorageSqlite.openStore(
    OpenStorage
  );

  if (openResult.result) {
    const dataStorageOptions: capDataStorageOptions = {
      key: "nombre",
      value: "Branko",
    };

    const result = CapacitorDataStorageSqlite.set(dataStorageOptions);
    console.log(result); // true
  }
};

export default funcionesPrueba;
