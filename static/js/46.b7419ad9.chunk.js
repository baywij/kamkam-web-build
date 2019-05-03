(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1112:function(e,a,t){e.exports={login:"style_login__3ookC",fullscreen:"style_fullscreen__Xs9tt",windowed:"style_windowed__2_6OF",header:"style_header__pHn8H",logo:"style_logo__1eU3W",loginNav:"style_loginNav__Q3AoQ",navItems:"style_navItems__nEfu1",active:"style_active__rHS-5",styleControls:"style_styleControls__2GD_u",content:"style_content__2d9Yk",promo:"style_promo__2Ddqd",formWrapper:"style_formWrapper__qf5tT",form:"style_form__JTVLZ",formTitle:"style_formTitle__19dwC",footer:"style_footer__1EVjZ",footerNav:"style_footerNav__uBVFB",sidebar:"style_sidebar__1IEeZ",sidebarTitle:"style_sidebarTitle__3KRxt",sidebarSubTitle:"style_sidebarSubTitle__1Zz0g",sidebarContent:"style_sidebarContent__22xMl",sidebarFooter:"style_sidebarFooter__3woPf"}},1250:function(e,a,t){"use strict";t.r(a);t(118);var r=t(45),l=t(14),n=t(15),s=t(17),c=t(16),m=t(18),o=t(0),i=t.n(o),u=t(117),d=t(1112),p=t.n(d),v=(t(293),t(194)),E=(t(289),t(193)),f=(t(288),t(23)),_=(t(612),t(611)),b=_.a.Item,g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),m=0;m<r;m++)n[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault()},t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props.form;return i.a.createElement(_.a,{onSubmit:this.handleSubmit,className:"login-form"},i.a.createElement(b,{label:"Username"},e.getFieldDecorator("userName",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(E.a,{prefix:i.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),i.a.createElement(b,{label:"Password"},e.getFieldDecorator("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(E.a,{prefix:i.a.createElement(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),i.a.createElement(b,null,e.getFieldDecorator("remember",{valuePropName:"checked",initialValue:!0})(i.a.createElement(v.a,null,"Remember me")),i.a.createElement("a",{className:"login-form-forgot pull-right text-primary",style:{lineHeight:"36px"},href:"javascript: void(0);"},"Forgot password?")),i.a.createElement("div",{className:"form-actions"},i.a.createElement(r.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Sign in"),i.a.createElement("span",{className:"ml-3 register-link"},i.a.createElement("a",{href:"javascript: void(0);",className:"text-primary utils__link--underlined"},"Register")," ","if you don't have account")),i.a.createElement("div",{className:"form-group"},i.a.createElement("p",null,"Use another service to Log In"),i.a.createElement("div",{className:"mt-2"},i.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},i.a.createElement("i",{className:"icmn-facebook"})),i.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},i.a.createElement("i",{className:"icmn-google"})),i.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},i.a.createElement("i",{className:"icmn-windows"})),i.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-icon mr-2"},i.a.createElement("i",{className:"icmn-twitter"})))))}}]),a}(i.a.Component),h=_.a.create()(g),y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),m=0;m<r;m++)n[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={fullScreen:!1,backgroundNumber:1},t.setFullscreen=function(){var e=t.state.fullScreen;t.setState({fullScreen:!e})},t.changeBackground=function(){var e=t.state.backgroundNumber;5===e?e=1:e+=1,t.setState({backgroundNumber:e})},t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.state,a=e.fullScreen,t=e.backgroundNumber;return i.a.createElement("div",null,i.a.createElement(u.Helmet,{title:"Login Beta"}),i.a.createElement("section",{className:"".concat(p.a.login," ").concat(a?p.a.fullscreen:p.a.windowed),style:{backgroundImage:"url('resources/images/photos/".concat(t,".jpeg')")}},i.a.createElement("header",{className:p.a.header},i.a.createElement("a",{className:p.a.logo,href:"javascript: void(0);"},i.a.createElement("img",{src:"resources/images/logo-inverse.png",alt:"Clean UI Admin Template"})),i.a.createElement("div",{className:p.a.styleControls},i.a.createElement(r.a,{className:"mt-3 mt-xl-0",onClick:this.setFullscreen},"Set ".concat(a?"Windowed":"Fullscreen")),i.a.createElement(r.a,{className:"ml-3 mt-3 mt-xl-0",onClick:this.changeBackground},"Change Background")),i.a.createElement("nav",{className:p.a.loginNav},i.a.createElement("ul",{className:p.a.navItems},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"\u2190 Back")),i.a.createElement("li",null,i.a.createElement("a",{className:p.a.active,href:"javascript: void(0);"},"Login")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Support"))))),i.a.createElement("div",{className:p.a.content},i.a.createElement("div",{className:p.a.promo},i.a.createElement("h1",{className:"mb-3"},"Welcome to Clean UI admin template"),i.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")),i.a.createElement("div",{className:p.a.formWrapper},i.a.createElement("div",{className:p.a.form},i.a.createElement("p",{className:p.a.formTitle},"Please log in"),i.a.createElement(h,null)),i.a.createElement("div",{className:p.a.sidebar},i.a.createElement("p",{className:p.a.sidebarTitle},"Agile Dev Meetup"),i.a.createElement("p",{className:p.a.sidebarSubTitle},"August 2018"),i.a.createElement("div",{className:p.a.sidebarContent},i.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),i.a.createElement("p",null,"Ipsum has been the industry's standard dummy text ever since the 1500s.")),i.a.createElement("div",{className:p.a.sidebarFooter},i.a.createElement("span",null,i.a.createElement("i",{className:"icmn-location mr-3"}),"New York, USA"))))),i.a.createElement("footer",{className:p.a.footer},i.a.createElement("ul",{className:p.a.footerNav},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Terms of Use")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Compliance")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Confidential Information")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Support")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript: void(0);"},"Contacts"))))))}}]),a}(i.a.Component);a.default=y}}]);
//# sourceMappingURL=46.b7419ad9.chunk.js.map