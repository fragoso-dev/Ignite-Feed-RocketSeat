import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/guilhermegabrielss.png"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Gabriel</strong>
            <span>Desenvolvedor web</span>
          </div>
        </div>

        <time title="12 de Abril às 08:13" dateTime="2023-04-12 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraaa 👋 Quem fala aqui é o Guilherme! </p>
        <p>Acabei de subir mais um projeto no meu portifa! Esse aqui foi desenvolvido durante o NLW Return, evento da Rocketseat. </p>
        <p>O nome do projeto é DoctorCare</p>
        <p><a href="#"> 🚀guime.design/doctorcare</a></p>
        <p><a href="#">👉 #novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
