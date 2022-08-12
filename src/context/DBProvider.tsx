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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    initFirebaseApp();
    const unsubscribe = watchDB(setDB);
    setIsLoading(true);
    return () => {
      unsubscribe();
    };
  }, [setDB]);
  if (!isLoading) {
    console.log('Loading...', 'FIND_ME');
  }
  else {
    console.log(db, 'FIND_ME');
  }
  return (
    <DBContext.Provider
      value={db}
    >
      {children}
    </DBContext.Provider>
  )
}