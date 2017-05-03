function f_tcalParseDate(t){var e=/^\s*(\d{1,2})\.(\d{1,2})\.(\d{2,4})\s*$/;if(!e.exec(t))return alert("Invalid date: '"+t+"'.\nAccepted format is mm/dd/yyyy.");var i=Number(RegExp.$1),a=Number(RegExp.$2),s=Number(RegExp.$3);if(s<100&&(s+=s<this.a_tpl.centyear?2e3:1900),a<1||a>12)return alert("Invalid month value: '"+a+"'.\nAllowed range is 01-12.");var n=new Date(s,a,0);return i>n.getDate()?alert("Invalid day of month value: '"+i+"'.\nAllowed range for selected month is 01 - "+n.getDate()+"."):new Date(s,a-1,i)}function f_tcalGenerDate(t){return(t.getDate()<10?"0":"")+t.getDate()+"."+(t.getMonth()<9?"0":"")+(t.getMonth()+1)+"."+t.getFullYear()}function tcal(t,e){if(e||(e=t.lang&&"ru"==t.lang?RU_TCALDEF:A_TCALDEF),window.A_TCALS||(window.A_TCALS=[]),window.A_TCALSIDX||(window.A_TCALSIDX=[]),this.s_id=t.id?t.id:A_TCALS.length,window.A_TCALS[this.s_id]=this,window.A_TCALSIDX[window.A_TCALSIDX.length]=this,this.f_show=f_tcalShow,this.f_hide=f_tcalHide,this.f_toggle=f_tcalToggle,this.f_update=f_tcalUpdate,this.f_relDate=f_tcalRelDate,this.f_parseDate=f_tcalParseDate,this.f_generDate=f_tcalGenerDate,this.s_iconId="tcalico_"+this.s_id,this.e_icon=f_getElement(this.s_iconId),!this.e_icon){var i=document.createElement("div");i.innerHTML='<img src="'+e.imgpath+'cal.gif" id="'+this.s_iconId+'" onclick="A_TCALS[\''+this.s_id+'\'].f_toggle()" class="tcalIcon" alt="'+e.open+'" />',t.place.appendChild(i.firstChild),this.e_icon=f_getElement(this.s_iconId)}this.a_cfg=t,this.a_tpl=e}function f_tcalShow(t){if(!this.a_cfg.controlname)throw"TC: control name is not specified";if(this.a_cfg.formname){var e=document.forms[this.a_cfg.formname];if(!e)throw"TC: form '"+this.a_cfg.formname+"' can not be found";this.e_input=e.elements[this.a_cfg.controlname],this.a_cfg.intervalupdatecont&&this.a_cfg.intervalpair&&2==this.a_cfg.intervalpair.length&&(this.intervalpair=[e.elements[this.a_cfg.intervalpair[0]],e.elements[this.a_cfg.intervalpair[1]]],this.intervalupdatecont=e.elements[this.a_cfg.intervalupdatecont])}else this.e_input=f_getElement(this.a_cfg.controlname),this.a_cfg.intervalpair&&2==this.a_cfg.intervalpair.length&&(this.intervalpair=[f_getElement(this.a_cfg.intervalpair[0]),f_getElement(this.a_cfg.intervalpair[1])]),this.intervalupdatecont=f_getElement(this.a_cfg.intervalupdatecont);if(!this.e_input||!this.e_input.tagName||"INPUT"!=this.e_input.tagName)throw"TC: element '"+this.a_cfg.controlname+"' does not exist in "+(this.a_cfg.formname?"form '"+this.a_cfg.controlname+"'":"this document");this.e_div=f_getElement("tcal"),this.e_div||(this.e_div=document.createElement("DIV"),this.e_div.id="tcal",document.body.appendChild(this.e_div)),this.e_iframe=f_getElement("tcalIF"),b_ieFix&&!this.e_iframe&&(this.e_iframe=document.createElement("IFRAME"),this.e_iframe.style.filter="alpha(opacity=0)",this.e_iframe.id="tcalIF",this.e_iframe.src=this.a_tpl.imgpath+"pixel.gif",document.body.appendChild(this.e_iframe)),f_tcalHideAll(),this.e_icon=f_getElement(this.s_iconId),this.e_div.style.display="block",this.e_iframe&&(this.e_iframe.style.display="block"),this.f_update()&&(this.e_div.style.visibility="visible",this.e_div.style.display="block",this.e_iframe&&(this.e_iframe.style.visibility="visible",this.e_iframe.style.display="block"),this.e_icon.src=this.a_tpl.imgpath+"no_cal.gif",this.e_icon.title=this.a_tpl.close,this.b_visible=!0)}function f_tcalHide(t){t&&(this.e_input.value=this.f_generDate(new Date(t)),this.intervalpair&&this.intervalupdatecont&&""!=this.intervalpair[0].value&&""!=this.intervalpair[1].value?this.intervalupdatecont.value=this.intervalpair[0].value+" -- "+this.intervalpair[1].value:this.intervalupdatecont&&(this.intervalupdatecont.value="")),this.b_visible&&(this.e_iframe&&(this.e_iframe.style.visibility="hidden",this.e_iframe.style.display="none"),this.e_div.style.visibility="hidden",this.e_div.style.display="none",this.e_icon=f_getElement(this.s_iconId),this.e_icon.src=this.a_tpl.imgpath+"cal.gif",this.e_icon.title=window._s3Lang.JS_OPEN_CALENDAR,this.b_visible=!1)}function f_tcalToggle(){return this.b_visible?this.f_hide():this.f_show()}function f_tcalUpdate(t){var e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0);var i=this.a_cfg.today?this.f_parseDate(this.a_cfg.today):e,a=""==this.e_input.value?this.a_cfg.selected?this.f_parseDate(this.a_cfg.selected):i:this.f_parseDate(this.e_input.value);if(t?"number"==typeof t?t=new Date(t):"string"==typeof t&&this.f_parseDate(t):t=a,!t)return!1;var s=new Date(t);s.setDate(1),s.setDate(1-(7+s.getDay()-this.a_tpl.weekstart)%7);for(var n,l='<table class="ctrl"><tbody><tr>'+(this.a_tpl.yearscroll?"<td"+this.f_relDate(t,-1,"y")+' title="Previous Year"><img src="'+this.a_tpl.imgpath+'prev_year.gif" /></td>':"")+"<td"+this.f_relDate(t,-1)+' title="Previous Month"><img src="'+this.a_tpl.imgpath+'prev_mon.gif" /></td><th>'+this.a_tpl.months[t.getMonth()]+" "+t.getFullYear()+"</th><td"+this.f_relDate(t,1)+' title="Next Month"><img src="'+this.a_tpl.imgpath+'next_mon.gif" /></td>'+(this.a_tpl.yearscroll?"<td"+this.f_relDate(t,1,"y")+' title="Next Year"><img src="'+this.a_tpl.imgpath+'next_year.gif" /></td></td>':"")+'</tr></tbody></table><table><tbody><tr class="wd">',r=0;r<7;r++)l+="<th>"+this.a_tpl.weekdays[(this.a_tpl.weekstart+r)%7]+"</th>";l+="</tr>";for(var _=new Date(s);_.getMonth()==t.getMonth()||_.getMonth()==s.getMonth();){l+="<tr>";for(var h=0;h<7;h++)n=[],_.getMonth()!=t.getMonth()&&(n[n.length]="othermonth"),0!=_.getDay()&&6!=_.getDay()||(n[n.length]="weekend"),_.valueOf()==i.valueOf()&&(n[n.length]="today"),_.valueOf()==a.valueOf()&&(n[n.length]="selected"),l+="<td onclick=\"A_TCALS['"+this.s_id+"'].f_hide("+_.valueOf()+')"'+(n.length?' class="'+n.join(" ")+'">':">")+_.getDate()+"</td>",_.setDate(_.getDate()+1);l+="</tr>"}l+="</tbody></table>",this.e_div.innerHTML=l;var o=this.e_div.offsetWidth,f=this.e_div.offsetHeight,c=f_getPosition(this.e_icon,"Top")+this.e_icon.offsetHeight,d=f_getPosition(this.e_icon,"Left")-o+this.e_icon.offsetWidth;return d<0&&(d=0),this.e_div.style.left=d+"px",this.e_div.style.top=c+"px",this.e_iframe&&(this.e_iframe.style.left=d+"px",this.e_iframe.style.top=c+"px",this.e_iframe.style.width=o+6+"px",this.e_iframe.style.height=f+6+"px"),!0}function f_getPosition(t,e){for(var i,a=0,s=t;s;)i=s["offset"+e],a+=i,s=s.offsetParent;for(b_ieMac?a+=parseInt(document.body[e.toLowerCase()+"Margin"]):b_safari&&(a-=i),s=t;s!=document.body;)i=s["scroll"+e],i&&"scroll"==s.style.overflow&&(a-=i),s=s.parentNode;return a}function f_tcalRelDate(t,e,i){var i="y"==i?"FullYear":"Month",a=new Date(t);return a["set"+i](t["get"+i]()+e),a.getDate()!=t.getDate()&&a.setDate(0)," onclick=\"A_TCALS['"+this.s_id+"'].f_update("+a.valueOf()+')"'}function f_tcalHideAll(){for(var t=0;t<window.A_TCALSIDX.length;t++)window.A_TCALSIDX[t].f_hide()}var A_TCALDEF={months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],yearscroll:!0,weekstart:0,centyear:70,imgpath:"/my/s3/images/calendar/",close:window._s3Lang.JS_CLOSE_CALENDAR,open:window._s3Lang.JS_OPEN_CALENDAR},RU_TCALDEF={months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],weekdays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],yearscroll:!0,weekstart:1,centyear:70,imgpath:"/my/s3/images/calendar/",close:"Закрыть календарь",open:"Открыть календарь"};f_getElement=document.all?function(t){return document.all[t]}:function(t){return document.getElementById(t)};var s_userAgent=navigator.userAgent.toLowerCase(),re_webkit=/WebKit\/(\d+)/i,b_mac=s_userAgent.indexOf("mac")!=-1,b_ie5=s_userAgent.indexOf("msie 5")!=-1,b_ie6=s_userAgent.indexOf("msie 6")!=-1&&s_userAgent.indexOf("opera")==-1,b_ieFix=b_ie5||b_ie6,b_ieMac=b_mac&&b_ie5,b_safari=b_mac&&re_webkit.exec(s_userAgent)&&Number(RegExp.$1)<500;
//# sourceMappingURL=maps/calendar.packed.js.map
