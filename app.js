const addNote = document.querySelector('#add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note => {
        addNewNote(note);
    })
}

addNote.addEventListener('click', () => {
    addNewNote();
})

function addNewNote(text = "") {
    const note = document.createElement('div');
    note.classList.add('note');
    document.body.appendChild(note);
    note.innerHTML = `
        <div class="notes" id="notes">
            <div class="header">
                <button id="edit"><i class="fa fa-edit"></i></button>
                <button id="delete"><i class="fa fa-trash"></i></button>
            </div>
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea class="${text ? 'hidden' : ''}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('#edit');
    const deleteBtn = note.querySelector('#delete');
    
    const textArea = note.querySelector('textarea');
    const mainText = note.querySelector('.main');
    
    editBtn.addEventListener('click', () => {
        mainText.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        updateLS();
    })

    textArea.value = text;
    mainText.innerHTML = text;
    
    textArea.addEventListener("input", () => {
        let input = textArea.value;
        mainText.innerHTML = input;
        updateLS();
    })
    
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}