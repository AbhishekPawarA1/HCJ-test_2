let container=document.getElementById("root")
let title=document.getElementById("title-input")
let button=document.getElementById("add-button")
let content=document.getElementById("content-input")
let select=document.getElementById("select-cat")

title.addEventListener("change",function handletitle(){
    console.log(title.value)
})

content.addEventListener("change",function handletitle(){
    console.log(content.value)
})

select.addEventListener("change",function handleselect(){
    console.log(select.value)
})

button.addEventListener("click",function handleadd(){
     container.innerHTML+=`
        <div class="child">
            <p style="text-align: center">-: Note :-</p>
            <h2>Title: ${title.value}</h2>
            <h2>Content: ${content.value}</h2>
            <h2>Category: ${select.value}</h2>
        </div>
     `;
     title.value=""
     content.value=""
     select.value=""
})
