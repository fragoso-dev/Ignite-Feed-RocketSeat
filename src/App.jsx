import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guilhermegabrielss.png",
      name: "Guilherme Gabriel",
      role: "Developer Full Stack",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraaa 👋 Quem fala aqui é o Guilherme!",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa! Esse aqui foi desenvolvido durante o NLW Return, evento da Rocketseat.",
      },
      { type: "link", content: "guime.design/doctorcare" },
    ],
    publishedAt: new Date('2025-05-25 10:25')
  },
  
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/tharlisdavid.png",
      name: "Tharlis David",
      role: "Data Analyst",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraaa 👋 Quem fala aqui é o Tharlis!",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa! Esse aqui foi desenvolvido durante o NLW Return, evento da Rocketseat.",
      },
      { type: "link", content: "guime.design/doctorcare" },
    ],
    publishedAt: new Date('2025-05-22 10:25')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  );
}
