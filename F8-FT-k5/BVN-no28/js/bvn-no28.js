const addInput = document.querySelector('#add-task')
const addBtn =  document.querySelector('#add-btn')
const renameBtn = document.querySelector('.rename-task')
const updateBtn = document.querySelector('.update-task')
const delBtn = document.querySelector('.del-task')
const newTasks = document.querySelector('.new-tasks')
addBtn.addEventListener('click', (e)=> {
    let todo = addInput.value
    todo = todo.trim()
    if (todo == ''){
        alert('Ghi gì đi chứ, đừng bỏ trống v ng ơi!')
    }else{
        addTask(todo)
        addInput.value = ''
        updateTask()
    }
})

function addTask(task){
    let todoItem  = ` 
    <div class="task">
			<input type="text" id="added-task" name='todo' disabled value="${task}">
        <div>
          <button class="update-task">ok</button>
          <button class="rename-task">Sửa</button>
          <button class="del-task">Xoá</button>
        </div>
    </div>`
    newTasks.innerHTML += todoItem
}
function updateTask(){
    let task  = document.querySelectorAll('.task')
    task.forEach((item) => {
        item.addEventListener('click', el =>{
            if(el.target.classList.contains('rename-task')){
                if (item.children[0].disabled){
                    item.children[0].disabled = false
                }
            }else if(el.target.classList.contains('del-task')) {
                item.remove()
            }else if (el.target.classList.contains('update-task')){
                if (item.children[0].disabled == false){
                    item.children[0].disabled = true
                }
            }
        })
    })
}