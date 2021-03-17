
const Tasks = ({tasks}) => {

    return (
        <>
            {tasks.map((task) => (<p key={task.id}>{task.text}</p>))}
        </>
    )
}

export default Tasks
