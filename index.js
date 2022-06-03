//create header (title)
let header=document.createElement("h1")
header.classList.add("title")
header.innerHTML="Name Tag Generator"
document.body.append(header)

//create input field
let inputContainer=document.createElement("div")
inputContainer.classList.add("input-container")

let form=document.createElement("form")
let inputField=document.createElement("input")
inputField.setAttribute("type","text")
inputField.setAttribute("required","required")
inputField.setAttribute("placeholder","Enter your name..")

let submit=document.createElement("input")
submit.setAttribute("type","submit")
submit.setAttribute("value","Enter")
form.append(inputField)
form.append(submit)
let clearAllTagsButton=document.createElement("button")
clearAllTagsButton.innerHTML="Clear All Tags"
clearAllTagsButton.addEventListener("click",()=>tagsContainer.innerHTML="")
inputContainer.append(form)
inputContainer.append(clearAllTagsButton)
document.body.append(inputContainer)

//create tags container
let tagsContainer=document.createElement("div")
tagsContainer.classList.add("container")
document.body.append(tagsContainer)


//create and append tag method
const createTag=(name)=>{
    let tag=document.createElement("div")
    tag.setAttribute("name",name)
    tag.classList.add("tag")
    let topOfTag=document.createElement("div")

    let hello=document.createElement("h1")
    hello.innerHTML="HELLO"
    topOfTag.append(hello)

    let myNameIs=document.createElement("h2")
    myNameIs.innerHTML="my name is"
    topOfTag.append(myNameIs)

    tag.append(topOfTag)

    let bottomOfTag=document.createElement("div")
    bottomOfTag.innerHTML=name
    tag.append(bottomOfTag)
    
    let closeIcon=document.createElement("span")
    closeIcon.classList.add("close-icon")
    closeIcon.innerHTML="X"

    //add event (delete)
    closeIcon.addEventListener("click",()=>deleteTag(name))
    
    tag.append(closeIcon)
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    tag.style.setProperty("background-color",`#${randomColor}`)
    inputField.value=""
    tagsContainer.append(tag)
}


//add event (create tag)
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    createTag(inputField.value)
})

//delete by name (method)
let deleteTag=(name)=>{
let listOfTags=Array.from(document.getElementsByClassName("tag"))
for(let tag of listOfTags){
    let tagName=tag.getAttribute("name")
    if(tagName==name)
        tag.remove() //delete from dom
    
}

}
