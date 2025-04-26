import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src="https://github.com/guilhermegabrielss.png"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Gabriel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="12 de Abril às 08:13" dateTime="2023-04-12 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraaa 👋 Quem fala aqui é o Guilherme! </p>
        <p>
          Acabei de subir mais um projeto no meu portifa! Esse aqui foi
          desenvolvido durante o NLW Return, evento da Rocketseat.{" "}
        </p>
        <p>O nome do projeto é DoctorCare</p>
        <p>
          <a href="#">guime.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
