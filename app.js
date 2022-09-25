const fs = require('fs')

//Read the csv file
const data = fs.readFileSync('./data.csv', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

//The main function. 
const raffle = () => {

    //There can only be 5 winners.
    let possibleWinners = 5
    let winners = []
    
    //Convert the csv to array without line breaks.
    const csvArray = data.split("\r\n")

    for(let i = 0; i < csvArray.length; i++){
        while(possibleWinners > 0){
            const participants = csvArray[Math.floor(Math.random() * csvArray.length)]
            //In this verification I multiply by 2 to be sure there are no duplicate winners. I wanted to make it simple.    
            if(!winners.includes(participants) * 2){
                winners.push(participants)
                possibleWinners-- 
            }             
        }
    }

    return `These are winners: ${winners} `
}

console.log(raffle())
