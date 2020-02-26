import React, { Component } from 'react';
import { Jumbotron, Card, Row, Col, Media, Container, ListGroup } from 'react-bootstrap';
import './App.css';

export default class Subheader extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <Jumbotron className="bb" style={{padding: "0px", marginBottom: "0px", borderRadius: "0px", backgroundColor: "white"}}>
                        <Container>
                            <Row>
                                <Col className="right" style={{padding: "0px 25px", paddingTop: "45px"}}>
                                    <div className="br">
                                        <h2 className="title">Hi..</h2>
                                        <h2 className="subtitle">My Name is Aji</h2>
                                        <h2 className="subtitle">Nice To Meet You :)</h2>
                                    </div>
                                    <p className="content">Serahkan Semua pada Yang Maha Kuasa.</p>
                                </Col>
                                <Col className="box-img" lg="3">  
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </div>
                
                <Container>
                    <Jumbotron style={{ paddingTop: "20px", marginBottom: "0px", borderRadius: "0px", backgroundColor: "white"}}>
                        <h1 className="title">Portofolio</h1>
                            <Row>
                                <Col>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ paddingLeft: "0px" }}>
                                            <h3 className="title">Ketua Bidang Humas</h3>
                                            <p className="subcontent">Usaha untuk membangun dan mempertahankan reputasi, citra dan komunikasi yang baik dan bermanfaat antara organisasi dan masyarakat. Kesuksesan atau kegagalan dari sebuah organisasi dapat dipengaruhi oleh kegiatan humas atau Public Relations (PR).</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ paddingLeft: "0px" }}>
                                            <h3 className="title">Sekretaris OSIS</h3>
                                            <p className="subcontent">Mendampingi ketua dalam memimpin setiap rapat. Menyiarkan, mendistribusikan dan menyimpan surat serta arsip yang berhubungan dengan pelaksanaan kegiatan. Menyiapkan laporan, surat, hasil rapat dan evaluasi kegiatan</p>
                                            </ListGroup.Item>
                                        <ListGroup.Item style={{ paddingLeft: "0px" }}>
                                            <h3 className="title">Ketua Paskibra</h3>
                                            <p className="subcontent">Pasukan Pengibar Bendera Pusaka dengan tugas utamanya mengibarkan duplikat bendera pusaka dalam upacara peringatan proklamasi kemerdekaan Indonesia di 3 tempat, yakni tingkat Kabupaten/Kota, Provinsi, dan Nasional. </p>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                            
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                    </Jumbotron>
                </Container>   
            </div>
        );
    }
}