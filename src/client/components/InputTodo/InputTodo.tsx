import styles from "./InputTodo.module.css";
import { MESSAGES } from "../../constants/messages";

/**
 * InputTodoコンポーネントのプロパティ。
 */
interface InputTodoProps {
    todoText: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    disabled: boolean;
}

/**
 * 新しいTODOアイテムを追加するためのInputTodoコンポーネント。
 *
 * @param {InputTodoProps} props - コンポーネントのプロパティ。
 * @returns {JSX.Element} レンダリングされたコンポーネント。
 */
export const InputTodo: React.FC<InputTodoProps> = ({
    todoText,
    onChange,
    onClick,
    disabled,
}) => {
    return (
        <div className={styles.inputArea}>
            <input
                className={styles.input}
                disabled={disabled}
                placeholder="TODOを入力"
                value={todoText}
                onChange={onChange}
            />
            <button
                className={styles.button}
                disabled={disabled}
                onClick={onClick}
            >
                {MESSAGES.TODO.INPUT_TODO.ADD_BUTTON}
            </button>
            {disabled && (
                <p className={styles.todoLimitMessage}>
                    {MESSAGES.TODO.INPUT_TODO.TODO_LIMIT_MESSAGGE}
                </p>
            )}
        </div>
    );
};
