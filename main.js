// const innInput = document.querySelector('#inn');
// const innValiditySpan = document.querySelector('#inn-validity');
//
// innInput.addEventListener('input', () => {
//     const inn = innInput.value;
//
//     if (/^[12](0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2]\d{4}\d\d{3}\d)$/.test(inn)) {
//         innValiditySpan.textContent = 'OK';
//         innValiditySpan.style.color = 'green';
//     } else {
//         innValiditySpan.textContent = 'Неправильный ИНН';
//         innValiditySpan.style.color = 'red';
//     }
// });

const innInput = document.getElementById('inn-input');

innInput.addEventListener('input', () => {
    const innRegExp = /^\d{10}(\d{2})?$/;
    const inputValue = innInput.value;
    if (innRegExp.test(inputValue)) {
        console.log('ИНН корректный');
    } else {
        console.log('ИНН некорректный');
    }
});

const blockInner = document.querySelector('.block_inner')
let position = 0
let move = () =>{
    if(position < 450){
        position++
        blockInner.style.left = `${position}px`
        setTimeout(move, 1)
    }}
move()





