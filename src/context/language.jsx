import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "@/utils/axios";
import translations2 from "./translations";
export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const paramLan = searchParams.get("lan") || localStorage.getItem("lan") || 1;
  localStorage.setItem("lan", paramLan);
  const [lan, setLan] = useState(1);
  const [translations, setTranslations] = useState(translations2);
  const getTranslations = async () => {
    const res = await Axios({ url: `/api/ox/getlan?lan=${paramLan}` });
    setTranslations(res?.data);
    console.log(res?.data);
  };

  return (
    <LanguageContext.Provider
      value={{ lan, translations, getTranslations, setLan }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
