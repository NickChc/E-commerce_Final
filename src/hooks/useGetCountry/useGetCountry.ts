import { useState, useEffect } from "react";
import axios from "axios";
import { CACHED_COUNTRY_DATA } from "@src/config/localStorageCache";

export function useGetCountry() {
  interface TUserCountryInfo {
    country_calling_code: string;
    country: string;
    country_name: string;
    country_capital: string;
  }

  const [usersCountryInfo, setUsersCountryInfo] =
    useState<TUserCountryInfo | null>(null);

  async function getCountry() {
    try {
      const cachedCountryData = localStorage.getItem(CACHED_COUNTRY_DATA);
      if (cachedCountryData) {
        const localCountryData = JSON.parse(cachedCountryData);
        setUsersCountryInfo(localCountryData);
      } else {
        const response = await axios.get("https://ipapi.co/json/");
        setUsersCountryInfo(response?.data);
        localStorage.setItem(
          CACHED_COUNTRY_DATA,
          JSON.stringify(response.data)
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);

  return { usersCountryInfo, getCountry };
}
