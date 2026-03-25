let songs = JSON.parse(localStorage.getItem("songs")) || [];
let titleInput = document.getElementById("title");
let artistInput = document.getElementById("artist");
let table = document.getElementById("songTable");
let editingId = null;
  function renderSongs (data = songs) {
    table.innerHTML = "";
    data.forEach( song => { 
        let tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                <button onclick="editSong(${song.id})">Sửa</button>
                <button onclick="deleteSong(${song.id}">Xóa</button>
                </td>
        `;
        table.appendChild(tr);

        
    });
  }
  function handleSubmit() {
    let title = titleInput.value.trim();
    let artist = artistInput.value.trim();

    if (title === "" || artist === "") {
        alert("Không được để trống!");
        return;
    }

    if (editingId) {
        let song = songs.find(s => s.id === editingId);
        song.title = title;
        song.artist = artist;
        editingId = null;

        document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
        document.getElementById("submitBtn").innerText = "Thêm";
    } else {
        let song = {
            id: Date.now(),
            title,
            artist
        };
        songs.push(song);
    }

    localStorage.setItem("songs", JSON.stringify(songs));

    titleInput.value = "";
    artistInput.value = "";

    renderSongs();
}
function editSong(id) {
    let song = songs.find(s => s.id === id);

    titleInput.value = song.title;
    artistInput.value = song.artist;

    editingId = id;

    document.getElementById("formTitle").innerText = "✏️ Sửa bài hát";
    document.getElementById("submitBtn").innerText = "Cập nhật";
}
function deleteSong(id) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa?");

    if (!confirmDelete) return;

    songs = songs.filter(s => s.id !== id);

    localStorage.setItem("songs", JSON.stringify(songs));

    renderSongs();
}
function searchSong() {
    let keyword = document.getElementById("search").value.toLowerCase();

    let filtered = songs.filter(s =>
        s.title.toLowerCase().includes(keyword)
    );

    renderSongs(filtered);
}