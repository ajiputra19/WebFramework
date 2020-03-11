import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import './index.css';
import StateFullComponent from './container/StateFullComponent';
import BlogPost from './container/BlogPost/BlogPost';
import Mahasiswa from './container/BlogPost/Mahasiswa'


// const Helloword = () =>{
//     return <p> Ini Adalah Arrow Function</p>
// }

//  class StepfullComponent extends React.Component {
//      render(){
//          return <p> Ini Adalah Arrow Function</p>
//      }
//  }
ReactDOM.render(<Mahasiswa/>, document.getElementById('content'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
