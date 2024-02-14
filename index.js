const questions = [
    {
        question: "will you be my forever always ?",
        answers: [
            { text: "sayad", correct: false },
            { text: "yepi qtu", correct: true },
            { text: "haaa", correct: false },
            { text: "haa sayad", correct: false }
        ]
    },
    {
        question: "waht is my favourite thing i like about my baby?",
        answers: [
            { text: "your eye", correct: true },
            { text: "your smile", correct: true },
            { text: "your personality", correct: true },
            { text: "your squsu mushu", correct: true }
        ]
    },
    {
        question: "who said when there is love ther is life?",
        answers: [
            { text: "mahatma gandhi ", correct: true },
            { text: "kim kardashian", correct: false },
            { text: "your qtu", correct: true },
            { text: "buzz lightyear", correct: false }
        ]
    },
    {
        question: "What is the best gift i gave to you?",
        answers: [
            { text: "My time ", correct: true },
            { text: "My presence", correct: true },
            { text: "the ring", correct: true},
            { text: "The never ending annoying", correct: true }
        ]
    },
    {
        question: "meri har ladai mai mera sath ladh paogi kya ?",
        answers: [
            { text: "haa", correct: false },
            { text: "nahi bc", correct: false },
            { text: "ha qtu", correct: true },
            { text: "depends", correct: false }
        ]
    }
]
const quesElement=document.getElementById("ques");
const ansElement=document.getElementById("answers");
const nextBtn=document.getElementById("next-btn");

let currentQuesIndex=0;
let score=0;

function startQuiz(){
    currentQuesIndex=0;
    score=0;
    nextBtn.innerHtml="Next";
    
    showQuestion();

}
function showQuestion(){
    resetState();

    let currentQues=questions[currentQuesIndex];
    let questionNo=currentQuesIndex+1;
    
    quesElement.innerHTML=questionNo+". "+currentQues.question;

    currentQues.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextBtn.style.display="none";
    while(ansElement.firstChild){
        ansElement.removeChild(ansElement.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansElement.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";

}
nextBtn.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    quesElement.innerHTML=`${score} / ${questions.length}`;
    quesElement.classList.add("res");
    quesElement.style.fontSize="2rem";

    if(score<5){
        const image=document.createElement("img");
        image.src="Images/donkey.png";
        image.classList.add("score-image");
        const container = document.getElementById("container");
        container.style.backgroundImage = "url('Images/loos.jpg')";
        quiz.appendChild(image);
        const app=document.getElementById("app");
        app.style.backgroundColor="black";
        quesElement.style.color="white";
    }else{
        image.valentine
        
    }

    
    nextBtn.style.display="none";
    
}
startQuiz();

