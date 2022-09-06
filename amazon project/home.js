let a=document.getElementById('coupon');

function getCoupon(){
    document.getElementById('coupon').style.visibility='visible';
}

function closeCoupon()
{
document.getElementById('coupon').style.visibility='hidden';
}

const url1="https://jyotirani12.github.io/secondproject-Data/index.json";
function getCategory()
{
    fetch(url1,{method:'GET'})
    .then(res=>res.json())
    .then((data)=>{
        data["category"].map((item)=>{
            let element=document.createElement('option');
            
            let text=document.createTextNode(item.category);
            element.value=item.category_id;
            element.appendChild(text);
            document.getElementById('allcategories').appendChild(element);


        })
    })

}

const productUrl="https://jyotirani12.github.io/secondproject-Data/product.json";

async function getProduct() {
   
  // Get the id of category
  let category = document.getElementById("allcategories").value;
  //   Select local options HTML
  let productDrop = document.getElementById("product");
  //   Empty array for filling filtered the data
  let local_data = [];
  //   Remove all the options that were associated from other categories
  while (productDrop.length > 0) {
    productDrop.remove(0);
  }

  //   Fetch all the Products
  let response = await fetch(`${productUrl}`, {method:"GET"});
  let data = await response.json();
  console.log(data.product.product_id);
 
  //  Since it is not a real API, filter the Product manually as per Category_id
  let finalData = data["product"].filter((item1) => {
    if (category == item1.category_id) {
      local_data.push(item1);
    }
  });
  console.log(finalData.map);

   Map the filtered data and create local options
  local_data.map((item)=>{
    console.log(item);
  })
  
    local_data.map((item)=>{
      //if(local_data.indexOf(local_data.product_name)===-1){
    let element = document.createElement("option");
    let text = document.createTextNode( `${item.product_name}`);
    element.appendChild(text);
    element.value = item.category_id;
    document.getElementById("product").appendChild(element);
      //}
  
  })
}

