const _0x8e8ad1=_0x30cd;(function(_0x4e577c,_0x20f2ea){const _0x278c9f=_0x30cd,_0x596ad5=_0x4e577c();while(!![]){try{const _0x51fcdb=parseInt(_0x278c9f(0x133))/0x1+parseInt(_0x278c9f(0x10b))/0x2*(-parseInt(_0x278c9f(0x13a))/0x3)+-parseInt(_0x278c9f(0x116))/0x4*(-parseInt(_0x278c9f(0x121))/0x5)+-parseInt(_0x278c9f(0x13e))/0x6+parseInt(_0x278c9f(0x10f))/0x7*(parseInt(_0x278c9f(0x113))/0x8)+-parseInt(_0x278c9f(0x129))/0x9+parseInt(_0x278c9f(0x12b))/0xa*(parseInt(_0x278c9f(0x13c))/0xb);if(_0x51fcdb===_0x20f2ea)break;else _0x596ad5['push'](_0x596ad5['shift']());}catch(_0x545931){_0x596ad5['push'](_0x596ad5['shift']());}}}(_0x3a2d,0x5468e));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';function _0x30cd(_0x265367,_0x3fe764){const _0x3a2d42=_0x3a2d();return _0x30cd=function(_0x30cdd2,_0x46a1cf){_0x30cdd2=_0x30cdd2-0x10b;let _0x1ac7d5=_0x3a2d42[_0x30cdd2];return _0x1ac7d5;},_0x30cd(_0x265367,_0x3fe764);}import{getFirestore,doc,getDoc,collection,onSnapshot}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';const firebaseConfig={'apiKey':_0x8e8ad1(0x127),'authDomain':_0x8e8ad1(0x122),'projectId':_0x8e8ad1(0x130),'storageBucket':_0x8e8ad1(0x10d),'messagingSenderId':_0x8e8ad1(0x135),'appId':_0x8e8ad1(0x114)},app=initializeApp(firebaseConfig),db=getFirestore(app),userTable=document[_0x8e8ad1(0x125)](_0x8e8ad1(0x117)),mapModal=document[_0x8e8ad1(0x125)](_0x8e8ad1(0x11b)),closeModal=document[_0x8e8ad1(0x125)](_0x8e8ad1(0x120));let map,markerGroup;const displayedUsers=new Set();function listenToUsers(){const _0x3e6c9a=_0x8e8ad1,_0x24aeaf=collection(db,_0x3e6c9a(0x13b));onSnapshot(_0x24aeaf,async _0x3fb813=>{const _0x3d5330=_0x3e6c9a;_0x3fb813[_0x3d5330(0x139)][_0x3d5330(0x13f)](async _0x3e9fcc=>{const _0x1daaa4=_0x3d5330,{latitude:_0x110588,longitude:_0x434e0c}=_0x3e9fcc[_0x1daaa4(0x128)](),_0x461b98=doc(db,_0x1daaa4(0x115),_0x3e9fcc['id']),_0x32bd11=await getDoc(_0x461b98),_0x580ef8=_0x32bd11[_0x1daaa4(0x112)]()?_0x32bd11[_0x1daaa4(0x128)]()[_0x1daaa4(0x10c)]:_0x1daaa4(0x119),_0x42afd6=_0x110588+','+_0x434e0c;if(!displayedUsers[_0x1daaa4(0x11a)](_0x42afd6)){const _0x4afefc=document['createElement']('tr');_0x4afefc[_0x1daaa4(0x11c)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x580ef8+_0x1daaa4(0x12e)+_0x110588+_0x1daaa4(0x12e)+_0x434e0c+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><button\x20data-lat=\x22'+_0x110588+_0x1daaa4(0x123)+_0x434e0c+'\x22\x20class=\x22view-map\x22>View\x20Map</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',userTable[_0x1daaa4(0x13d)](_0x4afefc),displayedUsers['add'](_0x42afd6);}});});}function _0x3a2d(){const _0x1729b8=['259024WUUkid','target','759209581914','setView','lat','invalidateSize','docs','87069QrennL','VITian_location','5645563TsGdXS','appendChild','1913382iNvlUL','forEach','10eYpsjm','name','vitgis-ba14f.storage.app','view-map','322AVsSYX','dataset','click','exists','64288qkwZxZ','1:759209581914:web:3432c0511eba57eca66763','VITians','187512OHViEx','userTable','layerGroup','Unknown','has','mapModal','innerHTML','clearLayers','contains','display','closeModal','20VZyOws','vitgis-ba14f.firebaseapp.com','\x22\x20data-lng=\x22','tileLayer','getElementById','none','AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','data','4677039AkJmwp','style','10QLYCRC','block','addTo','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png','vitgis-ba14f','map','addEventListener'];_0x3a2d=function(){return _0x1729b8;};return _0x3a2d();}function openMapModal(_0x1077e2,_0x371f73){const _0x29844b=_0x8e8ad1;mapModal[_0x29844b(0x12a)]['display']=_0x29844b(0x12c),!map?(map=L[_0x29844b(0x131)](_0x29844b(0x131))[_0x29844b(0x136)]([_0x1077e2,_0x371f73],0xd),L[_0x29844b(0x124)](_0x29844b(0x12f),{'attribution':'&copy;\x20OpenStreetMap\x20contributors'})['addTo'](map),markerGroup=L[_0x29844b(0x118)]()[_0x29844b(0x12d)](map)):(map[_0x29844b(0x136)]([_0x1077e2,_0x371f73],0xd),map[_0x29844b(0x138)]()),markerGroup[_0x29844b(0x11d)](),L['marker']([_0x1077e2,_0x371f73])[_0x29844b(0x12d)](markerGroup);}userTable[_0x8e8ad1(0x132)](_0x8e8ad1(0x111),_0x1072b9=>{const _0x359857=_0x8e8ad1;if(_0x1072b9[_0x359857(0x134)]['classList'][_0x359857(0x11e)](_0x359857(0x10e))){const _0x3685af=parseFloat(_0x1072b9[_0x359857(0x134)][_0x359857(0x110)][_0x359857(0x137)]),_0xc15537=parseFloat(_0x1072b9[_0x359857(0x134)][_0x359857(0x110)]['lng']);openMapModal(_0x3685af,_0xc15537);}}),closeModal[_0x8e8ad1(0x132)](_0x8e8ad1(0x111),()=>{const _0x4bd384=_0x8e8ad1;mapModal['style'][_0x4bd384(0x11f)]=_0x4bd384(0x126);}),listenToUsers();
