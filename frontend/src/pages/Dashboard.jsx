
import {useEffect,useState} from "react";
import API from "../api";

export default function Dashboard(){
 const [data,setData]=useState({});
 useEffect(()=>{API.get("/dashboard/stats").then(r=>setData(r.data));},[]);
 return(
  <div>
   <h2>Dashboard</h2>
   <div className="card">Total Employees: {data.totalEmployees}</div>
  </div>
 )
}
