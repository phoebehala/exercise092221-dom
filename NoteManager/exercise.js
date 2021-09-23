//solution goes here....


const originalUl = document.querySelector(' .note-list #list');
console.log(originalUl);

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

     const newP2 = document.createElement('p');
     const newI1 = document.createElement('i');
     const newI2 = document.createElement('i');


    /* add content/value */ 
    newP.innerText=newItemContent;
    console.log(newP.innerText);

    /* appended to document */ 
    newLi.append(newP);
    originalUl.append(newLi);

    newLi.append(newP2);
    newP2.append(newI1);
    newP2.append(newI2);

    
    /*  to apply class */ 

    // approach 1
    newI1.classList.add('fa');
    newI1.classList.add('fa-pencil-square-o');

    // approach 2
    newI2.className +="fa fa-times";

    // approach 3
    //.setAttribute('','')

    


    /* clear the value */
    this.querySelector('input[type="text"]').value = '';

   
})
