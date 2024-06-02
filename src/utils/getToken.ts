const client_id="ca30a6150a2f4602a60fa4ee2e90ebbf"
const client_secret="f2bfabedaa6c4a3094f927f4e49b0c0c"


const getToken=async () =>{
  try{
    const res=await fetch("https://accounts.spotify.com/api/token",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded",
          "Authorization":`Basic ${ btoa(client_id + ":" + client_secret)}`
        },
        body:"grant_type=client_credentials"
      }
    );
    const auth=await res.json();
    localStorage.setItem("access_token", `${auth.token_type} ${auth.access_token}`);
  }
  catch(err){
    console.log(err);
  }
}

export default getToken