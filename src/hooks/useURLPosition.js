import { useSearchParams } from "react-router-dom";

export function useURLPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("Lat");
  const lng = searchParams.get("Lng");
  return [lat, lng];
}
