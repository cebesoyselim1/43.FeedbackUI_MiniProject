const feedback = document.querySelector(".feedback");
const feedbackResult = document.querySelector(".feedback-result");
const submit = document.querySelector(".feedback-submit");
let feedbackType = "Unhappy";

feedback.addEventListener("click",(e) => {
    if(e.target.classList.contains("btn")){
        setActiveState(e.target.parentElement);
        e.target.classList.add("active");
    }else if(e.target.classList.contains("feedback-text") || e.target.classList.contains("far")){
        setActiveState(e.target.parentElement.parentElement);
        e.target.parentElement.classList.add("active");
    }
    feedbackType = document.querySelector(".active").children[1].innerHTML;
    e.stopPropagation();
})

function setActiveState(parent){
    for(let child of parent.children){
        child.classList.remove("active");
    }
}

submit.addEventListener("click",(e) => {
    feedback.classList.add("hidden");
    document.body.innerHTML += `
    <div class="feedback-result">
        <div class="feedback-icons">
            <i class="fas fa-heart"></i>
            <div class="feedback-icons-text">
                Thank You!
            </div>
        </div>
        <div class="feedback-type">
            Feedback ${feedbackType}
        </div>
        <div class="feedback-thanks">
            We'll use your feedback to improve our customer support.
        </div>
    </div>
    `
})


