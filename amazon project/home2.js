function showCategory() {
    const url = ' http://localhost:2300/category';
    // const url='http://localhost:3200/posts';
    // let response=fetch(url,{method:'GET'});
    // // .then((res)=>res.json())
    // .then((data.map((item)=>))=>{
    // //     let mycity;
    // //     for(mycity of data)
    // // console.log(mycity.category)
    // .then(data.map((item)=>{
    //     let element=document.createElement('option');

    //     let data=await response.json();
    //     data.map((item)=>{
    // let element=document.createElement('option')
    fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                console.log(item);
                let element = document.createElement('li');
                //console.log(element);

                let text = document.createTextNode(item.category);
               // console.log(text);
                element.appendChild(text);
                element.value = item.id;
                let a = document.getElementById('allCategories').appendChild(element);
               // console.log(a);
            })


        })
}
function displayProduct()
{
    const url1='http://localhost:3210/Product?category_id=';
     let category=document.getElementById('catExtra').value;
     let product=document.getElementById('catExtra2');
    console.log(product);
    // while(product.length>0)
    // {//console.log("hello");
    //    product.remove;
    // }
    console.log(category);
    fetch(`${url1}${category}`, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                
               console.log(item);
                let element = document.createElement('option');
               //console.log(element);

                let text = document.createTextNode(`${item.product_name}`);
                console.log(text);
                element.appendChild(text);
                element.value = item.category_id;
                let a = document.getElementById('catExtra2').appendChild(element);
               // console.log(a);
            })


        })
   



}







