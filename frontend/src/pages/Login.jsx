
import {useNavigate} from "react-router-dom";
export default function Login(){
 const nav=useNavigate();
 return(
  <div>
   <h2>Login</h2>
   <input placeholder="Email"/>
   <input placeholder="Password"/>
   <button className="btn" onClick={()=>nav("/")}>Login</button>
  </div>
 )
}
