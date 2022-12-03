//answer: 72017
let a = await fetch("https://adventofcode.com/2022/day/1/input", {
  "method": "GET",
}).then(res=>res.text()).then(data=>{
    let most = 0;
    data.split('\n\n').forEach(elf=>{
        let calories = 0;
        elf.split('\n').forEach(snack=>{
            calories+=parseInt(snack);
        })
        if(calories>most){
            most = calories;
        }
    })
    return most;
}).catch(e=>console.error(e));
