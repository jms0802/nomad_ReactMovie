import {useState, useEffect} from "react"

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("all Run");
  useEffect(()=>{
    console.log("CAll API...");
  }, []);
  useEffect(()=>{
    if(keyword !== "" && keyword.length >5)
      console.log("SEARCH FOR ", keyword);
  }, [keyword]);
  return (
    <div>
      <input value={keyword} type="text" placeholder="Search here..." onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
