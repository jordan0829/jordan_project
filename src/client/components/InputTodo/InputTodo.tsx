import styles from "./InputTodo.module.css";

export const InputTodo = (props: any) => {
    const { todoText, onChange, onClick, disabled } = props;
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
                追加
            </button>
            {disabled && (
                <p className={styles.todoLimitMessage}>
                    登録できるTODOは5個までだよ〜。消化しろ〜。
                </p>
            )}
        </div>
    );
};
