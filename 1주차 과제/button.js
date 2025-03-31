const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const current = parseInt(number.innerText); 
    //parseInt함수는 특정 문자열을 가져와 정수를 반환한다. 괄호 안에는 매개변수가 들어간다
    number.innerText = current + 1;
    //innerText는 속성값?
};

decrease.onclick = () => {
    const current = parseInt(number.innerText);  
    number.innerText = current - 1;
};