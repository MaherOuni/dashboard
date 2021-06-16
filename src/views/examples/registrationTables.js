import React from "react";

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
    Progress,
    Table,
    FormGroup,
    Input,
    Row,
    Modal,
    Button,
    UncontrolledTooltip
  } from "reactstrap";

  class RegistrationsTable extends React.Component {
    deliveryoptions =["Local","Home","Restaurant"]
    status =["Pending","Approved","Declined"]
    constructor(props) {
        super(props)
      
        this.state = {
           alertest : false,
           tags:[],
           approval:undefined,
           options:[], 
           modalcategories:[],
           search:""

        }
      }
      
      changeOption =(option) => {
          
        this.setState({
         approval:option
        })
        
           }
           addOption =(e,option) => {
            console.log(e.target.checked)
            console.log(option)
            console.log(this.state.options)
            let list = [...this.state.options]
           
            if(e.target.checked === true){
            if(list.indexOf(option) === -1) {
              list.push(option)}
              this.setState({
                options:list
              })
           }
              else{
                list.splice(list.indexOf(option),1)
                this.setState({
                  options:list
                })
                }
              }
           modifycategorie = categorie =>{
            let list = this.state.modalcategories
            if(list.indexOf(categorie) === -1) {
              list.push(categorie)
              this.setState({
                modalcategories:list
              })
              console.log(this.state.modalcategories)
            }
            else{
              const index =  list.findIndex(cat => cat === categorie) 
              list.splice(index,1)
              this.setState({
                modalcategories:list
              })
            }
              }

              addTags = (name,img) =>{
                let list = [...this.state.tags] 
                if(list.find(tag => tag[1] === name) === undefined ) {
                  list.push([img,name])
                  this.setState({
                    tags:list
                  })
                 
                }
                else{
                  const index =  list.findIndex(tag => tag[1] === name) 
                  console.log(index)
                  list.splice(index,1)
                  this.setState({
                    tags:list
                  })
                  
                  }
                  }
        /* styling variables */
        alertstyle = {position: "absolute", top: "55px",left:"20px","z-index": "99999999999999999999"}
        icon = {margin:"5px","font-size":"15px",marginLeft:"0px"}
        row = {marginLeft:"0px"}
        ccccccc
          /* the state and toggle option for the modal */
         state = {
          defaultModal: false,
          filterModal:false
        };
        toggleModal = state => {
          this.setState({
            [state]: !this.state[state]
          });
        };
      /* the variable that will contain data for the modal */
        info1 = {}
        render() {
     
            return (
              <>
      <Row>
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent border-0">
                      <h3 className="mb-0">Partner Stores
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
                  <DropdownItem onClick={()=> this.props.sortDownRegistrations()}>
                    <i className="ni ni-bold-down" />
                    <span>Sort descendent</span>
                    
                  </DropdownItem>
                  <DropdownItem onClick={()=> this.props.sortUpRegistrations()} >
                    <i className="ni ni-bold-up" />
                  <span>Sort Ascendent</span>
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
                           this.props.searchRegistrations(this.state.search)
                       }}>

 <i className="fas fa-search"></i>

</Button>
       </div> 
                      </h3>
                    </CardHeader>
                    <Table className={`align-items-center table-light table-flush`} responsive>
                      <thead className={`thead-light`}>
                        <tr>
                          <th scope="col">Partner store</th>
                          <th scope="col">Location</th>
                          <th scope="col">Delivery Options</th>
                          <th scope="col">Tags</th>
                          <th scope="col">Status</th>
                          
                          
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        
                     {/* the partner shops list rendering */} 
                          { 
                          this.props.table.map(info => (  <tr key={info.id}> 
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
                          <td>{info.location}</td>
                          <td>
                              {info.delivery.map((delivery) => {
                             return  <Badge key={delivery} color="info" style={{margin:"2px"}} pill>{delivery}</Badge>
                              })}
                          </td>
                          <td>

                            <div className="avatar-group">
                              {info.tags.map((tag) =>{
                                return (
                                <>
                                <a
                                key={tag[0]}
                                className="avatar avatar-sm"
                                href="#pablo"
                                id={tag[1]}
                                onClick={e => e.preventDefault()}
                              >
                                <img
                               
                                  alt="..."
                                  className="rounded-circle"
                                  src={require(`assets/img/icons/common/${tag[0]}`)}
                                />
                              </a>
                              <UncontrolledTooltip
                              key={tag[1]}
                                delay={0}
                                target={tag[1]}
                              >
                               {tag[1]}
                              </UncontrolledTooltip>
                                </>)
                              })}
                            </div>
                          </td>
                          <td>
                        <Badge color="" className="badge-dot mr-4">
                       
                        {info.status === "Pending" &&      <i className="bg-warning" />}
                        {info.status === "Approved" &&   <i className="bg-success" />}
                          {info.status === "Declined" &&     <i className="bg-danger" />}
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
                                              this.info1 = info}}
                                >
                                 Inspect
                                </DropdownItem> 
                                <DropdownItem
                            color="warning"
                            type="button"
                            onClick={e => {e.preventDefault()
                                                this.props.registration("Approved",info.id)}}
                           
                           >
                             Approve
                           </DropdownItem>
                                <DropdownItem
                            
                                 
                                 color="warning"
                                 type="button"
                                 onClick={e => {e.preventDefault()
                                  this.props.registration("Declined",info.id)}}
                                
                                >
                                  Decline
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
        <h3 className="modal-title" id="modal-title-default" style={this.title}>
          {this.info1.name}
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
        <h2 ><i className="fas fa-info-circle" style={this.icon}></i>Information</h2>
        <p>
         {this.info1.description}
        </p>
              <Row style={this.row} >
                <i className="ni ni-pin-3" style={this.icon}>  </i>
                Partner Shop's location  
              </Row> 
              <p> { this.info1.location}</p>
              <Row style={this.row} >
                <i className="far fa-clock" style={this.icon}></i>
                Open hours
              </Row> 
              <h4> {this.info1.openday}</h4>
              <p>{this.info1.openhour}</p>
              <Row style={this.row}>
                <i className="ni ni-square-pin" style={this.icon}></i>
                Map
              </Row>
              <Row style={this.row} > <h2 className="col-6"><i className="ni ni-ui-04" style={this.icon}></i>Status:</h2>
    {this.info1.status === "Pending" && <h5 className="col-6" style={{margin:"auto",color:"#fb6340"}}>
        Pending
    </h5>}
    {this.info1.status === "Approved" && <h5 className="col-6" style={{margin:"auto",color:"#2dce89"}}>
     Approved
    </h5>}
    {this.info1.status === "Declined" && <h5 className="col-6" style={{margin:"auto",color:"#f5365c"}}>
     Declined
    </h5>}
    </Row>
             {/* the map api */}
                      <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d989.7218514383!2d${this.info1.cord1}!3d${this.info1.cord2}!4d10.6383081!1i1024!2i768!4f5!5e0!3m2!1sen!2sbd!4v1506502314230`} width="100%" height="315" frameborder="0"  allowfullscreen></iframe>

      </div>

      <div className="modal-footer">
      <Button color="success" type="button"
      onClick={e => {
        this.props.registration("Approved",this.info1.id)}}>
                  Approve
                </Button>
                <Button color="danger" type="button"
                 onClick={e => {
                  this.props.registration("Declined",this.info1.id)}}>
                  Decline
                </Button>
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
                                  this.alerts()    }}>
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
          Filter Registrations
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
      
      <h2 className=" m-auto" >Status:</h2>
              
              {this.status.map((stat,i) => {
                return  <FormGroup key={i} className="m-auto">  <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                name="radio-2"
                  className="custom-control-input"
                 onChange={() => this.changeOption(stat)}
                  id={stat}
                  type="radio"
                  defaultChecked={this.status[i] === this.state.approval}
                />
                <label className="custom-control-label" htmlFor={stat}>
                  {stat}
                </label>
              </div>
            </FormGroup>
              })}
          <h2>Categories:</h2>
              <div className="avatar-group" style={{"overflow-x":"auto",height:"80px",marginTop:"10px"}}>
                        {this.props.categories.map((categorie) =>{
                                return (
                                <>
                                <a
                                key={categorie.id}
                                className="avatar avatar-sm"
                                href="#pablo"
                                id={categorie.name}
                                onClick={e => {e.preventDefault()
                                  this.modifycategorie(categorie.name)
                                  this.addTags(categorie.name,categorie.img)}}
                              >
                                <img
                               
                                  alt="..."
                                  className="rounded-circle"
                                  src={require(`assets/img/icons/common/${categorie.img}`)}
                                />
                              </a>
                              <UncontrolledTooltip
                                key={categorie.id}
                                delay={0}
                                target={categorie.name}
                                
                              >
                               {categorie.name}
                              </UncontrolledTooltip>
                                </>)
                              })}
                               {this.props.subcategories.map((categorie) =>{
                                return (
                                <>
                                <a
                                key={categorie.id}
                                className="avatar avatar-sm"
                                href="#pablo"
                                id={categorie.name}
                                onClick={e => {e.preventDefault()
                                  this.modifycategorie(categorie.name)
                                  }}
                              >
                                <img
                               
                                  alt="..."
                                  className="rounded-circle"
                                  src={require(`assets/img/icons/common/${categorie.img}`)}
                                />
                              </a>
                              <UncontrolledTooltip
                                key={categorie.id}
                                delay={0}
                                target={categorie.name}
                              >
                               {categorie.name}
                              </UncontrolledTooltip>
                                </>)
                              })}
                        </div>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Categories here"
                  type="text"
                  value={this.state.modalcategories}
                />
              </FormGroup>
              <h2 className=" m-auto" >Delivery options:</h2>
              
              {this.deliveryoptions.map((delivery,i) => {
                return  <FormGroup key={i} className="m-auto">  <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                defaultChecked={this.state.options.includes(this.deliveryoptions[i])}
                  className="custom-control-input"
                 onChange={e => this.addOption(e,this.deliveryoptions[i])}
                  id={this.deliveryoptions[i]}
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor={this.deliveryoptions[i]}>
                  {this.deliveryoptions[i]}
                </label>
              </div>
            </FormGroup>
              })}
             
      
                   
      </div>
      <div className="modal-footer">
      <Button 
                    type="button"  
                    color="primary" 
                    id="tooltip765206973"
                    onClick={() => {this.props.filteringRegistrations(this.state.approval,
                                                                 this.state.modalcategories,
                                                                 this.state.options)
                             
                                    this.toggleModal("filterModal") }
                                   } >
               Apply</Button>
               <Button 
                    type="button"  
                    color="primary" 
                    id="tooltip765206973"
                    onClick={() => {this.props.resetFilter()
                             this.setState({
                               status:undefined,
                               modalcategories:[],
                               options:[]
                             })
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
export default RegistrationsTable