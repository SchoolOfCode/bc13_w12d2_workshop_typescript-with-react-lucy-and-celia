type TodoTitlePropsInterface = {
  isEditing: boolean;
   isComplete: boolean; 
   title: string;
  editedTodoTitle: string; 
  setEditedTodoTitle: any;
}


export function TodoTitle(props: TodoTitlePropsInterface) {
  const { isEditing, isComplete, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
