import React from "react";
import blogData from "../data/blog";
import logo from '../assets/logo.svg'
import ListCard from "../data/ListCard";

console.log(blogData);

const blogTitle = "Underreacted"
const paragraph = "A blog about learning React"

const list = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 5,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 15,
  },
  {
    id: 3,
    title: "Function vs Class Components",
    preview: "React, meet OOJS.",
    minutes: 47,
  },
]


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
      <Article />
    </div>
  );
}


function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{blogTitle}</h1>
    </header>
  )
}

function About(props) {
  console.log(props)
  return (
    <aside>
      <img src={logo} alt="blog logo" />
      <p>{paragraph}</p>
    </aside>
  )
}


function ArticleList() {

  const listCard = list.map((list) => {
    return <ListCard key={list.id} title={list.title} date={list.date} preview={list.preview} minutes={list.minutes} />
  })
  return (
    <div>
      <main>
        {listCard}
      </main>
    </div>
  )
}

function Article() {


  return (
    <article>

    </article>
  )
}

export default App;

