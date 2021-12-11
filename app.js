const addNote = document.querySelector('#add');

addNote.addEventListener('click', () => {
    addNewNote();
})

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    document.body.appendChild(note);
    note.innerHTML = `
        <div class="notes" id="notes">
            <div class="header">
                <button id="edit"><i class="fa fa-edit"></i></button>
                <button id="delete"><i class="fa fa-trash"></i></button>
            </div>
            <textarea></textarea>
            <div class="main hidden"></div>
        </div>
    `;
    

    const editBtn = note.querySelector('#edit');
    const deleteBtn = note.querySelector('#delete');
    
    const textArea = note.querySelector('textarea');
    const mainText = note.querySelector('.main');
    
    editBtn.addEventListener('click', () => {
        mainText.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })
    
    textArea.addEventListener("input", () => {
        let input = textArea.value;
        mainText.innerHTML = input;
    })
    
    deleteBtn.addEventListener('click', () => {
        note.remove();
    })
    
}


