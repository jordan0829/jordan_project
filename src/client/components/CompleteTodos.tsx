export const CompleteTodos = (props: any) => {
    const { todos, onClickBack } = props;
    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo: any, index: any) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickBack(index)}>
                                戻す
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
