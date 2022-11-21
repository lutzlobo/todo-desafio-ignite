import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {
    
    const [title, setTitle] = useState('');
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    
    return (
        <header className="bg-zinc-900 flex items-center justify-center h-48 relative">
            <p className="font-bold text-green-400 text-4xl">todo</p>

            <form className="h-20 w-full max-w-3xl flex gap-2 p-4 absolute mt-48" onSubmit={handleSubmit}>

                <input placeholder="Add new task" className="h-full flex-1 bg-zinc-700 p-3 rounded-lg text-zinc-50"
                onChange={onChangeTitle} value={title}
                />

                <button className="bg-green-400 h-full p-3 rounded-lg flex items-center gap-1 font-bold text-zinc-900">
                    Add
                    <PlusCircle size={20} weight="bold"/>
                </button>
            </form>
        </header>
    )
}