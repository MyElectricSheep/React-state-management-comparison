import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";

//////////////////////////////
// ENHANCERS & MIDDLEWARES //
////////////////////////////

const reducer = (state = { count: 1 }) => state;

// const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
//   const monitorReducer = (state, action) => {
//     const start = performance.now();
//     const newState = reducer(state, action);
//     const end = performance.now();
//     const diff = end - start;
//     console.log({ diff });
//     return newState;
//   };

//   return createStore(monitorReducer, initialState, enhancer);
// };

// const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
//   const logReducer = (state, action) => {
//     console.log("old state:", state, action);
//     const newState = reducer(state, action);
//     console.log("new state:", newState, action);

//     return newState;
//   };

//   return createStore(logReducer, initialState, enhancer);
// };

// const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));

const monitorMiddlware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = end - start;
  console.log("Perf diff is:", diff);
};
const logMiddleware = (store) => (next) => (action) => {
  console.log("old state:", store.getState(), action);
  next(action);
  console.log("new state:", store.getState(), action);
};

const store = createStore(
  reducer,
  // Middlewares are an abstraction over enhancers, chainable out of the box
  applyMiddleware(logMiddleware, monitorMiddlware)
);

store.dispatch({ type: "ANYTHING" });

/////////////////////////
// TO DO LIST EXAMPLE //
///////////////////////

// const initialState = {
//   users: [
//     { id: 1, name: "Ben" },
//     { id: 2, name: "Daniel" },
//     { id: 3, name: "Paul" }
//   ],
//   tasks: [
//     { title: "File a report", userId: 1 },
//     { title: "Order sushis", userId: 1 },
//     { title: "Learn Prisma", userId: 2 }
//   ]
// };

// const ADD_TASK = "ADD_TASK";
// const ADD_USER = "ADD_USER";

// const addTask = (title) => ({ type: ADD_TASK, payload: title });
// const addUser = (user) => ({ type: ADD_USER, payload: user });

// // One reducer to rule them all:
// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case ADD_TASK:
// //       return {
// //         ...state,
// //         tasks: [...state.tasks, action.payload]
// //       };
// //     case ADD_USER:
// //       return {
// //         ...state,
// //         users: [...state.tasks, action.payload]
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // Split reducers:
// const userReducer = (users = initialState.users, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return [...users, action.payload];
//     default:
//       return users;
//   }
// };

// const taskReducer = (tasks = initialState.tasks, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return [...tasks, action.payload];
//     default:
//       return tasks;
//   }
// };

// const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

// const store = createStore(reducer);

// try {
//   store.dispatch(addTask({ title: "Go running", userId: 1 }));
//   store.dispatch(
//     addUser({ id: store.getState().users.length + 1, name: "Yoshimitsu" })
//   );
//   console.log(store.getState());
// } catch (e) {
//   console.log(e);
// }

//////////////////////////////
// EXPLORING THE REDUX API //
////////////////////////////

// const initialState = { value: 0 };

// Action types set as constants (to avoid mistakes)
// const INCREMENT = "INCREMENT";
// const ADD = "ADD";

// Action
// const incrementAction = {
//   type: INCREMENT
// };

// Action creator
// const increment = (amount) => ({ type: INCREMENT });
// const add = (amount) => ({ type: ADD, payload: amount });

// const reducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { value: state.value + 1 };
//   }

//   if (action.type === ADD) {
//     return { value: state.value + action.payload };
//   }

//   return state;
// };

// const store = createStore(reducer);

// Subscriber function
// const logger = () => console.log("SUBSCRIBER", store.getState());

// subscribe(): Every time the state changes, we can call a subscriber fn
// like our logger here:
// store.subscribe(logger);

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

// bindActionCreators: Binds action to the store via the dispatch fn directly
// (uses compose under the hood)
// const actions = bindActionCreators({ increment, add }, store.dispatch);

// console.log(actions);
// actions.add(1000);
// actions.add(1000);

// Roughly equivalent to doing something manually like:
// const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) =>
//   compose(store.dispatch, fn)
// );

// dispatchAdd(20);
// dispatchAdd(20);

// console.log(store.getState());

////////////////////////
// COMPOSE FUNCTIONS //
//////////////////////

// const makeLouder = (string) => string.toUpperCase();
// const repeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const s = "Learn Redux";

// 1/ Compose three functions w/ Reduce
// const reduced = [makeLouder, embolden, repeatThreeTimes].reduce((acc, fn) => {
//   return fn(acc);
// }, s);

// console.log(reduced);

// 2/ Compose three functions w/ a new function
// const makeLouderRepeatThreeTimesAndEmbolded = (string) =>
//   repeatThreeTimes(embolden(makeLouder(string)));

// console.log(makeLouderRepeatThreeTimesAndEmbolded(s));

// 3/ Use Redux's compose (fn composed from right to left)
// const makeLouderRepeatThreeTimesAndEmbolded = compose(
//   repeatThreeTimes,
//   embolden,
//   makeLouder
// );

// console.log(makeLouderRepeatThreeTimesAndEmbolded(s));
