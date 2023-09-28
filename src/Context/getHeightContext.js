
import { createContext, useState } from "react";
export const getHeightContext = createContext();

export function GetHeightContextProvider(props) {
  const [height, setHeight] = useState(null);



  return (
    <getHeightContext.Provider
      value={{
        height,
        setHeight,
      }}
    >
      {props.children}
    </getHeightContext.Provider>
  );
}