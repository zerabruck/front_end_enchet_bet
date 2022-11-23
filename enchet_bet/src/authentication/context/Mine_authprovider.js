import { createContext,React, useState } from "react";

export const context=createContext({})



function Mine_authprovider({children}) {
    const [auth,setauth]=useState({})
  return (
    <div>
        <context.Provider value={{auth,setauth}}>
            {children }

        </context.Provider>
    </div>
  )
}

export default Mine_authprovider