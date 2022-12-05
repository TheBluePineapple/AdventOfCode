// A=rock(1), B=paper(2), C=scissors(3), Z=win(6), Y=draw(3), X=loss(0)
//calculate other elfs score
//WIN
    // their choice + 1, wrapped
//LOSE:
    // their choice - 1, wrapped
//TIE, choose same
let a = await fetch("https://adventofcode.com/2022/day/2/input").then(res=>res.text()).then(data=>{
    let score = 0;

    //Not strictly necessary, just want things to be readable
    //no 'magic' numbers
    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const win = 6;
    const tie = 3;
    const lose = 0;

    //really just reformatting it into a way I prefer
    let rounds = data.replaceAll(/A/g,rock).replaceAll(/B/g,paper).replaceAll(/C/g,scissors).replaceAll(/X/g,lose).replaceAll(/Y/g,tie).replaceAll(/Z/g,win).replaceAll(" ","").split("\n");
    rounds.pop();
  
    rounds.forEach(round=>{
        let them = parseInt(round.charAt(0));
        let outcome = parseInt(round.charAt(1));
        
        score+=outcome;
        if(outcome===win){
            score += (them+1>scissors?rock:them+1);
        }else if(outcome===lose){
            score += (them-1<rock?scissors:them-1);
        }else{
            score+=them;
        }
    })
    return score;
}).catch(e=>console.error(e));
