const listsContainer = document.querySelector('[data-lists]')
const newListForm = documetn.querySelector('[data-new-list-form]')
const newListInput = documetn.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.Value
  if (listName == null || listName ==='') return
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  render()
})

function createList(name){
  {id: Date.now().toString(), name: name, taska: []
}

function render(){
  clearElement(listsContainer)
  lists.forEach(list => {
    const listElement = document.creatElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add("list-name")
    listElement.innerText = list.name
    listsContainer.appendChild(listElement)
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()
