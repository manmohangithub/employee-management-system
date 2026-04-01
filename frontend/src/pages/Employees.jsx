
import {useEffect,useState} from "react";
import API from "../api";
import {Link} from "react-router-dom";

export default function Employees(){
 const [list,setList]=useState([]);
 const [form,setForm]=useState({name:"",email:"",phone:"",position:"",salary:0});
 const [search,setSearch]=useState("");
 const [page,setPage]=useState(0);

 const fetch=()=>{
  API.get("/employees",{params:{search,page}}).then(r=>setList(r.data.data.content));
 };

 useEffect(()=>{fetch();},[page]);

 const add=()=> API.post("/employees",form).then(fetch);

 const del=(id)=> API.delete("/employees/"+id).then(fetch);

 const update=(id)=>{
  API.put("/employees/"+id,form).then(fetch);
 };

 return(
  <div>
   <h2>Employees</h2>

   <input placeholder="Search" onChange={e=>setSearch(e.target.value)}/>
   <button className="btn" onClick={fetch}>Search</button>

   <br/>

   <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
   <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
   <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
   <input placeholder="Position" onChange={e=>setForm({...form,position:e.target.value})}/>
   <input placeholder="Salary" type="number" onChange={e=>setForm({...form,salary:e.target.value})}/>

   <button className="btn" onClick={add}>Add</button>

   {list.map(e=>(
    <div key={e.id} className="card">
     <Link to={"/employees/"+e.id}>{e.name}</Link>
     <button className="btn" onClick={()=>del(e.id)}>Delete</button>
     <button className="btn" onClick={()=>update(e.id)}>Update</button>
    </div>
   ))}

   <button className="btn" onClick={()=>setPage(p=>Math.max(p-1,0))}>Prev</button>
   <button className="btn" onClick={()=>setPage(p=>p+1)}>Next</button>
  </div>
 )
}
