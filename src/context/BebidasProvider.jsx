import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext()
{
  return (
    <BebidasContext.Provider
      value={{
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export {
  BebidasProvider
}


export default BebidasContext