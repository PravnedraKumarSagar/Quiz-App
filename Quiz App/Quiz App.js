var questionBank= [
    {
        question : 'Which is the biggest continent in the world?',
        option : ['North America','Asia','Africa','Australia'],
        answer : 'Asia'
    },
    {
        question : 'Which is the longest river in the world?',
        option : ['Great Ganga','Nile','Amazon','Niger'],
        answer : 'Nile'
    },
    {
        question : 'Which is the largest ocean in the world?',
        option : ['Indian Ocean','Pacific Ocean','Arctic Ocean','Atlantic Ocean'],
        answer : 'Pacific Ocean'
    },
    {
        question : 'Which is India’s first super computer?',
        option : ['Param8000','param80000','param800','param8'],
        answer : 'Param8000'
    },
    {
        question : 'Which bank is called bankers Bank of India?',
        option : ['Reserve Bank of India','Punjab National Bank','State Bank of India','ICICI Bank'],
        answer : 'Reserve Bank of India'
    },
    {
        question : 'Which is the largest animal in the world?',
        option : ['Shark','Blue whale','Elephant','Giraffe'],
        answer : 'Blue whale'
    },
    {
        question : 'Which is largest animal on land?',
        option : ['Tiger','White Elephant','African Elephant','Crocodile'],
        answer : 'African Elephant'
    },
    {
        question : 'Which is largest island in the world?',
        option : ['New Guinea','Andaman Nicobar','Greenland','Hawaii'],
        answer : 'Greenland'
    },
    {
        question : 'Which is the largest flower in the world?',
        option : ['Rafflesia','Jasmine','Balloon Flower','Camellia'],
        answer : 'Rafflesia'
    },
    {
        question : 'Which is the 29th state of India?',
        option : ['Uttarakhand','Telangana','Uttar Pradesh','Madhya Pradesh'],
        answer : 'Telangana'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();