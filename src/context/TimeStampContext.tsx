import { createContext, useState } from "react"


interface ValueInterface {
  type: "weekly" | "monthly" | "daily";
  changeState: (value: "weekly" | "monthly" | "daily") => void;
}


const TimeStampContext = createContext<ValueInterface>({
  type: 'weekly',
  changeState: () => { }
});

const TimeStampProvider = ({ children }: any) => {
  const [type, setType] = useState<"weekly" | "monthly" | "daily">("weekly");
  const changeState = (value: "weekly" | "monthly" | "daily") => {
    setType(value);
  }

  return (
    <TimeStampContext.Provider value={{ type, changeState }}>
      {children}
    </TimeStampContext.Provider>
  )
}


export { TimeStampContext, TimeStampProvider }