import React from 'react';
import './App.css';
import {api} from './config/function'





class App extends React.Component{

constructor(){
  super()
  this.state={
    images:""
  }
}

  
//   async componentDidMount(prestate, preprops){
//     let x = await api();
//     console.log(x);
//     this.setState({
//       images:x
//     })
//   }


//   render(){
//     let {images} = this.state;
//     console.log(images)
//     return(
//       <div>
//       {images && images.map((data,i)=><img src={data.download_url} key={i} height="100" width="250"/>)}
//       </div>
//     )
//   }
// }

// export default App;










// funtion.js
// import { resolve, reject } from "q";
// function api(){

//     return new Promise((resolve,reject)=>{
//         fetch("https://picsum.photos/v2/list?page=2&limit=50")
//         .then(res => res.json())
//         .then(value => resolve(value))
//         .catch(err => reject(err))
//     })
// }

// export {api}
