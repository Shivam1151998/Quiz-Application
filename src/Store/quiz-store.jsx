import { createContext } from "react";

const contextProvider=createContext();
function ContextProviderCompo({children}){
  return(
    <contextProvider>
      {children}
    </contextProvider>
  )
}
export default ContextProviderCompo;