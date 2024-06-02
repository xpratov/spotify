import getToken from "./getToken";

getToken()

const getPlaylists = async () => {
  try {
    let res = await fetch(" https://api.spotify.com/v1/browse/featured-playlists",
    {
      headers: {
        "Authorization": `${localStorage.getItem("access_token")}`
      }
    }
    );
    let {playlists}=await res.json();
    return playlists
    
  }
  catch(err){
    console.log(err);   
  }
}

export default getPlaylists;