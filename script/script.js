// // setTimeout(()=>{
// //     console.log('r1');
// //     setTimeout(()=>{
// //         console.log('r2');
// //         setTimeout(()=>{
// //             console.log('r3');
// //             setTimeout(()=>{
// //                 console.log('r1+r2+r3 / 3');
// //             },2000)
// //         },2000)
// //     },3000)
// // },4000)


// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('start process');
//         resolve()
//         // reject('bad idea')
//     },2000)
// })
// .then(()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const car ={
//                 brand: 'tesla',
//                 model: 'x'
//             }
//             console.log('you want to buy: ', car.brand , car.model);
//             // reject('not enough money')
//             // resolve()
//             resolve(car)
//         },2000)
//     })
// })
// .then(()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(('CTO cheking...'));
//              const car ={
//                 brand: 'tesla',
//                 model: 'x',
//                 techStatus: 'checked'
//             }
//             // car.techStatus = 'cheked'
//             console.log('technical status', car.techStatus);
//             resolve(car)
//             // reject('technical status is bad')
//         },2000)
//     })

// })
// .then(()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('police checking...')
//             const car ={
//                 brand: 'tesla',
//                 model: 'x',
//                 techStatus: 'checked',
//                 policeStatus: 'checked'
//             }
//             console.log('policeStatus: - ', car.policeStatus);
//             resolve(car)
//             // reject('policeStatus: -arest')
//         },2000)
//     })
// })
// .then(()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("Car status...");
//             const car ={
//             brand: 'tesla',
//             model: 'x',
//             techStatus: 'checked',
//             policeStatus: 'checked',
//             status: 'status bought'
//             }
//         console.log("Car status: ", car.status);
//         // resolve(car)
//         reject('oops!')
//         },2000)
        

//     })
// })
// .then((car)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('You bought Tesla!');
//             console.log(car);
//             resolve()
//         },2000)
//     })
// })


// .catch((error) =>{
//     console.error(error);
// })
// .finally(()=>
//     console.log('FINISH'));




// ! Створіть функцію, яка повертає Promise зі значенням, яке ви передаєте у якості   аргументу
    
// function returnPromiseValue(value){
//     return new Promise((resolve, reject) =>{
//         resolve(value)
//     })
// }

// returnPromiseValue("hello")
// .then((value)=>{
//     console.log(value);
// })





// Оформлення документів для отримання візи у Канаду
 
// Зробіть перевірку чи всі документи є за допомогою Promise.
 
// -тобто якщо в людини є "Дійсний закордонний паспорт" тоді можем переходити до наступного кроку "Cкан-копії всіх сторінок закордонного паспорта"
// якщо є і скан-копії тоді можем переходити далі........
// Список що потрібно для подачі документів для візи в Канаду:
// 1. Дійсний закордонний паспорт;
// 2. Cкан-копії всіх сторінок закордонного паспорта;
// 3. Український паспорт з усіма заповненими сторінками;
// 4. Свідоцтво про шлюб чи розлучення;
// 5. Свідоцтва про народження дітей при наявності;
// 6. Виписку з банківського рахунку за останні пів року.
 
// Якщо хоч одного пункта не заповнено то зробити "Відмову в поданні на візу в Канаду"!!!!!!!!!!!

  const myDocuments = {
  zakPassport: document.getElementById("zakPassport").checked,
  scansZakPassport: document.getElementById("scansZakPassport").checked,
  passport: document.getElementById("passport").checked,
  marriageOrDivorceCert: document.getElementById("marriageOrDivorceCert").checked,
  birthCerts: document.getElementById("birthCerts").checked,
  bankStatement: document.getElementById("bankStatement").checked,
};

// const myDocuments = {
//   zakPassport: true,
//   scansZakPassport: true,
//   passport: true,
//   marriageOrDivorceCert: true,
//   birthCerts: true,
//   bankStatement: true,
// };

function applyForCanadianVisa(myDocuments) {
  return new Promise((resolve, reject) => {
    // if (myDocuments.zakPassport === false) {
      if (myDocuments.zakPassport === false) {
      reject("Відмова в поданні на візу в Канаду: Почніть з кроку №1. Потрібен дійсний закордонний паспорт");
    } else {
      resolve(myDocuments);
    }
  })
  .then((myDocuments) => {
    // if (myDocuments.scansZakPassport === false) {
      if (myDocuments.scansZakPassport === false) {
      throw new Error("Відмова в поданні на візу в Канаду: Почніть з кроку №2 . Потрібен Скан-копій всіх сторінок закордонного паспорту");
    } else {
      return myDocuments;
    }
  })


  .then((myDocuments) => {
    // if (myDocuments.passport === false) {
      if (myDocuments.passport === false) {
      throw new Error("Відмова в поданні на візу в Канаду: Почніть з кроку №3. Потрібен Українського паспорт з усіма заповненими сторінками");
    } else {
      return myDocuments;
    }
  })
  .then((myDocuments) => {
    // if (myDocuments.marriageOrDivorceCert === false) {
      if (myDocuments.marriageOrDivorceCert === false) {
      throw new Error("Відмова в поданні на візу в Канаду: Почніть з кроку №4. Потрібне Свідоцтво про шлюб чи розлучення");
    } else {
      return myDocuments;
    }
  })
  .then((myDocuments) => {
    // if (myDocuments.marriageOrDivorceCert === false) {
      if (myDocuments.birthCerts === false) {
      throw new Error("Відмова в поданні на візу в Канаду: Почніть з кроку №5. Потрібно Свідоцтва про народження дітей при наявності");
    } else {
      return myDocuments;
    }
  })

  .then((myDocuments) => {
    // if (myDocuments.bankStatement === false) {
      if (myDocuments.bankStatement === false) {
      throw new Error("Відмова в поданні на візу в Канаду: Почніть з кроку №6. Потрібні виписки з банківського рахунку за останні пів року");
    } else {
      return myDocuments;
    }
  })
  .then((myDocuments) => {
    return "Ваші документи успішно перевірені. Ви можете подати заявку на отримання візи в Канаду.";
   
  })
  .catch((error) => {
    return Promise.reject(error);
    // console.log(error);

  });

  
}


// applyForCanadianVisa(myDocuments)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// function go (){
//   applyForCanadianVisa(myDocuments)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// }

function go() {
  const myDocuments = {
    zakPassport: document.getElementById("zakPassport").checked,
    scansZakPassport: document.getElementById("scansZakPassport").checked,
    passport: document.getElementById("passport").checked,
    marriageOrDivorceCert: document.getElementById("marriageOrDivorceCert").checked,
    birthCerts: document.getElementById("birthCerts").checked,
    bankStatement: document.getElementById("bankStatement").checked,
  };
  applyForCanadianVisa(myDocuments)
    // .then((result) => console.log(result))
    
    .then((result) =>  document.getElementById('res').innerHTML = `
    Ваші документи успішно перевірені. Ви можете подати заявку на отримання візи в Канаду.
    `)
    // .catch((error) => console.log(error));
    .catch((error) => document.getElementById('res').innerHTML = `${error}
    `);
}

const btn = document.getElementById('btn')
btn.addEventListener('click', go)



// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('btn')
//   btn.addEventListener('click', go)
// });




