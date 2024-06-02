async function getPlaylistById(playlistId) {
  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: 'GET',
      headers: {
        'Authorization': `${localStorage.getItem("access_token")}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Playlistni olishda xatolik yuz berdi:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
    return null;
  }
}

export default getPlaylistById;

