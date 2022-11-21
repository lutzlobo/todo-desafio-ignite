import { ITask } from "../../App";
import { Task } from "../Task";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className="max-w-3xl w-full m-0 m-auto mt-20 p-4">
            <header className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <p className="text-green-500 text-md font-bold">Tarefas Criadas</p>
                    <span className="bg-zinc-600 text-zinc-200 py-1 px-4 rounded-full font-bold text-sm">
                        {tasksQuantity}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-green-400 text-md font-bold">Tarefas Concluídas</p>
                    <span className="bg-zinc-600 text-zinc-200 py-1 px-2 rounded-full font-bold text-sm">
                        {completedTasks} de {tasksQuantity}
                    </span>
                </div>
            </header>
            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onComplete={onComplete}/>
                ))}
            </div>
        </section>
    )
}