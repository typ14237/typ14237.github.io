import{H as e,B as s,D as t,L as a,z as n,f as l,b as o,w as r,F as d,A as c,M as i,h as u,a as p,d as m,t as f,g as b,q as x,i as I,c as _}from"./index-BssrTN_v.js";import{_ as w,u as L,o as k,r as v,a as S}from"./useRootFontSize.KxEFqd7D.js";import{u as g,a as q}from"./task.QoYPsyFY.js";import"./useDayjs.By1QBtKa.js";const z=w({setup(){const n=e({taskId:"",title:"",cardIndex:0,problemList:[]}),{rootFontSize:l}=L(),o=g();k((async e=>{s({title:"获取问题中...",icon:"none"}),n.taskId=e.id,n.title=e.title;const{detail:a}=await q(e.id);t(),a.questions&&a.questions.length>0&&(n.problemList=a.questions.map((e=>{const s=r(e.answer).map((s=>({name:s,opt:s.split(":")[0],isSuccess:s.includes(e.correct)})));return{question:e.question,answer:e.correct,selAnswer:"",data:s}}))),console.log("问题",a,n.problemList)}));const r=function(e){return e.split(/\r?\n/)};return{...a(n),onSelect:e=>{n.problemList[n.cardIndex].selAnswer||(n.problemList[n.cardIndex].selAnswer=e,n.problemList[n.cardIndex].answer===e?c({title:"回答正确",icon:"none"}):c({title:"回答错误",icon:"none"}))},onPre:()=>{0!==n.cardIndex&&(n.cardIndex=n.cardIndex-1)},onNext:async()=>{if(n.problemList[n.cardIndex].selAnswer)return n.cardIndex+1===n.problemList.length?(await o.doneTask(n.taskId),void i({url:"/pages/redStudy/index"})):void(n.cardIndex=n.cardIndex+1);c({title:"请选择答案",icon:"none"})},taskStore:o,rootFontSize:l}}},[["render",function(e,s,t,a,c,i){const w=v(n("page-meta"),S),L=I,k=u;return p(),l(d,null,[o(w,{"root-font-size":a.rootFontSize},null,8,["root-font-size"]),o(k,{class:"answer-wrapper"},{default:r((()=>[o(k,{class:"answer-header"},{default:r((()=>[o(L,{class:"title"},{default:r((()=>[m("“"+f(e.title)+"”研学",1)])),_:1}),o(L,{class:"desc"},{default:r((()=>[m("传承红色文化答题活动")])),_:1})])),_:1}),o(k,{class:"card-body"},{default:r((()=>[o(k,{class:"content"},{default:r((()=>{var s,t;return[o(k,{class:"count-num"},{default:r((()=>[o(L,{class:"num active"},{default:r((()=>[m(f(e.cardIndex+1),1)])),_:1}),o(L,{class:"num"},{default:r((()=>[m("/"+f(e.problemList.length),1)])),_:1})])),_:1}),o(k,{class:"problem-title"},{default:r((()=>{var s;return[m(f(null==(s=e.problemList[e.cardIndex])?void 0:s.question),1)]})),_:1}),(p(!0),l(d,null,b(null==(s=e.problemList[e.cardIndex])?void 0:s.data,((s,t)=>(p(),_(k,{class:x("problem-btn "+(s.opt===e.problemList[e.cardIndex].selAnswer?"active":"")),key:t,onClick:e=>a.onSelect(s.opt)},{default:r((()=>[m(f(s.name),1)])),_:2},1032,["class","onClick"])))),128)),o(k,{class:x(["answer-box",(null==(t=e.problemList[e.cardIndex])?void 0:t.selAnswer)?"":"transparent"])},{default:r((()=>{var s;return[m(" 正确答案："+f(null==(s=e.problemList[e.cardIndex])?void 0:s.answer),1)]})),_:1},8,["class"]),o(k,{class:"footer-btn"},{default:r((()=>[o(k,{class:x("btn "+(0===e.cardIndex?"disabled":"")),onClick:a.onPre},{default:r((()=>[m(" 上一题 ")])),_:1},8,["class","onClick"]),o(k,{class:"btn",onClick:a.onNext},{default:r((()=>[m(f(e.cardIndex+1!==e.problemList.length?"下一题":"提交答案"),1)])),_:1},8,["onClick"])])),_:1})]})),_:1})])),_:1})])),_:1})],64)}],["__scopeId","data-v-42d4d2a9"]]);export{z as default};
