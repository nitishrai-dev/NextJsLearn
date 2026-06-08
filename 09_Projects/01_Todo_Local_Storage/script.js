document.addEventListener('DOMContentLoaded',()=>{
    // console.log('dom was loaded')
    const input = document.getElementById('todo-input');
    const btn = document.getElementById('todo-button');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    tasks.forEach((tasks) => {renderTasks(tasks)});

    btn.addEventListener('click',function(){
        let innerText = input.value.trim();

        if(innerText === "") return;
        
        const listItem = {
            id: Date.now(),
            text: innerText,
            completed:false,
        }

        tasks.push(listItem);
        saveTasks();
        renderTasks(listItem);
        input.value = "";
        console.log(tasks);

    })
    
    function renderTasks(task){
        const li = document.createElement('li');
        li.setAttribute("data-id",task.id);
        if(tasks.completed) li.classList.add('completed');
        li.innerHTML = `<span class="flex items-center">${task.text}</span>
                        <div>
                            <button class="text-red-500 hover:text-red-700 mr-2 delete-btn">delete</button>
                        </div>
                        `;
        li.addEventListener('click',(e)=>{
            if(e.target.tagName === 'BUTTON'){return}
            tasks.completed = !tasks.completed;
            li.classList.toggle('completed');
            saveTasks()
        });

        li.querySelector('.delete-btn').addEventListener('click',(e)=>{
            e.stopPropagation(); // used to prevent default behaviour of event propagation bubbling
            tasks = tasks.filter((t) => t.id!==task.id);
            li.remove();
            saveTasks();
        })

        todoList.appendChild(li);
    }

    function saveTasks(){
        localStorage.setItem('Tasks',JSON.stringify(tasks));
    }

})