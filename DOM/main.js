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

// const questionTitleEl = document.querySelector(".quiz-item h3"); /// title cau hoi
const quizContainer = document.querySelector(".quiz-container");
const btn = document.querySelector("#btn");
// Hiển thị thông tin câu hỏi hiện tại
const renderQuestion = () => {
    // Lấy thông tin câu hỏi hiện tại
    innerHTML = ''
    for(let i=0; i<quizes.length; i++){
        // Hiển thị title của câu hỏi
        const currentQuestion = quizes[i];
        innerHTML += `  <div class="quiz-item"> 
                            <h3> Câu hỏi ${i + 1}: ${currentQuestion.question} </h3>
                            <div class="quiz-answer">
                    `;
        let choicesHtml =  "";

        // Hiển thị các lựa chọn của câu hỏi
        currentQuestion.answers.forEach((choice, index) => {
            
                choicesHtml += ` 
                    
                        <div class="quiz-answer-item">
                            <input type="radio" name="${i + 1}">
                            <label>${choice}</label>
                        </div> 
                `;
                
        });
        innerHTML += choicesHtml + `</div>` + `</div>`;
    }  
    quizContainer.innerHTML = innerHTML

};

btn.addEventListener("click", () => {
    let random_answers = quizes.map(x => Math.floor(Math.random() * (x.answers.length) ));
    const quizAnswers = document.querySelectorAll(".quiz-item .quiz-answer");
    for (let i = 0 ; i < random_answers.length; i++){
        let quizAnswer = quizAnswers[i].querySelectorAll('.quiz-answer-item')
        quizAnswer[random_answers[i]].querySelector('input').checked = true
    }
})

renderQuestion();