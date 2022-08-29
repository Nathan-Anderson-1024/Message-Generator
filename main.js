const getUserQuestion = () => {
    const userInput = document.getElementById("message").value;
    return returnAnswer()
}

const returnAnswer = () => {
    const answerArray = [
        'Definitely.',
        'No.',
        'Possibly.',
        'There is a small chance.',
        'It is very likely.',
        'No chance.',
        'My sources say yes!',
        'Without a doubt yes!'
    ]
    const randomNum = Math.floor(Math.random() * answerArray.length);
    return alert(answerArray[randomNum]);
}