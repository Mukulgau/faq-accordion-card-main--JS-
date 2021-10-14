// const btns = document.querySelectorAll(".arrow-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     // console.log(btn);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// const questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   const btn = question.querySelector(".arrow-btn");
//   btn.addEventListener("click", (e) => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    // console.log("shake");
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
