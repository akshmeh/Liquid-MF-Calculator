import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
export default function App  () {
  const [ToggleState, setToggleState] = useState(1);
  const [fetchData, setFetchData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const dataFetch = async () => {
      try {
        const response = await fetch('/src/data/NAVAll.txt');
        const text = await response.text();
        const lines = text.split('\n');
        setFetchData(lines.filter((e)=>{ return e.charAt(0).match(/^\d+$/) }));
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    dataFetch()
  },[])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    loading?<div>Loading</div>:<div className="w-screen p-10 rounded">
    <ul className="tab-list">
      <li
        className={`tabs ${getActiveClass(1, "active-tabs")}`}
        onClick={() => toggleTab(1)}
      >
        Amount
      </li>
      <li
        className={`tabs ${getActiveClass(2, "active-tabs")}`}
        onClick={() => toggleTab(2)}
      >
        Units
      </li>
    
    </ul>
    <div className="content-container">
      <div className={`content ${getActiveClass(1, "active-content")}`}>
      <Calculator fetchData={fetchData} type={"Amount"}/>
       
      </div>
      <div className={`content ${getActiveClass(2, "active-content")}`}>
      <Calculator fetchData={fetchData}/>

      </div>
     
    </div>
  </div>
  
    
  );
}