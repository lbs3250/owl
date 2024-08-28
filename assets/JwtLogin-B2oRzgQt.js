import{t,E as p,F as T,x as B,r as d,y as R,j as e,G as S,P as c,N as E,H as k}from"./index-CwTaeQ9h.js";import{c as F,a as u,F as I,L as P}from"./index.esm-4hbjY-Ko.js";import{G as o,T as x}from"./TextField-DkWDZZWL.js";const g=t(p)(()=>({display:"flex",alignItems:"center"})),h=t(g)(()=>({justifyContent:"center"})),W=t(p)(()=>({height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"})),C=t(h)(()=>({background:"#1A2038",backgroundImage:"url('/assets/images/home-bg.png')",minHeight:"100% !important","& .card":{maxWidth:500,minHeight:350,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}})),G={username:"",password:""},H=F().shape({password:u().min(4,"Password must be 4 character length").required("Password is required!"),username:u().required("username is required!")}),D=()=>{const j=T(),y=B(),[b,n]=d.useState(!1),[f,i]=d.useState(""),{login:w}=R(),L=async a=>{n(!0);try{i(""),await w(a.username,a.password),n(!1),y("/")}catch(s){n(!1),s.response?i(s.response.data.message):i("서버와의 통신 중 오류가 발생했습니다.")}};return e.jsx(C,{children:e.jsx(S,{className:"card",children:e.jsxs(o,{container:!0,children:[e.jsx(o,{item:!0,sm:12,xs:12,children:e.jsx(h,{p:2,height:"100%",sx:{minWidth:200},children:e.jsx("img",{src:"/assets/images/logo_simple2.png",alt:"",width:"170px"})})}),e.jsx(o,{item:!0,sm:12,xs:12,children:e.jsx(W,{children:e.jsx(I,{initialValues:G,onSubmit:L,validationSchema:H,children:({values:a,errors:s,touched:r,handleChange:l,handleBlur:m,handleSubmit:v})=>e.jsxs("form",{onSubmit:v,children:[e.jsx(x,{fullWidth:!0,size:"small",type:"text",name:"username",label:"ID",variant:"outlined",onBlur:m,value:a.username,onChange:l,helperText:r.username&&s.username,error:!!(s.username&&r.username),sx:{mb:3}}),e.jsx(x,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:m,value:a.password,onChange:l,helperText:r.password&&s.password,error:!!(s.password&&r.password),sx:{mb:1.5}}),e.jsx(c,{color:"red",children:f}),e.jsx(P,{type:"submit",color:"primary",loading:b,variant:"contained",sx:{my:2},children:"Login"}),e.jsxs(c,{children:["Don't have an account?",e.jsx(E,{to:"/session/signup",style:{color:j.palette.primary.main,marginLeft:5},children:"Register"})]}),e.jsx(g,{children:e.jsx(k,{display:"block",textAlign:"center",children:"COPYRIGHT © OWL ALL RIGHTS RESERVED."})})]})})})})]})})})};export{D as default};
