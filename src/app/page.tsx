"use client";

export default function Home() {

  return (

    <div>

      <section style={{
        height:"90vh",
        backgroundImage:"url('/assets/hero.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        color:"white",
        textAlign:"center"
      }}>

        <h1 style={{fontSize:"50px", fontWeight:"bold"}}>
          Plataforma SaaS
        </h1>

        <p>Gestiona tu empresa de forma inteligente</p>

      </section>


      <section style={{padding:"60px", textAlign:"center"}}>

        <h2>Características</h2>

        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:"40px",
          marginTop:"40px"
        }}>

          <div>
            <h3>Gestión de Usuarios</h3>
            <p>Administra todos los usuarios del sistema</p>
          </div>

          <div>
            <h3>Panel de Control</h3>
            <p>Controla tu empresa desde un dashboard</p>
          </div>

          <div>
            <h3>Configuración</h3>
            <p>Personaliza tu plataforma</p>
          </div>

        </div>

      </section>


      <footer style={{
        padding:"30px",
        background:"#111",
        color:"white",
        textAlign:"center"
      }}>
         2026 Panel SaaS
      </footer>

    </div>

  );

}