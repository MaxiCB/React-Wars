## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

---
ReactJS seeks to seperate parts of a application into "components". Each component is a seperate piece of the overall app and when a specific component changes it is the only thing that is updated rather than rendering the whole application of creating a lot of DOM events

- [ ] What does it mean to _think_ in react?

---
To break the application into seperate parts.
To think about what your state is, and what all needs access to it and when it needs to change

- [ ] Describe state.

---
State is the underlying data of the application
This could be data from a API, from user clicks, to error encountered within the app
The state is used to store data that can then be used to update the UI

- [ ] Describe props.

---
Props are read-only bits of data that are passed into components
Passing props correctly ensure that each component has access to only what is needed, which in turn makes debugging
and readibility better

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

---
A side effect is anything that affects something outside the scope of the function being ran
To sync effects ina component you could use the useEffect hook, and set the state or prop you are 
syncing with inside the dependency array

i.e
useEffect(() => {
    <!-- Some Code Here -->
}, [Data to sync with here])