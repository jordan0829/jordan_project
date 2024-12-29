import styles from "./IncompleteTodos.module.css";
import { MESSAGES } from "../../constants/messages";

/**
 * IncompleteTodosコンポーネントのプロパティ。
 */
interface IncompleteTodosProps {
    todos: string[];
    onClickComplete: (index: number) => void;
    onClickDelete: (index: number) => void;
}

/**
 * 未完了のTODOアイテムを表示するためのIncompleteTodosコンポーネント。
 *
 * @param {IncompleteTodosProps} props - コンポーネントのプロパティ。
 * @returns {JSX.Element} レンダリングされたコンポーネント。
 */
export const IncompleteTodos: React.FC<IncompleteTodosProps> = ({
    todos,
    onClickComplete,
    onClickDelete,
}) => {
    return (
        <div className={styles.incompleteArea}>
            <p className={styles.title}>
                {MESSAGES.TODO.INCOMPLETE_TODOS.TITLE}
            </p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className={styles.listRow}>
                            <p className={styles.todoItem}>{todo}</p>
                            <button
                                className={styles.button}
                                onClick={() => onClickComplete(index)}
                            >
                                {MESSAGES.TODO.INCOMPLETE_TODOS.COMPLETE_BUTTON}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => onClickDelete(index)}
                            >
                                {MESSAGES.TODO.INCOMPLETE_TODOS.DELETE_BUTTON}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
