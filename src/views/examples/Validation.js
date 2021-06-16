import React, {Suspense} from "react";
import ReactDatetime from "react-datetime";
// reactstrap components
import {

  Container,
  Card

} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const  ValidationTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./validationTable')), 1000);
  });
});
class Validation extends React.Component {
  validation = (option,i) =>{
    const list = [...this.state.proposals]
    const index = list.findIndex(p => p.id === i)
    list[index].status=option
    this.setState({
      proposals:list
    })
  }
  state = {
    proposals : [
          {
            id:1,
            img:"chocolate-cake-thumb-1.jpg",
            name:"Tarte au chocolat",
            owner:"Maison de pain",
            price:43.00,
            amount:"1 piece",
            categorie:[["patisserie.png","Pastry"],["cake.png","Cake"]],
            date:"17/7/2020",
            description:"Pâte sablée cacao, ganache chocolat noir sans sucre Valrhona. Sans gluten, sans sucres ajoutés, fabrication artisanale. Une tarte sablée et fondante pour les amateurs de chocolat.",
            delivery : ["Local","","Restaurant"],
            status:"Pending"
          },
          {
            id:2,
            img:"Saucisson_aux_herbes.jpg",
            name:"Sausage with herbs",
            owner:"Butcher shop",
            price:1.80,
            amount:"1 piece (100g)",
            categorie:[["meat.png","Meat"]],
            date:"16/7/2020",
            description:"Constitué de viande, d'épices et d'ail frais haché, à la texture grossière et au goût aillé.",
            delivery : ["Local","Home",""],
            status:"Declined"
          },
          {
            id:3,
            img:"péche.jpg",
            name:"Pêche plate",
            owner:"Greengrocer",
            price:7.50,
            amount:"1 kg",
            categorie:[["apple.png","Fruits"]],
            date:"23/8/2020",
            description:"Pleine de saveurs, elle se distingue par sa forme aplatie, l'idéal pour une pause fruitée. Saison de juillet à août.",
            delivery : ["Local","Home","Restaurant"],
            status:"Approved"
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
        ],
      }
      altValidations=[...this.state.proposals]
      filteringValidations = (owner,min,max,categories,options,date) => {
        
           let list = [...this.altValidations]
        
           if(owner !== undefined && owner !== "") list = list.filter(p => p.owner === owner)
           if (min !== undefined && min !== "") list = list.filter(p=> p.price >= min)
           if (max !== undefined && max !== "" ) list = list.filter(p=> p.price <= max)
           if (categories.length !== 0 ) list = list.filter( p => p.categorie.filter(value => categories.includes(value[1])).length !==0)
           if  (options !== undefined) list = list.filter (p => p.status === options)
           if(date !== undefined ) list = list.filter(p => p.date.split("/")[0] === `${date.date()}` && p.date.split("/")[1] === `${date.month()+1}` &&  p.date.split("/")[2] === `${date.year()}`  )
           this.setState({
            proposals:list
           })
          }
          resetFilter = () => {
            this.setState({
              proposals:this.altValidations
             })
          }

          searchProposals = value =>{
            console.log(value)
            let list = [...this.altValidations]
            if(list.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
              this.setState({
                proposals:list
              })}
          }
         
          sortDownProposals = () =>{
         
            let list = [...this.state.proposals]
            list.sort(this.props.compareDate)
            this.setState({
              proposals:list
            })
          }
          sortUpProposals = () =>{
            let list = [...this.state.proposals]
            list.sort(this.props.compareDate)
            list.reverse()
            this.setState({
              proposals:list
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
          <ValidationTable     proposals={this.state.proposals}
            validation={this.validation}
            categories={this.state.categories}
            subcategories={this.state.subcategories}
            filteringValidations={this.filteringValidations}
            resetFilter={this.resetFilter}
            searchProposals={this.searchProposals}
            sortDownProposals={this.sortDownProposals}
            sortUpProposals={this.sortUpProposals}
            ></ValidationTable>
            </Suspense>
   </Container>
      </>
    );
  }
}

export default Validation;
