import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 40;
  // const person = {
  //   name: "dang",
  //   age: 21,
  // }
  const link = "http://www.google.com"
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} time</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Hello"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>


        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
