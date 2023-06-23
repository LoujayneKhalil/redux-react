import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import fetchPosts from "./Posts/posts.actions";
import postReducer from "./Posts/posts.reducer";

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(({ postReducer }) => postReducer); //select from store

  useEffect(() => {
    dispatch(fetchPosts());

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => dispatch({ type: "SUCCESS", payload: json }))
    //   .catch((error) => dispatch({ type: "FAILURE", payload: error }));
  }, []);

  return (
    <div className="App">
      {data.map((data) => (
        <p>{data.title}</p>
      ))}
    </div>
  );
}

export default App;
