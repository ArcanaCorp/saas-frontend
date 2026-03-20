"use client";


export default function MetricsCards(){

  const metrics = [
    {title:"Usuarios", value:120},
    {title:"Ventas", value:85},
    {title:"Visitas", value:2300},
    {title:"Ingresos", value:"$3200"}
  ];

  return(

    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
      gap:"20px",
      marginBottom:"40px"
    }}>

      {metrics.map((metric,index)=>(
        <div key={index} style={{
          border:"1px solid #ddd",
          padding:"20px",
          borderRadius:"8px"
        }}>

          <h3>{metric.title}</h3>

          <p style={{fontSize:"28px", fontWeight:"bold"}}>
            {metric.value}
          </p>

        </div>
      ))}

    </div>

  )

}