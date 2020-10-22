(this["webpackJsonpdependency-users"]=this["webpackJsonpdependency-users"]||[]).push([[0],{257:function(e,a,t){e.exports=t(444)},262:function(e,a,t){},263:function(e,a,t){},349:function(e,a){},351:function(e,a){},362:function(e,a){},364:function(e,a){},389:function(e,a){},391:function(e,a){},392:function(e,a){},398:function(e,a){},400:function(e,a){},418:function(e,a){},420:function(e,a){},432:function(e,a){},435:function(e,a){},444:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=(t(262),t(263),t(10)),s=t.n(o),i=t(24),d=t(34),m=t(35),u=t(41),p=t(39),h=t(159),E=t.n(h);t(265);E.a.initializeApp({apiKey:"AIzaSyBZ8-9lCtqcgdV5TkMZW-4yTry3Aa4d-Dk",authDomain:"dependency-users-management.firebaseapp.com",databaseURL:"https://dependency-users-management.firebaseio.com",projectId:"dependency-users-management",storageBucket:"dependency-users-management.appspot.com",messagingSenderId:"1036101062414",appId:"1:1036101062414:web:822d3c996bec2db2c1915f"});var b=E.a.firestore(),f=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleDeleteUser=function(){e.props.onDelete(e.props.user)},e.handleEditUser=function(){e.props.onEdit(e.props.user)},e.ButtonOptionsVisible=function(){return e.props.manegeable?r.a.createElement("td",null,r.a.createElement("span",{className:"col-3"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e.handleDeleteUser},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))),r.a.createElement("span",{className:"col-3"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.handleEditUser},r.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"})))):null},e.componentDidMount=Object(i.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.user.dependency.get();case 2:t=a.sent,e.setState({dependency:t.data()});case 4:case"end":return a.stop()}}),a)}))),e.componentDidUpdate=function(){var a=Object(i.a)(s.a.mark((function a(t,n){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.user.dependency===e.props.user.dependency){a.next=5;break}return a.next=3,e.props.user.dependency.get();case 3:r=a.sent,e.setState({dependency:r.data()});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.state={dependency:""},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.user.name),r.a.createElement("td",null,this.props.user.lastName),r.a.createElement("td",null,this.props.user.email),r.a.createElement("td",null,this.props.user.password),r.a.createElement("td",null,this.state.dependency.name),r.a.createElement("td",null,this.props.user.valid_until.toString()),r.a.createElement("td",null,this.props.user.active?"S\xed":"No"),r.a.createElement(this.ButtonOptionsVisible,null)))}}]),t}(n.Component),v=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleDeleteDependency=function(){e.state.users.length>0?alert("No se puede eliminar la dependencia: Hay usuarios asociados"):e.props.onDelete(e.props.dependency)},e.handleEditDependency=function(){e.props.onEdit(e.props.dependency)},e.handleShowHideUsers=function(){e.setState({showUsers:!e.state.showUsers})},e.usersByDependencies=Object(i.a)(s.a.mark((function a(){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=b.collection("dependencies").doc(e.props.dependency.id),console.log(t),a.next=4,b.collection("users").where("dependency","==",t).get();case 4:return n=a.sent,r=n.docs.map((function(e){return e.data()})),a.abrupt("return",r);case 7:case"end":return a.stop()}}),a)}))),e.componentDidMount=Object(i.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.usersByDependencies();case 2:t=a.sent,e.setState({users:t});case 4:case"end":return a.stop()}}),a)}))),e.renderUsers=function(){return console.log(e.state.users),e.state.users.map((function(e){return r.a.createElement(f,{key:e.name,user:e,manegeable:!1})}))},e.ShowUsersIfActivated=function(){return e.state.showUsers?r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Users in ",e.props.dependency.name),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Apellido"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Contrase\xf1a"),r.a.createElement("th",{scope:"col"},"Dependencia"),r.a.createElement("th",{scope:"col"},"Valido Hasta"),r.a.createElement("th",{scope:"col"},"Activo"))),r.a.createElement("tbody",null,e.renderUsers()))):null},e.state={showUsers:!1,users:[]},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.dependency.name),r.a.createElement("td",null,this.props.dependency.coordinator),r.a.createElement("td",null,this.props.dependency.max_users),r.a.createElement("td",null,this.props.dependency.location),r.a.createElement("td",null,this.props.dependency.active?"S\xed":"No"),r.a.createElement("td",null,r.a.createElement("span",{className:"col-3"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleDeleteDependency},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))),r.a.createElement("span",{className:"col-3"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleEditDependency},r.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"}))),r.a.createElement("span",{className:"col-3"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleShowHideUsers},r.a.createElement("i",{className:"fa fa-users","aria-hidden":"true"}))))),r.a.createElement(this.ShowUsersIfActivated,null))}}]),t}(n.Component),g=t(89),y=t(43),N=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).validateForm=function(e){var a=!0;return Object.values(e).forEach((function(e){return e.length>0&&(a=!1)})),a},e.handleInputChange=function(a){var t,n=e.state.errors,r=a.target,l=r.id,c=r.value;switch(l){case"name":n.name=""===c?"El nombre es obligatorio":"";break;case"coordinator":n.coordinator=""===c?"El Coordinador es obligatorio":"";break;case"max_users":n.max_users=""===c?"El maximo de usuarios es obligatorio":c<=0?"El maximo de usuarios debe ser un valor positivo":"";break;case"location":n.location=""===c?"Se debe de especificar una ubicacion":""}e.setState((t={},Object(y.a)(t,l,c),Object(y.a)(t,"errors",n),t))},e.handleBoxChange=function(a){e.setState(Object(y.a)({},a.target.id,a.target.checked))},e.handleSubmit=function(a){if(a.preventDefault(),e.validateForm(e.state.errors)){0===e.state.id&&e.setState({id:1});var t=e.state,n=(t.errors,Object(g.a)(t,["errors"]));e.props.handleNewDependency(n)}},e.ShowClearButton=function(){return 0!==e.state.id?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.props.handleClearFields},"Cancel Edit"):null},e.state={id:0,name:"",coordinator:"",max_users:"",location:"",active:!0,errors:{name:"El nombre es obligatorio",coordinator:"El coordinador es obligatorio",max_users:"El m\xe1ximo de usuarios es obligatorio",location:"La ubicaci\xf3n es obligatoria"}},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null," ",0===this.state.id?"Agregar":"Editar"," Dependencia "),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{className:"form-control",type:"text",id:"name",value:this.state.name,onChange:this.handleInputChange,noValidate:!0}),e.name.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Coordinador"),r.a.createElement("input",{className:"form-control",type:"text",id:"coordinator",value:this.state.coordinator,onChange:this.handleInputChange,noValidate:!0}),e.coordinator.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.coordinator)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"M\xe1ximo n\xfamero de usuarios"),r.a.createElement("input",{className:"form-control",type:"number",id:"max_users",value:this.state.max_users,onChange:this.handleInputChange,noValidate:!0}),e.max_users.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.max_users)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ubicacion"),r.a.createElement("input",{className:"form-control",type:"text",id:"location",value:this.state.location,onChange:this.handleInputChange,noValidate:!0}),e.location.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.location)),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"active",value:this.state.active,checked:this.state.active,onChange:this.handleBoxChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"active"},"Activa")),r.a.createElement("div",{className:"container"},r.a.createElement("button",{type:"button submit",className:"btn btn-primary"}," ",r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," "),r.a.createElement(this.ShowClearButton,null)))))}}]),t}(n.Component);N.getDerivedStateFromProps=function(e,a){return e.dependency.id!==a.id?{id:e.dependency.id,name:e.dependency.name,coordinator:e.dependency.coordinator,max_users:e.dependency.max_users,location:e.dependency.location,active:e.dependency.active,errors:{name:""===e.dependency.name?"El nombre es obligatorio":"",coordinator:""===e.dependency.coordinator?"El coordinador es obligatorio":"",max_users:""===e.dependency.max_users?"El m\xe1ximo de usuarios es obligatorio":"",location:""===e.dependency.location?"La ubicaci\xf3n es obligatoria":""}}:null};var w=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).refresh=Object(i.a)(s.a.mark((function a(){var t,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.next=4,b.collection("dependencies").get();case 4:n=a.sent,t=n.docs.map((function(e){return e.data()})),e.setState({dependencies:t}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])}))),e.componentDidMount=Object(i.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.refresh();case 1:case"end":return a.stop()}}),a)}))),e.addDependency=function(){var a=Object(i.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return 0===t.id&&(n=new Date,t.id=n.getTime()+""),a.prev=1,a.next=4,b.collection("dependencies").doc(t.id+"").set(t);case 4:r=a.sent,console.log(r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0);case 11:e.setState({dependencyToEdit:e.clearDependency()}),e.refresh();case 13:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e.deleteDependency=function(){var a=Object(i.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.collection("dependencies").doc(t.id+"").delete();case 3:n=a.sent,console.log(n),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:e.refresh();case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}(),e.startEditDependency=function(a){e.setState({dependencyToEdit:a})},e.renderDependencies=function(){return e.state.dependencies.map((function(a){return r.a.createElement(v,{key:a.name,dependency:a,onDelete:e.deleteDependency,onEdit:e.startEditDependency})}))},e.clearFields=function(){e.setState({dependencyToEdit:e.clearDependency()})},e.clearDependency=function(){return{id:0,name:"",coordinator:"",max_users:"",location:"",active:!0}},e.state={dependencies:[],dependencyToEdit:e.clearDependency()},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Check out your dependencies!")),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Coordinador"),r.a.createElement("th",{scope:"col"},"M\xe1ximo n\xfamero usuarios"),r.a.createElement("th",{scope:"col"},"Ubicaci\xf3n"),r.a.createElement("th",{scope:"col"},"Activa"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.renderDependencies()))),r.a.createElement("div",{className:"container"},r.a.createElement(N,{handleNewDependency:this.addDependency,dependency:this.state.dependencyToEdit,handleClearFields:this.clearFields})))}}]),t}(n.Component),x=t(233),k=t.n(x),C=function(e){Object(u.a)(n,e);var a=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=a.call(this)).componentDidMount=Object(i.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.collection("dependencies").get();case 2:t=a.sent,e.setState({dependenciesQuery:t.docs.map((function(e){return e.data()}))});case 4:case"end":return a.stop()}}),a)}))),e.validateForm=function(e){var a=!0;return Object.values(e).forEach((function(e){return e.length>0&&(a=!1)})),a},e.handleInputChange=function(a){var t,n=e.state.errors,r=a.target,l=r.id,c=r.value;switch(l){case"name":n.name=""===c?"El nombre es obligatorio":"";break;case"lastName":n.lastName=""===c?"El apellido es obligatorio":"";break;case"email":n.email=k.a.isEmail(c)?"":"El email debe ser valido";break;case"password":n.password=""===c?"La contrase\xf1a es obligatoria":"";break;case"dependency_id":n.dependency=""===c?"La dependencia es obligatoria":"";break;case"valid_until":n.valid_until=""===c?"Este campo es obligatorio":""}"dependency_id"===l?e.setState({dependency_id:c,dependency:e.getDocumentDependency(c)}):e.setState((t={},Object(y.a)(t,l,c),Object(y.a)(t,"errors",n),t))},e.handleBoxChange=function(a){e.setState(Object(y.a)({},a.target.id,a.target.checked))},e.handleSubmit=function(a){if(a.preventDefault(),e.validateForm(e.state.errors)){0===e.state.id&&e.setState({id:1});var n=e.state,r=(n.errors,n.dependency_id,n.dependenciesQuery,Object(g.a)(n,["errors","dependency_id","dependenciesQuery"])),l=t(343),c=l.genSaltSync(10),o=l.hashSync(r.password,c);r.password=o,e.props.handleNewUser(r)}},e.ShowClearButton=function(){return 0!==e.state.id?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.props.handleClearFields},"Cancel Edit"):null},e.getDocumentDependency=function(e){var a=b.collection("dependencies").doc(e);return console.log(a),a},e.renderDependencyOptions=function(){return e.state.dependenciesQuery.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))},e.state={id:0,name:"",lastName:"",email:"",password:"",dependency:"",dependency_id:"",valid_until:"",active:!0,errors:{name:"El nombre es obligatorio",lastName:"El apellido es obligatorio",email:"El email es obligatorio",password:"La contrase\xf1a es obligatoria",dependency:"",valid_until:"Este campo es obligatorio"},dependenciesQuery:[]},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null," ",0===this.state.id?"Agregar":"Editar"," Usuario "),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{className:"form-control",type:"text",id:"name",value:this.state.name,onChange:this.handleInputChange,noValidate:!0}),e.name.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Apellido"),r.a.createElement("input",{className:"form-control",type:"text",id:"lastName",value:this.state.lastName,onChange:this.handleInputChange,noValidate:!0}),e.lastName.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.lastName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{className:"form-control",type:"email",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.handleInputChange,noValidate:!0}),e.email.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{className:"form-control",type:"password",id:"password",value:this.state.password,onChange:this.handleInputChange,noValidate:!0}),e.password.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Dependencia"),r.a.createElement("select",{className:"form-control",id:"dependency_id",value:this.state.dependency_id,onChange:this.handleInputChange,noValidate:!0},this.renderDependencyOptions()),e.dependency.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.dependency)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Valido Hasta"),r.a.createElement("input",{className:"form-control",type:"date",id:"valid_until",value:this.state.valid_until,onChange:this.handleInputChange,noValidate:!0}),e.valid_until.length>0&&r.a.createElement("div",{className:"alert alert-danger"},e.valid_until)),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"active",value:this.state.active,checked:this.state.active,onChange:this.handleBoxChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"active"},"Activa")),r.a.createElement("div",{className:"container"},r.a.createElement("button",{type:"button submit",className:"btn btn-primary"}," ",r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," "),r.a.createElement(this.ShowClearButton,null)))))}}]),n}(n.Component);C.getDerivedStateFromProps=function(e,a){return e.user.id!==a.id?(console.log(a.dependency_id),{id:e.user.id,name:e.user.name,lastName:e.user.lastName,email:e.user.email,password:e.user.password,dependency:e.user.dependency,dependency_id:""===e.user.dependency?"":e.user.dependency.id,valid_until:e.user.valid_until,active:e.user.active,errors:{name:""===e.user.name?"El nombre es obligatorio":"",lastName:""===e.user.lastName?"El apellido es obligatorio":"",email:""===e.user.email?"El email es obligatorio":"",password:""===e.user.password?"La contrase\xf1a es obligatoria":"",dependency:""===e.user.dependency?"La dependencia es obligatoria":"",valid_until:""===e.user.valid_until?"Este campo es obligatorio":""}}):null};var O=t(484),S=t(473),j=t(483),D=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).refresh=Object(i.a)(s.a.mark((function a(){var t,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.next=4,b.collection("users").get();case 4:n=a.sent,t=n.docs.map((function(e){return e.data()})),e.setState({users:t}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])}))),e.componentDidMount=Object(i.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.refresh();case 1:case"end":return a.stop()}}),a)}))),e.addUser=function(){var a=Object(i.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return 0===t.id&&(n=new Date,t.id=n.getTime()+""),a.prev=1,a.next=4,b.collection("users").doc(t.id+"").set(t);case 4:r=a.sent,console.log(r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0);case 11:e.setState({userToEdit:e.clearUser()}),e.refresh();case 13:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e.deleteUser=function(){var a=Object(i.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.collection("users").doc(t.id+"").delete();case 3:n=a.sent,console.log(n),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:e.refresh();case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}(),e.startEditUser=function(a){e.setState({userToEdit:a})},e.clearFields=function(){e.setState({userToEdit:e.clearUser()})},e.clearUser=function(){return{id:0,name:"",lastName:"",email:"",password:"",valid_until:"",dependency:"",active:!0}},e.updateSearch=function(a){e.setState({search:a.target.value})},e.state={search:"",users:[],userToEdit:e.clearUser()},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state.users.filter((function(a){return console.log(-1!==a.name.toLowerCase().indexOf(e.state.search.toLowerCase())),-1!==a.name.toLowerCase().indexOf(e.state.search.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(O.a,{maxWidth:400},r.a.createElement(j.a,{fullWidth:!0,value:this.state.search,placeholder:"Buscar Usuario por Nombre",variant:"outlined",onChange:this.updateSearch.bind(this)})))),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Check out the users!")),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Apellido"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Contrase\xf1a"),r.a.createElement("th",{scope:"col"},"Dependencia"),r.a.createElement("th",{scope:"col"},"Valido Hasta"),r.a.createElement("th",{scope:"col"},"Activo"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,a.map((function(a){return r.a.createElement(f,{key:a.name,user:a,onDelete:e.deleteUser,onEdit:e.startEditUser,manegeable:!0})}))))),r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),r.a.createElement(C,{handleNewUser:this.addUser,user:this.state.userToEdit,handleClearFields:this.clearFields})))}}]),t}(n.Component),_=t(476),B=t(477),U=t(478),T=t(480),W=t(479),V=t(92),F=t(237),I=t.n(F),A=t(238),q=t.n(A),L=Object(_.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(y.a)({color:"white",display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(y.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(y.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function M(){var e=L(),a="primary-search-account-menu";return r.a.createElement("div",{className:e.grow},r.a.createElement(B.a,{position:"static"},r.a.createElement(U.a,null,r.a.createElement(V.b,{to:"/"},r.a.createElement(W.a,{className:e.title,variant:"h6",noWrap:!0},"Gesti\xf3n de Usuarios")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(V.b,{to:"/users"},r.a.createElement(T.a,{edge:"end","aria-label":"account of current user","aria-controls":a,"aria-haspopup":"true"},r.a.createElement(I.a,null),r.a.createElement(W.a,{className:e.title,noWrap:!0},"Usuarios"))),r.a.createElement(V.b,{to:"/dependencies"},r.a.createElement(T.a,{edge:"end","aria-label":"account of current user","aria-controls":a,"aria-haspopup":"true"},r.a.createElement(q.a,null),r.a.createElement(W.a,{className:e.title,noWrap:!0},"Dependencias")))))),r.a.createElement("br",null))}var P=t(31),H=t(127),Q=t(481),z=t(482),R=t(242),G=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.title,l=void 0===n?"":n,c=Object(g.a)(e,["children","title"]);return r.a.createElement("div",Object.assign({ref:a},c),r.a.createElement(R.a,null,r.a.createElement("title",null,l)),t)})),J=Object(_.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",paddingBottom:e.spacing(3),paddingTop:e.spacing(3)}}})),Z=function(){var e=J();return r.a.createElement(G,{className:e.root,title:"Login"},r.a.createElement(O.a,{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},r.a.createElement(Q.a,{maxWidth:"sm"},r.a.createElement(H.a,{initialValues:{email:"example@email.com",password:"Password123"},validationSchema:P.b().shape({email:P.c().email("Must be a valid email").max(255).required("Email is required"),password:P.c().max(255).required("Password is required")})},(function(e){var a=e.errors,t=e.handleBlur,n=e.handleChange,l=e.handleSubmit,c=(e.isSubmitting,e.touched),o=e.values;return r.a.createElement("form",{onSubmit:l},r.a.createElement(O.a,{mb:3},r.a.createElement(W.a,{color:"textPrimary",variant:"h2"},"Sign in")),r.a.createElement(O.a,{mt:3,mb:1},r.a.createElement(W.a,{align:"left",color:"textSecondary",variant:"body1"},"Login with email address")),r.a.createElement(j.a,{error:Boolean(c.email&&a.email),fullWidth:!0,helperText:c.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:t,onChange:n,type:"email",value:o.email,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(c.password&&a.password),fullWidth:!0,helperText:c.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:t,onChange:n,type:"password",value:o.password,variant:"outlined"}),r.a.createElement(O.a,{my:2},r.a.createElement(z.a,{color:"primary",fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign in now")))})))))},K=t(485),$=t(475),X=Object(_.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",paddingBottom:e.spacing(3),paddingTop:e.spacing(3)}}})),Y=function(){var e=X();return r.a.createElement(G,{className:e.root,title:"Register"},r.a.createElement(O.a,{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},r.a.createElement(Q.a,{maxWidth:"sm"},r.a.createElement(H.a,{initialValues:{email:"",firstName:"",lastName:"",password:"",valido_hasta:"",dependencia:"",activo:!1},validationSchema:P.b().shape({email:P.c().email("Must be a valid email").max(255).required("Email is required"),firstName:P.c().max(255).required("First name is required"),lastName:P.c().max(255).required("Last name is required"),password:P.c().max(255).required("password is required"),valido_hasta:P.c().max(255).required("This field is required"),dependencia:P.c().max(255).required("This field is required"),activo:P.a().oneOf([!0],"This field must be checked")})},(function(e){var a=e.errors,t=e.handleBlur,n=e.handleChange,l=e.handleSubmit,c=e.isSubmitting,o=e.touched,s=e.values;return r.a.createElement("form",{onSubmit:l},r.a.createElement(O.a,{mb:3},r.a.createElement(W.a,{color:"textPrimary",variant:"h2"},"Create new account"),r.a.createElement(W.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"Use your email to create new account")),r.a.createElement(j.a,{error:Boolean(o.firstName&&a.firstName),fullWidth:!0,helperText:o.firstName&&a.firstName,label:"First name",margin:"normal",name:"firstName",onBlur:t,onChange:n,value:s.firstName,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(o.lastName&&a.lastName),fullWidth:!0,helperText:o.lastName&&a.lastName,label:"Last name",margin:"normal",name:"lastName",onBlur:t,onChange:n,value:s.lastName,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(o.email&&a.email),fullWidth:!0,helperText:o.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:t,onChange:n,type:"email",value:s.email,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(o.password&&a.password),fullWidth:!0,helperText:o.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:t,onChange:n,type:"password",value:s.password,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(o.valido_hasta&&a.valido_hasta),fullWidth:!0,helperText:o.valido_hasta&&a.valido_hasta,label:"Valido Hasta",margin:"normal",name:"valido_hasta",onBlur:t,onChange:n,type:"valido_hasta",value:s.valido_hasta,variant:"outlined"}),r.a.createElement(j.a,{error:Boolean(o.dependencia&&a.dependencia),fullWidth:!0,helperText:o.dependencia&&a.dependencia,label:"Dependencia",margin:"normal",name:"dependencia",onBlur:t,onChange:n,type:"dependencia",value:s.dependencia,variant:"outlined"}),r.a.createElement(O.a,{alignItems:"center",display:"flex",ml:-1},r.a.createElement(K.a,{checked:s.activo,name:"activo",onChange:n}),r.a.createElement(W.a,{color:"textSecondary",variant:"body1"},"Activo?")),Boolean(o.activo&&a.activo)&&r.a.createElement($.a,{error:!0},a.activo),r.a.createElement(O.a,{my:2},r.a.createElement(z.a,{color:"primary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up now")))})))))},ee=Object(_.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",paddingBottom:e.spacing(3),paddingTop:e.spacing(3)},image:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}}})),ae=function(){var e=ee();return r.a.createElement(G,{className:e.root,title:"404"},r.a.createElement(O.a,{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},r.a.createElement(Q.a,{maxWidth:"md"},r.a.createElement(W.a,{align:"center",color:"textPrimary",variant:"h1"},"404: The page you are looking for isn\u2019t here"))))},te=t(15);var ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V.a,null,r.a.createElement(M,null),r.a.createElement(te.c,null,r.a.createElement(te.a,{path:"/users"},r.a.createElement(D,null)),r.a.createElement(te.a,{path:"/register"},r.a.createElement(Y,null)),r.a.createElement(te.a,{path:"/dependencies"},r.a.createElement(w,null)),r.a.createElement(te.a,{exact:!0,path:"/"},r.a.createElement(Z,null)),r.a.createElement(te.a,{path:"*"},r.a.createElement(ae,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[257,1,2]]]);
//# sourceMappingURL=main.be29f3c9.chunk.js.map