Bootstrapper.bindDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.analytics.registration=Bootstrapper.analytics.registration||{};Bootstrapper.analytics.registration.events={sendRegistrationStart:function(){_t={linkTrackVars:"events",linkTrackEvents:"event21",events:"event21",name:"Registration - Start"};trk.trackAction(_t,_t.name)},sendRegistrationSubmit:function(){_t={linkTrackVars:"events",linkTrackEvents:"event19",events:"event19",
name:"Registration - Submit"};trk.trackAction(_t,_t.name)},sendRegistrationError:function(){_t={linkTrackVars:"events",linkTrackEvents:"event20",events:"event20",name:"Registration - Errors"};trk.trackAction(_t,_t.name)},sendGARegistrationStep:function(step){if(_gaq&&_gaq.push)_gaq.push(["_trackEvent","Mobile","Registration","Step"+step])}}},875597,317069);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(document.querySelector&&document.querySelectorAll)Bootstrapper.ajaxListener.create(function(){return document.querySelector(".register-next-button")||[]},function(n){if(n!==null)Bootstrapper.unobtrusiveAddEvent(n,"onmouseup",function(){setTimeout(function(){var errors=document.querySelectorAll(".register-form-inline-error");if(errors.length>0)for(var i=0;i<
errors.length;i++)if(errors[i].id&&errors[i].className.indexOf("dn")===-1){var errorField=errors[i].id.replace("Result","");Bootstrapper.analytics.registration.trackRegistrationError(errorField)}},3E3)})})},708722,[708720],292942,[292941]);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.analytics.registration={trackRegistrationError:function(registrationError){_t={linkTrackVars:"events,eVar14,prop14",linkTrackEvents:"event14",events:"event14",eVar14:"register:"+registrationError,prop14:"register:"+registrationError,name:"Registration Error"};trk.trackAction(_t,_t.name)}}},708720,[853020],292941,[148384]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.analytics.registration=Bootstrapper.analytics.registration||{};if(document.querySelector&&document.querySelectorAll){Bootstrapper.analytics.registration.hooks={registrationStartSent:false,registrationStep1Sent:false,registrationStep2Sent:false,registrationStep3Sent:false,trackSubmit:function(){Bootstrapper.unobtrusiveAddEvent(document.querySelector("a.register-next-button"),
"onmousedown",function(){Bootstrapper.analytics.registration.events.sendRegistrationSubmit()})},init:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll(".register-step-highlighted")},function(n){if(n.textContent)if(n.textContent==="1"){if(!Bootstrapper.analytics.registration.hooks.registrationStartSent){Bootstrapper.analytics.registration.events.sendRegistrationStart();Bootstrapper.analytics.registration.hooks.registrationStartSent=true}if(!Bootstrapper.analytics.registration.hooks.registrationStep1Sent){Bootstrapper.analytics.registration.events.sendGARegistrationStep("1");
Bootstrapper.analytics.registration.hooks.registrationStep1Sent=true}}else if(n.textContent==="2"){if(!Bootstrapper.analytics.registration.hooks.registrationStep2Sent){Bootstrapper.analytics.registration.events.sendGARegistrationStep("2");Bootstrapper.analytics.registration.hooks.registrationStep2Sent=true}}else if(n.textContent==="3"){Bootstrapper.analytics.registration.hooks.trackSubmit();if(!Bootstrapper.analytics.registration.hooks.registrationStep3Sent){Bootstrapper.analytics.registration.events.sendGARegistrationStep("3");
Bootstrapper.analytics.registration.hooks.registrationStep3Sent=true}}});var errorWatcher=Bootstrapper.propertyWatcher.create(function(){try{if(document.querySelectorAll(".register-step-highlighted").length>0)return document.querySelectorAll(".register-form-inline-error").length-document.querySelectorAll(".register-form-inline-error.dn").length;else return 0}catch(err){return 0}});errorWatcher.change=function(oldValue,newValue){if(oldValue!==newValue&&newValue>0)Bootstrapper.analytics.registration.events.sendRegistrationError()}}};
Bootstrapper.analytics.registration.hooks.init()}},875593,[875597],317066,[317069]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(document.querySelectorAll){Bootstrapper.analytics.sportsBook.hooks={currentBetslipSelections:[],lastElementRemoved:false,betClicked:false,currentBetslipInformation:null,viewOpenBetsSent:false,checkDifferences:function(arr1,arr2){var differences=[];if(arr1.length>0)if(arr2.length===0)return arr1;else for(var i=0;i<arr1.length;i++){var found=false;for(var j=0;j<
arr2.length;j++)if(arr1[i]===arr2[j])found=true;if(!found)differences.push(arr1[i])}return differences},createBetslipWatcher:function(){var betslipWatcher=Bootstrapper.propertyWatcher.create(function(){return window.BetslipSelections.selections.length});betslipWatcher.change=function(oldValue,newValue){if(oldValue!==undefined&&Bootstrapper.analytics.sportsBook.hooks.betClicked){try{var savedArray=Bootstrapper.analytics.sportsBook.hooks.currentBetslipSelections;var currentArray=window.BetslipSelections.selections;
if(oldValue<newValue){var differences=Bootstrapper.analytics.sportsBook.hooks.checkDifferences(currentArray,savedArray);if(differences.length>0){for(var i=0;i<differences.length;i++)if(Bootstrapper.analytics.sportsBook.hooks.lastElementRemoved){Bootstrapper.analytics.sportsBook.keyInteractions.betSlipOpen(differences[i]);Bootstrapper.analytics.sportsBook.hooks.lastElementRemoved=false}else Bootstrapper.analytics.sportsBook.keyInteractions.addToSlip(differences[i]);Bootstrapper.analytics.sportsBook.hooks.currentBetslipSelections=
window.BetslipSelections.selections.slice()}}else if(newValue<oldValue){var differences=Bootstrapper.analytics.sportsBook.hooks.checkDifferences(savedArray,currentArray);if(differences.length>0){for(var i=0;i<differences.length;i++){Bootstrapper.analytics.sportsBook.keyInteractions.betRemoved(differences[i]);if(window.BetslipSelections.selections.length===0)Bootstrapper.analytics.sportsBook.hooks.lastElementRemoved=true}Bootstrapper.analytics.sportsBook.hooks.currentBetslipSelections=window.BetslipSelections.selections.slice()}}}catch(err){}Bootstrapper.analytics.sportsBook.hooks.betClicked=
false;Bootstrapper.analytics.sportsBook.hooks.currentBetslipInformation=null}}},createBetslipButtonListener:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll(".list-item-odds, .slip-item-remove")},function(n){Bootstrapper.unobtrusiveAddEvent(n,"onmouseup",function(){Bootstrapper.analytics.sportsBook.hooks.betClicked=true});Bootstrapper.unobtrusiveAddEvent(n,"ontouchend",function(){Bootstrapper.analytics.sportsBook.hooks.betClicked=true})})},createViewOpenBetsListener:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll(".open-bet .wrapper")},
function(n){if(!Bootstrapper.analytics.sportsBook.hooks.viewOpenBetsSent){Bootstrapper.analytics.sportsBook.keyInteractions.viewOpenBets();Bootstrapper.analytics.sportsBook.hooks.viewOpenBetsSent=true}})},createSubmitButtonListener:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll(".footer-bar .button-wrapper")},function(n){if(n.getAttribute("onclick")!==null&&n.getAttribute("onclick").indexOf("postPlace")>-1)Bootstrapper.unobtrusiveAddEvent(n,"onmouseup",function(){Bootstrapper.analytics.sportsBook.hooks.currentBetslipInformation=
Bootstrapper.analytics.sportsBook.hooks.getCurrentSelections();Bootstrapper.analytics.sportsBook.keyInteractions.betSlipSubmit(Bootstrapper.analytics.sportsBook.hooks.currentBetslipInformation)})})},getCurrentSelections:function(){var selections={singleSels:[],multSels:{},multElements:[],err:false,fromQuickBet:false};var singles=[];var multiples=[];try{var selectionElements=document.querySelectorAll('[id^\x3d"bet_free_bet_mark"]');if(selectionElements.length>0){for(var i=0;i<selectionElements.length;i++){var currentSelId=
selectionElements[i].getAttribute("id");if(currentSelId!==null){var currentSelInfo=currentSelId.replace("bet_free_bet_mark_","").split("_");if(currentSelInfo.length>1)if(currentSelInfo[0]==="SGL")singles.push(currentSelInfo[1]);else for(var j=1;j<currentSelInfo.length;j++){multiples["mult_"+currentSelInfo[j]]=true;var multipleData={};var multipleType=currentSelInfo[0];var numberContainerId=selectionElements[i].getAttribute("id").replace("bet_free_bet_mark_","#slip-odds-numberOfLines-");var numberContainerElement=
document.querySelector(numberContainerId);var valueContainerId=selectionElements[i].getAttribute("id").replace("bet_free_bet_mark_","#slip-odds-stake-");var valueContainerElement=document.querySelector(valueContainerId);if(numberContainerElement!==null&&valueContainerElement!==null&&valueContainerElement.value!==undefined&&valueContainerElement.value!==""){var numberContainerValue=numberContainerElement.innerText||numberContainerElement.textContent;selections.multSels[multipleType]={type:numberContainerValue.replace(/[^0-9/./,]/g,
""),value:valueContainerElement.value.replace(/[^0-9/./,]/g,"")};var notFound=true;if(selections.multElements.length>0)for(var k=0;k<selections.multElements.length;k++)if(selections.multElements[k]===currentSelInfo[0])notFound=false;if(notFound)selections.multElements.push(currentSelInfo[0])}}}}for(var i=0;i<singles.length;i++){var selectionId=singles[i];var multipleIncluded=multiples["mult_"+selectionId]===true;var selectionOdds="";var singleOddsId="#slip-item-odds-"+selectionId;var singleOddsElement=
document.querySelector(singleOddsId+" .odds-convert");if(singleOddsElement!==null){var singleOddsValue="";if(singleOddsElement.getAttribute("revertfractional")!==null)singleOddsValue=singleOddsElement.getAttribute("revertfractional");else if(singleOddsElement.innerText||singleOddsElement.textContent)singleOddsValue=singleOddsElement.innerText||singleOddsElement.textContent;if(singleOddsValue.split("/").length==2){var x=parseInt(singleOddsValue.split("/")[0],10);var y=parseInt(singleOddsValue.split("/")[1],
10);selectionOdds=Math.round(100*((1+x)/y))/100}}var selectionValue="";var selectionValueId="#slip-odds-stake-SGL_"+selectionId;var selectionValueElement=document.querySelector(selectionValueId);if(selectionValueElement!==null&&selectionValueElement.value!==undefined&&selectionValueElement.value!=="")selectionValue=selectionValueElement.value.replace(/[^0-9/./,]/g,"");var selectionBetType="";if(multipleIncluded&&selections.multElements.length)if(selectionValue!=="")selectionBetType="m+s";else selectionBetType=
"m-only";else selectionBetType="s-only";selections.singleSels[i]={id:selectionId,odds:selectionOdds,incudeInMultiples:multipleIncluded,value:selectionValue,type:selectionBetType}}}}catch(err){console.log("Error"+err.message)}return selections},createReceiptListener:function(){var receiptWatcher=Bootstrapper.propertyWatcher.create(function(){var visible=false;var receipt=document.getElementById("slip_receipt");if(receipt!==null)if(receipt.getAttribute("style").indexOf("display: none")===-1&&receipt.getAttribute("style").indexOf("display:none")===
-1)visible=true;return visible});receiptWatcher.change=function(oldValue,newValue){if(newValue===true)if(Bootstrapper.analytics.sportsBook.hooks.currentBetslipInformation!==null)Bootstrapper.analytics.sportsBook.keyInteractions.betSlipComplete(Bootstrapper.analytics.sportsBook.hooks.currentBetslipInformation)}},createQuickBetListener:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll("#quick-single-response-popup .aams-skin p")},function(n){try{var n=document.querySelectorAll("#quick-single-response-popup .aams-skin p");
if(n.textContent!==""){var quickBetEventName="";var quickBetEventCost="";var quickBetOdds="";if(document.querySelector("#quick-single-response-popup .receipt-content .slip-receipt-description")!==null)quickBetEventName="[QUICK BET] "+document.querySelector("#quick-single-response-popup .receipt-content .slip-receipt-description").textContent;if(document.querySelectorAll("#quick-single-response-popup .receipt-content .bets-group-header .slip-receipt-stake").length>1)quickBetEventCost=document.querySelectorAll("#quick-single-response-popup .receipt-content .bets-group-header .slip-receipt-stake")[1].textContent.replace(/[^0-9/./,]/g,
"");var oddsElement=document.querySelector("#quick-single-response-popup .receipt-content .bets-horizontal .bx p");if(oddsElement!==null&&oddsElement.textContent!=="")if(oddsElement.textContent.split("@").length>1&&oddsElement.textContent.split("@")[1].split("/").length>1){var oddsElementValue=oddsElement.textContent.split("@")[1].split("/");var x=parseInt(oddsElementValue[0],10);var y=parseInt(oddsElementValue[1],10);quickBetOdds=Math.round(100*((1+x)/y))/100}var selections={singleSels:[],multSels:{},
multElements:[],err:false,fromQuickBet:true};selections.singleSels[0]={id:quickBetEventName,odds:quickBetOdds,incudeInMultiples:false,value:quickBetEventCost,type:"s-only"};Bootstrapper.analytics.sportsBook.keyInteractions.betSlipComplete(selections)}}catch(err){}})},trackCashInMyBets:function(){Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll('.cash-in-confirm[data-cashin-show-and-hide\x3d"true"]')},function(n){Bootstrapper.analytics.sportsBook.keyInteractions.sendCashInSubmit()});
Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll('.cash-in-success[data-cashin-show-and-hide\x3d"true"]')},function(n){var cashInValueElement=n.querySelector(".cash-in-value");if(cashInValueElement!==null){var cashInValue=cashInValueElement.textContent||cashInValueElement.innerText;Bootstrapper.analytics.sportsBook.keyInteractions.sendCashInComplete(cashInValue)}})},trackMyBetsSubPages:function(){try{setTimeout(function(){var openBetsWatcher=Bootstrapper.propertyWatcher.create(function(){return document.querySelectorAll('#open_bets_tab[selectedtab\x3d"true"]').length});
openBetsWatcher.change=function(oldValue,newValue){if(newValue>oldValue){var oldPagename=trk.pageName;if(window.location.host.indexOf("williamhill.it")>0)trk.pageName="Le mie scommesse : Scommesse Aperte";else if(window.location.host.indexOf("williamhill.es")>0)trk.pageName="Mis apuestas : Apuestas abiertas";else trk.pageName="My Bets : Open Bets";trk.t();trk.pageName=oldPagename}};var settledBetsWatcher=Bootstrapper.propertyWatcher.create(function(){return document.querySelectorAll('#settled_bets_tab[selectedtab\x3d"true"]').length});
settledBetsWatcher.change=function(oldValue,newValue){if(newValue>oldValue){var oldPagename=trk.pageName;if(window.location.host.indexOf("williamhill.it")>0)trk.pageName="Le mie scommesse : Scommesse Refertate";else if(window.location.host.indexOf("williamhill.es")>0)trk.pageName="Mis apuestas : Apuestas cerradas";else trk.pageName="My Bets : Settled Bets";trk.t();trk.pageName=oldPagename}}},2E3)}catch(err){}},init:function(){try{if(window.BetslipSelections.selections.length===0)Bootstrapper.analytics.sportsBook.hooks.lastElementRemoved=
true;else Bootstrapper.analytics.sportsBook.hooks.currentBetslipSelections=window.BetslipSelections.selections.slice();Bootstrapper.analytics.sportsBook.hooks.createBetslipButtonListener();Bootstrapper.analytics.sportsBook.hooks.createBetslipWatcher();Bootstrapper.analytics.sportsBook.hooks.createViewOpenBetsListener();Bootstrapper.analytics.sportsBook.hooks.createSubmitButtonListener();Bootstrapper.analytics.sportsBook.hooks.createReceiptListener();Bootstrapper.analytics.sportsBook.hooks.trackCashInMyBets();
Bootstrapper.analytics.sportsBook.hooks.createQuickBetListener();Bootstrapper.analytics.sportsBook.hooks.trackMyBetsSubPages()}catch(err){console.log("Bootstrapper: "+err.message)}}};var pageLoadedWatcher=Bootstrapper.propertyWatcher.create(function(){if(typeof window.BetslipSelections==="object")return true;else return false});pageLoadedWatcher.change=function(oldValue,newValue){if(newValue)Bootstrapper.analytics.sportsBook.hooks.init()}}},875595,[875594],305969,[305968]);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;(function(){function s(e,t,n){var r=t=="blur"||t=="focus";e.element.addEventListener(t,n,r)}function o(e){e.preventDefault();e.stopPropagation()}function u(t){if(e)return e;if(t.matches)e=t.matches;if(t.webkitMatchesSelector)e=t.webkitMatchesSelector;if(t.mozMatchesSelector)e=t.mozMatchesSelector;if(t.msMatchesSelector)e=t.msMatchesSelector;if(t.oMatchesSelector)e=t.oMatchesSelector;
if(!e)e=p.matchesSelector;return e}function a(e,n,r){if(n=="_root")return r;if(e===r)return;if(u(e).call(e,n))return e;if(e.parentNode){t++;return a(e.parentNode,n,r)}}function f(e,t,n,i){if(!r[e.id])r[e.id]={};if(!r[e.id][t])r[e.id][t]={};if(!r[e.id][t][n])r[e.id][t][n]=[];r[e.id][t][n].push(i)}function l(e,t,n,i){if(!i&&!n){r[e.id][t]={};return}if(!i){delete r[e.id][t][n];return}for(var s=0;s<r[e.id][t][n].length;s++)if(r[e.id][t][n][s]===i){r[e.id][t][n].pop(s,1);break}}function c(e,n,s){if(!r[e][s])return;
var o=n.target||n.srcElement,u,f,l={},c=0,h=0;t=0;for(u in r[e][s])if(r[e][s].hasOwnProperty(u)){f=a(o,u,i[e].element);if(f&&p.matchesEvent(s,i[e].element,f,u=="_root",n)){t++;r[e][s][u].match=f;l[t]=r[e][s][u]}}n.stopPropagation=function(){n.cancelBubble=true};for(c=0;c<=t;c++)if(l[c])for(h=0;h<l[c].length;h++){if(l[c][h].call(l[c].match,n)===false){p.cancel(n);return}if(n.cancelBubble)return}}function h(e,t,n,i){function u(e){return function(t){c(s,t,e)}}if(!(e instanceof Array))e=[e];if(!n&&typeof t==
"function"){n=t;t="_root"}var s=this.id,o;for(o=0;o<e.length;o++){if(!r[s]||!r[s][e[o]])p.addEvent(this,e[o],u(e[o]));if(i){l(this,e[o],t,n);continue}f(this,e[o],t,n)}return this}function p(e,t){if(typeof e=="string"&&typeof t=="function"||typeof t=="string")p(document).on(arguments[0],arguments[1],arguments[2],arguments[3]||false);if(!(this instanceof p)){for(var r in i)if(i[r].element===e)return i[r];n++;i[n]=new p(e,n);i[n]._on=i[n].on;i[n].on=function(e,t,n,r){var i=typeof t=="function"?t:n,s=
typeof t=="function"?n||false:r||false;if(!s)return this._on.call(this,e,t,n);else{var o=[e];if(typeof t=="string")o.push(t);o.push(function(e){return function(t){if(!t.defaultPrevented)Bootstrapper.Delegate.load(this,s);if(typeof t.preventDefault!="undefined")t.preventDefault();else t.returnValue=false;e.call(this)}}(i));this._on.apply(this,o)}};return i[n]}this.element=e;this.id=t}var e,t=0,n=0,r={},i={};_delay=750;p.prototype.on=function(e,t,n){return h.call(this,e,t,n)};p.prototype.off=function(e,
t,n){return h.call(this,e,t,n,true)};p.matchesSelector=function(){};p.cancel=o;p.addEvent=s;p.matchesEvent=function(){return true};p.load=function(e,t){var n=typeof t=="number"?parseInt(t):750;setTimeout(function(e,t){return function(){if(e.nodeName&&"a"==e.nodeName.toLowerCase()){if(t&&/^javascript\s*\:/.test(t))return(new Function(unescape(t))).call(window);else if(e.target&&/_blank|_new/i.test(e.target))return true;if(t)window.location.href=t}}}(e,e.href||""),n)};window.Bootstrapper.Delegate=p})();
(function(e){var t=e.addEvent;e.addEvent=function(e,n,r){if(e.element.addEventListener)return t(e,n,r);if(n=="focus")n="focusin";if(n=="blur")n="focusout";e.element.attachEvent("on"+n,r)};e.simpleMatchesSelector=function(e){if(e.charAt(0)===".")return(" "+this.className+" ").indexOf(" "+e.slice(1)+" ")>-1;if(e.charAt(0)==="#")return this.id===e.slice(1);return this.tagName.toUpperCase()===e.toUpperCase()};e.matchesSelector=function(t){if(!~t.indexOf(" ")&&!~t.indexOf("\x3e"))return e.simpleMatchesSelector.call(this,
t);else{var n=this,r=t.split(" ").reverse();while(r.length){var i=r.shift();if(~i.indexOf("\x3e")){i=i.split("\x3e").reverse();while(i.length){tempSel=i.shift();if(e.simpleMatchesSelector.call(n,tempSel))n=n.parentNode;else return false}if(!r.length)return true}else while(n!=document){var s=e.simpleMatchesSelector.call(n,i);n=n.parentNode;if(s){if(!r.length)return true;break}}}return false}};e.cancel=function(e){if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation();e.returnValue=
false;e.cancelBubble=true}})(window.Bootstrapper.Delegate);Bootstrapper.on=Bootstrapper.Delegate},747916,275850);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.analytics.sportsBook.favouriteTracking=function(element,status){var str="navigation:Fav";str+=element.parentElement.children[0].innerText.replace(/\s/gi,"")+":";if(status==="false")str+="No";else str+="Yes";var _t={linkTrackVars:"events,eVar21,prop21",linkTrackEvents:"event9",events:"event9",eVar21:str,prop21:str};trk.trackAction(_t)};Bootstrapper.analytics.sportsBook.favouriteTrackingAttached=
false;Bootstrapper.ajaxListener.create(function(){return document.getElementById("favourites-menu")||[]},function(n){if(!Bootstrapper.analytics.sportsBook.favouriteTrackingAttached){Bootstrapper.on("click","div[class\x3d'favourite-icons mr15 mt8 ml10']",function(){Bootstrapper.analytics.sportsBook.favouriteTracking(this,this.getAttribute("favourite"))});Bootstrapper.on("click","div[class\x3d'favourite-icons mr15 mt8 ml10 favourite-unselected']",function(){var status="true";if(this.getAttribute("favourite")===
"true")status="false";Bootstrapper.analytics.sportsBook.favouriteTracking(this,status)});Bootstrapper.analytics.sportsBook.favouriteTrackingAttached=true}});if(document.querySelectorAll)Bootstrapper.ajaxListener.create(function(){return document.querySelectorAll(".recent-events .list-item-container")},function(n){try{if(n.getAttribute("data-trk-attached")===null){var value=n.querySelector(".list-item-single")!==null?n.querySelector(".list-item-single").textContent:"";Bootstrapper.unobtrusiveAddEvent(n,
"ontouchend",function(){var _t={linkTrackVars:"events, eVar21, prop21",linkTrackEvents:"event9",events:"event9",eVar21:"navigation:recentEvents:"+value,prop21:"navigation:recentEvents:"+value,name:"Recent Events clicked"};trk.trackAction(_t,_t.name)});n.setAttribute("data-trk-attached","true")}}catch(err){}});if(Bootstrapper.Cookies&&!Bootstrapper.Cookies.test("trk_favourites_sent"))try{var favourites="";var favList1=[];var favList2=[];var storedFavouritesList=JSON.parse(localStorage.getItem("favourites"));
for(var i=0;i<storedFavouritesList.length;i++)favList1.push(storedFavouritesList[i].name);var storedCompetitionsList=JSON.parse(localStorage.getItem("competitions"));for(var i=0;i<storedCompetitionsList.length;i++)favList2.push(storedCompetitionsList[i].name);var favListString="";if(favList1.length>0)favListString+=favList1.join("|");if(favList2.length>0){if(favList1.length>0)favListString+="|";favListString+=favList2.join("|")}if(favListString==="")favourites="favourites:none";else favourites="favourites:"+
favListString;_t={linkTrackVars:"eVar21",eVar21:favourites};trk.trackAction(_t);Bootstrapper.Cookies.set("trk_favourites_sent","true")}catch(err){}},875596,[853020,747916],275849,[148384,275850]);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.analytics.sportsBook=Bootstrapper.analytics.sportsBook||{};Bootstrapper.analytics.sportsBook.keyInteractions={verifyLimits:function(value){var currencyLimits={GBP:1E5,EUR:135E3,USD:16E4,HKD:12E5,CAD:2E5,JPY:2E7,SEK:13E5,CHF:15E4,AUD:2E5,DKK:1E6,SGD:2E5};var limit=currencyLimits["GBP"];var dl_obj=Bootstrapper.dataManager.getData();var currency="";if(typeof dl_obj.currencyCode!==
"undefined")currency=dl_obj.currencyCode;if(typeof currencyLimits[currency]==="number")limit=currencyLimits[currency];return value<=limit},betSlipOpen:function(betId){_t={linkTrackVars:"events,products",linkTrackEvents:"scOpen,ScAdd",events:"scOpen,scAdd",products:";"+betId,name:"betslip: betslip opened, bet added to slip"};trk.trackAction(_t,_t.name)},addToSlip:function(betId){_t={linkTrackVars:"events,products",linkTrackEvents:"scAdd",events:"scAdd",products:";"+betId,name:"betslip: bet added to slip"};
trk.trackAction(_t,_t.name)},betRemoved:function(betId){_t={linkTrackVars:"events,products",linkTrackEvents:"scRemove",events:"scRemove",products:";"+betId,name:"betslip: bet removed from slip"};trk.trackAction(_t,_t.name)},viewOpenBets:function(){_t={linkTrackVars:"events",linkTrackEvents:"scView",events:"scView",name:"betslip: view open bets"};trk.trackAction(_t,_t.name)},clearBetSlip:function(){_t={linkTrackVars:"events",linkTrackEvents:"event36",events:"event36",name:"betslip: betslip cleared"};
trk.trackAction(_t,_t.name)},betSlipSubmit:function(betObject){var prods=[];var error=false;try{for(var i=0;i<betObject.singleSels.length;i++){var selection=betObject.singleSels[i];var productString=["",selection["id"],"","","","eVar32\x3dsingle | "+selection["type"]];prods[i]=productString.join(";")}}catch(err){error="betslip: submit error "+err.message}_t={linkTrackVars:"events,products,eVar14,prop14",linkTrackEvents:"scCheckout",events:"scCheckout",eVar14:betObject.err?"betslip: submit error "+
betObject.err:"",prop14:betObject.err?"betslip: submit error "+betObject.err:"",products:prods.join(","),name:"betslip: submit betslip"};trk.trackAction(_t,_t.name)},betSlipComplete:function(betObject){var prods=[];var error="";var slipStatus="";var slipOrigin="Betslip";var singlesFilled=false;if(typeof betObject.fromQuickBet!=="undefined"&&betObject.fromQuickBet)slipOrigin="Quick Bet";try{var multsId=betObject.singleSels[0].id;var multsVal=0;var singles_in_mults=0;var individual_singles=0;for(var i=
0;i<betObject.multElements.length;i++){var selection=betObject.multSels[betObject.multElements[i]];var multStake=(parseInt(selection.type,10)*parseFloat(selection.value)).toFixed(2);if(isNaN(multStake))multsVal=0;else multsVal=multsVal+parseFloat(multStake);if(Bootstrapper.analytics.sportsBook.keyInteractions.verifyLimits(multStake)){var productString=["",betObject.singleSels[0].id,1,multStake,"","eVar37\x3dmultiples | "+selection.type];prods.push(productString.join(";"))}else Bootstrapper.analytics.sportsBook.keyInteractions.sendErroneousBet(selection)}for(var j=
0;j<betObject.singleSels.length;j++){var selection=betObject.singleSels[j];if(selection.type==="m+s"||selection.type==="m-only")singles_in_mults=singles_in_mults+1;if(selection.type==="s-only"||selection.type==="m+s")if(selection.value!=="")individual_singles=individual_singles+1}multsVal=singles_in_mults>0?Math.round(100*multsVal/singles_in_mults)/100:0;for(k=0;k<betObject.singleSels.length;k++){var selection=betObject.singleSels[k];if(Bootstrapper.analytics.sportsBook.keyInteractions.verifyLimits(selection.value)){var selectionOdds=
"event38\x3d"+selection.odds||0;var singlesValues=selection.value>0?"|event39\x3d"+selection.value:"";var multiplesValues=selection.type==="m+s"||selection.type==="m-only"?"|event40\x3d"+multsVal:"";var eVarsValues="eVar37\x3d"+"single | "+selection.type;var productString=["",selection.id,1,selection.value,selectionOdds+singlesValues+multiplesValues,eVarsValues];prods.push(productString.join(";"));singlesFilled=true}else Bootstrapper.analytics.sportsBook.keyInteractions.sendErroneousBet(selection)}slipStatus=
"completed slip | singles: "+individual_singles+" | multiples: "+(betObject.multElements.length||"0")}catch(err){error="betslip: error in betComplete method: "+err.message}error=betObject.err?betObject.err:error;if(prods.length>0){_t={linkTrackVars:"events,products,prop14,eVar14,eVar37,eVar33,eVar29",linkTrackEvents:"purchase"+(singlesFilled?",event38,event39":"")+(betObject.multSels.length>0?",event40":""),events:"purchase"+(singlesFilled?",event38,event39":"")+(betObject.multSels.length>0?",event40":
""),name:"betslip: bet completed",products:prods.join(","),eVar33:slipStatus,prop14:error?error:"",eVar14:error?error:"",eVar29:slipOrigin};trk.trackAction(_t,_t.name)}if(!Bootstrapper.Cookies.test("ens_event10")){_t={linkTrackVars:"events",linkTrackEvents:"event10",events:"event10",name:"betslip: sessions"};trk.trackAction(_t,_t.name);Bootstrapper.Cookies.set("ens_event10","true")}},checkSlipErrors:function(){var errorMessage=document.getElementById("alert3-two");if(errorMessage!==null&&errorMessage.getAttribute("style")!==
null&&errorMessage.getAttribute("style").indexOf("display: none")!==-1){var message=errorMessage.innerText||errorMessage.textContent;if(message!==""){_t={linkTrackVars:"events,eVar14",linkTrackEvents:"event14",events:"event14",eVar14:message,name:"betslip: errors"};trk.trackAction(_t,_t.name)}}},sendErroneousBet:function(selection){var selectionInfo="";var selectionValue=0;if(typeof selection.id==="undefined"){selectionInfo="MULTIPLE::"+selection.type+"::"+selection.value;selectionValue=(parseInt(selection.type,
10)*parseFloat(selection.value)).toFixed(2)}else{selectionInfo=selection.id+"::"+selection.type+"::"+selection.odds+"::"+selection.value;selectionValue=selection.value}_t={linkTrackVars:"events,prop27",linkTrackEvents:"event78,event79",events:"event78,event79\x3d"+selectionValue,prop27:selectionInfo,name:"betslip: selection excluded"};trk.trackAction(_t,_t.name)},sendCashInSubmit:function(){_t={linkTrackVars:"events",linkTrackEvents:"event63",events:"event63",name:"cash in my bet - submit"};trk.trackAction(_t,
_t.name)},sendCashInComplete:function(amount){_t={linkTrackVars:"events",linkTrackEvents:"event64,event65",events:"event64,event65\x3d"+amount,name:"cash in my bet - complete"};trk.trackAction(_t,_t.name)}}},875594,305968);