// Number to Words

// Selector
let divContainer = document.getElementById(`container`);

let headerResult = document.getElementById(`result`);


// Function

function numberToWords(number){

    let NumStr = [
        {num: 1000000000000, str: "trillion"},
        {num: 1000000000, str: "billion"},
        {num: 1000000, str: "million"},
        {num: 1000, str: "thousand"},
        {num: 100, str: "hundred"},
        {num: 90, str: "ninety"},
        {num: 80, str: "eighty"},
        {num: 70, str: "seventy"},
        {num: 60, str: "sixty"},
        {num: 50, str: "fifty"},
        {num: 40, str: "forty"},
        {num: 30, str: "thirty"},
        {num: 20, str: "twenty"},
        {num: 19, str: "nineteen"},
        {num: 18, str: "eighteen"},
        {num: 17, str: "seventeen"},
        {num: 16, str: "sixteen"},
        {num: 15, str: "fifteen"},
        {num: 14, str: "fourteen"},
        {num: 13, str: "thirteen"},
        {num: 12, str: "twelve"},
        {num: 11, str: "eleven"},
        {num: 10, str: "ten"},
        {num: 9, str: "nine"},
        {num: 8, str: "eight"},
        {num: 7, str: "seven"},
        {num: 6, str: "six"},
        {num: 5, str: "five"},
        {num: 4, str: "four"},
        {num: 3, str: "three"},
        {num: 2, str: "two"},
        {num: 1, str: "one"},
        //{num: 0, str: "zero"}
      ];
    
    let result = '';

    for (let n of NumStr) {
              
        if(number >= n.num){

            if(number <= 99){

                result += n.str;
                number -= n.num;

                if(number > 0) result += ' ';
                
            } else {

                let text =  Math.floor(number / n.num);
                let digit = number % n.num;

                if(digit > 0){

                return numberToWords(text) + ' ' + n.str + ' ' + numberToWords(digit);

                } else {

                return numberToWords(text) + ' ' + n.str ;

                } 
              
            }

        }  

    }
    return result;
     
}



// Event

divContainer.querySelector(`button`)
.addEventListener(`click`, function() {
    let number = divContainer.querySelector(`input`).value;
    let result = numberToWords(number);
    
    headerResult.innerHTML = result;

    if(number === "0"){
        headerResult.innerHTML = `zero`;  
    }
})

