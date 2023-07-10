var tags = ["nodejs", "reactjs",]
var getInputContent = document.querySelector('.input');
var getTags = document.querySelector('.tags');
var getremoveAll = document.querySelector('.removeAll');  

getInputContent.addEventListener('keydown', getInputValue);

getremoveAll.addEventListener('click', removeAll);
renderValue(tags)

function inputFocus() {
    getInputContent.focus()
}

function renderValue(tags){
    //render thành element
    const htmls = tags.map(function(tag, index) {
        return   `
        <div class="tag">
            <p class= "value">${tag}</p>
            <i class="fa-solid fa-xmark" onclick = "onRemove(this, ${index})"></i>
        </div>
        `
    })
    getTags.innerHTML = htmls.join('')
}

function getInputValue(e) {
    if (e.which === 13) {
        // đưa giá trị ở ô inpxut vào mảng tags
        value = getInputContent.value.trim()
        if (value != "" && !tags.includes(value)) {
            tags.push(value)        
        }
        //làm rỗng ô input
        getInputContent.value = ""
        //render mảng tags
        renderValue(tags)
    }
}

function removeAll() {
    tags = []
    renderValue(tags)
    inputFocus()
}

function onRemove(tag, index){
    tags.splice(index, 1)
    tag.parentElement.remove()
    inputFocus()
}





