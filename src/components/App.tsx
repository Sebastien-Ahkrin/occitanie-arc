import { useQuery } from "react-query";
import proxy from "../utils/proxy";

export default function App() {
  const { isLoading, data } = useQuery("getScrapper", () =>
    proxy.get("scores/query.php")
  );

  if (isLoading || !data) {
    return null;
  }

  console.log(data);
  return <div>App</div>;
}
