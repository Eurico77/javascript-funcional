function esperarPor(time) {
   const futuro = Date.now() + time
      while(Date.now() < futuro) {} 
}

esperarPor(5000)
console.log(`finish`)