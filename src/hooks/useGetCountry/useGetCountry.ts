import axios from "axios";
import { useState, useEffect } from "react";

export function useGetCountry() {
  interface TUserCountryInfo {
    country_calling_code: string;
    country: string;
    country_name: string;
    country_capital: string;
  }

  const [usersCountryInfo, setUsersCountryInfo] = useState<TUserCountryInfo | null>(
    null
  );

  async function getCountry() {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      setUsersCountryInfo(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);

  return { usersCountryInfo, getCountry };
}
