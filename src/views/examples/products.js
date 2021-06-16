import React, {Suspense} from "react";

import {
    Container, 
    Card
  } from "reactstrap";
  
import Header from "components/Headers/Header.js";

const ProductsTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./productsTable')), 1000);
  });
});
class Products extends React.Component {
  deleteProduct = (index ) => {
 
    let products = Object.assign([],this.altProducts)
    products = products.filter(product => product.id !== index)
    this.setState({
      products:products
    })
  this.altProducts = [...products]
  }
  addProduct = (img,name,price,amount,categorie, description,options) => {
    const products = [...this.altProducts]
    const index = products[products.length-1].id+1
    const product = {
      id: index,
      img: img,
      name: name,
      owner: "Admin",
      price: price,
      amount: amount,
      categorie: categorie,
      
      description:description,
      delivery :options
    }
    products.unshift(product)
    console.log(product)
    this.setState({
      products:products
    })
    this.altProducts = [...products]
  }
  
  editProduct  = (product ) => {
 
    const products = Object.assign([],this.altProducts)
    const index = products.findIndex(p => p.id === product.id)
    products[index] = product
    this.setState({
      products:products
    })
  this.altProducts=[...products]
  }

state= {
  products : [
    {
      id:548796,
      img:"macarons.jpg",
      name:"Macarons Prestige",
      owner:"Admin",
      price:36.05,
      amount:"6 piece",
      categorie:[["patisserie.png","Pastry"],["macaron.png","Macaron"]],
      date:"23 july 2020",
      description:"Pâte sablée cacao, ganache chocolat noir sans sucre Valrhona. Sans gluten, sans sucres ajoutés, fabrication artisanale. Une tarte sablée et fondante pour les amateurs de chocolat.",
      delivery : ["Local","","Restaurant"],
    },
    {id:2,
    img:"péche.jpg",
    name:"Pêche plate",
    owner:"Greengrocer",
    price:7.50,
    amount:"1 kg",
    categorie:[["apple.png","Fruits"]],
    date:"23 juin 2020",
    description:"Pleine de saveurs, elle se distingue par sa forme aplatie, l'idéal pour une pause fruitée. Saison de juillet à août.",
    delivery : ["Local","Home","Restaurant"]}
  ],
  categories : [
    {
      id:8798643,
      name:"Meat",
      img:"meat.png"
    },
    {
      id:8798644,
      name:"Pastry",
      img:"patisserie.png"
    }
  ],
  subcategories : [
    {
      id:5487324,
      name:"Chicken",
      mother:"Meat",
      img:"chicken.png"
    },
    {
      id:4487324,
      name:"Cake",
      mother:"Pastry",
      img:"cake.png"
    }
  ],
}
altProducts = [...this.state.products]
searchProduct = value =>{
  console.log(value)
  let list = [...this.altProducts]
  if(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      products:list
    })}
}

filteringProducts = (owner,min,max,categories,options) => {

    let list = [...this.altProducts]
    
    if(owner !== undefined && owner !== "") list = list.filter(p => p.owner === owner)
    if (min !== undefined && min !== "") list = list.filter(p=> p.price >= min)
    if (max !== undefined && max !== "" ) list = list.filter(p=> p.price <= max)
    if (categories.length !== 0 ) list = list.filter( p => p.categorie.filter(value => categories.includes(value[1])).length !==0)
    if  (options.length !== 0) list = list.filter (p => options.every(e => p.delivery.includes(e)))
    this.setState({
      products:list
    })
   }
   resetFilter= () => {
    this.setState({
      products:this.altProducts
    })
   }

   sortDownProducts = () =>{
         
    let list = [...this.state.products]
    list.sort(this.props.compare)
    this.setState({
      products:list
    })
  }
  sortUpProducts = () =>{
    let list = [...this.state.products]
    list.sort(this.props.compare)
    list.reverse()
    this.setState({
      products:list
    })
  }
  render() {
 
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Suspense fallback={      <>
     
     <div className="col">
       <Card className="shadow">
      
       <img 
           style={{
             margin:"auto",
             width:"30%",
             }}
           alt="..."
           src={this.props.Loader}
         />
       
       </Card>
       </div>
       </>}>
          <ProductsTable
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          addProduct={this.addProduct}
          editProduct={this.editProduct}
          filteringProducts={this.filteringProducts}
          searchProduct={this.searchProduct}
          categories={this.state.categories}
            subcategories={this.state.subcategories}
            resetFilter={this.resetFilter}
            sortDownProducts={this.sortDownProducts}
            sortUpProducts={this.sortUpProducts}
            ></ProductsTable>
            </Suspense>
    {/* Dark table */}
     
</Container>
      </>
    
)}
   
    
  }
  
  export default Products;
  