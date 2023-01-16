import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData.name);

function App() {
  const imageSRC = "https://via.placeholder.com/215";
  const altImage = "blog logo";
  const aboutText = blogData.about;
  const postsData = blogData.posts;

  

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About imageSource={imageSRC} altName={altImage} about={aboutText}/>
      <ArticleList posts={postsData}/>

    </div>
  );
}

export default App;
