import React, {Suspense} from "react";

import {
    Card,
    Container,
    
  } from "reactstrap";

import Header from "components/Headers/Header.js";

const CategoriesTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./categoriesTable')), 1000);
  });
});

class Categories extends React.Component {
  deleteCategorie = (index ) => {
 
    const categories = Object.assign([],this.state.categories)
    this.setState({
      categories:categories.filter(categorie => categorie.id !== index)
    })
  
  }
  editCategorie  = (categorie ) => {
 
    const categories = Object.assign([],this.state.categories)
    const index = categories.findIndex(c => c.id === categorie.id)
    categories[index] = categorie
    this.setState({
      categories:categories
    })
  
  }
  editSubCategorie  = (subcategorie ) => {
 
    const subcategories = Object.assign([],this.state.subcategories)
    const index = subcategories.findIndex(c => c.id === subcategorie.id)
    subcategories[index] = subcategorie
    this.setState({
      subcategories:subcategories
    })
  
  }
  deleteSubCategorie = (index ) => {
 
    const subcategories = Object.assign([],this.state.subcategories)
    this.setState({
      subcategories:subcategories.filter(subcategorie => subcategorie.id !== index)
    })
  
  }
  addCategorie = (name,img) => {
    const cats = [...this.state.categories]
    const index = cats[cats.length-1].id+1
    const categorie = {
      id: index,
      name:name,
      img:img
    }
    
    cats.push(categorie)
   
this.setState({
  categories:cats
})
  }
  addSubCategorie = (name,mother,img) => {
    const subCats = [...this.state.subcategories]
    const index = subCats[subCats.length-1].id+1
    const categorie = {
      id: index,
      name:name,
      mother:mother,
      img:img
    }
    
    subCats.push(categorie)
    
this.setState({
  subcategories:subCats
})
  }
  
   state= {
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
   altCategories=[...this.state.categories]
   altSubCategories=[...this.state.subcategories]
   searchCategories = value =>{
    
    let list = [...this.altCategories]
    console.log(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))) 
    if(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
      this.setState({
        categories:list
      })}
  }
  searchSubCategories = value =>{
    
    let list = [...this.altSubCategories]
    console.log(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))) 
    if(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
      this.setState({
        subcategories:list
      })}
  }

  sortDownCategories= () =>{
         
    let list = [...this.state.categories]
    list.sort(this.props.compare)
    this.setState({
      categories:list
    })
  }
  sortUpCategories= () =>{
    let list = [...this.state.categories]
    list.sort(this.props.compare)
    list.reverse()
    this.setState({
      categories:list
    })
  }

  sortDownSubCategories= () =>{
         
    let list = [...this.state.subcategories]
    list.sort(this.props.compare)
    this.setState({
      subcategories:list
    })
  }
  sortUpSubCategories= () =>{
    let list = [...this.state.subcategories]
    list.sort(this.props.compare)
    list.reverse()
    this.setState({
      subcategories:list
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
          <CategoriesTable 
           categories={this.state.categories}
           subcategories={this.state.subcategories}
           
           
           
           deleteCategorie={this.deleteCategorie}
           deleteSubCategorie={this.deleteSubCategorie}
           
           addCategorie={this.addCategorie}
           addSubCategorie={this.addSubCategorie}
           
           editCategorie={this.editCategorie}
           editSubCategorie={this.editSubCategorie}
           searchCategories={this.searchCategories}
           searchSubCategories={this.searchSubCategories}
           sortDownCategories={this.sortDownCategories}
           sortUpCategories={this.sortUpCategories}
           sortDownSubCategories={this.sortDownSubCategories}
           sortUpSubCategories={this.sortUpSubCategories}></CategoriesTable>
           </Suspense>
        </Container>
      </>
    
)}
   
    
  }
  
  export default Categories;
  