"use client";
import { useState } from "react";

import "@/client/styles/styles.css";
import { IncompleteTodos } from "@/client/components/IncompleteTodos/IncompleteTodos";
import { CompleteTodos } from "@/client/components/CompleteTodos/CompleteTodos";
import { InputTodo } from "@/client/components/InputTodo/InputTodo";

export default function Todo() {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
    const [completeTodos, setCompleteTodos] = useState<string[]>([]);

    const onChangeTodoText = (event: any) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    const onClickDelete = (index: any) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index: any) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickBack = (index: any) => {
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
