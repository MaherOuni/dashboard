import React from "react";

import ReactDatetime from "react-datetime";
// reactstrap components
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
  Table,
  FormGroup,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,

} from "reactstrap";

class ValidationTable extends React.Component {
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
   /* styling variables */
  alertstyle = {position: "absolute", top: "55px",left:"20px","z-index": "99999999999999999999"}
  icon = {margin:"5px","font-size":"15px",marginLeft:"0px"}
  row = {marginLeft:"0px"}
  title={color:"#5e72e4"}
  status =["Pending","Approved","Declined"]
state = {
   tags:[],
  modalcategories:[],
  options:undefined,
  owner:undefined,
  min:undefined,
  max:undefined,
   search:"",
 date:undefined,
   
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
                  <h3 className="mb-0">Product proposals
                  <Button
                      type="button"
                      color="info"
                      size="sm"
                      style={{float:"right"}}
                      onClick={() => { this.toggleModal("filterModal")
                    }}
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
                  <DropdownItem onClick={()=> this.props.sortDownProposals()} >
                    <i className="ni ni-bold-down" />
                    <span>Sort by most recent</span>
                  </DropdownItem>
                  <DropdownItem onClick={()=> this.props.sortUpProposals()}>
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
                           this.props.searchProposals(this.state.search)
                       }}>

 <i className="fas fa-search"></i>

</Button>
       </div> 
                  </h3>
                </CardHeader>
                <Table className={`align-items-center table-light table-flush`} responsive>
                  <thead className={`thead-light`}>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Price</th>
                      <th scope="col">Categorie</th>
                      <th scope="col">Proposal date</th>
                      <th scope="col">status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    

                      { 
                      this.props.proposals.map(info => (  <tr key={info.id}> 
                          <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require(`assets/img/image/${info.img}`)}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {info.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{info.owner}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                      
                          {info.price} €
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        {info.categorie.map((categorie) =>{
                                return (
                                <>
                                <a
                                key={categorie[0]}
                                className="avatar avatar-sm"
                                href="#pablo"
                                id={categorie[1]}
                                onClick={e => e.preventDefault()}
                              >
                                <img
                               
                                  alt="..."
                                  className="rounded-circle"
                                  src={require(`assets/img/icons/common/${categorie[0]}`)}
                                />
                              </a>
                              <UncontrolledTooltip
                              key={categorie[1]}
                                delay={0}
                                target={categorie[1]}
                              >
                               {categorie[1]}
                              </UncontrolledTooltip>
                                </>)
                              })}
                        </div>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                              {info.date}
                            </span>
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
                                             this.info1 = info
                                             }}
                            >
                              Inspect
                            </DropdownItem>
                            <DropdownItem
                            
                              onClick={e => {  e.preventDefault()
                                this.props.validation("Approved",info.id)}}
                            >
                              Approve
                            </DropdownItem>
                            <DropdownItem
                              
                              onClick={e => {e.preventDefault()
                                this.props.validation("Declined",info.id)}}
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
        { this.info1.img === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/image/${this.info1.img}`)}></img>}  
           <p></p>
           <Row style={this.row} >
        <Col><h2 > <i className="ni ni-single-02" style={this.icon}>  </i>Owner</h2>
        <p>{this.info1.owner}</p></Col>
        <Col><h2><i className="far fa-money-bill-alt" style={this.icon}></i>Price</h2>
        <p><strong>{this.info1.price} €</strong> <span>{this.info1.amount}</span></p></Col>
        </Row> 
        <h2 ><i className="fas fa-info-circle" style={this.icon}></i>Description</h2>
        <p>
         {this.info1.description}
        </p>
              <Row style={this.row} >
                <i className="ni ni-calendar-grid-58" style={this.icon}>  </i>
                Proposal date 
              </Row> 
              <p> { this.info1.date}</p>
              <Row style={this.row} >
              <i className="fas fa-toggle-on" style={this.icon}></i>
                Status
              </Row> 
              
              <p>{this.info1.status}</p>
             
      </div>
      <div className="modal-footer">
      <Button color="success" type="button" 
      onClick={e => { 
        this.props.validation("Approved",this.info1.id)}}>
                  Approve
                </Button>
                <Button color="danger" type="button"
                onClick={() => this.props.validation("Declined",this.info1.id)}>
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
      className="modal-dialog-centered"
      isOpen={this.state.filterModal}
      toggle={() => this.toggleModal("filterModal")}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-filter" style={this.title}>
          Filter Proposals
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
      
            <h2>Owner:</h2>
            <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                 defaultValue={this.state.owner}
                  placeholder="Owner Name"
                  type="text"
                  onChange={e=> {
                    this.setState({
                      owner:e.target.value
                    })
                  }}
                />
              </FormGroup>
              <h2>Price Range:</h2>
              <FormGroup className="m-auto">
                <Row >
                <Input
                  className="form-control-alternative text-center m-auto  col-sm-5 "
                  defaultValue={this.state.min}
                  placeholder="Min"
                  type="number"
                  onChange={e=> {
                    this.setState({
                      min:e.target.value
                    })
                  }}
                />
                  <Input
                  className="form-control-alternative text-center m-auto  col-sm-5"
                  defaultValue={this.state.max}
                  placeholder="Max"
                  type="number"
                  onChange={e=> {
                    this.setState({
                      max:e.target.value
                    })
                  }}
                />
                </Row>
              </FormGroup>
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
                  
                  placeholder="Categories here"
                  type="text"
                  value={this.state.modalcategories}
                />
              </FormGroup>
              <h2 className=" m-auto" >Status:</h2>
              
              {this.status.map((stat,i) => {
                return  <FormGroup className="m-auto">  <div className="custom-control custom-control-alternative custom-radio mb-3">
                <input
                name="radio-2"
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
                    onClick={() => {this.props.filteringValidations(this.state.owner,
                                                                 this.state.min,
                                                                 this.state.max,
                                                                 this.state.modalcategories,
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
                      owner:undefined,
                      min:undefined,
                      max:undefined,
                      modalcategories:[],
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
      );
    }
  }
  
  export default ValidationTable;
  