import React, {Suspense} from "react";

import {
    Card,
    Container,
   
  } from "reactstrap";

import Header from "components/Headers/Header.js";

const OrdersTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./ordersTable')), 1000);
  });
});
class Orders extends React.Component {
  deleteOrder = (index ) => {
 
    const orders = Object.assign([],this.state.orders)
   index = orders.findIndex(order => order.id === index)
   if(orders[index].status === "Delivery in progress") orders[index].status ="Canceled"
   else orders.splice(index,1)
   
    this.setState({
      orders:orders
    })
  }

  state= {
    orders : [
      {
        id:56489794,
        img:"barcode.png",
        customerid:78979465,
        store:"Greengrocer",
        date: "18/11/2019",
        delivery: "Home",
        status:"Delivery in progress",
        location:"Avenue Rapp,75007 Paris",
        order:[["123","Tarte au chocolat",36.05,2],["456","Pêche plate",7.5,3]]
      },
      {
        id:87651388,
        img:"codebar.png",
        customerid:46975823,
        store:"Maison de pain",
        date: "21/12/2019",
        delivery: "Restaurant",
        status:"Delivered",
        location:"Restaurant Pantagruel,24 Rue du Sentier, 75002 Paris",
        order:[["123","Tarte au chocolat",36.05,2],["456","Pêche plate",7.5,3]]
      },
    ]
  }
  altOrders=[...this.state.orders]
  filteringOrders = (customer,partner,delivery,options,date) => {
        
    let list = [...this.altOrders]
 
    if(customer !== undefined && customer !== "") list = list.filter(p => `${p.customerid}` === customer)
    if(partner !== undefined && partner !== "") list = list.filter(p => p.store === partner)
    if  (options !== undefined) list = list.filter (p => p.status === options)
    if  (delivery !== undefined) list = list.filter (p => p.delivery === delivery)
    if(date !== undefined ) list = list.filter(p => p.date.split("/")[0] === `${date.date()}` && p.date.split("/")[1] === `${date.month()+1}` &&  p.date.split("/")[2] === `${date.year()}`  )
    this.setState({
     orders:list
    })
   }
   resetFilter = () => {
    this.setState({
      orders:this.altOrders
     })
  }

  searchOrders = value =>{
    console.log(value)
    let list = [...this.altOrders]
    if(list.filter(p => p.id.toString().includes(value)).length !== 0) {list = list.filter(p => p.id.toString().includes(value))
      this.setState({
        orders:list
      })}
  }

     
  sortDownOrders = () =>{
         
    let list = [...this.state.orders]
    list.sort(this.props.compareDate)
    this.setState({
      orders:list
    })
  }
  sortUpOrders = () =>{
    let list = [...this.state.orders]
    list.sort(this.props.compareDate)
    list.reverse()
    this.setState({
      orders:list
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
          <OrdersTable 
            orders={this.state.orders}
            
            deleteOrder={this.deleteOrder}
            filteringOrders={this.filteringOrders}
            resetFilter={this.resetFilter}
            searchOrders={this.searchOrders}
            sortDownOrders={this.sortDownOrders}
            sortUpOrders={this.sortUpOrders}></OrdersTable>
            </Suspense>
    </Container>
    
      </>
    
)}
   
    
  }
  
  export default Orders;
  