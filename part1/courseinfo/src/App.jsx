/* eslint-disable react/prop-types */
const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
    {props.parts.map((part, index) => (
        <Part key={index} part={part.part} exercises={part.exercises}/>))}
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const propExercises= props.parts.map(x => x.exercises);
  const total= propExercises[0] + propExercises[1]+ propExercises[2];
  return(
    <p>
      Number of exercises: {total}
    </p>
  )
}

function App() {
  const course = "Half Stack app development"
  const parts = [
    {part: "Fundamentals of React", exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14},]

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>  
    </>
  )
}

export default App
