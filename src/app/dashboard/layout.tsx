import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function DashboardLayout({children}:any){

  return(

    <div style={{display:"flex"}}>

      <Sidebar/>

      <div style={{width:"100%"}}>

        <Navbar/>

        <div style={{padding:"20px"}}>
          {children}
        </div>

      </div>

    </div>

  )

}