import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author={"Pablo Lindo"}
            content={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium, temporibus quas architecto blanditiis fugiat beatae id sapiente, aperiam labore deserunt quia alias amet porro illum ipsa cumque, tempore recusandae."
            }
          />
        </main>
      </div>
    </div>
  );
}
