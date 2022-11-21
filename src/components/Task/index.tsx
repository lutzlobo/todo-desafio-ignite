import {Trash, CheckCircle, Circle} from 'phosphor-react'
import { ITask } from '../../App'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    
    return (
        <div className="w-full bg-zinc-700 p-4 rounded-lg flex items-center justify-between gap-3">
            <button className="h-5 flex items-center" onClick={() => onComplete(task.id)}>
                {task.isCompleted
                ? <CheckCircle size={28} weight='fill' className='text-green-400'/> 
                : <Circle size={28} className='text-green-400'/>}
            </button>
    
            <p className="text-lg leading-5 mr-auto text-zinc-50">
                {task.title}
            </p>

            <button className="text-zinc-500 hover:text-red-400" onClick={() => onDelete(task.id)}>
                <Trash size={20}/>
            </button>
        </div>
    )
}