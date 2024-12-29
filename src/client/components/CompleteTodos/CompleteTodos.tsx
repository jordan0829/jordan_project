import styles from "./CompleteTodos.module.css";
import { MESSAGES } from "../../constants/messages";

/**
 * CompleteTodosコンポーネントのプロパティ。
 */
interface CompleteTodosProps {
    todos: string[];
    onClickBack: (index: number) => void;
}

/**
 * 完了したTODOアイテムを表示するためのCompleteTodosコンポーネント。
 *
 * @param {CompleteTodosProps} props - コンポーネントのプロパティ。
 * @returns {JSX.Element} レンダリングされたコンポーネント。
 */
export const CompleteTodos: React.FC<CompleteTodosProps> = ({
    todos,
    onClickBack,
}) => {
    return (
        <div className={styles.completeArea}>
            <p className={styles.title}>{MESSAGES.TODO.COMPLETE_TODOS.TITLE}</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className={styles.listRow}>
                            <p className={styles.todoItem}>{todo}</p>
                            <button
                                className={styles.button}
                                onClick={() => onClickBack(index)}
                            >
                                {MESSAGES.TODO.COMPLETE_TODOS.BACK_BUTTON}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
