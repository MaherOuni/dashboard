import React from "react";
import ReactDatetime from "react-datetime";
import {
    Badge,
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
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroup,
    InputGroupText,

    Table,
    Row,
    Col,
    Modal,
    Button,
  } from "reactstrap";

  class OrdersTable extends React.Component {

    status =["Canceled","Delivered","Delivery in progress"]
    deliveryoptions =["Local","Home","Restaurant"]

  icon = {margin:"5px","font-size":"15px",marginLeft:"0px"}
  row = {marginLeft:"0px"}
  title={color:"#5e72e4",margin:"auto",marginLeft:"0px"}
  order={color:"#11cdef",margin:"auto"}
        /* the state and toggle option for the modal */
        state = {
          defaultModal: false,
          index:undefined,
         delivery:undefined,
         options:undefined,
         date:undefined,
         customer:undefined,
         partner:undefined,
         search:"",
        };
        toggleModal = state => {
          this.setState({
            [state]: !this.state[state]
          });
        };
        info1 = {}
        changeDelivery =(option) => {
          
          this.setState({
            delivery:option
          })
          
             }     
             changeOption =(option) => {
          
              this.setState({
                options:option
              })
              
                 }
        render() {
 
            return (
              <>
                    <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0">Orders 
                  <Button
                      type="button"
                      color="info"
                      size="sm"
                      style={{float:"right"}}
                      onClick={() => { this.toggleModal("filterModal")}}
                      >
                         
                          <i className="fas fa-filter"></i>
         
          <span className="btn-inner--text">Filter</span>
                      </Button>
                      <UncontrolledDropdown style={{float:"right",marginRight:"5px",marginTop:"-4px"}} nav>
                <DropdownToggle className="pr-0" nav>
                <Button
                      type="button"
                      color="info"
                      size="sm"
                      
                      >
                          <span className="btn-inner--icon">
                          <i className="ni ni-align-center"></i>
         </span>
          <span className="btn-inner--text">Sort</span>
                      </Button>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem onClick={() => this.props.sortDownOrders()} >
                    <i className="ni ni-bold-down" />
                    <span>Sort by most recent</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => this.props.sortUpOrders()} >
                    <i className="ni ni-bold-up" />
                  <span>Sort by oldest</span>
                  </DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
                 
                      <div style={{display:"inline-flex",float:"right"}} className="col-sm-6">    
             
             <Input 
             type="text"
             className="form-control-alternative text-center  "
             placeholder="Search"
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
                           this.props.searchOrders(this.state.search)
                       }}>

 <i className="fas fa-search"></i>

