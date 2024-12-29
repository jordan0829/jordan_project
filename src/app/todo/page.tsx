"use client";
import { useState } from "react";

import "@/client/styles/styles.css";
import { IncompleteTodos } from "@/client/components/IncompleteTodos/IncompleteTodos";
import { CompleteTodos } from "@/client/components/CompleteTodos/CompleteTodos";
import { InputTodo } from "@/client/components/InputTodo/InputTodo";

/**
 * Todoページコンポーネント。
 *
 * @returns {JSX.Element} レンダリングされたコンポーネント。
 */
export default function Todo() {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
    const [completeTodos, setCompleteTodos] = useState<string[]>([]);

    // TODO入力の変更イベントを処理。
    const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTodoText(event.target.value);

    // 新しいTODOを追加するクリックイベントを処理。
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    // TODOを削除するクリックイベントを処理。
    const onClickDelete = (index: number) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    // TODOを完了するクリックイベントを処理。
    const onClickComplete = (index: number) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    // TODOを未完了に戻すクリックイベントを処理。
    const onClickBack = (index: number) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

    return (
        <>
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={isMaxLimitIncompleteTodos}
            />
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
}
