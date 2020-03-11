import React, {Component} from "react";
import './BlogPost.css';
import PostM from "../../component/BlogSpot/PostM";

class Mahasiswa extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id : 1,
            NIM : "",
            Nama : "",
            Alamat : "",
            HP : "",
            Angkatan : "",
            Status : ""
        }
    }
    
    ambilDataDariServerAPI(){
        fetch('http://localhost:3001/Mahasiswa')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa(data){
        fetch('http://localhost:3001/Mahasiswa/' + data, {method:'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = (event) => {
        fetch('http://localhost:3001/Mahasiswa', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        }
        )
    }

    render(){
        return(
            <div class="post-Mahasiswa">
                <div className="form pb-2 border-bottom">
                    <h2> Form Tambah Mahasiswa </h2>
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label"> NIM </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="NIM" type="text" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Nama" className="col-sm-2 col-form-label"> Nama </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="Nama" type="text" name="Nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Alamat" className="col-sm-2 col-form-label"> Alamat </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="Alamat" type="text" name="Alamat" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="HP" className="col-sm-2 col-form-label"> HP </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="HP" type="text" name="HP" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Angkatan" className="col-sm-2 col-form-label"> Angakatan </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="Angkatan" type="text" name="Angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Status" className="col-sm-2 col-form-label"> Status </label>
                        <div className="col-sm-10">
                            <input ClassName="form-control" id="Status" type="text" name="Status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}> Simpan </button>
                </div>
                <h2> Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(Mahasiswa => {
                        return <PostM key={Mahasiswa.id} Id={Mahasiswa.id} NIM={Mahasiswa.NIM} Nama={Mahasiswa.Nama} Alamat={Mahasiswa.Alamat} HP={Mahasiswa.HP} Angkatan={Mahasiswa.Angkatan} Status={Mahasiswa.Status} hapusMahasiswa={() => this.handleHapusMahasiswa(Mahasiswa.id)}/>
                    })
                }
            </div>
        )
    }
}

export default Mahasiswa;