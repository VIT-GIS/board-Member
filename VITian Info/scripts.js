const _0x160e65=_0x1ff7;(function(_0x259eac,_0x3f1bc4){const _0x5e5ed3=_0x1ff7,_0x496855=_0x259eac();while(!![]){try{const _0x46e5a4=-parseInt(_0x5e5ed3(0x16e))/0x1+-parseInt(_0x5e5ed3(0x16a))/0x2*(-parseInt(_0x5e5ed3(0x18d))/0x3)+-parseInt(_0x5e5ed3(0x168))/0x4+-parseInt(_0x5e5ed3(0x18f))/0x5*(parseInt(_0x5e5ed3(0x16c))/0x6)+-parseInt(_0x5e5ed3(0x173))/0x7*(-parseInt(_0x5e5ed3(0x17c))/0x8)+parseInt(_0x5e5ed3(0x178))/0x9+parseInt(_0x5e5ed3(0x179))/0xa;if(_0x46e5a4===_0x3f1bc4)break;else _0x496855['push'](_0x496855['shift']());}catch(_0x41cc37){_0x496855['push'](_0x496855['shift']());}}}(_0x195e,0x8dbbc));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,onAuthStateChanged,signOut}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,collection,onSnapshot}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';const firebaseConfig={'apiKey':'AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','authDomain':'vitgis-ba14f.firebaseapp.com','projectId':'vitgis-ba14f','storageBucket':_0x160e65(0x18e),'messagingSenderId':_0x160e65(0x181),'appId':_0x160e65(0x174)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app),allowedEmails=['sahildinesh.zambre2023@vitstudent.ac.in','ajitesh.sharma2023@vitstudent.ac.in',_0x160e65(0x177),'rohit.lalbahadur2023@vitstudent.ac.in'];function checkAuthorization(){onAuthStateChanged(auth,_0x3a3a7e=>{const _0xce0395=_0x1ff7;if(_0x3a3a7e){const _0x13703d=_0x3a3a7e[_0xce0395(0x180)];!allowedEmails['includes'](_0x13703d)?(alert(_0xce0395(0x190)),window[_0xce0395(0x192)][_0xce0395(0x188)]=_0xce0395(0x183)):fetchAndDisplayData();}else alert(_0xce0395(0x16f)),window[_0xce0395(0x192)]['href']=_0xce0395(0x183);});}function fetchAndDisplayData(){const _0x1e3e88=_0x160e65,_0x15a7df=document[_0x1e3e88(0x171)]('#data-table\x20tbody'),_0x4524dc=document[_0x1e3e88(0x17e)](_0x1e3e88(0x189));onSnapshot(collection(db,'VITians'),_0x2e8129=>{const _0x1260c9=_0x1e3e88,_0x57790b=[];_0x2e8129['forEach'](_0x325ce0=>_0x57790b[_0x1260c9(0x169)](_0x325ce0[_0x1260c9(0x175)]())),renderTable(_0x57790b),_0x4524dc[_0x1260c9(0x16b)](_0x1260c9(0x18b),()=>{const _0x7f8a4a=_0x1260c9,_0x1c09cb=_0x4524dc[_0x7f8a4a(0x176)][_0x7f8a4a(0x172)](),_0x41cdc6=_0x57790b[_0x7f8a4a(0x185)](_0x3e5153=>_0x3e5153[_0x7f8a4a(0x16d)][_0x7f8a4a(0x172)]()['includes'](_0x1c09cb));renderTable(_0x41cdc6);});},_0x44947f=>{const _0x4e8f49=_0x1e3e88;console[_0x4e8f49(0x186)]('Error\x20fetching\x20real-time\x20data:\x20',_0x44947f);});}function renderTable(_0xd37eb3){const _0x40ef23=_0x160e65,_0x4d44dc=document[_0x40ef23(0x171)](_0x40ef23(0x18a));_0x4d44dc[_0x40ef23(0x184)]='',_0xd37eb3[_0x40ef23(0x17f)](_0x3c35b0=>{const _0x5381c2=_0x40ef23,_0x1e57c7=document['createElement']('tr');_0x1e57c7[_0x5381c2(0x184)]=_0x5381c2(0x182)+_0x3c35b0[_0x5381c2(0x187)]+_0x5381c2(0x18c)+_0x3c35b0[_0x5381c2(0x16d)]+_0x5381c2(0x191)+_0x3c35b0[_0x5381c2(0x17d)]+'</td>\x0a\x20\x20\x20\x20\x20\x20<td>'+_0x3c35b0[_0x5381c2(0x180)]+_0x5381c2(0x191)+_0x3c35b0[_0x5381c2(0x17a)]+_0x5381c2(0x170),_0x4d44dc[_0x5381c2(0x17b)](_0x1e57c7);});}function _0x195e(){const _0x2b1867=['querySelector','toLowerCase','237251XWUwwM','1:759209581914:web:3432c0511eba57eca66763','data','value','raybanpranav.mahesh2023@vitstudent.ac.in','2820834XqTvWG','7448260sWLQqm','phone','appendChild','152NGbGPR','name','getElementById','forEach','email','759209581914','\x0a\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22','https://board.geospatialvit.site/','innerHTML','filter','error','profilePic','href','search-input','#data-table\x20tbody','input','\x22\x20alt=\x22Profile\x20Picture\x22></td>\x0a\x20\x20\x20\x20\x20\x20<td>','36lIaqaX','vitgis-ba14f.appspot.com','45SMLyzo','Unauthorized\x20access!\x20Redirecting\x20to\x20login...','</td>\x0a\x20\x20\x20\x20\x20\x20<td>','location','589772USDvuC','push','182254jbzpCy','addEventListener','685140xXkPtG','regNum','1040050MgeJwS','Please\x20log\x20in\x20to\x20access\x20this\x20page.','</td>\x0a\x20\x20\x20\x20'];_0x195e=function(){return _0x2b1867;};return _0x195e();}function _0x1ff7(_0x3081d1,_0x14929c){const _0x195e4c=_0x195e();return _0x1ff7=function(_0x1ff769,_0x18721b){_0x1ff769=_0x1ff769-0x168;let _0x45d445=_0x195e4c[_0x1ff769];return _0x45d445;},_0x1ff7(_0x3081d1,_0x14929c);}document[_0x160e65(0x16b)]('DOMContentLoaded',checkAuthorization);