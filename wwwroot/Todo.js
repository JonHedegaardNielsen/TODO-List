let Todos = []

document.addEventListener('DOMContentLoaded', function(){
    const inputInsertTodoTitle = document.getElementById('inputTodoListInsertTitle')
    const inputInsertTodoContent = document.getElementById('inputTodoListInsertContent')
    const btnInsertTodo = document.getElementById('btnInsertTodo')
    const todoList = document.getElementById('TodoList')

    btnInsertTodo.addEventListener('click', function(){
        if(inputInsertTodoTitle.value === ''){
            return
        }

        const itemsAmount = todoList.getElementsByTagName('li').length
        var todoTitle = document.createElement('li')
        todoTitle.id = 'todoTitle_' + itemsAmount
        todoTitle.innerHTML = inputInsertTodoTitle.value
        todoList.appendChild(todoTitle)

        var todoContent = document.createElement('label')
        todoContent.innerHTML = inputInsertTodoContent.value
        todoContent.id = 'todoContent_' + itemsAmount
        todoList.appendChild(todoContent)

        let btnRemoveTodo = document.createElement('button')
        btnRemoveTodo.innerHTML = 'Remove'
        btnRemoveTodo.id = 'btnRemove_' + itemsAmount

        btnRemoveTodo.addEventListener('click', function(event){
            const name = String(btnRemoveTodo.id)
            const index = Number(name.split('_')[1])
            document.getElementById('todoTitle_' + index).remove()
            document.getElementById('todoContent_' + index).remove()
            btnRemoveTodo.remove()
        })

        todoList.appendChild(btnRemoveTodo)
        
        inputInsertTodoTitle.value = ''
        inputInsertTodoContent.value = ''
    })
})