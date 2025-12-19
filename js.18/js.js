// Hodisalar

// const firstButton =  document.querySelector('firstButton'),
//     secondButton = document.querySelector('secondButton'),
//     thirdButton = document.querySelector('thirdButton')
// // console.log(btn);

// btn.onclick = function() {
//     console.log('Siz 1ni talladingiz');
    
// }

//  btn.onclick = function() {
//     console.log('Siz 2 tanladingiz');
    
//  }


//  btn.addEventListener('mouseenter', () => {
//     console.log('Siz 1 talladingiz');
    
//  })


//  btn.addEventListener('mouseleave', () => {
//     console.log('Siz 2 ni tanladingiz');
    
//  })

// firstButton.addEventListener('click', () => {
//     firstButton.innerHTML = ''
//     // console.log(e);
//     // e.target.textContext = 'Button'
//     // e.target.style.background = 'blue'
//     // e.target.remov()
//     // e.target.innerHTML = 'Salom'
// })


// secondButton.addEventListener('click', () => {
//     secondButton.remove()

// })

// thirdButton.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue'
//     document.body.innerHTML = "<img src='./a1.png'><img/>"
// })


// const item = document.querySelectorAll('li'),
//     btn = document.querySelector('button')

// item.forEach((title => {
//     title.addEventListener('click', (e) => {
//         e.target.style.opacity = '0.5'
//         e.target.style.textDecoration = 'lien-through'
//         e.target.style.color = 'red'
//             e.target.style.textDecoration = 'line-through'
//     })
// }))

// btn.addEventListener('click', () =>{
//   item.forEach(li => {
//     if(li.style.opacity === '0.5'){
//       li.remove()
//     }
//   })
// })

const item = document.querySelectorAll('li'),
      btn = document.querySelector('button'),
      ul = document.querySelector('ul')


item.forEach((title) => {
  title.addEventListener('click', (e) => {
    
    e.target.style.opacity = '0.5'
    e.target.style.textDecoration = 'line-through'
    
  })
})


btn.addEventListener('click', () =>{
  item.forEach(li => {
    if(li.style.opacity === '0.5'){
      li.remove()
    }
  })
})
