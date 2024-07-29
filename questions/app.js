//using selectors inside the element
// bu yontemde tum docu gezmezsin sectigin element icinde classlarini vs ararsin

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    // birine tikladigimizda digerinin kapanmasini istiyorsak tekrar hepsi ustunde bir looplayip eger sectigmiz item ilk tikladigimiza esit degil ise kapatir

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     // parenti (text) sonra onun da parenti olan questionu sectik ardindan show text classini questiona ekledik
//     question.classList.toggle('show-text');
//   });
// });
