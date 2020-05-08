import a from 'axios';export function randomImageUrl(u){return a.get(`${u}${Math.random()>0.98?'x200':''}`).then(r=>r.request.responseURL);}
