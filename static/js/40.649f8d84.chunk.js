(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1161:function(e,a,t){e.exports={item:"style_item__fNfys",status:"style_status__3N_NU",statusTitle:"style_statusTitle___Pp2-",img:"style_img__1QqIG",imgItem:"style_imgItem__2jRsq",like:"style_like__H7JIq",selectedLike:"style_selectedLike__3LSOi",sizes:"style_sizes__16fBW",descr:"style_descr__2yIgl",option:"style_option__1gGai",optionTitle:"style_optionTitle__O_jd4",price:"style_price__3gtRf",priceBefore:"style_priceBefore__gROR6",sku:"style_sku__2VVV4",rating:"style_rating__B1ohM",controls:"style_controls__qo3AZ",btn:"style_btn__4N4ib","btn-link":"style_btn-link__YBFNA",photos:"style_photos__1LHO2",photosItem:"style_photosItem__247E2",photosItemActive:"style_photosItemActive__2gAD0",mainTitle:"style_mainTitle__1j3wH",info:"style_info__O6-M9",breadcrumbs:"style_breadcrumbs__3kt1o",breadcrumbItem:"style_breadcrumbItem__178TI"}},1162:function(e){e.exports={name:"Beautiful Chair for Kids",sku:"0000235",rate:4.5,images:["resources/images/ecommerce/001.jpg","resources/images/ecommerce/002.jpg","resources/images/ecommerce/003.jpg","resources/images/ecommerce/004.jpg"],price:189.95,oldPrice:220.95,shortDescr:"A chair is a piece of furniture with a raised surface, commonly used to seat a single person. Chairs are supported most often by four legs and have a back; however, a chair can have three legs or can have a different shape.",properties:[{name:"Item Weight",value:"18 pounds"},{name:"Product Dimensions",value:"13 x 40 x 13 inches"},{name:"Item model number",value:"100001"},{name:"Assembled Height",value:"13 inches"},{name:"Assembled Width",value:"13 inches"},{name:"Assembled Length",value:"40 inches"},{name:"Weight",value:"23 Pounds"}],description:"Mnesarchum velit cumanum utuntur tantam deterritum, democritum vulgo contumeliae abest studuisse quanta telos. Inmensae. Arbitratu dixisset invidiae ferre constituto gaudeat contentam, omnium nescius, consistat interesse animi, amet fuisset numen graecos incidunt euripidis praesens, homines religionis dirigentur postulant. Magnum utrumvis gravitate appareat fabulae facio perveniri fruenda indicaverunt texit, frequenter probet diligenter sententia meam distinctio theseo legerint corporis quoquo, optari futurove expedita."}},1213:function(e,a,t){"use strict";t.r(a);t(118);var s=t(45),i=(t(288),t(23)),c=(t(290),t(199)),n=(t(1157),t(1202)),r=(t(1159),t(1204)),l=(t(809),t(811)),m=t(14),o=t(15),u=t(17),d=t(16),p=t(18),v=(t(613),t(637)),E=(t(633),t(635)),_=t(0),g=t.n(_),h=t(117),f=t(1161),b=t.n(f),y=t(1162),N=E.a.TabPane,k=v.a.Option,I=function(e){function a(){var e,t;Object(m.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={imgActiveStatus:[],images:y.images,sku:y.sku,name:y.name,rate:y.rate,price:y.price,oldPrice:y.oldPrice,shortDescr:y.shortDescr,description:y.description,properties:y.properties},t.generateImgStatus=function(){var e=t.state,a=e.imgActiveStatus;e.images.forEach(function(e,t){a[t]="not-active",0===t&&(a[0]="active")})},t.setActiveImg=function(e){var a=t.state.imgActiveStatus;a.forEach(function(t,s){a[s]="not-active",e===s&&(a[s]="active")}),t.setState({imgActiveStatus:a})},t.refSlider=function(e){t.slider=e},t.changeSlide=function(e,a){e.preventDefault(),t.slider.slick.innerSlider.slickGoTo(a),t.setActiveImg(a)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.generateImgStatus()}},{key:"render",value:function(){var e=this,a=this.state,t=a.imgActiveStatus,m=a.images,o=a.sku,u=a.name,d=a.rate,p=a.price,_=a.oldPrice,f=a.shortDescr,y=a.description,I=a.properties;return g.a.createElement("div",null,g.a.createElement(h.Helmet,{title:"Products Details"}),g.a.createElement("section",{className:"card"},g.a.createElement("div",{className:"card-header"},g.a.createElement("div",{className:"utils__title"},g.a.createElement("strong",null,"Product Details"))),g.a.createElement("div",{className:"card-body"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-4"},g.a.createElement("div",{className:b.a.item},g.a.createElement("div",{className:b.a.img},g.a.createElement("div",{className:b.a.status},g.a.createElement("span",{className:b.a.statusTitle},"New")),g.a.createElement("div",{className:"".concat(b.a.like," ").concat(b.a.selectedLike)},g.a.createElement("i",{className:"icmn-heart"})),g.a.createElement(l.a,{ref:this.refSlider,autoplay:!1,dots:!1,effect:"fade"},m.map(function(e){return g.a.createElement("div",{key:e},g.a.createElement("img",{className:b.a.img,src:e,alt:""}))})))),g.a.createElement("div",{className:"".concat(b.a.photos," clearfix")},m.map(function(a,s){return g.a.createElement("a",{href:"javascript: void(0)",key:a,onClick:function(a){e.changeSlide(a,s)},className:"".concat(b.a.photosItem," ").concat("active"===t[s]?b.a.photosItemActive:"")},g.a.createElement("img",{src:a,alt:""}))}))),g.a.createElement("div",{className:"col-lg-8"},g.a.createElement("div",{className:b.a.breadcrumbs},g.a.createElement(r.a,{separator:""},g.a.createElement(r.a.Item,null,g.a.createElement("span",{className:b.a.breadcrumbItem},g.a.createElement("a",{href:"javascript: void(0);"},"Catalog"))),g.a.createElement(r.a.Item,null,g.a.createElement("span",{className:b.a.breadcrumbItem},g.a.createElement("a",{href:"javascript: void(0);"},"Chairs"))),g.a.createElement(r.a.Item,null,g.a.createElement("span",{className:b.a.breadcrumbItem},g.a.createElement("a",{href:"javascript: void(0);"},"White"))))),g.a.createElement("div",{className:b.a.sku},"SKU: #".concat(o),g.a.createElement("br",null),g.a.createElement("div",{className:b.a.raiting},g.a.createElement(n.a,{value:d,disabled:!0,allowHalf:!0}))),g.a.createElement("h4",{className:b.a.mainTitle},g.a.createElement("strong",null,u)),g.a.createElement("div",{className:b.a.price},"$".concat(p),_&&g.a.createElement("div",{className:b.a.priceBefore},"$".concat(_))),g.a.createElement("hr",null),g.a.createElement("div",{className:"mb-1 ".concat(b.a.descr)},g.a.createElement("p",null,f)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-6"},g.a.createElement("div",{className:b.a.optionTitle},"Color"),g.a.createElement("div",{className:b.a.option},g.a.createElement(v.a,{defaultValue:"Red",size:"small",style:{width:120}},g.a.createElement(k,{value:"red"},"Red"),g.a.createElement(k,{value:"black"},"Black"),g.a.createElement(k,{value:"cyan"},"Cyan"),g.a.createElement(k,{value:"blue"},"Blue"))),g.a.createElement("div",{className:b.a.optionTitle},"Available Size"),g.a.createElement("div",{className:b.a.option},g.a.createElement("div",{className:b.a.sizes},g.a.createElement(c.a,{placement:"top",title:"Size S"},g.a.createElement("span",null,"S")),g.a.createElement(c.a,{placement:"top",title:"Size M"},g.a.createElement("span",{title:"Size M"},"M")),g.a.createElement(c.a,{placement:"top",title:"Size XL"},g.a.createElement("span",null,"XL")))))),g.a.createElement("hr",null),g.a.createElement("div",{className:b.a.controls},g.a.createElement(s.a,{type:"primary",size:"large"},g.a.createElement(i.a,{type:"shopping-cart"}),"Buy now"),g.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-link"},g.a.createElement("i",{className:"icmn-heart mr-1"}),"Add to Wishlist"),g.a.createElement("a",{href:"javascript: void(0);",className:"btn btn-link"},g.a.createElement("i",{className:"icmn-stats-bars mr-1"}),"Add to Compare")),g.a.createElement("div",{className:b.a.info},g.a.createElement(E.a,{defaultActiveKey:"1"},g.a.createElement(N,{tab:"Information",key:"1"},I.map(function(e){return g.a.createElement("div",{className:"mb-1",key:e.name},g.a.createElement("strong",{className:"mr-1"},"".concat(e.name,": ")),e.value)})),g.a.createElement(N,{tab:"Description",key:"2"},g.a.createElement("p",null,y)))))))))}}]),a}(g.a.Component);a.default=I}}]);
//# sourceMappingURL=40.649f8d84.chunk.js.map