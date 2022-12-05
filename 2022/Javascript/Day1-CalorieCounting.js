//PART ONE
let a = await fetch("https://adventofcode.com/2022/day/1/input").then(res=>res.text()).then(data=>{
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

//PART TWO
let a = await fetch("https://adventofcode.com/2022/day/1/input").then(res=>res.text()).then(data=>{
    let most = [0,0,0];
    data.split('\n\n').forEach(elf=>{
        let calories = 0;
        elf.split('\n').forEach(snack=>{
            calories+=parseInt(snack);
        })
        for(let i = 0; i<most.length; i++){
            if(calories>most[i]){
                most.splice(i,0,calories);
                most.pop();
                return;
            }
        }
    })
    return most[0]+most[1]+most[2];
}).catch(e=>console.error(e));
