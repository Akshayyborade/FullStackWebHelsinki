
import './App.css'
const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}
const Part = ({ part, exercises }) => <p>{part} {exercises}</p>;

const Content = ({ parts }) => (
  <div>
    <Part {...parts[0]} />
    <Part {...parts[1]} />
    <Part {...parts[2]} />
  </div>
);
const Total =  ({ exercises, completed }) => {
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]
  return (
    <div>
      <Header name={course}  />
      <Content parts={parts} />
      <Total />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
