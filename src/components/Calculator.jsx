import { useState } from "react"

/* eslint-disable react/prop-types */
export default function Calculator({fetchData,type}){
    const [result, setResult] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [mutualfund, setMutualFund] = useState([]);
    
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            setTimeout(() => {
                
                const filteredData = 
                fetchData.filter((e)=> e.toLowerCase().includes(searchInput.toLowerCase()) ?e:"")
                setFilteredResults(filteredData)
            }, 2000);
        }else{
            setFilteredResults([])
        }
        
    }
   function handleAmount(text){
    
    setResult(text/mutualfund[4]);
   }
   function handleUnits(text){
    setResult(text*mutualfund[4]);
   }
    function handleEachMF (text){
        const data = fetchData.filter((e)=>  e.split(";")[3] == text);
        setMutualFund(data[0].split(";"))
        setFilteredResults([])
    }
    return(<>
    <div className="w-full flex justify-center flex-col items-center p-5">
    {type=="Amount"?<h1 className="font-bold text-5xl mb-8">Amount Calculator</h1>:<h1 className="font-bold text-5xl mb-8">Units Calculator</h1>}
        <input type="text" onChange={(e) => searchItems(e.target.value)} className="md:w-1/2 p-3 rounded mb-8 w-full" placeholder="Search your Mutual Fund..."/>
        {filteredResults.map((e,i)=>{
            if(i<6){
                
                return <div key={i} onClick={()=>{handleEachMF(e.split(";")[3])}} role="button" className="w-full border-b p-3 bg-white hover:bg-slate-400 hover:text-white">{e.split(";")[3]}</div>
            }
        })}
        {mutualfund.length!=0?<div className="w-100"><h2 className="font-bold text-3xl mb-8">Mutual Fund Name: <span className="font-normal">{mutualfund[3]}</span></h2>
        <h3 className="font-bold text-2xl mb-8">NAV: <span className="font-normal">{mutualfund[4]}</span></h3>
      
        {type=="Amount"? <div className="flex gap-4 items-center  flex-col md:flex-row">
        <label htmlFor="num" className="font-bold text-2xl">Amount:</label>
        <input type="number" name="num" id="num" onChange={(e)=>{handleAmount(e.target.value)}}  className="p-3 rounded"/>
        <h2 className="font-bold text-2xl">Units: <span className="font-normal">{result}</span></h2>
        </div>: <div className="flex gap-4 items-center flex-col md:flex-row">
        <label htmlFor="num" className="font-bold text-2xl">Units:</label>
        <input type="number" name="num" id="num" onChange={(e)=>{handleUnits(e.target.value)}} className="p-3 rounded"/>
        <h2 className="font-bold text-2xl">Amount: <span className="font-normal">{result}</span></h2>
        </div>}</div>:""}
        
       
    </div>
    </>)
}