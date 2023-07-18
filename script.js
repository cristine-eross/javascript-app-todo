const form = document.getElementById('form')
const input = document.getElementById('input')
const list = document.querySelector('.list')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const todo = input.value

    if(todo) {
        const task = document.createElement('li')
        task.innerText = todo
        list.insertAdjacentHTML("afterbegin", `<ul>
        <input type="checkbox" class="check">
        <li>${task.textContent}</li>
    </ul>`)
         
         input.value = ''
    }
})