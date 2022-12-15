var priority = function(char){  
    if(char.toLowerCase()===char){
        return char.charCodeAt(0)-96;
    }else{
        return char.charCodeAt(0)-38;
    }
}
let a = await fetch("https://adventofcode.com/2022/day/3/input").then(res=>res.text()).then(data=>{
    let rucksacks = data.split("\n");
    rucksacks.pop();
    let total=0;
    for(let i = 0; i<rucksacks.length; i++){
        let r = rucksacks[i];
        let c1 = r.substring(0,r.length/2);
        let c2 = r.substring(r.length/2);
        for(let j = 0; j<c1.length;j++){
            if(c2.indexOf(c1.charAt(j))>=0){
                total+=priority(c1.charAt(j));
                break;
            }
        }
    }
    return total;
}).catch(e=>console.error(e));
