import{m as a,x as b,y as D,o as F,r as x,p as L,j as e,C as W,z as c,P as C,A as k}from"./index-DHq3XoPI.js";import{c as z,a as h,F as B,L as u}from"./index.esm-1ijmdzRu.js";import{G as n,T as g}from"./TextField-CqaMgg9g.js";import{D as R}from"./Divider-Dk8QAne1.js";import"./dividerClasses-DsNt0qSU.js";const E=a(b)(()=>({display:"flex",alignItems:"center"})),l=a(E)(()=>({justifyContent:"center",flexDirection:"column"})),H=a(b)(()=>({height:"100%",position:"relative",padding:"0px"})),I=a(l)(()=>({background:"#F7F5F5",minHeight:"100vh",flexDirection:"column",justifyContent:"center","& .card":{maxWidth:500,minHeight:575,margin:"1rem",padding:"0px 40px 40px 40px",display:"flex",borderRadius:55,alignItems:"center",boxShadow:"none"}})),P={email:"",password:""},A=z().shape({email:h().email("유효한 이메일형식이 아닙니다. 올바른 이메일 형식으로 작성해주세요.").required("이메일 아이디를 입력해주세요."),password:h().min(4,"비밀번호는 최소 4자 이상이어야 합니다.").required("비밀번호를 입력해주세요.")}),N=()=>{D();const d=F(),[f,o]=x.useState(!1),[j,r]=x.useState(""),{login:w}=L(),y=async s=>{o(!0);try{r(""),await w(s.email,s.password),o(!1),d("/")}catch(t){o(!1),t.response?r(t.response.data.message):r("서버와의 통신 중 오류가 발생했습니다.")}};return e.jsxs(I,{children:[e.jsx(l,{p:2,height:"100%",sx:{minWidth:200},children:e.jsx("img",{src:"./assets/images/login_owl.png",alt:"",width:"140px"})}),e.jsx(W,{className:"card",children:e.jsxs(n,{container:!0,children:[e.jsx(n,{item:!0,sm:12,xs:12,children:e.jsx(l,{p:5,height:"100%",sx:{minWidth:200},children:e.jsx(c,{variant:"h4",fontWeight:"bold",children:"로그인"})})}),e.jsx(n,{item:!0,sm:12,xs:12,children:e.jsx(H,{children:e.jsx(B,{initialValues:P,validationSchema:A,validateOnMount:!0,onSubmit:y,children:({values:s,errors:t,touched:i,handleChange:m,handleBlur:p,handleSubmit:v,isValid:S,dirty:T})=>e.jsxs("form",{onSubmit:v,children:[e.jsx(g,{fullWidth:!0,size:"small",type:"text",name:"email",label:"이메일 아이디",placeholder:"example@gmail.com",variant:"outlined",onBlur:p,value:s.email,onChange:m,helperText:i.email&&t.email,error:!!(t.email&&i.email),InputLabelProps:{shrink:!0,sx:{color:"black"}},sx:{mb:5,"& .MuiFormHelperText-root":{margin:"1px",fontSize:"12px",position:"absolute",top:"100%",color:"red"}}}),e.jsx(g,{fullWidth:!0,placeholder:"비밀번호를 입력해주세요",label:"비밀번호",size:"small",name:"password",type:"password",variant:"outlined",onBlur:p,value:s.password,onChange:m,helperText:i.password&&t.password,error:!!(t.password&&i.password),InputLabelProps:{shrink:!0,sx:{color:"black"}},sx:{mb:5,"& .MuiFormHelperText-root":{margin:"1px",fontSize:"12px",position:"absolute",top:"100%",color:"red"}}}),e.jsx(R,{sx:{width:"100%",mb:1}})," ",e.jsx(C,{color:"red",sx:{height:"5px",whiteSpace:"nowrap",textOverflow:"ellipsis",mb:1},children:j}),e.jsx(u,{size:"large",type:"submit",color:"primary",loading:f,disabled:!S||!T,variant:"contained",sx:{fontWeight:"bold",mt:2,width:"100%"},children:"Login"}),e.jsx(u,{size:"large",type:"button",color:"secondary",variant:"outlined",sx:{width:"100%",fontWeight:"bold",borderColor:"#DDDDDD",mt:1,mb:1},onClick:()=>d("/session/signup"),children:"회원가입"}),e.jsx(c,{fontSize:11,variant:"caption",color:"textSecondary",align:"center",sx:{mt:5,padding:"10px"},children:"사장님 계정이 없으신가요? 회원가입을 통해 사장님 계정을 생성해주세요."}),e.jsx(k,{display:"block",textAlign:"center",sx:{mt:5},children:"COPYRIGHT © OWL ALL RIGHTS RESERVED."})]})})})})]})})]})};export{N as default};
