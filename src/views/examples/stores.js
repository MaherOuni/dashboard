import React, {Suspense} from "react";

import {
    Container,
    Card
  } from "reactstrap";

import Header from "components/Headers/Header.js";

const PartnersTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./partnersTable')), 1000);
  });
});
class Stores extends React.Component {
  deleteStore = (index ) => {
    const stores = Object.assign([],this.state.table)
    this.setState({
      table:stores.filter(store => store.id !== index)
    })
  }
  state = {
    table : [
      {
        id:0,
        img:"supermarket.png",
        name:"Greengrocer",
        location: "57 Rue Corvisart, 75013 Paris",
        cord1:"2.3486372",
        cord2:"48.8305977",
        delivery : ["Local","Home","Restaurant"],
        tags: [["apple.png","Fruits"],["bio.png","Bio"],["vegetable.png","Vegetables"]],
        rating: 50,
        description: "consectetur adipiscing elit. Donec dapibus nisl vitae nisi placerat hendrerit. ",
        openday:"Monday-Friday",
        openhour:"8:00-16:00",
        status:"Approved"
      },
      {
        id: 1,
        img:"market.png",
        name:"Butcher shop",
        location: "5 Rue Vandrezanne, 75013 Paris",
        cord1:"2.3560278",
        cord2:"48.8280843",
        delivery : ["Local","Home",""],
        tags: [["meat.png","Beef"],["chicken.png","Chicken"]],
        rating: 70,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus nisl vitae nisi placerat hendrerit. Suspendisse suscipit, lorem a sagittis feugiat.",
        openday:"Monday-Saturday",
        openhour:"8:30-17:00",
        status:"Pending"
      },
      {id: 2,
      img:"patisserie.png",
      name:"Maison de pain",
      location: "8 Rue de l'École de Médecine,Paris",
      cord1:"2.3420094",
      cord2:"48.8504909",
      delivery : ["Local","","Restaurant"],
      tags: [["bread.png","Bread"],["cake.png","Cake"],["coffee-cup.png","Coffee"]],
      rating: 65,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus nisl vitae nisi placerat hendrerit. Suspendisse suscipit, lorem a sagittis feugiat.",
      openday:"Monday-Sunday",
      openhour:"6:00-13:00",
      status:"Declined"
    },
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
    ],}  

altStores=[...this.state.table]
    filteringStores = (rating,categories,options) => {

      let list = [...this.altStores]
      
      if(rating !== undefined && rating !=="")  list = list.filter( p => p.rating >= rating)
      if (categories.length !== 0 ) list = list.filter( p => p.tags.filter(value => categories.includes(value[1])).length !==0)
      if  (options.length !== 0) list = list.filter (p => options.every(e => p.delivery.includes(e)))
      this.setState({
        table:list
      })
     }
     resetFilter= () => {
      this.setState({
        table:this.altStores
      })
     }
     searchStores = value =>{
      console.log(value)
      let list = [...this.altStores]
      if(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({
          table:list
        })}
    }
    sortDownStores = () =>{
         
      let list = [...this.state.table]
      list.sort(this.props.compare)
      this.setState({
        table:list
      })
    }
    sortUpStores = () =>{
      let list = [...this.state.table]
      list.sort(this.props.compare)
      list.reverse()
      this.setState({
        table:list
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
              <PartnersTable
                table={this.state.table} 
                categories={this.state.categories}
                subcategories={this.state.subcategories}
                deleteStore={this.deleteStore}
                filteringStores={this.filteringStores}
                resetFilter={this.resetFilter}
                searchStores={this.searchStores}
                sortDownStores={this.sortDownStores}
            sortUpStores={this.sortUpStores}></PartnersTable>
            </Suspense>
      </Container>
          </>
        
    )}
}
export default Stores