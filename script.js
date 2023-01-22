let currentInput = document.querySelector('.currentInput');
let answernScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answernScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answernScreen.className = 'answerScreen';
    answernScreen.getElementsByClassName.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button
        if (!btn.id.match('erase')) {
            //To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            //To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answernScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }
        }
        //when erase button is clicked
        if (btn.id.match('erase')) {
            currentInput.className = 'answerScreen';
            answernScreen.className = 'currentInput'
            answernScreen.style.color = "white";
        }
        // To prevent underfind error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answernScreen.innerHTML = 0
        }
    })
})

