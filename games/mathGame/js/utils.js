const yesNoQuestion=(text)=> {
    let userAnswer = prompt(text);

    while (userAnswer !== "yes" && userAnswer !== "no") {
        userAnswer = prompt(text + ' try again yes/no');
    }

    if (userAnswer === 'yes') {
        return true;
    } else if (userAnswer === 'no') {
        return false;
    } else {
        return false;
    }
}

const inputNumber=(text, min, max) =>{
    let result = Number(prompt(text));

    while (result > max || result < min) {
        //result = Number(prompt(text + " try again " + min + " to " + max));
        result = Number(prompt(`${text} try again ${min}-${max}`));
    }

    return result;
}

const random=(min, max) => 
 min + Math.round(Math.random() * (max - min));


const pretty=(array) =>{

    let total = '';

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (i !== array.length - 1) {
            total += ', ';
        }
    }

    return total;
}

const passwordGenerator=(len)=> {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    let password = '';

    for (let i = 0; i < len; i++) {
        ///מגרילים מסםר רנדומלי ממערך האותיות3
        let randomIndex = random(0, letters.length - 1);
        password += letters[randomIndex];
    }

    return password;
}

const capitalize=(text)=> {
    //first letter in upperCase
    const firstLetter = text.charAt(0).toUpperCase();

    //rest = all other characters (from index 1 to end)
    const rest = text.substring(1).toLowerCase();

    //concat the first + rest
    return firstLetter + rest;
}
