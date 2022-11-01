export default function App() {
  
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <>
      <input
        value={currentSearch}
        onChange={e => {
          setCurrentSearch(e.target.value);
          startTransition(() => setSearch(e.target.value));
        }}
      />
      {isPending ? "refreshing..." : null}
      <SlowResults query={search} />
    </>
  );
}
