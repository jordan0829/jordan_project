import styles from "./CompleteTodos.module.css";

export const CompleteTodos = (props: any) => {
    const { todos, onClickBack } = props;
    return (
        <div className={styles.completeArea}>
            <p className={styles.title}>完了のTODO</p>
            <ul>
                {todos.map((todo: any, index: any) => (
                    <li key={todo}>
                        <div className={styles.listRow}>
                            <p className={styles.todoItem}>{todo}</p>
                            <button
                                className={styles.button}
                                onClick={() => onClickBack(index)}
                            >
                                戻す
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
