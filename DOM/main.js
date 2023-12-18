const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const container = document.querySelector(".quiz-container");
const btn = document.querySelector("#btn");

const renderQuestion = () => {

    html = ''
    for(let i=0; i<quizes.length; i++){

        const currentQuestion = quizes[i];
        html += `  <div class="quiz-item"> 
                            <h3> Câu hỏi ${i + 1}: ${currentQuestion.question} </h3>
                            <div class="quiz-answer">
                    `;
        let html2 =  "";

        currentQuestion.answers.forEach((choice, index) => {
            
            html2 += ` 
                    
                        <div class="quiz-answer-item">
                            <input type="radio" name="${i + 1}">
                            <label>${choice}</label>
                        </div> 
                `;
                
        });
        html += html2 + `</div>` + `</div>`;
    }  
    container.innerHTML = innerHTML

};

btn.addEventListener("click", () => {
    let random = quizes.map(x => Math.floor(Math.random() * (x.answers.length) ));
    const answer = document.querySelectorAll(".quiz-item .quiz-answer");
    for (let i = 0 ; i < random.length; i++){
        let quizAnswer = answer[i].querySelectorAll('.quiz-answer-item')
        quizAnswer[random[i]].querySelector('input').checked = true
    }
})

renderQuestion();