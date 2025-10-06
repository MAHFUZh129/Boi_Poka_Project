const getStoredBook=()=>{

    const storedBookStr =localStorage.getItem("readList")
   
    if (storedBookStr){
        const storedBookData = JSON.parse(storedBookStr)
        return storedBookData
    }
    else{
        return [];
    }

}


const addStoredDB =(id)=>{
    const storedBookData=getStoredBook();

    if(storedBookData.includes(id)){
        console.log("fhbj")
        alert("exist")
    }
    else{
        storedBookData.push(id)
        const data =JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
    }
}

export {addStoredDB,getStoredBook}