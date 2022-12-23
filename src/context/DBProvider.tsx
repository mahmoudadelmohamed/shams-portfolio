import React from 'react';
import {
  useEffect,
  useState
} from "react";
import {
  initFirebaseApp,
  watchDB,
} from "../utilis/firebase";
import {
  DBContext, DBContextProps,
} from "./DBContext";

export const DBProvider: React.FC<React.PropsWithChildren> = (props) => {
  const {
    children,
  } = props;
  const [db, setDB] = useState({} as DBContextProps);
  useEffect(() => {
    initFirebaseApp();
    const unsubscribe = watchDB(setDB);
    return () => {
      unsubscribe();
    };
  }, [setDB]);

  return (
    <DBContext.Provider
      value={db}
    >
      {children}
    </DBContext.Provider>
  )
}