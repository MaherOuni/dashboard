import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Loader from "assets/img/theme/Loading.gif"
import routes from "routes.js";

  
class Admin extends React.Component {

  compareDate = (a,b) => {
    const nameA = a.date.split("/");
    const nameB = b.date.split("/");
    let comparison = 0;
    if (nameA[2] > nameB[2]) {
      comparison = -1;
    } else if (nameA[2] < nameB[2]) {
      comparison = 1;
    }
    else if(nameA[1] > nameB[1]){
      comparison = -1;
    }
    else if (nameA[1] < nameB[1]){
      comparison = 1;
    }
    else if(nameA[0] > nameB[0]){
      comparison = -1;
    }
    else if (nameA[0] < nameB[0]){
      comparison = 1;
    }
    return comparison;
  }
  

 
  compare =  (a, b) => {
            
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }



  componentDidUpdate(e) {
 
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route 
            path={prop.layout + prop.path}
            component={(props) => <prop.component {...props} 
            compare={this.compare}
            compareDate={this.compareDate}
            Loader={Loader}
            />}
            key={key}
           
          ></Route>
         
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    if(localStorage.getItem("username") !=="admin" || localStorage.getItem("password")!=="admin" ){
     console.log((localStorage.getItem("username")))
    return(
      <h1>You have no access rights</h1>
    )}
    else 
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/icons/common/Akeo.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch >
            {this.getRoutes(routes)}
            
            <Redirect from="*" to="/admin/index" />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default Admin;
