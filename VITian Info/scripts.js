const _0x369f80=_0x46ac;(function(_0x5d8a0c,_0x25f333){const _0x2dca51=_0x46ac,_0x46f8cf=_0x5d8a0c();while(!![]){try{const _0x44fce6=-parseInt(_0x2dca51(0xa3))/0x1*(parseInt(_0x2dca51(0xbc))/0x2)+-parseInt(_0x2dca51(0xa0))/0x3+-parseInt(_0x2dca51(0xbf))/0x4*(-parseInt(_0x2dca51(0x9a))/0x5)+-parseInt(_0x2dca51(0xbb))/0x6+-parseInt(_0x2dca51(0xa7))/0x7+-parseInt(_0x2dca51(0xa5))/0x8*(-parseInt(_0x2dca51(0xab))/0x9)+parseInt(_0x2dca51(0xa4))/0xa;if(_0x44fce6===_0x25f333)break;else _0x46f8cf['push'](_0x46f8cf['shift']());}catch(_0x216189){_0x46f8cf['push'](_0x46f8cf['shift']());}}}(_0x28f8,0x54dd7));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,onAuthStateChanged,signOut}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,collection,onSnapshot}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';import*as _0x1d9c03 from'https://cdn.sheetjs.com/xlsx-0.19.3/package/xlsx.mjs';function _0x28f8(){const _0x333431=['25ioUYlj','vitgis-ba14f.firebaseapp.com','timestamp','email','en-US','AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','958371CRgkCR','regNumber','href','86XoKckQ','13181380VkwvCK','3352zXIgNV','name','478674cgTmee','raybanpranav.mahesh2023@vitstudent.ac.in','N/A','then','6237NZVeaz','vitgis-ba14f.appspot.com','759209581914','includes','json_to_sheet','../Login\x20Page/index.html','querySelector','toDate','sahildinesh.zambre2023@vitstudent.ac.in','data','click','error','getElementById','\x0a\x20\x20\x20\x20\x20\x20<td>','book_append_sheet','VITians','4133406hIHxKV','10826DjhuKW','Unauthorized\x20access!\x20Redirecting\x20to\x20login...','</td>\x0a\x20\x20\x20\x20\x20\x20<td>','225088qynTmq','phone','value','download-btn','You\x20have\x20been\x20logged\x20out.','toLowerCase','short','numeric','appendChild','forEach','Please\x20log\x20in\x20to\x20access\x20this\x20page.','VITians\x20Data','#data-table\x20tbody','message','rohit.lalbahadur2023@vitstudent.ac.in','2-digit','ajitesh.sharma2023@vitstudent.ac.in','innerHTML','book_new','Logout\x20failed:','createElement','location','utils','input','addEventListener'];_0x28f8=function(){return _0x333431;};return _0x28f8();}function _0x46ac(_0x52980c,_0x38d828){const _0x28f8ac=_0x28f8();return _0x46ac=function(_0x46ac6d,_0xe5e0d8){_0x46ac6d=_0x46ac6d-0x8b;let _0x454ccb=_0x28f8ac[_0x46ac6d];return _0x454ccb;},_0x46ac(_0x52980c,_0x38d828);}const firebaseConfig={'apiKey':_0x369f80(0x9f),'authDomain':_0x369f80(0x9b),'projectId':'vitgis-ba14f','storageBucket':_0x369f80(0xac),'messagingSenderId':_0x369f80(0xad),'appId':'1:759209581914:web:3432c0511eba57eca66763'},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app),allowedEmails=[_0x369f80(0xb3),_0x369f80(0x91),_0x369f80(0xa8),_0x369f80(0x8f)];function checkAuthorization(){onAuthStateChanged(auth,_0x12470e=>{const _0x24180e=_0x46ac;if(_0x12470e){const _0x16798d=_0x12470e['email'];!allowedEmails[_0x24180e(0xae)](_0x16798d)?(alert(_0x24180e(0xbd)),window[_0x24180e(0x96)][_0x24180e(0xa2)]=_0x24180e(0xb0)):fetchAndDisplayData();}else alert(_0x24180e(0x8b)),window[_0x24180e(0x96)][_0x24180e(0xa2)]='../Login\x20Page/index.html';});}function fetchAndDisplayData(){const _0x5befab=_0x369f80,_0x4dea39=document[_0x5befab(0xb1)](_0x5befab(0x8d)),_0x397bec=document['getElementById']('search-input');onSnapshot(collection(db,_0x5befab(0xba)),_0x2d033d=>{const _0x9a07b1=_0x5befab,_0x31c253=[];_0x2d033d[_0x9a07b1(0xc8)](_0x1409c1=>_0x31c253['push'](_0x1409c1[_0x9a07b1(0xb4)]())),renderTable(_0x31c253),_0x397bec['addEventListener'](_0x9a07b1(0x98),()=>{const _0x293199=_0x9a07b1,_0x5af433=_0x397bec[_0x293199(0xc1)][_0x293199(0xc4)](),_0x43e4b1=_0x31c253['filter'](_0x1b7e2b=>_0x1b7e2b['regNumber'][_0x293199(0xc4)]()[_0x293199(0xae)](_0x5af433));renderTable(_0x43e4b1);}),document[_0x9a07b1(0xb7)](_0x9a07b1(0xc2))[_0x9a07b1(0x99)](_0x9a07b1(0xb5),()=>downloadExcel(_0x31c253));},_0x4021e1=>{console['error']('Error\x20fetching\x20real-time\x20data:\x20',_0x4021e1);});}function renderTable(_0x1955d8){const _0x5e1c82=_0x369f80,_0x2e96b0=document[_0x5e1c82(0xb1)](_0x5e1c82(0x8d));_0x2e96b0[_0x5e1c82(0x92)]='',_0x1955d8[_0x5e1c82(0xc8)](_0x424eaf=>{const _0x41944d=_0x5e1c82,_0x11b647=_0x424eaf['timestamp']?formatTimestamp(_0x424eaf[_0x41944d(0x9c)]):'N/A',_0x29483=document[_0x41944d(0x95)]('tr');_0x29483['innerHTML']=_0x41944d(0xb8)+(_0x424eaf[_0x41944d(0xa1)]||'N/A')+'</td>\x0a\x20\x20\x20\x20\x20\x20<td>'+(_0x424eaf[_0x41944d(0xa6)]||_0x41944d(0xa9))+'</td>\x0a\x20\x20\x20\x20\x20\x20<td>'+(_0x424eaf[_0x41944d(0x9d)]||_0x41944d(0xa9))+_0x41944d(0xbe)+(_0x424eaf['phone']||_0x41944d(0xa9))+_0x41944d(0xbe)+_0x11b647+'</td>\x0a\x20\x20\x20\x20',_0x2e96b0[_0x41944d(0xc7)](_0x29483);});}function formatTimestamp(_0x439788){const _0x524cd6=_0x369f80,_0x520dbd=_0x439788['toDate']?_0x439788[_0x524cd6(0xb2)]():new Date(_0x439788),_0x24315e={'year':_0x524cd6(0xc6),'month':_0x524cd6(0xc5),'day':_0x524cd6(0xc6),'hour':_0x524cd6(0x90),'minute':_0x524cd6(0x90),'second':_0x524cd6(0x90)};return _0x520dbd['toLocaleString'](_0x524cd6(0x9e),_0x24315e);}function downloadExcel(_0x27e91c){const _0x2614f3=_0x369f80,_0x4173a9=_0x27e91c['map'](_0x8af75c=>({'Reg.\x20Number':_0x8af75c[_0x2614f3(0xa1)]||'N/A','Name':_0x8af75c['name']||_0x2614f3(0xa9),'Email':_0x8af75c['email']||_0x2614f3(0xa9),'Phone':_0x8af75c[_0x2614f3(0xc0)]||'N/A','Reg.\x20Date\x20&\x20Time':_0x8af75c[_0x2614f3(0x9c)]?formatTimestamp(_0x8af75c[_0x2614f3(0x9c)]):_0x2614f3(0xa9)})),_0x422d40=_0x1d9c03['utils'][_0x2614f3(0xaf)](_0x4173a9),_0x45ada2=_0x1d9c03[_0x2614f3(0x97)][_0x2614f3(0x93)]();_0x1d9c03['utils'][_0x2614f3(0xb9)](_0x45ada2,_0x422d40,_0x2614f3(0x8c)),_0x1d9c03['writeFile'](_0x45ada2,'VITians_Data.xlsx');}function handleLogout(){const _0x35fdf0=_0x369f80;signOut(auth)[_0x35fdf0(0xaa)](()=>{const _0xce72ee=_0x35fdf0;alert(_0xce72ee(0xc3)),window[_0xce72ee(0x96)][_0xce72ee(0xa2)]=_0xce72ee(0xb0);})['catch'](_0x19fc30=>{const _0x3299a1=_0x35fdf0;console[_0x3299a1(0xb6)](_0x3299a1(0x94),_0x19fc30[_0x3299a1(0x8e)]);});}document[_0x369f80(0xb7)]('logout-btn')?.[_0x369f80(0x99)](_0x369f80(0xb5),handleLogout),document['addEventListener']('DOMContentLoaded',checkAuthorization);
