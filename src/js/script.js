const selectedText = document.querySelectorAll(' .title-question');
const answer = document.querySelectorAll(' .answer');
const arrow = document.querySelectorAll(' .arrow-icon');
const divQuestion = document.querySelectorAll('.question');


//Cuando de click se tiene que mostrar la respuesta y agregar la clase selected

 selectedText.forEach((el)=>{
    el.addEventListener('click',toggleSelected);

} )

function toggleSelected(e){
    const element = e.target;
    element.classList.toggle('selected');
}

