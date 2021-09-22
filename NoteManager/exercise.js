//solution goes here....


const originalUl = document.querySelector(' .note-list #list');
//console.log(originalUl);

const addToForm = document.querySelectorAll('form')[1];
//console.log(addToForm);


addToForm.addEventListener('submit',function(e){

    e.preventDefault();   // prevent from refreshing the page

    // if there is no input, get out of the block
    if(!(this.querySelector('input[type="text"]').value)) return

    

    const newItemContent = this.querySelector('input[type="text"]').value;
    //console.log(newItemContent);


     /* Creating Elements */
     const newLi = document.createElement('li');
     const newP = document.createElement('p');

    /* add content/value */ 
    newP.innerText=newItemContent;
    console.log(newP.innerText);

    /* appended to document */ 
    newLi.append(newP);
    originalUl.append(newLi);


    // clear the value
    this.querySelector('input[type="text"]').value = '';

   
})
