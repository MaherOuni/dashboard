import React ,{Suspense} from "react";

import {
    Card,
    Container,
   
  } from "reactstrap";

import Header from "components/Headers/Header.js";
const CustomersTable = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./customersTable')), 1000);
  });
});
class Customers extends React.Component {
  deleteCustomer = (index ) => {
 
    const customers = Object.assign([],this.state.customers)
    this.setState({
      customers:customers.filter(customer => customer.id !== index)
    })
  
  }

  state = {
    customers : [
      {
        id:1,
        img:"user.png",
        name: "Jake",
        lastname:"Johnson",
        email:"j.johnson@gmail.com",
        phone:"+3399887766",
        address1:"Avenue Rapp,75007 Paris",
        address2:"Avenue Bosquet,75007 Paris",
        satisfaction: 73,
        orders:14,
        date:"14 Mars 2018"
      }
    ]
  }
  altCustomers=[...this.state.customers]
  searchCustomers = value =>{
    console.log(value)
    let list = [...this.altCustomers]
    if(list.filter(p => p.email.toLowerCase().includes(value.toLowerCase())).length !== 0) {list = list.filter(p => p.email.toLowerCase().includes(value.toLowerCase()))
      this.setState({
        proposals:list
      })}
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
          <CustomersTable 
               customers={this.state.customers}
               deleteCustomer={this.deleteCustomer}
               searchCustomers={this.searchCustomers}>

          </CustomersTable>
          </Suspense>
   </Container>
      </>
    
)}
   
    
  }
  
  export default Customers;
  