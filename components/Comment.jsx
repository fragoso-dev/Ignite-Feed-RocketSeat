import { ThumbsUp, Trash, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fragoso-dev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pablo Henrique</strong>
              <time title="12 de Abril às 08:13" dateTime="2023-04-12 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" className={styles.deleteButton}>
              <TrashSimple size={24} />
            </button>
          </header>

          <p>{props.content}</p>
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
