import { createContext, useState } from "react";

// 1. Creiamo il contesto
const BudgetContext = createContext();

// 2. Creiamo il provider
const BudgetProvider = ({ children }) => {
  //const [budgetMode, setBudgetMode] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  return (
    // <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
    //   {children}
    // </BudgetContext.Provider>
    <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
      {children}
    </BudgetContext.Provider>
  );
}
export { BudgetContext, BudgetProvider }