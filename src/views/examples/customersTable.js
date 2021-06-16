import React from "react";

import {
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Input,
    Row,
    Col,
    Modal,
    Button,
  } from "reactstrap";
  class CustomersTable extends React.Component {
  icon = {margin:"5px","font-size":"15px","margin-left":"0px"}
  row = {"margin-left":"0px"}
  title={color:"#5e72e4"}
        /* the state and toggle option for the modal */
        state = {
          defaultModal: false,
          index:undefined
        };
        toggleModal = state => {
          this.setState({
            [state]: !this.state[state]
          });
        };
        info1 = {}

        render() {
 
            return (
              <>
        <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0">Customers
                  <div style={{display:"inline-flex",float:"right"}} className="col-sm-4">    
             
             <Input 
             type="text"
             className="form-control-alternative text-center  "
             placeholder="Search by E-mail"
             style={{float:"right",marginRight:"5px",maxHeight:"30px"}}
             onChange={(e)=>{
                this.setState({
                   search:e.target.value
                })}}></Input>
                  <Button 
                       className="btn-icon btn-2" 
                       size="sm" 
                       style={{float:"right",marginRight:"5px",borderRadius:"15px"}} 
                       color="primary" 
                       type="button"
                       onClick={() => {
                           this.props.searchCustomers(this.state.search)
                       }}>

 <i className="fas fa-search"></i>

</Button>
       </div> 
                 
               </h3>
                </CardHeader>
                <Table className={`align-items-center table-light table-flush`} responsive>
                  <thead className={`thead-light`}>
                    <tr>
                      
                      <th scope="col">Name</th>
                      <th scope="col">Last name</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Phone number</th>
                      <th scope="col">Address</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                 {/* the partner shops list rendering */} 
                      { 
                      this.props.customers.map(info => (  <tr key={info.id}> 
                          <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require(`assets/img/icons/common/${info.img}`)}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {info.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{info.lastname}</td>
               
                      <td>
                            {info.email}
                      </td>
                      <td>
                      
                          {info.phone}
                    
                      </td>
                      <td>
                      
                      {info.address1}
                
                  </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                          
                          color="primary"
                          type="button"
                          onClick={() => {this.toggleModal("defaultModal")
                                          this.info1 = info}}
                            >
                             Inspect
                            </DropdownItem> 
                            <DropdownItem
                            
                             color="warning"
                             type="button"
                             onClick={() => {this.toggleModal("notificationModal")
                                              this.setState({index:info.id})}}
                            
                            >
                              Delete
                            </DropdownItem>
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>))}
                  
                </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
     
          <Modal
  className="modal-dialog-centered"
  isOpen={this.state.defaultModal}
  toggle={() => this.toggleModal("defaultModal")}
>
  <div className="modal-header">
    <h3 className="modal-title" id="modal-title-default" style={this.title} >
      {this.info1.name} {this.info1.lastname}
    </h3>
    <button
      aria-label="Close"
      className="close"
      data-dismiss="modal"
      type="button"
      onClick={() => this.toggleModal("defaultModal")}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <div className="modal-body">
    <h2 ><i className="ni ni-email-83" style={this.icon}></i>E-mail</h2>
    <h5>
     {this.info1.email}
    </h5>
    <Row style={this.row} >
        <Col><h2 > <i className="ni ni-pin-3" style={this.icon}>  </i>Address 1</h2>
        <h5>{this.info1.address1}</h5></Col>
        <Col><h2><i className="ni ni-pin-3" style={this.icon}></i>Address 2</h2>
        <h5>{this.info1.address2} </h5></Col>
        </Row> 
        <h2 ><i className="ni ni-mobile-button" style={this.icon}></i>Phone number</h2>
    <h5>
     {this.info1.phone}
    </h5>
        <div>
        <h2 > <i className="ni ni-satisfied" style={this.icon}>  </i>Satisfaction</h2>
                                <Progress
                                  max="100"
                                  value={this.info1.satisfaction}
                                  barClassName="bg-gradient-info"
                                />
                              </div>
  <Row style={this.row} > <h2 ><i className="ni ni-box-2" style={this.icon}></i>Number of orders:</h2>
    <h5 style={{margin:"auto"}}>
     {this.info1.orders}
    </h5>
    </Row>
    <Row style={this.row} > <h2 ><i className="ni ni-calendar-grid-58" style={this.icon}></i>Registration Date:</h2>
    <h5 style={{margin:"auto"}}>
     {this.info1.date}
    </h5>
    </Row>
  </div>
  <div className="modal-footer">
  
    <Button
      className="ml-auto"
      color="link"
      data-dismiss="modal"
      type="button"
      onClick={() => this.toggleModal("defaultModal")}
    >
      Close
    </Button>
  </div>
</Modal>
                           <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              Your attention is required
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-3 text-center">
              <i className="ni ni-bell-55 ni-3x" />
              <h4 className="heading mt-4">You should read this!</h4>
              <p>
                You are about to delete all data related to this partner shop and prevent it from accessing the platform 
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <Button 
              className="btn-white" 
              color="default" 
              type="button" 
              onClick={() => {this.toggleModal("notificationModal")
                                this.props.deleteCustomer(this.state.index)  }}>
              Ok, Got it
              
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Cancel
            </Button>
          </div>
        </Modal>
       
</>
    
    )}
       
        
      }
      
      export default CustomersTable;
      