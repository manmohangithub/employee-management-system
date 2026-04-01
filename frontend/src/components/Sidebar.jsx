
import {Link} from "react-router-dom";
export default ()=>(
 <div className="sidebar">
  <h3 style={{padding:"10px"}}>EMS</h3>
  <Link to="/">Dashboard</Link>
  <Link to="/employees">Employees</Link>
  <Link to="/login">Login</Link>
 </div>
);
