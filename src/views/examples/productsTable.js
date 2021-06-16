import React from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
    Badge,
    UncontrolledTooltip,
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
    Col,
    Modal,
    Button,
  } from "reactstrap";


  class ProductsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          categories:this.props.categories,
           info1:{},
           photo:undefined,
           name:undefined,
           price:undefined,
           amount:undefined,
           tags:[],
           description:undefined,
           options:[],
          owner:undefined,
          min:undefined,
          max:undefined,
           modalcategories:[],
           search:""
        }
      }
    
      productName = event =>{
        this.setState({
          name:event.target.value
        })
        console.log(this.state.name)
    }
    
    productPrice = event =>{
      this.setState({
        price:event.target.value
      })
      console.log(this.state.price)
    }
    
    productAmount = event =>{
      this.setState({
        amount:event.target.value
      })
      console.log(this.state.amount)
    }
    
    
    productDescription = event =>{
      this.setState({
        description:event.target.value
      })
      console.log(this.state.description)
    }
    
    
    editOption =(e,option) => {
      
      let list = [...this.state.info1.delivery]
     
      if(e.target.checked === true){
      if(list.indexOf(option) === -1) {
        list.push(option)}
        this.setState({
          info1:{...this.state.info1,delivery:list}
        })
     }
        else{
          list.splice(list.indexOf(option),1)
          this.setState({
            info1:{...this.state.info1,delivery:list}
          })
          }
          console.log(this.state.info1.delivery)
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
        editTags = (name,img) =>{
          let list = [...this.state.info1.categorie] 
          console.log(list)
          if(list.find(tag => tag[1] === name) === undefined ) {
            list.push([img,name])
            this.setState({
              info1:{...this.state.info1,categorie:list}
            })
            
          }
          else{
          const index =  list.findIndex(tag => tag[1] === name) 
          console.log(index)
          list.splice(index,1)
          this.setState({
            info1:{...this.state.info1,categorie:list}
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
     
    }
    else{
      const index =  list.findIndex(cat => cat === categorie) 
      list.splice(index,1)
      this.setState({
        modalcategories:list
      })
    }
      }
      modifyImage = event => {
        this.setState({
         info1:{...this.state.info1,img:event.target.files[0].name}
        })
      }
    
      photoupload = event => {
        this.setState({
          photo:event.target.files[0].name,
        })
      }
    
      
      deliveryoptions =["Local","Home","Restaurant"]
      icon = {margin:"5px","font-size":"15px",marginLeft:"0px"}
      row = {margin:"10px",display:"revert"}
      title={color:"#5e72e4",margin:"auto",marginLeft:"0px"}
            /* the state and toggle option for the modal */
            state = {
              defaultModal: false,
              addModal:false,
              editModal:false,
              filterModal:false
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
          <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0">Products
                  <Button
                  type="button"
                  color="info"
                  size="sm"
                  onClick={() => {this.toggleModal("addModal") 
                this.setState({
                  modalcategories:[]
                })} }
                  style={{float:"right"}}>  <span className="btn-inner--icon">
                    <i className="ni ni-fat-add" ></i>
                    </span>
                    <span className="btn-inner--text">
                     Add
                     </span>
                     </Button>
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
                  <DropdownItem onClick={() => this.props.sortDownProducts()} >
                    <i className="ni ni-bold-down" />
                    <span>Sort descendent</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => this.props.sortUpProducts()}  >
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
                                    this.props.searchProduct(this.state.search)
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
                      <th scope="col">Delivery Options</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    

                      { 
                      this.props.products.map(info => (  <tr key={info.id}> 
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
                              {info.delivery.map((delivery) => {
                             return  <Badge key={delivery} color="info" style={{margin:"2px"}} pill>{delivery}</Badge>
                              })}
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
                          {info.owner === "Admin" ?  <DropdownItem
                          
                             
                             color="primary"
                             type="button"
                             onClick={() => {this.toggleModal("editModal")
                                             this.setState({
                                               info1:info,
                                               modalcategories:[].concat.apply([], info.categorie.map(k => k.filter(cate => cate.indexOf(".png") === -1).slice()))
                                               
                                             })}}
                                             
                            >
                             Edit 
                            </DropdownItem>: <DropdownItem
                          
                             
                          color="primary"
                          type="button"
                          onClick={() => {this.toggleModal("defaultModal")
                                          this.setState({
                                            info1:info
                                          })}}
                         >
                          Inspect
                         </DropdownItem>}  
                            
                            <DropdownItem
                            onClick={() => {this.toggleModal("notificationModal")
                            this.setState({
                              index:info.id
                            })
                            }}
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
          <Modal
      className="modal-dialog-centered"
      isOpen={this.state.defaultModal}
      toggle={() => this.toggleModal("defaultModal")}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-default" style={this.title}>
          {this.state.info1.name}
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
        { this.state.info1.img === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/image/${this.state.info1.img}`)}></img>}  
           <p></p>
           <Row style={this.row} >
        <Col><h2 > <i className="ni ni-single-02" style={this.icon}>  </i>Owner</h2>
        <p>{this.state.info1.owner}</p></Col>
        <Col><h2><i className="far fa-money-bill-alt" style={this.icon}></i>Price</h2>
        <p><strong>{this.state.info1.price} €</strong> <span>{this.state.info1.amount}</span></p></Col>
        </Row> 
        <h2 ><i className="fas fa-info-circle" style={this.icon}></i>Description</h2>
        <p>
         {this.state.info1.description}
        </p>
              <Row style={this.row} >
                <i className="ni ni-calendar-grid-58" style={this.icon}>  </i>
                Addition date 
              </Row> 
              <p> { this.state.info1.date}</p>
           
             
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
  className="modal-dialog-centered"
  isOpen={this.state.addModal}
  toggle={() => this.toggleModal("addModal")}
>
<div className="modal-header">
  <Row style={this.row} >
    <h3 className="modal-title " id="modal-title-default" style={this.title} >
      Add Product 
    </h3>
</Row>
    <button
      aria-label="Close"
      className="close"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("addModal")
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
  <h2 className=" m-auto" >Product name :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Product Name"
                  type="text"
                  onChange={this.productName}
                />
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2  style={{margin:"auto ",marginTop:"10px"}} >Price :</h2>
  <FormGroup>
                <InputGroup className="input-group-alternative ">
                  <Input placeholder="Price" className=" text-center" type="number"
                  onChange={this.productPrice} />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                    <i className="fas fa-euro-sign"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2 className=" m-auto" >Amount :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="amount per price"
                  type="text"
                  onChange={this.productAmount}
                />
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2 className=" m-auto" >Categories :</h2>
  <div className="avatar-group" style={{"overflow-x":"auto",height:"80px"}}>
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
      </Row>
      <Row style={this.row} >
      <h2 className=" m-auto" >Delivery options:</h2>
              
                {this.deliveryoptions.map((delivery,i) => {
                  return  <FormGroup key={i} className="m-auto">  <div  className="custom-control custom-control-alternative custom-checkbox mb-3">
                  <input
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
      </Row>
      <Row style={this.row} >
      <h2 className=" m-auto" >Description:</h2>
      <FormGroup className="m-auto">
      <Input
            className="form-control-alternative"
            placeholder="Product description here..."
            rows="3"
            type="textarea"
            onChange={this.productDescription}
          />
</FormGroup>
</Row>
      <FormGroup className="m-auto text-center">
      { this.state.photo === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/image/${this.state.photo}`)}></img>}  
      <label 
        className="btn btn-info">
    <input type="file" style={{display: "none"}} onChange={this.photoupload}/>
    Upload photo
</label>
      </FormGroup>
    </Form>
  </div>
  <div className="modal-footer">
 {(this.state.name !== ("" || undefined )&&
  this.state.price !== ("" || undefined ) &&
  this.state.amount !== ("" || undefined ) &&
  this.state.description !== ("" || undefined ) &&
  this.state.photo !== ("" || undefined ) &&
  this.state.tags.length !== 0 && 
  this.state.options.length !== 0) && <Button 
  color="primary" 
  type="button" 
  onClick={() => this.props.addProduct(
    this.state.photo,
    this.state.name,
    this.state.price,
    this.state.amount,
    this.state.tags,
    this.state.description,
    this.state.options)}>
                 Add
                </Button>}
    <Button
      className="ml-auto"
      color="link"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("addModal")
      this.setState({
        photo:undefined
      })}}
    >
      Close
    </Button>
  </div>
</Modal>
         

        <Modal
  className="modal-dialog-centered"
  isOpen={this.state.editModal}
  toggle={() => this.toggleModal("editModal")}
>
<div className="modal-header">
  <Row style={this.row} >
    <h3 className="modal-title " id="modal-title-default" style={this.title} >
      Edit Product 
    </h3>
</Row>
    <button
      aria-label="Close"
      className="close"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("editModal")
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
  <h2 className=" m-auto" >Product name :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="Product Name"
                  type="text"
                  defaultValue={this.state.info1.name}
                  onChange={(event) => {
                    this.setState({
                      info1:{...this.state.info1,name:event.target.value}
                     })
                  }}
                />
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2  style={{margin:"auto ",marginTop:"10px"}} >Price :</h2>
  <FormGroup>
                <InputGroup className="input-group-alternative ">
                  <Input 
                  placeholder="Price" 
                  className=" text-center" 
                  type="number" 
                  defaultValue={this.state.info1.price}
                  onChange={(event) => {
                    this.setState({
                      info1:{...this.state.info1,price:event.target.value}
                     })
                  }}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                    <i className="fas fa-euro-sign"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2 className=" m-auto" >Amount :</h2>
              <FormGroup className="m-auto">
                <Input
                  className="form-control-alternative text-center  "
                  id="exampleFormControlInput1"
                  placeholder="amount per price"
                  type="text"
                  defaultValue={this.state.info1.amount}
                  onChange={(event) => {
                    this.setState({
                      info1:{...this.state.info1,amount:event.target.value}
                     })
                  }}
                />
              </FormGroup>
      </Row>
      <Row style={this.row} >
  <h2 className=" m-auto" >Categories :</h2>
  <div className="avatar-group" style={{"overflow-x":"auto",height:"80px"}}>
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
                                  this.editTags(categorie.name,categorie.img)}}
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
                                  this.editTags(categorie.name,categorie.img)}}
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
      </Row>
      <Row style={this.row} >
      <h2 className=" m-auto" >Delivery options:</h2>
              
                {this.state.info1.delivery === undefined ? null : this.deliveryoptions.map((delivery,i) => {
                  return  <FormGroup key={i} className="m-auto">  <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    defaultChecked={this.state.info1.delivery.find(deliv => deliv === delivery)  !== undefined}
                    id={this.deliveryoptions[i]}
                    onChange={e => this.editOption(e,this.deliveryoptions[i])}
                    type="checkbox"
                  />
                  <label className="custom-control-label" htmlFor={this.deliveryoptions[i]}>
                    {this.deliveryoptions[i]}
                  </label>
                </div>
              </FormGroup>
                })}
      </Row>
      <Row style={this.row} >
      <h2 className=" m-auto" >Description:</h2>
      <FormGroup className="m-auto">
      <Input
            className="form-control-alternative"
            placeholder="Write a large text here ..."
            rows="3"
            type="textarea"
            defaultValue={this.state.info1.description}
            onChange={(event) => {
              this.setState({
                info1:{...this.state.info1,description:event.target.value}
               })
            }}
          />
