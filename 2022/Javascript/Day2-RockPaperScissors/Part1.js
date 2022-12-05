// X/A=rock(1), Y/B=paper(2), Z/C=scissors(3), win=6, draw=3, loss=0
let a = await fetch("https://adventofcode.com/2022/day/2/input").then(res=>res.text()).then(data=>{
    let score = 0;

    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const win = 6;
    const tie = 3;
    
    let rounds = data.replaceAll(/A|X/g,rock).replaceAll(/B|Y/g,paper).replaceAll(/C|Z/g,scissors).replaceAll(" ","").split("\n");
    rounds.pop();
    rounds.forEach(round=>{
        let them = parseInt(round.charAt(0));
        let me = parseInt(round.charAt(1));

        score+=me;
        if(me-1===them||(me===rock&&them===scissors)){
            score+=win;
        }else if(me===them){
            score+=tie;
        }
    })
    return score;
}).catch(e=>console.error(e));
