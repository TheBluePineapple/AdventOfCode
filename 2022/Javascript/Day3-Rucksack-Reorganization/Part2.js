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
    for(let i = 0; i<rucksacks.length; i+=3){
        let group = rucksacks.slice(i,i+3);
        
        let smallest = group.reduce(function(a, b) {
            return a.length <= b.length ? a : b;
        })

        group = group.filter(e=>e!==smallest);
        
        let letterIndex = 0;
        while(letterIndex<smallest.length){
            let letterOccurances = 0;
            for(let r = 0; r<group.length; r++){
                if(group[r].includes(smallest.charAt(letterIndex))){
                    letterOccurances++;
                }else{
                    letterIndex++;
                }
            }
            if(letterOccurances===group.length){
                total+=priority(smallest.charAt(letterIndex));
                break;
            }
        }
    }
    return total;
}).catch(e=>console.error(e));
