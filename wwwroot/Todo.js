let Todos = []

document.addEventListener('DOMContentLoaded', function(){
    const inputInsertTodoTitle = document.getElementById('inputTodoListInsertTitle')
    const inputInsertTodoContent = document.getElementById('inputTodoListInsertContent')
    const btnInsertTodo = document.getElementById('btnInsertTodo')
    const todoList = document.getElementById('TodoList')
    const btnTodoListClear = document.getElementById('btnTodeListClear')

    btnInsertTodo.addEventListener('click', function(){
        
        if(inputInsertTodoTitle.value === '' && inputInsertTodoContent.value === ''){
            return
        }

        const itemsAmount = todoList.getElementsByTagName('li').length

        function AddElemntToTodoList(id, element, innerHTML ){
            var todoElement = document.createElement(element)
            todoElement.id = id + itemsAmount
            todoElement.innerHTML = innerHTML
            todoList.appendChild(todoElement)
            return todoElement
        }

        AddElemntToTodoList('todoTitle_', 'li', inputInsertTodoTitle.value)
        AddElemntToTodoList('todoContent_','label',  inputInsertTodoContent.value + '<br>')
        const btnRemoveTodo = AddElemntToTodoList('btnRemove_', 'button', 'Remove')

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


    btnTodoListClear.addEventListener('click', function(){
        
        while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild)
        }

    })
})