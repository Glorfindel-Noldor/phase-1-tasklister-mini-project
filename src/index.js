document.addEventListener("DOMContentLoaded", () => {
    let ls = document.querySelector('form')
    ls.addEventListener('submit', (e)=>{
    e.preventDefault();
    create_ls(e.target.new_task_description.value)
   ls.reset(); 
  })
})
function create_ls(new_task_description){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', removeLs_item)
  btn.textContent='x'
  p.textContent = `${new_task_description} `;
  p.appendChild(btn)
  document.getElementById('box').appendChild(p)
}
function removeLs_item(e){
e.target.parentNode.remove()
}

