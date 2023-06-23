const fetchPosts =()=> async(dispatch)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => dispatch({ type: "SUCCESS", payload: json }))
    .catch((error) => dispatch({ type: "FAILURE", payload: error }));

}

export default fetchPosts;

