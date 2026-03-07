const API_URL = "http://localhost:4000/api";

export async function loginUser(data:any){

  const res = await fetch(`${API_URL}/login`,{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body: JSON.stringify(data)

  });

  return res.json();

}