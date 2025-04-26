import { ThumbsUp, Trash, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/tharlisdavid.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tharlis David</strong>
              <time title="12 de Abril às 08:13" dateTime="2023-04-12 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" className={styles.deleteButton}>
              <TrashSimple size={24} />
            </button>
          </header>

          <p>Muito Bom, Parabéns 👋👋</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
