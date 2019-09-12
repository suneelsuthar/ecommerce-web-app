// // let array = []
// // export default function passCartData(data,quantity){
// //     alert("hello world")
// //     console.log(data,quantity)
// //     array.push(data)
// //     localStorage.setItem("cartData" , JSON.stringify(array))
// //     localStorage.setItem("counter" , JSON.stringify(quantity))
    
// //     console.log(array)
// // }
import firebase  from "../config/database/firebase";



function signup(email,password){
  return new Promise ((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>resolve({email:res.user.email,uid:res.user.uid}
      )).catch((rej)=>reject(rej))
  })
}

function login(email,password){
  return new Promise ((resolve,reject)=>{
      firebase.auth().signInWithEmailAndPassword(email,password).then(res=>resolve(res.user)).catch((rej)=>reject(rej))
      console.log(email,password)
  })

}

// function logout (){
//   return new Promise ((resolve,reject)=>{
//       firebase.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
//   })

// }

// let LoginAdmin = (email,password,props) => {
//   return new Promise((resolve, reject) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(res => {
//       let obj={
//         email:res.user.email,
//         id:res.user.uid,
//       }
     
//       resolve(obj)
//     })
//     .catch(error => {
//         reject(error.code)
//         console.log('i am error')

//     });
    
//   });
// };


export{
    // LoginAdmin,
    signup,
    login,
    // logout
}