</FormGroup>
</Row>
      <FormGroup className="m-auto text-center">
      { this.state.info1.img === undefined ? null :  <img className="col-12"  alt="..."
           src={require(`assets/img/image/${this.state.info1.img}`)}></img>}  
      <label 
        className="btn btn-info">
    <input type="file" style={{display: "none"}} onChange={this.modifyImage}/>
    Change photo
</label>
      </FormGroup>
    </Form>
  </div>
 {this.state.info1.name !== undefined && <div className="modal-footer">
  {(this.state.info1.name !== "" &&
  this.state.info1.price !== "" &&
  this.state.info1.amount !== ""  &&
  this.state.info1.description !== "" &&
  this.state.info1.photo !== ""  &&
  this.state.info1.categorie.length !== 0 ) && <Button 
  color="primary" 
  type="button" onClick={() => {
    this.props.editProduct(this.state.info1)
  }}>
                 Edit
</Button> }
    <Button
      className="ml-auto"
      color="link"
      data-dismiss="modal"
      type="button"
      onClick={() => {this.toggleModal("editModal")
      this.setState({
        photo:undefined
      })}}
    >
      Close
    </Button>
  </div>} 
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
                              this.props.deleteProduct(this.state.index)   }}>
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
          Filter Products
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
                  id="exampleFormControlInput1"
                  placeholder="Owner Name"
                  type="text"
                  defaultValue={this.state.owner}
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
                  id="exampleFormControlInput1"
                  placeholder="Min"
                  type="number"
                  defaultValue={this.state.min}
                  onChange={e=> {
                    this.setState({
                      min:e.target.value
                    })
                  }}
                />
                  <Input
                  className="form-control-alternative text-center m-auto  col-sm-5"
                  id="exampleFormControlInput1"
                  placeholder="Max"
                  type="number"
                  defaultValue={this.state.max}
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
                    onClick={() => {this.props.filteringProducts(this.state.owner,
                                                                 this.state.min,
                                                                 this.state.max,
                                                                 this.state.modalcategories,
                                                                 this.state.options)
                             
                                    this.toggleModal("filterModal") }
                                   } >
               Apply</Button>
               <Button 
                    type="button"  
                    color="danger" 
                    id="tooltip765206973"
                    onClick={() => {this.props.resetFilter()
                             this.setState({
                               owner:undefined,
                               min:undefined,
                               max:undefined,
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


}export default ProductsTable;