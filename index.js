module.exports=(f,m,c,...p)=>{let d=0;let w=(f,p)=>{f.apply(0,p);++d==c?clearInterval(h):0};let h=setInterval((f,p)=>w(f,p),m,f,p);return h;}
