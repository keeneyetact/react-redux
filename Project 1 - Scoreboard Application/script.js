// action identifiers
const ADD_MATCH = "add/match"
const RESET_SCORE = "reset/match"
const INCREMENT_SCORE = "increment/score"
const DECREMENT_SCORE = "decrement/score"

// action creators
const addMatch = () => {
    return {
        type: ADD_MATCH
    }
}

const incrementScore = (value) => {
    return {
        type: INCREMENT_SCORE,
        payload: value
    }
}

const decrementScore = (value) => {
    return {
        type: DECREMENT_SCORE,
        payload: value
    }
}

const resetMatch = () => {
    return {
        type: RESET_SCORE
    }
}


// Initial State 
const initialState = {
    matches: [
      {
        id: 1,
        score: 0,
      }
    ],
  };
  
  // define the reducer
  function scoreReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_MATCH:
        return {
          ...state,
          matches: [
            ...state.matches,
            {
              id: state.matches.length + 1,
              score: 0,
            },
          ],
        };
      case INCREMENT_SCORE:
        return {
          ...state,
          matches: state.matches.map((match) =>
            match.id === action.payload.matchId
              ? {
                  ...match,
                  score: match.score + action.payload.incrementValue
                }
              : match
          ),
        };
      case DECREMENT_SCORE:
        return {
          ...state,
          matches: state.matches.map((match) =>
            match.id === action.payload.matchId
              ? {
                  ...match,
                  score: Math.max(0, match.score - action.payload.decrementValue)
                }
              : match
          ),
        };
      case RESET_SCORE:
        return {
          ...state,
          matches: state.matches.map((match) => ({
            ...match,
            score: 0,
          })),
        };
      default:
        return state;
    }
  }
  
  // Create the Redux store
  const store = Redux.createStore(scoreReducer);
  
  // Handle the "Add Another Match" button click
  document.getElementById("add").addEventListener("click", () => {
    store.dispatch(addMatch());
  });
  
  // Handle the "Reset" button click
  document.getElementById("reset").addEventListener("click", () => {
    store.dispatch(resetMatch());
  });
  
  // Render the matches with their respective score
  function renderScores() {
    const state = store.getState()
    console.log(state)
    // Select all matches container
    const matchesContainer = document.getElementById("matches-container");
    matchesContainer.innerHTML = "";
  
    // Create every single match
    state.matches.forEach((match) => {
  const newMatch = document.createElement("div");
  newMatch.classList.add("match");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  newMatch.appendChild(wrapper);

  // Create the delete element
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete";
  deleteBtn.classList.add("lws-delete");
  const deleteImg = document.createElement("img");
  deleteImg.src = "./image/delete.svg";
  deleteImg.alt = "";
  deleteBtn.appendChild(deleteImg);
  wrapper.appendChild(deleteBtn);

  // Create the match name element
  const matchName = document.createElement("h3");
  matchName.id = "matchName";
  matchName.classList.add("lws-matchName");
  matchName.textContent = `MATCH ${match.id}`;
  wrapper.appendChild(matchName);

  // Create the increment input form element
  const incrementForm = document.createElement("form");
  incrementForm.classList.add("incrementForm");
  const incrementHeader = document.createElement("h4");
  incrementHeader.textContent = "Increment";
  incrementForm.appendChild(incrementHeader);
  const incrementInput = document.createElement("input");
  incrementInput.id = "increment";
  incrementInput.type = "number";
  incrementInput.name = "increment";
  incrementInput.classList.add("lws-increment");
  incrementInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const matchId = parseInt(match.id);
        const incrementValue = parseInt(event.target.value);
        store.dispatch(incrementScore({matchId, incrementValue}));
        event.target.value = ''
    }
  })
  incrementForm.appendChild(incrementInput);
  newMatch.appendChild(incrementForm);

  // Create the decrement input form element
  const decrementForm = document.createElement("form");
  decrementForm.classList.add("decrementForm");
  const decrementHeader = document.createElement("h4");
  decrementHeader.textContent = "Decrement";
  decrementForm.appendChild(decrementHeader);
  const decrementInput = document.createElement("input");
  decrementInput.id = "decrement";
  decrementInput.type = "number";
  decrementInput.name = "decrement";
  decrementInput.classList.add("lws-decrement");
  decrementInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const matchId = parseInt(match.id);
        const decrementValue = parseInt(event.target.value);
        store.dispatch(decrementScore({matchId, decrementValue}));
        event.target.value = '';
    }
  })
  decrementForm.appendChild(decrementInput);
  newMatch.appendChild(decrementForm);

  // Create the score numbers element
  const numbers = document.createElement("div");
  numbers.classList.add("numbers");
  const matchScore = document.createElement("h2");
  matchScore.id = "matchScore";
  matchScore.classList.add("lws-singleResult");
  matchScore.textContent = match.score;
  numbers.appendChild(matchScore);
  newMatch.appendChild(numbers);

  // Append the new match element to the matches container
  matchesContainer.appendChild(newMatch);
   })  
  }

// Initial UI render
renderScores()

// UI render according to input
store.subscribe(renderScores)