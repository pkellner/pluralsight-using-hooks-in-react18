import { useState, useTransition } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    const results = GetDataFromREST("/data");
    startTransition(() => setData(results));
  });
  
  return (
    <>
      <span>{isPending ?  SPINNER : NULL}</span >
      <InputSearch search={searchTerm} 
         onChange={(val) => setSearch(val)}  />
      <SlowResults query={search}
                        data={data} />
    </>
  );
}
