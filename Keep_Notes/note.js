console.log("welcome to console");
shownotes();//we wants our scree to show all previous notes as soon as live server beigins
//adding a notes
let addbtn = document.getElementById("addbtn");//when addbtn pressed addbtn is id of our button
addbtn.addEventListener("click", function (e) {//defining fnc e
    let addtxt = document.getElementById("addtext");//text added in addnotes with id="addtext called"
    let notes = localStorage.getItem("notes");//it returns us all the notes stored so far in local storage with id notes...notes id is called..getItem used when array is being called
    if (notes == null)//so far no notes have been stored
    { notesObj = []; }//create empty array of all notes
    else// notes are present
    { notesObj = JSON.parse(notes); }//convert notes to javascript language and store it in array called notesObj
    //now my notesObj is an array with all the notes added so far
    notesObj.push(addtxt.value);//the value stored in addtext by clicking addnotes button varibale ,add that to note now.
    //now we update local storage too with the new note
    localStorage.setItem("notes", JSON.stringify(notesObj));//now we replace original data in notes with new to string(notes obj array with added note) in our local storage.
    //local storage sores value in string thats why stringyfying the array
    addtext.value = "";// now we reset back the added text note to null. we have done the adding now.
    console.log(notesObj);//pringting our notesObj array in console.
    //till now what we have done is added the new note into our local storage but has not printed the added notes on window screen.
    shownotes();//function to print the notes on screen till now in our storage.
});//when we hear addbtn being clicked then call fnc e;


//function to show elements from local storage
function shownotes() {
    let notes = localStorage.getItem("notes");//all notes in our storage stored in array notes
    if (notes == null)//no node stored till now
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    let html = "";
    //fech note in notesObj add this html that is responsible for adding notes
    notesObj.forEach(function (element, index) {//element stores value at index notesObj
        html += `
        <div class="notecard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id=${index} onclick="deletenote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>`;
    });
    let noteselement = document.getElementById("notes");//all the notes stored so far
    if (notesObj.length != 0) {
        noteselement.innerHTML = html;//we are adding html for all the notes
    }
    else {
        console.log("empty");
        noteselement.innerHTML = `No notes stored till now.`;//when there are no notes stored then innerhtml has no note stored so far
    }

}

//function to delete a note:-
function deletenote(index) {
    console.log("deletingnotes");
    let notes = localStorage.getItem("notes");//reading notes from localstorage
    if (notes == null)//so far no notes have been stored
    { notesObj = []; }//create empty array of all notes
    else// notes are present
    { notesObj = JSON.parse(notes); }
    notesObj.splice(index, 1);//splice from index index, till 1 next element
    //after deletion update local storage
    localStorage.setItem("notes", JSON.stringify(notesObj))
    shownotes();//After deletion notes will be showed
}

let search = document.getElementById("search");
search.addEventListener("input", function ()//a fucntion to search input is fired
{
    console.log("search fnc fired");
    let searchval = search.value;
    console.log("search fnc fired",searchval);
    let notecards = document.getElementsByClassName("notecard");//all claasees with class name note card are stored in array notecards
    Array.from(notecards).forEach(function (element) {//element stroes each notecard..now each notecard has a head, a p-paragramh, a delete node element
        let cardtext = element.getElementsByTagName("p")[0].innerText;// wew want paragraph..and in paragraph first element
        if (cardtext.includes(searchval))
            element.style.display = "block";//display that element note card
        else
            element.style.display = "none";//dont display note card

    });
});
//further ideas:--
///make this like notes like in my mobile..
///add option like mark as important notes and displya at top highlight node..colour different notes..provide colour palate
//add title for individual 
//search by note
//separate notes by user different user can make differenct notes..
//sink and host to a web server....



