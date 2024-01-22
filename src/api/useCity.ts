import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { CityReport } from "./openGeoApi";
import { city } from "./mockData";

type Coordinates = { lat: number; lon: number; name: string };

type Options = {
  key: string | undefined;
  location: string;
  lang: string;
};

const getCoordinates = async (options: Options) => {
  const endpoint = "https://api.openweathermap.org/geo/1.0/direct";

  const { key: appid, location: q } = options;

  const { data } = await axios.get<[CityReport]>(endpoint, {
    params: { appid, q },
  });

  // Fallback if geo service returns an empty array
  const result: CityReport[] = data.length >= 1 ? data : city;

  const [{ lat, lon, name, local_names }] = result;
  const cityName = local_names
    ? local_names[options.lang.substring(0, 2)] ?? name
    : name;

  return { lat, lon, name: cityName };
};

export default function useCity(
  options: Options
): UseQueryResult<Coordinates, Error> {
  // Fallback if no location was specified
  options.location = options.location ?? city[0].name;
  const { location } = options;

  return useQuery<Coordinates, Error>(
    ["coordinates", location],
    () => getCoordinates(options),
    { enabled: !!location && !!options.key }
  );
}