import React from "react";

import {
    Form,
    FormGroup,
    Input,
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
   
    Row,
    Modal,
    Button,
  } from "reactstrap";

  class CategoriesTable extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = {
          
          index:undefined,
           info1:{},
           photo:undefined,
           sub:false,
           mother:undefined,
           categorieName:undefined,
           searchcat:"",
           searchsub:"",
        }
      }
      uploadimage = event => {
        this.setState({
         info1:{...this.state.info1,img:event.target.files[0].name}
        })
      }
    
      photoupload = event => {
        this.setState({
          photo:event.target.files[0].name,
        })
      }
    
      categoriename = event =>{
          this.setState({
            categorieName:event.target.value
          })
      }
    
      motherloading = event =>{
        this.setState({
          mother:event.target.value
        })
    }
    
      icon = {margin:"5px","font-size":"15px","margin-left":"0px"}
      row = {margin:"10px"}
      title={color:"#5e72e4",margin:"auto","margin-left":"0px"}
            /* the state and toggle option for the modal */
            state = {
              defaultModal: false,
              addCateModal:false,
              notificationModal1:false,
              notificationModal2:false,
            };
            toggleModal = state => {
              this.setState({
                [state]: !this.state[state]
              });
            };

            render() {
 
                return (
                  <>
          <Row>
            <div className=" col-sm-6">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0" style={{width:"20%",marginRight:"0px !important",display:"inline"}}>Categories
                  <Button
                  type="button"
                  color="info"
                  size="sm"
                  onClick={() => {this.toggleModal("addCateModal")
                                    this.setState({sub:false})}}
                  style={{float:"right"}}>   <span className="btn-inner--icon">
                  <i className="ni ni-fat-add" />
                </span>
                <span className="btn-inner--text">Add</span></Button>
  
                <UncontrolledDropdown style={{float:"right","margin-right":"5px",marginTop:"-4px"}} nav>
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
                  <DropdownItem onClick={() => this.props.sortDownCategories()} >
                    <i className="ni ni-bold-down" />
                    <span>Sort descendent</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => this.props.sortUpCategories()}  >
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
             style={{float:"right","margin-right":"5px",maxHeight:"30px"}}
             onChange={(e)=>{
                this.setState({
                   searchcat:e.target.value
                })}}></Input>
                  <Button 
                       className="btn-icon btn-2" 
                       size="sm" 
                       style={{float:"right","margin-right":"5px",borderRadius:"15px"}} 
                       color="primary" 
                       type="button"
                       onClick={() => {
                           this.props.searchCategories(this.state.searchcat)
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
                      <th scope="col">Name</th>
                      <th scope="col">Image</th>
                      
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                 {/* the partner shops list rendering */} 
                      { 
                      this.props.categories.map(info => (  <tr key={info.id}> 
                          <th scope="row">
                        {info.id}
                      </th>
                      <td>
                          {info.name}
                    </td>
               
                      <td>
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
                        </Media>
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
                                            info1:info
                                          })}}
                            >
                             Edit
                            </DropdownItem> 
                            <DropdownItem
                            
                             
                             color="warning"
                             type="button"
                             onClick={() => {this.toggleModal("notificationModal1")
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
            <div className="col-sm-6">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0" style={{width:"20%",marginRight:"0px !important",display:"inline"}}>Subs
                  <Button
                  type="button"
                  color="info"
                  size="sm"
                  onClick={() => {this.toggleModal("addCateModal")
                                    this.setState({sub:true})}}
                  style={{float:"right"}}> <span className="btn-inner--icon">
                  <i className="ni ni-fat-add" />
                </span>
                <span className="btn-inner--text">Add</span></Button>
              
                <UncontrolledDropdown style={{float:"right","margin-right":"5px",marginTop:"-4px"}} nav>
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
                  <DropdownItem onClick={() => this.props.sortDownSubCategories()}  >
                    <i className="ni ni-bold-down" />
                    <span>Sort descendent</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => this.props.sortUpSubCategories()}  >
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
             style={{float:"right","margin-right":"5px",maxHeight:"30px"}}
             onChange={(e)=>{
                this.setState({
                   searchsub:e.target.value
                })}}></Input>
                  <Button 
                       className="btn-icon btn-2" 
                       size="sm" 
                       style={{float:"right","margin-right":"5px",borderRadius:"15px"}} 
                       color="primary" 
                       type="button"
                       onClick={() => {
                           this.props.searchSubCategories(this.state.searchsub)
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
                      <th scope="col">Name</th>
                      <th scope="col">Mother Categorie</th>
                      <th scope="col">Image</th>
                      
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                 {/* the partner shops list rendering */} 
                      { 
                      this.props.subcategories.map(info => (  <tr key={info.id}> 
                          <th scope="row">
                        {info.id}
                      </th>
                      <td>
                          {info.name}
                    </td>
                    <td>
                          {info.mother}
                    </td>
                      <td>
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
                        </Media>
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
                                            info1:info
                                          })}}
                            >
                             Edit
                            </DropdownItem> 
                            <DropdownItem
                             
                             
                             
                             color="warning"
                             type="button"
                             onClick={() => {this.toggleModal("notificationModal2")
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
  { this.state.info1.img === undefined ? null :  <img className="col-2"  alt="..."
           src={require(`assets/img/icons/common/${this.state.info1.img}`)}></img>}  
    <h3 className="modal-title col-1" id="modal-title-default" style={this.title} >
      {this.state.info1.id}
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
    <Form>
         
             <Row style={this.row} >
  <h2 className=" m-auto" >Categorie name :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Categorie name here"
                  type="text"
                  defaultValue={this.state.info1.name}
                  onChange={e => {this.setState({
                    info1:{...this.state.info1,name:e.target.value}
                  })}}
                />
              </FormGroup>
        </Row>
       { this.state.info1.mother === undefined ? null : <Row  style={this.row}>
  <h2 className="m-auto" >Mother Categorie :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Categorie name here"
                  type="text"
                  defaultValue={this.state.info1.mother}
                  onChange={e => {this.setState({
                    info1:{...this.state.info1,mother:e.target.value}
                  })}}
                />
              </FormGroup>
        </Row>} 
      
      <FormGroup className="m-auto text-center">
      { this.state.info1.img === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/icons/common/${this.state.info1.img}`)}></img>}  
      <label 
        className="btn btn-info">
    <input type="file" style={{display: "none"}} onChange={this.uploadimage}/>
    Change photo
</label>
      </FormGroup>
    </Form>
  </div>
  <div className="modal-footer">
 {this.state.info1.mother === undefined && <Button color="primary" type="button" onClick={() => this.props.editCategorie(this.state.info1)}>
                  Edit
                </Button>} 
         {this.state.info1.mother !== undefined && <Button color="primary" type="button" onClick={() => this.props.editSubCategorie(this.state.info1)}>
                  Edit
                </Button> }       

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
  isOpen={this.state.addCateModal}
  toggle={() => this.toggleModal("addCateModal")}
>
<div className="modal-header">
  <Row style={this.row} >
    <h3 className="modal-title " id="modal-title-default" style={this.title} >
      Add Categorie
    </h3>
</Row>
    <button
      aria-label="Close"
      className="close"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("addCateModal")
      this.setState({
        photo:undefined
      })}}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <div className="modal-body">
    <Form>
         
             <Row style={this.row} >
  <h2 className=" m-auto" >Categorie name :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Categorie name here"
                  type="text"
                  onChange={this.categoriename}
                />
              </FormGroup>
      </Row>
     { this.state.sub === true && <Row  style={this.row}>
  <h2 className="m-auto" >Mother Categorie :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Categorie name here"
                  type="text"
                  onChange={this.motherloading}
                />
              </FormGroup>
        </Row>} 
      <FormGroup className="m-auto text-center">
      { this.state.photo === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/icons/common/${this.state.photo}`)}></img>}  
      <label 
        className="btn btn-info">
    <input type="file" style={{display: "none"}} onChange={this.photoupload}/>
    Upload Photo
</label>
      </FormGroup>
    </Form>
  </div>
  <div className="modal-footer">
 { (this.state.categorieName !== undefined && this.state.photo !== undefined && this.state.sub === false) && 
 <Button 
 color="primary" 
 type="button" 
 onClick={() => {this.props.addCategorie(this.state.categorieName,this.state.photo)}}>
                  Add
                </Button>}
                { (this.state.categorieName !== undefined && this.state.photo !== undefined && this.state.sub === true) && <Button color="primary" type="button" onClick={() => {this.props.addSubCategorie(this.state.categorieName,this.state.mother,this.state.photo)}}>
                  Add
                </Button>}
    <Button
      className="ml-auto"
      color="link"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("addCateModal")
      this.setState({
        photo:undefined
      })}}
    >
      Close
    </Button>
  </div>
</Modal>
             
                   <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={this.state.notificationModal1}
          toggle={() => this.toggleModal("notificationModal1")}
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
              onClick={() => this.toggleModal("notificationModal1")}
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
              onClick={() => {this.toggleModal("notificationModal1")
                              this.props.deleteCategorie(this.state.index)    }}>
              Ok, Got it
              
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal1")}
            >
              Cancel
            </Button>
          </div>
        </Modal>
        <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={this.state.notificationModal2}
          toggle={() => this.toggleModal("notificationModal2")}
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
              onClick={() => this.toggleModal("notificationModal2")}
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
              onClick={() => {this.toggleModal("notificationModal2")
                              this.props.deleteSubCategorie(this.state.index)    }}>
              Ok, Got it
              
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal2")}
            >
              Cancel
            </Button>
          </div>
        </Modal>
    
      
                </>
    
    )}
       
        
      }
      
      export default CategoriesTable;
      