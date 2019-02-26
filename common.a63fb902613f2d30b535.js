(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CFpf:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r("tct4"),o=r("sE5F"),i=r("Vx+w"),s=r("E2f4"),a=r("CcnG"),c=function(){function t(t,e,r){this.storageService=t,this.afs=e,this.http=r,this.itemTypes=["Supplies","Equipment","Services","Medications"],this.headers=new o.d({"Content-Type":"application/json",Authorization:"JWT "+localStorage.getItem("token")}),this.organization=this.afs.firestore.collection("organization").doc("3"),this.suppliesCollection=this.organization.collection("supplies"),this.equipmentCollection=this.organization.collection("equipment"),this.servicesCollection=this.organization.collection("services"),this.itemsCollection=this.organization.collection("items")}return t.prototype.getItem=function(t){var e=this;return this.http.get(i.d.PROCUREMENT_BASEURL+"items/"+t.toString(),{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listCategories=function(t){var e=this;return console.log(t),(new URLSearchParams).set("q",t),this.http.get(i.d.PROCUREMENT_BASEURL+"stock_category?stock_type__name="+t,{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.requestItem=function(t,e){return e.item_id=t,this.organization.collection("item_requests").add(e)},t.prototype.listItemRequests=function(t){var e=this,r=this.organization.collection("item_requests");return(t.length>1?r.where("item_type","==",t).get():r.get()).then(function(t){var r=[];return t.forEach(function(t){var e=t.data();e.id=t.id,r.push(e)}),e.storageService.set("proc-item-requests",r)})},t.prototype.addItem=function(t){var e=this;return this.http.post(i.d.PROCUREMENT_BASEURL+"items/",JSON.stringify(t),{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.addStockItem=function(t){var e=this;return console.log(t),this.http.post(i.d.PROCUREMENT_BASEURL+"stock_items/",JSON.stringify(t),{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listCategoryItems=function(t){var e=this;return console.log(t),(new URLSearchParams).set("q",t.toString()),this.http.get(i.d.PROCUREMENT_BASEURL+"items?stock_category__id="+t,{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listItemsbyTypeName=function(t){var e=this,r=new URLSearchParams;return r.set("q",t.toString()),this.http.get(i.d.PROCUREMENT_BASEURL+"items?stock_type__name="+t,{params:r,headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listItemsbyCatName=function(t){var e=this,r=new URLSearchParams;return r.set("q",t.toString()),this.http.get(i.d.PROCUREMENT_BASEURL+"items?stock_category__name="+t,{params:r,headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listItemsStocks=function(t){var e=this,r=new URLSearchParams;return r.set("q",t.toString()),this.http.get(i.d.PROCUREMENT_BASEURL+"stock_items?item__id="+t,{params:r,headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listStockbyCatName=function(t){var e=this;return this.http.get(i.d.PROCUREMENT_BASEURL+"stock_items?item__stock_category__name="+t,{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.listStockbyTypeName=function(t){var e=this;return this.http.get(i.d.PROCUREMENT_BASEURL+"stock_items?item__stock_type__name="+t,{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return e.handleError(t)})},t.prototype.addCategory=function(t,e){var r=this;return console.log(e),this.http.post(i.d.PROCUREMENT_BASEURL+"stock_category/",JSON.stringify(e),{headers:this.headers}).toPromise().then(function(t){return t.json()}).catch(function(t){return r.handleError(t)})},t.prototype.getCategory=function(t,e){return this[t+"Collection"].doc(e).get().then(function(t){var e=t.data();return e.id=t.id,e})},t.prototype.updateCategory=function(t,e,r){return this[t+"Collection"].doc(e).set(r,{merge:!0})},t.prototype.handleError=function(t){throw JSON.parse(t._body)},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(s.a),a.inject(n.a),a.inject(o.e))},token:t,providedIn:"root"}),t}()}}]);