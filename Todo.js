import React, { useState } from 'react' 
//import icon from 'font-awesome'
import todo from '../images/hand-drawn-essay-illustration_23-2150292643.webp'

import '../App.css'; 
const Todo = () => {

//========================= input item===========================

    const[inputData,setinputData]=useState('');
    const [items,setItems]=useState([]);
    const [toggleSubmit,settoggleSubmit]=useState(true);
    const [isEditItem,setIsEditItem]=useState(null);

    const addItem=()=>{
        if(!inputData){
            alert('plzz fill the data');
        }else if(inputData && !toggleSubmit){
           setItems(
            items.map((elem)=>{
                if(elem.id===isEditItem){
                    return{...elem,name:inputData}
                }
                return elem;
            })
           )

           settoggleSubmit(true);
           setinputData('');
           setIsEditItem(null);

        }else{
            
     const allInputData={id: new Date().getTime().toString(),name:inputData}
setItems([...items,allInputData]);
setinputData('');
    }   }
// ==========delete item===================

const deleteItem=(index)=>{
const updateitems =items.filter((elem)=>{
return index !==elem.id;
})
setItems(updateitems);
}





//===========remove=========================================    



const removeAll=()=>{
    setItems([]);

}

    // ================= edit==============

    const editItem =(id)=>{
let newEditItem= items.find((elem)=>{
    return elem.id==id
});
console.log(newEditItem);
settoggleSubmit(false);
setinputData(newEditItem.name);
setIsEditItem(id);

}
  return (
  <>
    <div className='main-div'>
    <div className='child-div'>
        <figure>
            <img src={todo} alt='todo'  />
       <figcaption>Add Your List Here</figcaption>
        </figure>

        <div className='addItems'>
              <input type='text' placeholder='Add Items...'  
                                         value={inputData} 
                                         onChange={(e)=>setinputData(e.target.value)} />

                                         {
                                            toggleSubmit? <i class="fa fa-plus add-btn"   title='Add Item' onClick={addItem}></i>:
                                            <i class="far fa-edit add-btn" title='Update Item'  onClick={addItem}></i>
                                         }
  
  {/* <i className="fa fa-plus add-btn" aria-hidden="true" title='Add Item' onClick={addItem}></i> */}
  {/* <i class="fa fa-plus add-btn"   title='Add Item' onClick={addItem}></i> */}
        </div>

         <div className='showItems'>

         {
            items.map((elem)=>{
              return(
                <div className='eachItem' key={elem.id}>
               <h3>{elem.name}</h3>
 {/* <i className='far fa-trash-alt add-btn' title="Delete Item"></i> */}
 <div className='todo-btn'>
 <i class="far fa-edit add-btn" title='Edit Item'  onClick={()=>editItem(elem.id)}></i>
 <i class="fa-solid fa-trash-alt add-btn" title='Delete Item'  onClick={()=>deleteItem(elem.id)}></i>
            </div>
            
            </div>
              )
            })
         }
           
        </div>
              
              <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>
              </div>


        </div>
    </div>
  
  </>
  )
}

export default Todo
