import styles from "./IncompleteTodos.module.css";

export const IncompleteTodos = (props: any) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <div className={styles.incompleteArea}>
            <p className={styles.title}>未完了のTODO</p>
            <ul>
                {todos.map((todo: any, index: any) => (
                    <li key={todo}>
                        <div className={styles.listRow}>
                            <p className={styles.todoItem}>{todo}</p>
                            <button
                                className={styles.button}
                                onClick={() => onClickComplete(index)}
                            >
                                完了
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => onClickDelete(index)}
                            >
                                削除
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
