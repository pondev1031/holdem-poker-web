"use strict";(self.webpackChunkPokerking_Web=self.webpackChunkPokerking_Web||[]).push([[457],{30465:function(e,n,s){s.r(n),s.d(n,{default:function(){return i}});var t=s(6907),a=s(81570),r=s(80184);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.ql,{children:(0,r.jsx)("title",{children:" Register"})}),(0,r.jsx)(a.d,{})]})}},81570:function(e,n,s){s.d(n,{q:function(){return R},d:function(){return z}});var t=s(74165),a=s(15861),r=s(29439),i=s(72791),o=s(44695),l=s(61134),c=s(8007),d=s(46002),u=s(92363),m=s(50533),h=s(13400),g=s(63466),p=s(36314),x=s(19138),b=s(7055),f=s(14783),v=s(71839),Z=s(12246),k=s(89456),j=s(79013),w=s(14399),y=s(35552),S=(s(52820),s(89302)),_=s(61005),q=s(85474),I=s(67730),E=s(80184);function R(){var e=(0,x.tv)(),n=(0,Z.Z)().t,s=(0,k.I0)(),R=(0,y.Ds)().enqueueSnackbar,z=(0,I.Z)(),P=z.sendSocket,N=z.lastJsonMessage,W=(0,i.useState)(""),C=(0,r.Z)(W,2),F=C[0],J=C[1],M=(0,v.k)(),A=c.Ry().shape({name:c.Z_().required("Nick Name / Email is required"),password:c.Z_().required("Password is required")}),G=(0,l.cI)({resolver:(0,o.X)(A),defaultValues:{name:"",password:""}}),T=G.reset,D=G.handleSubmit,H=G.formState.isSubmitting,L=D(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s=n.name,a=n.password,P({key:f.Fh.LOGIN,name:s,password:a})}catch(t){console.error(t),T(),J("string"===typeof t?t:t.message)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());(0,i.useEffect)((function(){if(N){var t=N.key,a=N.data;if(t===f.Fh.LOGIN_RES&&a){var r=a.result,i=a.user,o=a.error;o?J(o):r&&i&&(s((0,j.xJ)({user:i,token:"token"})),R(n("message.welcome")),console.log("\ud83d\ude80 ~ useEffect ~ lastJsonMessage:",N),e.push(f.wd))}}}),[N]);var O=(0,E.jsx)(p.Z,{spacing:2,sx:{mb:5,alignItems:"center"},children:(0,E.jsx)(q.Z,{sx:{width:100}})}),V=(0,E.jsxs)(p.Z,{spacing:2.5,height:1,position:"relative",children:[!!F&&(0,E.jsx)(u.Z,{severity:"error",children:F}),(0,E.jsx)(w.au,{name:"name",label:n("label.nick_email"),variant:"standard",sx:{fontSize:26}}),(0,E.jsx)(w.au,{name:"password",label:n("label.password"),variant:"standard",type:M.value?"text":"password",InputProps:{endAdornment:(0,E.jsx)(g.Z,{position:"end",children:(0,E.jsx)(h.Z,{onClick:M.onToggle,edge:"end",children:(0,E.jsx)(_.Z,{icon:M.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,E.jsxs)(p.Z,{sx:{alignItems:"center",gap:3,position:"absolute",width:1,bottom:80},children:[(0,E.jsx)(d.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",sx:{height:50,maxWidth:300,backgroundSize:"cover",backgroundImage:"url(../../assets/pokerking/button/button1.png)"},loading:H,children:n("button.login")}),(0,E.jsx)(m.Z,{component:S.r,href:b.H.auth.register,variant:"subtitle2",children:n("label.create_an_account")})]})]});return(0,E.jsxs)(w.ZP,{methods:G,onSubmit:L,style:{height:"100%"},children:[O,V]})}function z(){var e=(0,x.tv)(),n=(0,Z.Z)().t,s=(0,k.I0)(),R=(0,y.Ds)().enqueueSnackbar,z=(0,I.Z)(),P=z.sendSocket,N=z.lastJsonMessage,W=(0,i.useState)(""),C=(0,r.Z)(W,2),F=C[0],J=C[1],M=(0,v.k)(),A=c.Ry().shape({name:c.Z_().min(4).required("Nick Name is required"),agent_code:c.Rx().min(0).required("Agent Code is required"),email:c.Z_().required("Email is required"),password:c.Z_().min(6).matches(/[A-z]/,"Must contain at least one letter").matches(/[0-9]/,"Must contain at least one number").required("Password is required")}),G=(0,l.cI)({resolver:(0,o.X)(A),defaultValues:{name:"",agent_code:0,email:"",password:""}}),T=G.watch,D=G.reset,H=G.handleSubmit,L=G.formState.isSubmitting,O=H(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var s,a,r,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s=n.name,a=n.email,r=n.agent_code,i=n.password,P({key:f.Fh.REGISTER,name:s,email:a,agent_code:r,password:i})}catch(t){console.error(t),D(),J("string"===typeof t?t:t.message)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());(0,i.useEffect)((function(){if(N){var t=N.key,a=N.data;if(t===f.Fh.REGISTER_RES&&a){var r=a.result,i=a.user,o=a.error;console.log("\ud83d\ude80 ~ useEffect ~ data:",a),o?J(o):r&&i&&(s((0,j.xJ)({user:i,token:"token"})),console.log("succss"),R(n("message.welcome")),e.push(f.wd))}}}),[N,e,s,R,n]),(0,i.useEffect)((function(){J("")}),[T]);var V=(0,E.jsx)(p.Z,{spacing:2,sx:{mb:3,alignItems:"center"},children:(0,E.jsx)(q.Z,{sx:{width:100}})}),X=(0,E.jsxs)(p.Z,{spacing:1,height:1,position:"relative",children:[!!F&&(0,E.jsx)(u.Z,{severity:"error",children:n("message.".concat(F))}),(0,E.jsx)(w.au,{name:"name",label:n("label.nick"),variant:"standard",sx:{fontSize:26}}),(0,E.jsx)(w.au,{name:"email",label:n("label.email"),variant:"standard",sx:{fontSize:26}}),(0,E.jsx)(w.au,{type:"number",inputProps:{min:0},name:"agent_code",label:n("label.agent_code"),variant:"standard",sx:{fontSize:26}}),(0,E.jsx)(w.au,{name:"password",label:n("label.password"),variant:"standard",type:M.value?"text":"password",InputProps:{endAdornment:(0,E.jsx)(g.Z,{position:"end",children:(0,E.jsx)(h.Z,{onClick:M.onToggle,edge:"end",children:(0,E.jsx)(_.Z,{icon:M.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,E.jsxs)(p.Z,{sx:{alignItems:"center",gap:3,position:"absolute",width:1,bottom:50},children:[(0,E.jsx)(d.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",sx:{height:50,maxWidth:300,backgroundSize:"cover",backgroundImage:"url(../../assets/pokerking/button/button1.png)"},loading:L,children:n("label.register")}),(0,E.jsx)(m.Z,{component:S.r,href:b.H.auth.login,variant:"subtitle2",children:n("label.signin")})]})]});return(0,E.jsxs)(w.ZP,{methods:G,onSubmit:O,style:{height:"100%"},children:[V,X]})}}}]);
//# sourceMappingURL=457.2c25c6f6.chunk.js.map