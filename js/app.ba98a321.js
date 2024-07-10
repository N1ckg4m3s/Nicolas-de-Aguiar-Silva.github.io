(function(){"use strict";var a={7096:function(a,e,o){var i=o(5130),s=o(6768);function n(a,e,o,i,n,t){const r=(0,s.g2)("RouterView");return(0,s.uX)(),(0,s.Wv)(r)}var t={name:"App"},r=o(1241);const l=(0,r.A)(t,[["render",n]]);var c=l,d=o(1387),u=o(4232);const h=(0,s.Fv)('<nav class="BarraNavegacao"><img src="${process.env.BASE_URL}Imagens/LogoNicolasASilva.png" alt=""><section><a href="#ArticleSobre">Sobre mim</a><a href="#ArticleHabilidades">Habilidades</a><a href="#ArticleEscolaridade">Experiencia - Escolaridade</a><a href="#ArticleProjetos">Projetos</a><a href="#ArticleContato">Contato</a></section></nav><header class="headerPortifolio"><img class="ImagemFundo" src="${process.env.BASE_URL}Imagens/fundo.png" alt=""><img class="ImagemFoto" src="/Imagens/FotoPortifolio.png" alt=""><h5> NICOLAS SILVA <br> <span>FULL-STACK</span> DEVELOPER </h5></header>',2),p={class:"ConteudoPortifolio"},v=(0,s.Fv)('<h4>SOBRE <span>MIM</span></h4><article id="ArticleSobre" class="ArticleSobre"><div class="InfosPrincipal"><h5>NOME: <span>Nicolas</span></h5><h5>SOBRENOME: <span>Silva</span></h5><h5>IDADE: <span>21</span></h5><h5>EMAIL: <span>Nico.ag.03@hotmail.com</span></h5><h5>NUMERO: <span>(55) 11 9 9524-0558</span></h5><h5>ENDEREÇO: <span>CEP: 06363-480 Carapicuiba/SP</span></h5><h5>EXPERIENCIA: <span>1 Ano</span></h5><h5>LINGUAS: <span>Portugues / Ingles</span></h5></div><div class="InfosAdicionais"><div class="CardInfoAdicional"><h2>1</h2><div></div><h3>Ano de Experiencia</h3></div><div class="CardInfoAdicional"><h2>22</h2><div></div><h3>Projetos Concluidos</h3></div></div><div class="Descricao"> Estou atualmente cursando minha formação em desenvolvimento Full-Stack. Mesmo em meio aos estudos, estou comprometido em me tornar um profissional qualificado e eficiente. Tenho uma abordagem colaborativa e estou sempre disposto a ajudar meus colegas. Embora lidar com prazos apertados seja um desafio, estou determinado a me aprimorar nessa área. Estou ansioso por oportunidades de aprendizado e desenvolvimento, prontos para contribuir em projetos desafiadores e dinâmicos. </div></article><h4>MINHAS <span>HABILIDADES</span></h4>',3),m={id:"ArticleHabilidades",class:"ArticleHabilidades"},E={class:"ListaHabilidades"},f=["value"],g=(0,s.Fv)('<h4><span>EXPERIENCIAS</span> e <span>ESCOLARIDADE</span></h4><article id="ArticleEscolaridade" class="Esperiencia_Escolaridade"><div class="Exp_Esc"><div><img src="/Imagens/WorkIcon.svg" alt=""><div><h5 class="DataIndicator">##/## - ##/##</h5><h5>{&quot;##############&quot;}</h5><h5>{&quot;########&quot;}</h5></div></div></div><div class="Exp_Esc"><div><img src="/Imagens/EscolaridadeIcon.svg" alt=""><div><h5 class="DataIndicator">2022 - [conclusão: 12/2024]</h5><h5>DESENVOLVIMENTO FULL-STACK -- ESTACIO </h5></div></div></div></article><h4>MEUS <span>PROJETOS</span></h4>',3),P={key:0,id:"ArticleProjetos",class:"ArticleProjeto"},A=["src"],I={key:0,class:"Paginacao"},L=["disabled","onClick"],k=(0,s.Fv)('<h4><span>CONTATO</span></h4><article id="ArticleContato" class="styles.ArticleContato"><div class="Exp_Esc"><div><img src="/Imagens/Mail.svg" alt=""><div><h5>NICO.AG.03@HOTMAIL.COM</h5><h5>NICOLASSIPVA3317@GMAIL.COM</h5></div></div></div><div class="Exp_Esc"><div><img src="/Imagens/Telefone.svg" alt=""><div><h5>(55) 11 9 9524-0558</h5></div></div></div><div class="Exp_Esc"><div><img src="/Imagens/whatsapp.svg" alt=""><div><h5>(55) 11 9 9524-0558</h5></div></div></div></article>',2);function O(a,e,o,i,n,t){const r=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[h,(0,s.Lk)("section",p,[v,(0,s.Lk)("article",m,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.Habilidades,((a,e)=>((0,s.uX)(),(0,s.CE)("div",{class:"Habilidade",key:e},[(0,s.Lk)("h4",null,(0,u.v_)(e),1),(0,s.Lk)("div",E,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a,((a,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e},[(0,s.Lk)("h5",null,(0,u.v_)(e),1),(0,s.Lk)("h5",null,(0,u.v_)(100*a)+"%",1),(0,s.Lk)("progress",{class:"progress",value:a,max:1},null,8,f)])))),128))])])))),128))]),g,Object.keys(n.Projetos).length>0?((0,s.uX)(),(0,s.CE)("article",P,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.projetosPaginados(),(a=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"projeto-item"},[(0,s.Lk)("img",{src:n.Projetos[a].Imagens[0],alt:""},null,8,A),(0,s.Lk)("h5",null,(0,u.v_)(n.Projetos[a].Nome),1),(0,s.bF)(r,{to:"/DescricaoProjeto?id="+a},{default:(0,s.k6)((()=>[(0,s.eW)((0,u.v_)("Ver mais ->"))])),_:2},1032,["to"])])))),128)),n.Paginacao[1]>0?((0,s.uX)(),(0,s.CE)("div",I,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.GerarPaginacao(),((a,e)=>((0,s.uX)(),(0,s.CE)("button",{key:e,disabled:n.Paginacao[0]===a,onClick:e=>t.SetPaginacao([a,n.Paginacao[1]])},(0,u.v_)(a+1),9,L)))),128))])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0),k])],64)}o(4114);console.log("To aq iniciado e funcionando");var C={name:"TemplateComponent",data(){return{titulo:"Componente Separado 2",mensagem:"Este é um componente Vue com script separado.",Projetos:{},Paginacao:[1,0],Habilidades:{"FRONT-END":{Html:.7,Css:.6,JavaScript:.6},"BACK-END":{Node:.6,Python:.5},FRAMEWORK:{Express:.6,Angular:.5,Next:.6,React:.7},DATABASE:{Sql:.5,MongoDB:.5},VERSIONAMENTO:{Git:.5},MOBILE:{ReactNative:.5},"DESENVOLVIM...":{VsCode:.7},DESIGN:{Figma:.5},OUTROS:{TypeScript:.6}}}},methods:{projetosPaginados(){const a=9*this.Paginacao[0],e=a+9;return Object.entries(this.Projetos).slice(a,e).map((([a])=>a))},GerarPaginacao(){const a=[],[e,o]=this.Paginacao;if(o<5)for(let i=0;i<=o;i++)a.push(i);else{a.push(0);const i=e-2<1?e-1<1?e:e-1:e-2,s=e+3>o?o:e+3;i>2&&a.push(null);for(let e=i;e<=s-1;e++)0!==e&&e!==o-1&&a.push(e);s<o-2&&a.push(null),a.push(o-1)}return a},SetPaginacao(a){this.Paginacao=a},async ObterDados(){try{await fetch("/Informacoes.json",{method:"GET"}).then((a=>a.json())).then((a=>{this.Projetos=a;const e=Math.floor(Object.keys(a).length/9);this.Paginacao=[0,e]}))}catch(a){console.error("Catch",a)}}},mounted(){this.ObterDados()}};const j=(0,r.A)(C,[["render",O]]);var b=j;const S={class:"BarraNavegacao"},N=(0,s.Lk)("img",{src:"/Imagens/LogoNicolasASilva.png",alt:""},null,-1),_=(0,s.Lk)("section",null,[(0,s.Lk)("a",{href:"#ArticleSobre"},"Sobre o Projeto"),(0,s.Lk)("a",{href:"#ArticleHabilidades"},"Habilidades"),(0,s.Lk)("a",{href:"#ArticleImagens"},"Imagens")],-1),D={class:"ConteudoPortifolio"},y=(0,s.Lk)("h4",null,[(0,s.eW)("SOBRE O "),(0,s.Lk)("span",null,"PROJETO")],-1),F={id:"ArticleSobre",class:"ArticleSobre_detalhe"},T={class:"InfosPrincipal"},R={class:"InfosAdicionais_detalhe"},M={class:"CardInfoAdicional"},X=(0,s.Lk)("div",null,null,-1),H=(0,s.Lk)("h3",null,"Tempo de Projeto",-1),x={class:"Descricao"},B=(0,s.Lk)("h4",null,[(0,s.eW)("MINHAS "),(0,s.Lk)("span",null,"HABILIDADES")],-1),G={key:0,id:"ArticleHabilidades",class:"ArticleHabilidades_detalhe"},K={class:"ListaHabilidades"},V=(0,s.Lk)("h4",null,[(0,s.Lk)("span",null,"IMAGENS")],-1),W={key:1,id:"ArticleImagens",class:"ArticleImagens_detalhe"},w=["src"];function q(a,e,o,i,n,t){const r=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("nav",S,[(0,s.bF)(r,{to:"/"},{default:(0,s.k6)((()=>[N])),_:1}),_]),(0,s.Lk)("section",D,[y,(0,s.Lk)("article",F,[(0,s.Lk)("div",T,[(0,s.Lk)("h5",null,[(0,s.eW)("NOME: "),(0,s.Lk)("span",null,(0,u.v_)(n.Projeto?n.Projeto.Nome:""),1)]),(0,s.Lk)("h5",null,[(0,s.eW)("CODIGO FONTE: "),(0,s.bF)(r,{to:n.Projeto&&n.Projeto.Codigo_Fonte||""},{default:(0,s.k6)((()=>[(0,s.eW)("CODIGO NO GIT")])),_:1},8,["to"])]),(0,s.Lk)("h5",null,[(0,s.eW)("RESPONSIVO: "),(0,s.Lk)("span",null,(0,u.v_)(n.Projeto?n.Projeto.Responsivo:""),1)]),(0,s.Lk)("h5",null,[(0,s.eW)("TIPO: "),(0,s.Lk)("span",null,(0,u.v_)(n.Projeto?n.Projeto.Tipo:""),1)]),(0,s.Lk)("h5",null,[(0,s.eW)("COLABORADORES: "),(0,s.Lk)("span",null,(0,u.v_)(n.Projeto?n.Projeto.Colaborador:""),1)])]),(0,s.Lk)("div",R,[(0,s.Lk)("div",M,[(0,s.Lk)("h2",null,[(0,s.eW)((0,u.v_)(n.Projeto?n.Projeto.Duracao[0]:""),1),(0,s.Lk)("span",null,(0,u.v_)(n.Projeto?n.Projeto.Duracao[1]:""),1)]),X,H])]),(0,s.Lk)("div",x,(0,u.v_)(n.Projeto?n.Projeto.Descricao:"Projeto não encontrado, verifique se houve alterações na pesquisa"),1)]),B,n.Projeto?((0,s.uX)(),(0,s.CE)("article",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.Projeto.Habilidades,((a,e)=>((0,s.uX)(),(0,s.CE)("div",{class:"Habilidade_detalhe",key:e},[(0,s.Lk)("h4",null,(0,u.v_)(e),1),(0,s.Lk)("div",K,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a,(a=>((0,s.uX)(),(0,s.CE)("div",{key:a},[(0,s.Lk)("h5",null,(0,u.v_)(a),1)])))),128))])])))),128))])):(0,s.Q3)("",!0),V,n.Projeto?((0,s.uX)(),(0,s.CE)("article",W,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.Projeto.Imagens,((a,e)=>((0,s.uX)(),(0,s.CE)("img",{src:a,key:e},null,8,w)))),128))])):(0,s.Q3)("",!0)])],64)}var U={name:"TemplateComponent",data(){return{Projeto:null}},methods:{async ObterDados(){try{await fetch("/Informacoes.json",{method:"GET"}).then((a=>a.json())).then((a=>{this.Projeto=a[this.id]}))}catch(a){console.error("Catch",a)}}},mounted(){this.ObterDados()},props:{id:{type:String,required:!0}}};const Q=(0,r.A)(U,[["render",q]]);var J=Q;const z=[{path:"/",name:"Portifolio",component:b},{path:"/DescricaoProjeto",name:"DescricaoProjeto",component:J,props:a=>({id:a.query.id})}],$=(0,d.aE)({history:(0,d.LA)("/Nicolas-de-Aguiar-Silva.github.io/"),routes:z});var Y=$;(0,i.Ef)(c).use(Y).mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return a[i].call(n.exports,n,n.exports,o),n.exports}o.m=a,function(){var a=[];o.O=function(e,i,s,n){if(!i){var t=1/0;for(d=0;d<a.length;d++){i=a[d][0],s=a[d][1],n=a[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||t>=n)&&Object.keys(o.O).every((function(a){return o.O[a](i[l])}))?i.splice(l--,1):(r=!1,n<t&&(t=n));if(r){a.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[i,s,n]}}(),function(){o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,{a:e}),e}}(),function(){o.d=function(a,e){for(var i in e)o.o(e,i)&&!o.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={524:0};o.O.j=function(e){return 0===a[e]};var e=function(e,i){var s,n,t=i[0],r=i[1],l=i[2],c=0;if(t.some((function(e){return 0!==a[e]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var d=l(o)}for(e&&e(i);c<t.length;c++)n=t[c],o.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return o.O(d)},i=self["webpackChunkportifolio_nicolas_vue"]=self["webpackChunkportifolio_nicolas_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(7096)}));i=o.O(i)})();
//# sourceMappingURL=app.9c5bb0d1.js.map