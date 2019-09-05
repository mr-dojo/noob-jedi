const DATA = [{
    question: 'What is the name of Luke Skywalkers mother?',
    options: ['Padmé Amidala',
    'Shmi Skywalker',
    'Aayla Secura',
    'Mon Mothma'],
    answer: 'Padmé Amidala'
  },
  {
    q: 'What is the name of the ship in the photo above?',
    a: 'Slave 1',
    b: 'Rebel Blockade Runner', 
    c: 'Naboo N-1 Starfighter', 
    d: 'R60 T-wing interceptor',
    key: 'Slave 1'
  },
  {
    q: 'How did Han, Luke, Chewy and Leia escape the trash compacter on the Death Star?',
    a: 'Chewy took a metal pipe and pried open the doors',
    b: 'Luke found an hatch under the pile of trash',
    c: 'C-3PO came to the door and opened it from the outside',
    d: 'R2D2 accessed the trash compacter and shut it down remotely',
    key: 'R2D2 accessed the trash compacter and shut it down remotely'
  },
  {
    q: 'What is the name of the planet that Luke met Yoda?',
    a: 'Coruscant',
    b: 'Hoth',
    c: 'Dagobah',
    d: 'Naboo',
    key: 'Dagobah'
  },
  {
    q: 'What did Darth Vader say to Luke after being accused of killing his father?',
    a: 'No Luke, I am your father',
    b: "Who's your daddy? I'm your daddy",
    c: 'No, I am your father',
    d: 'I am your father',
    key: 'No, I am your father'
  },
  {
    q: 'What color is Lukes light saber',
    a: 'Green',
    b: 'Purple',
    c: 'White',
    d: 'Blue',
    key: 'Blue'
  },
  {
    q: 'What is the home planet of the Wookies?',
    a: 'Endor',
    b: 'Alderaan',
    c: 'Kashyyyk',
    d: 'Tatooine',
    key: 'Kashyyyk'
  },
  {
    q: 'What did Luke see in the cave on Dagobah?',
    a: 'All of his friends gathered around a table eating grilled Tauntaun',
    b: 'Han Solo playing a flute with a flowers in his hair',
    c: "Himself, under Darth Vader's mask",
    d: 'A wise old Jedi Master named Yoda',
    key: "Himself, under Darth Vader's mask"
  },
  {
    q: 'What did Luke need to pick up at Tosche Station on Tatooine?',
    a: 'Some milk for breakfast',
    b: 'A part for C-3PO',
    c: 'Power converters',
    d: 'His friend Bob',
    key: 'Power converters'
  },
  {
    q: 'Who knew it was a trap?',
    a: 'Han Solo',
    b: 'Jabba the Hutt',
    c: 'Obi-Wan Kenobi',
    d: 'Admiral Ackbar',
    key: 'Admiral Ackbar'
  }]
  
const correct = `Nice job kid, don't get cocky!`
const incorrect = `Wrong, it was actually "correct answer here"`
const questionNumber = 0
const score = 0
// Question should be rendered to the page

// You should be able to select an answer and submit it

// You should get feedback on your answer

// You should be able to move to the next question

// You should be able to reset the quiz


// When you click on the "Prove it..." button 
// it should take you to the quiz

// When you select an option (a, b, c, or d) and submit
// if correct, it should take you to the next question
// and update the .quiz-info and .score-info

// if incorrect, it should desplay Luke gif 
// and tell you the correct answer

// then after pressing "next" button
// it should take you do the next question
// and update the .quiz-info and .score-info


function handleNewQuestion() {
  // this will render the current question to the DOM
  $('.js-render-question').click(function() {
    removeOldQuestion();
    $('.js-app').append(renderNewQuestion(DATA[questionNumber]))
    console.log(`renderQuestion ran`);
  })
  
}
  
function removeOldQuestion() {
  $('.js-form').remove()
  console.log('removeOldQuestion ran')
}

function renderNewQuestion(question) {
  const answers = question.options.map((option, index) => {
    return `<input type="radio" id="answer-${index}" name="answer">
    <label for="answer-${index}">${option}</label>`
  })

  console.log(answers);

  // const newQuestion = 
  // `<form class="form-container js-form">
  //   <legend>${question}</legend>
  //   <div class="input-container">
  //   </div>
  //   <button type='submit'>Check Answer</button>
  // </form>`

  console.log('createNewQuestion ran')

  return newQuestion
}

function handleSubmit() {
  // this will check if submit was clicked and check if it is correct
  $('body').on('submit', '.js-form', event => {
    event.preventDefault();
    function answerSelected() {
      if ($('input:checked').val() !== "on") {
        alert("Please select an answer")
        return false;
      } else {return true;}
    }
    
    const answer = $('input:checked').val();
    console.log(`handleSubmit ran`);
    console.log(answer);
  });
  console.log(`handleSubmit ready`);

  
}

function answerSelected() {
  if ($('input:checked').val() !== "on") {
    alert("Please select an answer");
    return false;
  } else {return true;}
}

function renderFeedback() {
  // this should tell the user if they got the answer right and update .quiz-info

  console.log(`renderFeedback ready`);
}


function handleReset() {
  // this should restart quiz to question 1 and reset .quiz-info
  console.log(`handleResetButtonClick ready`);
}

// this will hold all the other functions and be called at the end of the js to ready the app
function startQuizApp() {
  handleNewQuestion();
  handleSubmit();
  handleReset();

}

// when the page loads, this will call "handleQuizApp"
$(startQuizApp);
