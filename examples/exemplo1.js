function esperarPor(time) {
   const futuro = Date.now() + time
      while(Date.now() < futuro) {} 
}

setInterval(() => console.table('exec01'), 5000)
setTimeout(() => {
   esperarPor(5000)
   console.log('exec02')
}, 700)


esperarPor(5000)
console.log(`finish`)