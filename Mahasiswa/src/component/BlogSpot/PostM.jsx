import React from "react";

const PostM = (props) => {
    return(
        <div class="post-artikel">
            <div class="artikel">
                <div class="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
                </div>
                <div class="konten-artikel">
                    <div class="judul-artikel"> {props.NIM} </div>
                    <p class="isi-artikel"> {props.Nama}</p>
                    <p class="isi-artikel"> {props.Alamat}</p>
                    <p class="isi-artikel"> {props.HP}</p>
                    <p class="isi-artikel"> {props.Angakatan}</p>
                    <p class="isi-artikel"> {props.Status}</p>
                    <button className="btn btn-sm btn-warning" onClick={props.hapusMahasiswa.bind(this, props.Id)}> Hapus </button>
                </div>
            </div>
        </div>
    )
}

export default PostM;