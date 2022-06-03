import FetchedPosts from "./components/fetchedPosts";
import Posts from "./components/posts";
import PostForm from "./components/postForm";



function App() {
  return (
    <div className="container pt-3">
      <div className= 'row'>
        <div className= 'col'>
            <PostForm/>

        </div>

      </div>

      <div className= 'row'>
        <div className= 'col'>
            <h2>Синхронные посты</h2>
            <Posts posts = {[1,2,3,4]}/>

        </div>
        <div className= 'col'>
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts = {[]}/>

        </div>

      </div>
      

    </div>
  );
}

export default App;
