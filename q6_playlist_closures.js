function createPlaylist(name) {
  const songs = [];
  return {
    add(song, artist) {
      songs.push({ song, artist });
    },
    list() {
      const summary = songs.map((s) => `${s.song} by ${s.artist}`).join(', ');
      return `${name} Playlist: ${summary}`;
    },
  };
}

function addSong(playlist, song, artist) {
  playlist.add(song, artist);
}

function listSongs(playlist) {
  console.log(playlist.list());
}

const myPlaylist = createPlaylist('My Favorites');
addSong(myPlaylist, 'Song1', 'Artist1');
addSong(myPlaylist, 'Song2', 'Artist2');
addSong(myPlaylist, 'Song3', 'Artist3');
listSongs(myPlaylist);
