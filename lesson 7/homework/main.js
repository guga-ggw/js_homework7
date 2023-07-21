const timetomake = document.getElementById('tomake');
const timetodeliver = document.getElementById('todeliver');
const timetosell = document.getElementById('tosell');
const btn = document.querySelector('#btn');



// const dawera = btn.addEventListener('click', () => {
    
//   let tomake = timetomake.value;
//   let todeliver = timetodeliver.value;
//   let tosell = timetosell.value;
//   tomake = Number(tomake) * 1000
//   todeliver = Number(todeliver) * 1000
//   tosell = Number(tosell) * 1000
 
//   const make = (dro) =>{
//     const prms = new Promise((resolve, reject) => {
//         if(Math.random() > 0.1) {
//         setTimeout(() => resolve('succes'), dro)
//     }
//         else reject('failed to make toy')
//     })
//     return prms
//   }

//   const deliver = (info, dro) =>{
//     const deliverToys = new Promise((resolve, reject) => {
//         if(info == 'succes' && Math.random() > 0.1) {
//             setTimeout(() => resolve('delivered'), dro)
//         }
//         else reject('toy was made but failed while diliver')
//     })
//     return deliverToys
//   }

//   const sell = (info, dro) =>{
//     const selltoys = new Promise((resolve, reject) => {
//         if(info === 'delivered' && Math.random() > 0.3) setTimeout(() => resolve('toy was made and sold, well done'), dro)
//         else reject('failed to sell')
//     })
//     return selltoys
//   }

//   make(tomake).then(res => deliver(res, todeliver)).then(res => sell(res, tosell)).then(res => console.log(res)).catch(err => console.log(err))
  

// });


const dawera = btn.addEventListener('click', () => {
    
    let tomake = timetomake.value;
    let todeliver = timetodeliver.value;
    let tosell = timetosell.value;
    tomake = Number(tomake) * 1000
    todeliver = Number(todeliver) * 1000
    tosell = Number(tosell) * 1000
   
    async function make(dro) {
          if(Math.random() > 0.1)  return setTimeout(() =>  'succes', dro)
          else return 'failed to make'
      }
    async function deliver(info, dro) {
          if(info == 'succes' && Math.random() > 0.1)  return  setTimeout(() => 'delivered', dro)
          else return 'toy was made but failed while diliver'
      }
    
    async function sell(info, dro) {

          if(info === 'delivered' && Math.random() > 0.3) return setTimeout(() => 'toy was made and sold, well done', dro)
          else return 'failed to sell'
    }
  
    async function profit() {
        try{
            const ismade = await make(tomake)
            const isdelivered = await deliver(ismade, todeliver)
            const issold = await sell(isdelivered, tosell)
            console.log(issold)
        } catch(err){
            console.log(err)
        }
    }
    profit()
  
  });