</Button>
       </div> 
               
                      </h3>
                </CardHeader>
                <Table className={`align-items-center table-light table-flush`} responsive>
                  <thead className={`thead-light`}>
                    <tr>
                      
                     
                        <th scope="col">ID</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Partner Shop</th>
                        <th scope="col">Date</th>
                        <th scope="col">Delivery</th>
                        <th scope="col">Status</th>
                        <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                 {/* the partner shops list rendering */} 
                      { 
                      this.props.orders.map(info => (  <tr key={info.id}> 
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
                              {info.id}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{info.customerid}</td>
               
                      <td>
                            {info.store}
                      </td>
                      <td>
                      
                          {info.date}
                    
                      </td>
                      <td>
                      <Badge color="info" style={{margin:"2px"}} pill>{info.delivery}</Badge>
                      </td>
                      <td>
                      <Badge color="" className="badge-dot mr-4">
                       
                        {info.status === "Delivery in progress" &&      <i className="bg-warning" />}
                        {info.status === "Delivered" &&   <i className="bg-success" />}
                          {info.status === "Canceled" &&     <i className="bg-danger" />}
                            {info.status}
                        </Badge>
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
                              this.setState({
                                total:0
                              })
                              this.total =0
                                      info.order.map(order => this.total+= order[2] * order[3])
                                          this.info1 = info}}
                            >
                             Inspect
                            </DropdownItem> 
                            <DropdownItem
                             
                             color="warning"
                             type="button"
                             onClick={() => {this.toggleModal("notificationModal")
                                              this.setState({
                                                index:info.id
                                              })}}
                            
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
  <Row style={this.row} >
  { this.info1.img === undefined ? null :  <img className="col-2"  alt="..."
           src={require(`assets/img/icons/common/${this.info1.img}`)}></img>}  
    <h3 className="modal-title col-1" id="modal-title-default" style={this.title} >
      {this.info1.id}
    </h3>
</Row>
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
  <Row style={this.row} > <h2 className="col-6"><i className="ni ni-single-02" style={this.icon}></i>Customer ID:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.customerid}
    </h5>
    </Row>
    <Row style={this.row} > <h2 className="col-6" ><i className="ni ni-shop" style={this.icon}></i>Partner store:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.store}
    </h5>
    </Row>
    <Row style={this.row} > <h2 className="col-6"><i className="ni ni-calendar-grid-58" style={this.icon}></i>Order Date:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.date}
    </h5>
    </Row>
    <Row style={this.row} > <h2 className="col-6"><i className="ni ni-settings-gear-65" style={this.icon}></i>Delivery option:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.delivery}
    </h5>
    </Row>
    {this.info1.delivery === "Restaurant" &&  <Row style={this.row} > <h2 className="col-6"><i className="ni ni-pin-3" style={this.icon}></i>Restaurant:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.location}
    </h5>
    </Row>}
    {this.info1.delivery === "Home" &&  <Row style={this.row} > <h2 className="col-6"><i className="ni ni-pin-3" style={this.icon}></i>Address:</h2>
    <h5 className="col-6" style={{margin:"auto"}}>
     {this.info1.location}
    </h5>
    </Row>}
    <h2>Order:</h2>
    <Table className={`align-items-center table-light table-flush`} responsive>
                  <thead className={`thead-light`}>
                    <tr>
                      
                     
                        <th scope="col">Product ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.info1.order === undefined ? null :this.info1.order.map(order => {
                             return  <tr key={order[0]}>
                                        <td>
                                            <h5>
                                                {order[0]}
                                            </h5>
   
                                        </td> 
                                        <td>
                                            <h5 >
                                                {order[1]}
                                            </h5>
                                        </td>
                                        <td>
                                            <h5 >
                                                {order[2]} €
                                            </h5>
                                        </td>
                                        <td>
                                            <h5 >
                                                {order[3]}
                                            </h5>
                                        </td>
     </tr>  })}
                  </tbody>
                  </Table>
                <Row style={this.row} > <h3>Total:</h3>  <h5 style={{margin:"auto"}}>{this.total}€</h5> </Row> 
                  <Row style={this.row} > <h2 className="col-6"><i className="ni ni-ui-04" style={this.icon}></i>Status:</h2>
    {this.info1.status === "Delivery in progress" && <h5 className="col-6" style={{margin:"auto",color:"#fb6340"}}>
        Delivery in progress
    </h5>}
    {this.info1.status === "Delivered" && <h5 className="col-6" style={{margin:"auto",color:"#2dce89"}}>
     Delivered
    </h5>}
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
                              this.props.deleteOrder(this.state.index)   }}>
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
        <Modal
      className="modal-dialog-centered"
      isOpen={this.state.filterModal}
      toggle={() => this.toggleModal("filterModal")}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-filter" style={this.title}>
          Filter Orders
        </h3>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => this.toggleModal("filterModal")}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
      
            <h2>Customer:</h2>
            <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                 defaultValue={this.state.customer}
                  placeholder="Customer ID "
                  type="text"
                  onChange={e=> {
                    this.setState({
                      customer:e.target.value
                    })
                  }}
                />
              </FormGroup>
              <h2>Partner:</h2>
            <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                 defaultValue={this.state.partner}
                  placeholder="Partner Store Name"
                  type="text"
                  onChange={e=> {
                    this.setState({
                      partner:e.target.value
                    })
                  }}
                />
              </FormGroup>
         <Row>
         <Col className=" m-auto col-sm-4">
              <h2 className=" m-auto "  >Status:</h2>
              
              {this.status.map((stat,i) => {
                return  <FormGroup key={i} className="m-auto">  <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                name="radio-1"
                  className="custom-control-input"
                 onChange={() => this.changeOption(stat)}
                  id={stat}
                  type="radio"
                  defaultChecked={this.status[i] === this.state.options}
                />
                <label className="custom-control-label" htmlFor={stat}>
                  {stat}
                </label>
              </div>
            </FormGroup>
              })}
              </Col>
              <Col className=" m-auto col-sm-4">
                 <h2 className=" m-auto" >Delivery:</h2>
              
              {this.deliveryoptions.map((deliv,i) => {
                return  <FormGroup key={i} className="m-auto">  <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                name="radio-2"
                  className="custom-control-input"
                 onChange={() => this.changeDelivery(deliv)}
                  id={deliv}
                  type="radio"
                  defaultChecked={this.deliveryoptions[i] === this.state.delivery}
                />
                <label className="custom-control-label" htmlFor={deliv}>
                  {deliv}
                </label>
              </div>
            </FormGroup>
              })}
              </Col>
              </Row>
               <h2 className=" m-auto" >Date:</h2>
               <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText
               >
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
           
              inputProps={{
                placeholder: "Date Picker Here"
              }}
              onChange={e => this.setState({
                date:e
              })}
              timeFormat={false}
              defaultValue={this.state.date}
            />
          </InputGroup>
        </FormGroup>
                   
      </div>
      <div className="modal-footer">
      <Button 
                    type="button"  
                    color="primary" 
                    id="tooltip765206973"
                    onClick={() => {this.props.filteringOrders(this.state.customer,
                                                                 this.state.partner,
                                                                 this.state.delivery,
                                                                 this.state.options,
                                                                 this.state.date
                                                                )
                             
                                    this.toggleModal("filterModal") }
                                   } >
               Apply</Button>
               <Button 
                    type="button"  
                    color="danger" 
                    id="tooltip765206973"
                    onClick={() => {this.setState({
                      customer:undefined,
                      partner:undefined,
                      delivery:undefined,
                      options:undefined,
                      date:undefined
                    })
                    this.props.resetFilter()
                                    this.toggleModal("filterModal") }
                                   } >
               Reset</Button>   
        <Button
          className="ml-auto"
          color="link"
          data-dismiss="modal"
          type="button"
          onClick={() => this.toggleModal("filterModal")}
        >
          Close
        </Button>
      </div>
    </Modal>
        
            

              </>
    
    )}
       
        
      }
      
      export default OrdersTable;
      
        