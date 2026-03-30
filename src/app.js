
 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  
  for (let pronoun1 = 0; pronoun1 < pronoun.length ; pronoun1++){
     for (let adj1 = 0; adj1 < adj.length ; adj1++){
       for (let noun1 = 0; noun1 < noun.length ; noun1++){
    console.log(pronoun[pronoun1] + adj[adj1] + noun[noun1] + ".com");
  }
 }
}
 function web () {
  let dominios =""
pronoun.forEach((pronoun2) =>{
  adj.forEach((adj2) => {
    noun.forEach((noun2) => {
      dominios +=`${pronoun2}${adj2}${noun2}.com<br>`
     
    })
   })
  })
 return dominios
}

//window.onload = () => {
//document.querySelector("#nombre").innerHTML = web();}