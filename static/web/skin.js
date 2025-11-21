// Garden Gnome Software - Skin
// Pano2VR 6.0/17213
// Filename: nct.ggsk
// Generated Thu Sep 2 16:08:49 2021

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenodeid', function() { me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggDx=-167;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 102px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCUMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTAsMzg1LjdsMCwxLjZjMCwxNi4zLTEyLjQsMzUuMi0zNS4yLDM1LjJjLTcsMC0xMy41LTIuMS0xOS01LjZjMSwwLjEsMS45LDAuMiwyLjksMC4yDQoJYzUuOCwwLDExLjEtMiwxNS40LTUuM2MtNS40LTAuMS0xMC0zLjctMTEuNi04LjZjMC43LDAuMSwxLjUsMC4yLDIuMywwLjJjMS4xLDAsMi4yLTAuMSwzLjItMC40Yy01LjctMS4xLTku'+
			'OS02LjEtOS45LTEyLjF2LTAuMg0KCWMxLjcsMC45LDMuNiwxLjUsNS42LDEuNmMtMy4zLTIuMi01LjUtNi01LjUtMTAuM2MwLTIuMywwLjYtNC40LDEuNy02LjJjNi4xLDcuNSwxNS4yLDEyLjQsMjUuNSwxMi45Yy0wLjItMC45LTAuMy0xLjktMC4zLTIuOA0KCWMwLTYuOCw1LjUtMTIuNCwxMi40LTEyLjRjMy41LDAsNi44LDEuNSw5LDMuOWMyLjgtMC41LDUuNS0xLjYsNy45LTNjLTAuOSwyLjktMi45LDUuMy01LjQsNi44YzIuNS0wLjMsNC45LTEsNy4xLTEuOQ0KCUMtMTQ1LjUsMzgxLjgtMTQ3LjYsMzg0LTE1MCwzODUuN3oiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQzLjksMz'+
			'c5LjNjLTIuMiwxLTQuNiwxLjYtNy4xLDEuOWMyLjUtMS41LDQuNS00LDUuNC02LjhjLTIuNCwxLjQtNSwyLjUtNy45LDNjLTIuMy0yLjQtNS41LTMuOS05LTMuOQ0KCWMtNi44LDAtMTIuNCw1LjUtMTIuNCwxMi40YzAsMSwwLjEsMS45LDAuMywyLjhjLTEwLjMtMC41LTE5LjQtNS41LTI1LjUtMTIuOWMtMS4xLDEuOC0xLjcsNC0xLjcsNi4yYzAsNC4zLDIuMiw4LjEsNS41LDEwLjMNCgljLTItMC4xLTMuOS0wLjYtNS42LTEuNnYwLjJjMCw2LDQuMywxMSw5LjksMTIuMWMtMSwwLjMtMi4xLDAuNC0zLjIsMC40Yy0wLjgsMC0xLjYtMC4xLTIuMy0wLjJjMS42LDQuOSw2LjEsOC41LDExLjYsOC42'+
			'DQoJYy00LjIsMy4zLTkuNiw1LjMtMTUuNCw1LjNjLTEsMC0yLTAuMS0yLjktMC4yYzUuNSwzLjUsMTIsNS42LDE5LDUuNmMyMi43LDAsMzUuMi0xOC44LDM1LjItMzUuMmwwLTEuNg0KCUMtMTQ3LjYsMzg0LTE0NS41LDM4MS44LTE0My45LDM3OS4zeiIvPg0KPC9zdmc+DQo=';
		me._button_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_twitter;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnoNCgkgTS0xNDcuNiwzODQuNWwwLDEuOGMwLDE4LTEzLjcsMzguNy0zOC43LDM4LjdjLTcuNywwLTE0LjgtMi4zLTIwLjktNi4xYzEuMSwwLjEsMi4xLDAuMiwzLjIsMC4yYzYuNCwwLDEyLjItMi4yLDE2LjktNS44DQoJYy02LTAuMS0xMS00LTEyLjctOS41YzAuOCwwLjIsMS43LDAuMiwyLjUsMC4yYzEuMiwwLDIuNC0wLjIsMy42LTAuNWMtNi4yLTEuMi0xMC45LTYuNy0xMC45'+
			'LTEzLjNWMzkwYzEuOCwxLDMuOSwxLjYsNi4yLDEuNw0KCWMtMy43LTIuNC02LjEtNi42LTYuMS0xMS4zYzAtMi41LDAuNy00LjgsMS44LTYuOGM2LjcsOC4yLDE2LjcsMTMuNiwyOCwxNC4yYy0wLjItMS0wLjMtMi4xLTAuMy0zLjFjMC03LjUsNi4xLTEzLjYsMTMuNi0xMy42DQoJYzMuOSwwLDcuNCwxLjYsOS45LDQuM2MzLjEtMC42LDYtMS43LDguNi0zLjNjLTEsMy4yLTMuMiw1LjgtNiw3LjVjMi43LTAuMyw1LjQtMS4xLDcuOC0yLjFDLTE0Mi43LDM4MC4yLTE0NSwzODIuNi0xNDcuNiwzODQuNXoiDQoJLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQwLjksMzc3LjVjLTIuNCwxLj'+
			'EtNS4xLDEuOC03LjgsMi4xYzIuOC0xLjcsNS00LjQsNi03LjVjLTIuNiwxLjYtNS41LDIuNy04LjYsMy4zDQoJYy0yLjUtMi42LTYtNC4zLTkuOS00LjNjLTcuNSwwLTEzLjYsNi4xLTEzLjYsMTMuNmMwLDEuMSwwLjEsMi4xLDAuMywzLjFjLTExLjMtMC42LTIxLjMtNi0yOC0xNC4yYy0xLjIsMi0xLjgsNC40LTEuOCw2LjgNCgljMCw0LjcsMi40LDguOSw2LjEsMTEuM2MtMi4yLTAuMS00LjMtMC43LTYuMi0xLjd2MC4yYzAsNi42LDQuNywxMi4xLDEwLjksMTMuM2MtMS4yLDAuMy0yLjMsMC41LTMuNiwwLjVjLTAuOSwwLTEuNy0wLjEtMi41LTAuMg0KCWMxLjcsNS40LDYuNyw5LjMsMTIuNyw5'+
			'LjVjLTQuNywzLjYtMTAuNSw1LjgtMTYuOSw1LjhjLTEuMSwwLTIuMi0wLjEtMy4yLTAuMmM2LDMuOSwxMy4yLDYuMSwyMC45LDYuMWMyNSwwLDM4LjctMjAuNywzOC43LTM4LjcNCglsMC0xLjhDLTE0NSwzODIuNi0xNDIuNywzODAuMi0xNDAuOSwzNzcuNXoiLz4NCjwvc3ZnPg0K';
		me._button_twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_twitter;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
		}
		me._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCUMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTguMywzNzcuNmgtMTBjLTEuMiwwLTIuNSwxLjYtMi41LDMuOHY2LjRoMTIuNXYxMi41aC0xMi41djMwLjFoLTEyLjV2LTMwLjFoLTEwdi0xMi41aDEwDQoJdi02LjNjMC05LDYuNy0xNi4zLDE1LTE2LjNoMTBWMzc3LjZ6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2OC4zLDM3Ny42aDEwdi0xMi40aC0xMGMtOC4zLDAtMTUs'+
			'Ny4zLTE1LDE2LjN2Ni4zaC0xMHYxMi41aDEwdjMwLjFoMTIuNXYtMzAuMWgxMi41di0xMi41aC0xMi41di02LjQNCglDLTE3MC44LDM3OS4yLTE2OS41LDM3Ny42LTE2OC4zLDM3Ny42eiIvPg0KPC9zdmc+DQo=';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_facebook;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnogTS0xNTYuNSwzNzUuNg0KCWgtMTFjLTEuMywwLTIuOCwxLjgtMi44LDQuMXY3aDEzLjh2MTMuN2gtMTMuOHYzMy4yaC0xMy44di0zMy4yaC0xMXYtMTMuN2gxMXYtNi45YzAtOS45LDcuNC0xNy45LDE2LjUtMTcuOWgxMVYzNzUuNnoiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY3LjUsMzc1LjZoMTF2LTEzLjZoLTExYy05LjEsMC0xNi41LDgtMTYuNSwxNy45djYu'+
			'OWgtMTF2MTMuN2gxMXYzMy4yaDEzLjh2LTMzLjJoMTMuOHYtMTMuN2gtMTMuOHYtNw0KCUMtMTcwLjMsMzc3LjMtMTY4LjgsMzc1LjYtMTY3LjUsMzc1LjZ6Ii8+DQo8L3N2Zz4NCg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_facebook;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_facebook);
		el=me._button_g=document.createElement('div');
		els=me._button_g__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg'+
			'0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCQlDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTcyLjgsMzgzLjFjMCw1LjMtMyw3LjgtNiwxMC4yYy0wLjksMC45LTIsMS45LTIsMy41czEuMSwyLjQsMS45LDMuMWwyLjYsMg0KCQljMy4yLDIuNiw2LDUuMSw2LDEwYzAsNi43LTYuNSwxMy42LTE4LjksMTMuNmMtMTAuNCwwLTE1LjQtNS0xNS40LTEwLjNjMC0yLjYsMS4zLTYuMyw1LjUtOC43YzQuNS0yLjcsMTAuNS0zLjEs'+
			'MTMuNy0zLjMNCgkJYy0xLTEuMy0yLjEtMi43LTIuMS00LjljMC0xLjIsMC40LTEuOSwwLjctMi44Yy0wLjgsMC4xLTEuNiwwLjEtMi4zLDAuMWMtNy42LDAtMTEuOS01LjctMTEuOS0xMS4zYzAtMy4zLDEuNS03LDQuNi05LjYNCgkJYzQuMS0zLjQsOS00LDEyLjktNGgxNC44bC00LjYsMi42bC00LjUsMEMtMTc2LjIsMzc0LjctMTcyLjgsMzc3LjYtMTcyLjgsMzgzLjF6IE0tMTQxLjQsMzg0LjFoLTEwLjlWMzk1aC0yLjd2LTEwLjloLTEwLjl2LTIuNw0KCQloMTAuOXYtMTAuOWgyLjd2MTAuOWgxMC45VjM4NC4xeiIvPg0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjIsMzczLjFjLT'+
			'EuOSwwLTMuOSwwLjktNSwyLjRjLTEuMiwxLjUtMS42LDMuNC0xLjYsNS4zYzAsNC44LDIuOCwxMi44LDksMTIuOGMxLjgsMCwzLjctMC45LDQuOS0yDQoJCWMxLjYtMS42LDEuOC00LDEuOC01LjNDLTE3OS4xLDM4MS4yLTE4Mi4yLDM3My4xLTE4OC4yLDM3My4xeiIvPg0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg0LjYsNDA1LjFjLTAuNiwwLTQuNSwwLjEtNy41LDEuMWMtMS42LDAuNi02LjIsMi4zLTYuMiw3LjRzNSw4LjcsMTIuNiw4LjdjNi45LDAsMTAuNS0zLjMsMTAuNS03LjcNCgkJYzAtMy42LTIuMy01LjYtNy44LTkuNUMtMTgzLjYsNDA1LjEtMTgzLjksNDA1LjEtMTg0LjYs'+
			'NDA1LjF6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ny45LDM3My4yYzEuNiwxLjQsNS4xLDQuMiw1LjEsOS43YzAsNS4zLTMsNy44LTYsMTAuMmMtMC45LDAuOS0yLDEuOS0yLDMuNXMxLjEsMi40LDEuOSwzLjFsMi42LDINCgkJYzMuMiwyLjYsNiw1LjEsNiwxMGMwLDYuNy02LjUsMTMuNi0xOC45LDEzLjZjLTEwLjQsMC0xNS40LTUtMTUuNC0xMC4zYzAtMi42LDEuMy02LjMsNS41LTguN2M0LjUtMi43LDEwLjUtMy4xLDEzLjctMy4zDQoJCWMtMS0xLjMtMi4xLTIuNy0yLjEtNC45YzAtMS4yLDAuNC0xLjksMC43LTIuOGMtMC44LDAuMS0xLjYsMC4xLTIuMy'+
			'wwLjFjLTcuNiwwLTExLjktNS43LTExLjktMTEuM2MwLTMuMywxLjUtNyw0LjYtOS42DQoJCWM0LjEtMy40LDktNCwxMi45LTRoMTQuOGwtNC42LDIuNkMtMTczLjQsMzczLjEtMTc3LjksMzczLjItMTc3LjksMzczLjJ6IE0tMTgzLDQwNWMtMC42LTAuMS0wLjktMC4xLTEuNi0wLjENCgkJYy0wLjYsMC00LjUsMC4xLTcuNSwxLjFjLTEuNiwwLjYtNi4yLDIuMy02LjIsNy40YzAsNS4xLDUsOC43LDEyLjYsOC43YzYuOSwwLDEwLjUtMy4zLDEwLjUtNy43Qy0xNzUuMiw0MTAuOC0xNzcuNSw0MDguOS0xODMsNDA1DQoJCSBNLTE4MC45LDM5MS40YzEuNi0xLjYsMS44LTQsMS44LTUuM2MwLTUuMi0z'+
			'LjEtMTMuMi05LTEzLjJjLTEuOSwwLTMuOSwwLjktNSwyLjRjLTEuMiwxLjUtMS42LDMuNC0xLjYsNS4zYzAsNC44LDIuOCwxMi44LDksMTIuOA0KCQlDLTE4NCwzOTMuNC0xODIsMzkyLjUtMTgwLjksMzkxLjQiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MS40LDM4MS4yaC0xMC45di0xMC45aC0yLjd2MTAuOWgtMTAuOXYyLjdoMTAuOXYxMC45aDIuN3YtMTAuOWgxMC45VjM4MS4yeiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._button_g__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_g;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_g__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg'+
			'0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnoNCgkJIE0tMTcyLjgsMzgxLjZjMCw1LjgtMy4zLDguNi02LjYsMTEuMmMtMSwxLTIuMiwyLjEtMi4yLDMuOXMxLjIsMi43LDIuMSwzLjRsMi44LDIuMmMzLjUsMi45LDYuNiw1LjYsNi42LDExDQoJCWMwLDcuNC03LjIsMTQuOS0yMC44LDE0LjljLTExLjUsMC0xNy01LjUtMTctMTEuM2MwLTIuOCwxLjQtNi45LDYuMS05LjZjNC45LTMsMTEuNS0zLjQsMTUuMS0zLjZj'+
			'LTEuMS0xLjQtMi40LTIuOS0yLjQtNS40DQoJCWMwLTEuNCwwLjQtMi4xLDAuOC0zLjFjLTAuOSwwLjEtMS43LDAuMi0yLjUsMC4yYy04LjQsMC0xMy4xLTYuMi0xMy4xLTEyLjRjMC0zLjYsMS42LTcuNiw1LjEtMTAuNmM0LjUtMy43LDkuOS00LjQsMTQuMS00LjRoMTYuMw0KCQlsLTUsMi44bC00LjksMEMtMTc2LjYsMzcyLjQtMTcyLjgsMzc1LjYtMTcyLjgsMzgxLjZ6IE0tMTM4LjIsMzgyLjdoLTEydjEyaC0zdi0xMmgtMTJ2LTNoMTJ2LTEyaDN2MTJoMTJWMzgyLjd6Ii8+DQoJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xODUuOCw0MDUuOWMtMC43LDAtNSwwLjItOC4zLDEuM2MtMS43LD'+
			'AuNi02LjgsMi41LTYuOCw4LjFjMCw1LjYsNS41LDkuNiwxMy45LDkuNg0KCQljNy42LDAsMTEuNi0zLjYsMTEuNi04LjVjMC00LTIuNi02LjItOC42LTEwLjRDLTE4NC42LDQwNS45LTE4NSw0MDUuOS0xODUuOCw0MDUuOXoiLz4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS43LDM3MC43Yy0yLjEsMC00LjMsMS01LjUsMi42Yy0xLjMsMS43LTEuNywzLjgtMS43LDUuOGMwLDUuMywzLjEsMTQsOS45LDE0YzIsMCw0LjEtMC45LDUuNC0yLjINCgkJYzEuOC0xLjgsMi00LjQsMi01LjhDLTE3OS43LDM3OS41LTE4My4xLDM3MC43LTE4OS43LDM3MC43eiIvPg0KPC9nPg0KPGc+DQoJPHBh'+
			'dGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNCwzNzEuMWMxLjgsMS41LDUuNiw0LjYsNS42LDEwLjdjMCw1LjgtMy4zLDguNi02LjYsMTEuMmMtMSwxLTIuMiwyLjEtMi4yLDMuOXMxLjIsMi43LDIuMSwzLjQNCgkJbDIuOCwyLjJjMy41LDIuOSw2LjYsNS42LDYuNiwxMWMwLDcuNC03LjIsMTQuOS0yMC44LDE0LjljLTExLjUsMC0xNy01LjUtMTctMTEuM2MwLTIuOCwxLjQtNi45LDYuMS05LjZjNC45LTMsMTEuNS0zLjQsMTUuMS0zLjYNCgkJYy0xLjEtMS40LTIuNC0yLjktMi40LTUuNGMwLTEuNCwwLjQtMi4xLDAuOC0zLjFjLTAuOSwwLjEtMS43LDAuMi0yLjUsMC4yYy04LjQsMC0xMy4xLT'+
			'YuMi0xMy4xLTEyLjRjMC0zLjYsMS42LTcuNiw1LjEtMTAuNg0KCQljNC41LTMuNyw5LjktNC40LDE0LjEtNC40aDE2LjNsLTUsMi44Qy0xNzMuNSwzNzEtMTc4LjQsMzcxLjEtMTc4LjQsMzcxLjF6IE0tMTg0LDQwNi4xYy0wLjYtMC4xLTEtMC4xLTEuOC0wLjENCgkJYy0wLjcsMC01LDAuMi04LjMsMS4zYy0xLjcsMC42LTYuOCwyLjUtNi44LDguMWMwLDUuNiw1LjUsOS42LDEzLjksOS42YzcuNiwwLDExLjYtMy42LDExLjYtOC41Qy0xNzUuNCw0MTIuNS0xNzgsNDEwLjMtMTg0LDQwNi4xDQoJCSBNLTE4MS43LDM5MS4xYzEuOC0xLjgsMi00LjQsMi01LjhjMC01LjctMy40LTE0LjUtOS45LTE0'+
			'LjVjLTIuMSwwLTQuMywxLTUuNSwyLjZjLTEuMywxLjctMS43LDMuOC0xLjcsNS44YzAsNS4zLDMuMSwxNCw5LjksMTQNCgkJQy0xODUuMSwzOTMuMy0xODIuOSwzOTIuNC0xODEuNywzOTEuMSIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM4LjIsMzc5LjloLTEydi0xMmgtM3YxMmgtMTJ2M2gxMnYxMmgzdi0xMmgxMlYzNzkuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_g__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_g;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_G+";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_g.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_g.onclick=function (e) {
			window.open('https://plusone.google.com/_/+1/confirm?url=' + location.href);
		}
		me._button_g.onmouseover=function (e) {
			me._button_g__img.style.visibility='hidden';
			me._button_g__imgo.style.visibility='inherit';
		}
		me._button_g.onmouseout=function (e) {
			me._button_g__img.style.visibility='inherit';
			me._button_g__imgo.style.visibility='hidden';
		}
		me._button_g.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_g);
		me.divSkin.appendChild(me._buttons_social);
		el=me._button_mute0=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=-167;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._unmute0=document.createElement('div');
		els=me._unmute0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYNCgkJYzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0xNzIuMyw0MjIuOS0xNzIuMyw0MjIuOXogTS0x'+
			'NTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMA0KCQlsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNCwwLTIuMmMyLjItMi43LDMuMi02LDMuMi05LjJoMGMwLTMuMy0xLjEtNi41LTMuMi05LjJjLTAuNi0wLjctMC42LTEuNiwwLTIuMmwxLjctMS43DQoJCWMwLjYtMC42LDEuNi0wLjYsMi4yLDBDLTE1Ni42LDM4Ny43LTE1NSwzOTIuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDANCgkJbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMT'+
			'IuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNw0KCQljMC42LTAuNiwxLjUtMC42LDIuMSwwQy0xNDMuOSwzODAuNS0xNDAuOSwzODguNy0xNDAuOSwzOTdMLTE0MC45LDM5N3oiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC42LDM2OS45bC0yNS4zLDE3LjZoLTE0LjRjLTAuOCwwLTEuNSwwLjctMS41LDEuNXYxNS44YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40bDI1LjMsMTcuNg0KCQljMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTUxLjhDLTE3Mi4zLDM2OS42'+
			'LTE3My4zLDM2OS0xNzQuNiwzNjkuOXoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuOSwzNzRjLTAuNi0wLjYtMS42LTAuNi0yLjEsMGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS42LDAsMi4yYzQuOSw1LjQsNy4zLDEyLjMsNy4zLDE5LjJoMA0KCQkJYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNSwwLjYsMi4xLDBjNS45LTYuNSw4LjktMTQuOCw4LjktMjNoMA0KCQkJQy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMT'+
			'YyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMg0KCQkJYy0wLjYsMC43LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC00LjctMS42LTkuMy00LjgtMTMuMQ0KCQkJQy0xNjAuNCwzODMuNC0xNjEuNCwzODMuNC0xNjIsMzg0eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._unmute0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;unmute0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4xLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43DQoJCWgxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcyLDQyNS44LTE3Miw0MjUuOHogTS0xNTIuNywz'+
			'OTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMA0KCQlsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0zLjYtMS4yLTcuMy0zLjYtMTAuM2MtMC43LTAuOC0wLjctMS43LDAtMi40bDEuOC0xLjgNCgkJYzAuNi0wLjYsMS44LTAuNiwyLjQsMEMtMTU0LjUsMzg2LjYtMTUyLjcsMzkxLjgtMTUyLjcsMzk3TC0xNTIuNywzOTd6IE0tMTM3LjEsMzk3YzAsOS4yLTMuMywxOC40LTkuOSwyNS42DQoJCWMtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LT'+
			'YsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMw0KCQljLTAuNy0wLjctMC43LTEuNywwLTIuNGwxLjgtMS44YzAuNy0wLjcsMS43LTAuNywyLjQsMEMtMTQwLjUsMzc4LjYtMTM3LjEsMzg3LjgtMTM3LjEsMzk3TC0xMzcuMSwzOTd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNg0KCQljMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUt'+
			'MTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ3LjEsMzcxLjRjLTAuNy0wLjYtMS43LTAuNi0yLjQsMGwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS43LDAsMi40YzUuNCw2LDguMiwxMy43LDguMiwyMS4zaDANCgkJCWMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC43LDAuNywxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMA0KCQkJQy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD'+
			'0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zDQoJCQljLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNiwwLjYsMS44LDAuNiwyLjQsMGMzLjYtNC4yLDUuMy05LjMsNS4zLTE0LjVoMGMwLTUuMi0xLjgtMTAuNC01LjMtMTQuNQ0KCQkJQy0xNTguNywzODEuOS0xNTkuOSwzODEuOS0xNjAuNSwzODIuNXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._unmute0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;unmute0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute0.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute0.style[domTransition]='none';
			me._unmute0.style.visibility='hidden';
			me._unmute0.ggVisible=false;
			me._mute0.style[domTransition]='none';
			me._mute0.style.visibility=(Number(me._mute0.style.opacity)>0||!me._mute0.style.opacity)?'inherit':'hidden';
			me._mute0.ggVisible=true;
		}
		me._unmute0.onmouseover=function (e) {
			me._unmute0__img.style.visibility='hidden';
			me._unmute0__imgo.style.visibility='inherit';
		}
		me._unmute0.onmouseout=function (e) {
			me._unmute0__img.style.visibility='inherit';
			me._unmute0__imgo.style.visibility='hidden';
		}
		me._unmute0.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute0.appendChild(me._unmute0);
		el=me._mute0=document.createElement('div');
		els=me._mute0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQNCgkJQy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4y'+
			'bC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5Nw0KCQljMCw0LjctMS42LDkuMy00LjgsMTMuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0yLjMtMC41LTQuNS0xLjYtNi42DQoJCWw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43DQoJCWMtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS'+
			'0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcNCgkJTC0xNDAuOSwzOTd6IE0tMTQwLjEsMzY2bC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2DQoJCWMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MC4x'+
			'LDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yDQoJCQlsMS43LDEuN2MwLjMsMC4zLDAuNywwLjQsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsNjYtNjZDLTEzOS41LDM2NS40LTEzOS41LDM2NC40LTE0MC4xLDM2My44eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC42LDQyNC4xYzEuMywwLjksMi4zLDAuMywyLjMtMS4ydi0yMi4ybC0xNC43LDE0LjdMLTE3NC42LDQyNC4xeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC41LDQxMC'+
			'4ybDIyLjItMjIuMnYtMTYuOWMwLTEuNS0xLTIuMS0yLjMtMS4ybC0yNS4zLDE3LjZoLTE0LjRjLTAuOCwwLTEuNSwwLjctMS41LDEuNXYxNS44DQoJCQljMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42LDYuNmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcNCgkJCWMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoi'+
			'Lz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNw0KCQkJYzAuNiwwLjYsMS41LDAuNiwyLjEsMGM1LjktNi41LDguOS0xNC44LDguOS0yM2gwYzAtNy4zLTIuMy0xNC42LTctMjAuN0wtMTUxLjcsMzgwLjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._mute0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;mute0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjINCgkJaC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wt'+
			'MTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5Nw0KCQljMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMGwtMS44LTEuOGMtMC43LTAuNy0wLjctMS42LDAtMi40YzIuNC0zLDMuNi02LjYsMy42LTEwLjNoMGMwLTIuNS0wLjYtNS0xLjctNy40DQoJCWw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOA0KCQljLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4Lj'+
			'ItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6DQoJCSBNLTEzNi4yLDM2Mi42bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjMNCgkJYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPHBh'+
			'dGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQNCgkJCWwxLjgsMS44YzAuMywwLjMsMC44LDAuNSwxLjIsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw3My4zLTczLjNDLTEzNS42LDM2MS45LTEzNS42LDM2MC44LTEzNi4yLDM2MC4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC41LDQyNy4xYzEuNCwxLDIuNiwwLjQsMi42LTEuM3YtMjQuNmwtMTYuMywxNi4zTC0xNzQuNSw0MjcuMXoiLz4NCgkJPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xOTYuNiw0MTEuN0wtMTcyLDM4N3YtMTguOGMwLTEuNy0xLjItMi4zLTIuNi0xLjNsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42DQoJCQljMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuNSwzODkuNmMxLjIsMi4zLDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44DQoJCQljMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4x'+
			'LTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjgNCgkJCWMwLjcsMC43LDEuNywwLjcsMi40LDBjNi42LTcuMiw5LjktMTYuNCw5LjktMjUuNmgwYzAtOC4xLTIuNi0xNi4yLTcuNy0yM0wtMTQ5LjEsMzc4LjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._mute0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;mute0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute0.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute0.style[domTransition]='none';
			me._mute0.style.visibility='hidden';
			me._mute0.ggVisible=false;
			me._unmute0.style[domTransition]='none';
			me._unmute0.style.visibility=(Number(me._unmute0.style.opacity)>0||!me._unmute0.style.opacity)?'inherit':'hidden';
			me._unmute0.ggVisible=true;
		}
		me._mute0.onmouseover=function (e) {
			me._mute0__img.style.visibility='hidden';
			me._mute0__imgo.style.visibility='inherit';
		}
		me._mute0.onmouseout=function (e) {
			me._mute0__img.style.visibility='inherit';
			me._mute0__imgo.style.visibility='hidden';
		}
		me._mute0.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute0.appendChild(me._mute0);
		me.divSkin.appendChild(me._button_mute0);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yNS4zLTE3LjZoLTE0LjRjLTAuOCwwLTEuNS0wLjctMS41LTEuNXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjYNCgkJYzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0xNzIuMyw0MjIuOS0xNzIuMyw0MjIuOXogTS0x'+
			'NTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMA0KCQlsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNCwwLTIuMmMyLjItMi43LDMuMi02LDMuMi05LjJoMGMwLTMuMy0xLjEtNi41LTMuMi05LjJjLTAuNi0wLjctMC42LTEuNiwwLTIuMmwxLjctMS43DQoJCWMwLjYtMC42LDEuNi0wLjYsMi4yLDBDLTE1Ni42LDM4Ny43LTE1NSwzOTIuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDANCgkJbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMT'+
			'IuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNw0KCQljMC42LTAuNiwxLjUtMC42LDIuMSwwQy0xNDMuOSwzODAuNS0xNDAuOSwzODguNy0xNDAuOSwzOTdMLTE0MC45LDM5N3oiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC42LDM2OS45bC0yNS4zLDE3LjZoLTE0LjRjLTAuOCwwLTEuNSwwLjctMS41LDEuNXYxNS44YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNC40bDI1LjMsMTcuNg0KCQljMS4zLDAuOSwyLjMsMC4zLDIuMy0xLjJ2LTUxLjhDLTE3Mi4zLDM2OS42'+
			'LTE3My4zLDM2OS0xNzQuNiwzNjkuOXoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuOSwzNzRjLTAuNi0wLjYtMS42LTAuNi0yLjEsMGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS42LDAsMi4yYzQuOSw1LjQsNy4zLDEyLjMsNy4zLDE5LjJoMA0KCQkJYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNSwwLjYsMi4xLDBjNS45LTYuNSw4LjktMTQuOCw4LjktMjNoMA0KCQkJQy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMT'+
			'YyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMg0KCQkJYy0wLjYsMC43LTAuNiwxLjYsMCwyLjJsMS43LDEuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC00LjctMS42LTkuMy00LjgtMTMuMQ0KCQkJQy0xNjAuNCwzODMuNC0xNjEuNCwzODMuNC0xNjIsMzg0eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;unmute;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzIsNDI1LjhjMCwxLjctMS4xLDIuMy0yLjYsMS4zbC0yOC4xLTE5LjZoLTE2Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE3LjZjMC0wLjksMC44LTEuNywxLjctMS43DQoJCWgxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcyLDQyNS44LTE3Miw0MjUuOHogTS0xNTIuNywz'+
			'OTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMA0KCQlsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0zLjYtMS4yLTcuMy0zLjYtMTAuM2MtMC43LTAuOC0wLjctMS43LDAtMi40bDEuOC0xLjgNCgkJYzAuNi0wLjYsMS44LTAuNiwyLjQsMEMtMTU0LjUsMzg2LjYtMTUyLjcsMzkxLjgtMTUyLjcsMzk3TC0xNTIuNywzOTd6IE0tMTM3LjEsMzk3YzAsOS4yLTMuMywxOC40LTkuOSwyNS42DQoJCWMtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LT'+
			'YsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMw0KCQljLTAuNy0wLjctMC43LTEuNywwLTIuNGwxLjgtMS44YzAuNy0wLjcsMS43LTAuNywyLjQsMEMtMTQwLjUsMzc4LjYtMTM3LjEsMzg3LjgtMTM3LjEsMzk3TC0xMzcuMSwzOTd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNg0KCQljMS40LDEsMi42LDAuNCwyLjYtMS4zdi01Ny41Qy0xNzIsMzY2LjUt'+
			'MTczLjEsMzY1LjktMTc0LjUsMzY2Ljl6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ3LjEsMzcxLjRjLTAuNy0wLjYtMS43LTAuNi0yLjQsMGwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS43LDAsMi40YzUuNCw2LDguMiwxMy43LDguMiwyMS4zaDANCgkJCWMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC43LDAuNywxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMA0KCQkJQy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD'+
			'0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zDQoJCQljLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNiwwLjYsMS44LDAuNiwyLjQsMGMzLjYtNC4yLDUuMy05LjMsNS4zLTE0LjVoMGMwLTUuMi0xLjgtMTAuNC01LjMtMTQuNQ0KCQkJQy0xNTguNywzODEuOS0xNTkuOSwzODEuOS0xNjAuNSwzODIuNXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;unmute;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0yMTUuOCw0MDQuOXYtMTUuOGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTQuNGwyNS4zLTE3LjZjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjJWMzg4bC0yMi4yLDIyLjJsLTUuNC0zLjdoLTE0LjQNCgkJQy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4y'+
			'bC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5Nw0KCQljMCw0LjctMS42LDkuMy00LjgsMTMuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwbC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0yLjMtMC41LTQuNS0xLjYtNi42DQoJCWw0LTRDLTE1NiwzODkuNi0xNTUsMzkzLjMtMTU1LDM5N0wtMTU1LDM5N3ogTS0xNDAuOSwzOTdjMCw4LjMtMywxNi41LTguOSwyM2MtMC42LDAuNi0xLjYsMC42LTIuMSwwbC0xLjctMS43DQoJCWMtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS'+
			'0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcNCgkJTC0xNDAuOSwzOTd6IE0tMTQwLjEsMzY2bC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2DQoJCWMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuN0MtMTM5LjUsMzY0LjQtMTM5LjUsMzY1LjQtMTQwLjEsMzY2eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MC4x'+
			'LDM2My44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4yDQoJCQlsMS43LDEuN2MwLjMsMC4zLDAuNywwLjQsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsNjYtNjZDLTEzOS41LDM2NS40LTEzOS41LDM2NC40LTE0MC4xLDM2My44eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC42LDQyNC4xYzEuMywwLjksMi4zLDAuMywyLjMtMS4ydi0yMi4ybC0xNC43LDE0LjdMLTE3NC42LDQyNC4xeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC41LDQxMC'+
			'4ybDIyLjItMjIuMnYtMTYuOWMwLTEuNS0xLTIuMS0yLjMtMS4ybC0yNS4zLDE3LjZoLTE0LjRjLTAuOCwwLTEuNSwwLjctMS41LDEuNXYxNS44DQoJCQljMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42LDYuNmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcNCgkJCWMwLjYsMC42LDEuNiwwLjYsMi4yLDBjMy4yLTMuNyw0LjgtOC40LDQuOC0xMy4xaDBjMC0zLjctMS03LjQtMy0xMC42TC0xNjEuOSwzOTAuNHoi'+
			'Lz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNywzODAuMmMzLjYsNSw1LjQsMTAuOSw1LjQsMTYuOGgwYzAsNi45LTIuNCwxMy44LTcuMywxOS4yYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNw0KCQkJYzAuNiwwLjYsMS41LDAuNiwyLjEsMGM1LjktNi41LDguOS0xNC44LDguOS0yM2gwYzAtNy4zLTIuMy0xNC42LTctMjAuN0wtMTUxLjcsMzgwLjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;mute;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0yMjAuMyw0MDUuOHYtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjdoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM1YzODdsLTI0LjcsMjQuN2wtNi00LjINCgkJaC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wt'+
			'MTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5Nw0KCQljMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMGwtMS44LTEuOGMtMC43LTAuNy0wLjctMS42LDAtMi40YzIuNC0zLDMuNi02LjYsMy42LTEwLjNoMGMwLTIuNS0wLjYtNS0xLjctNy40DQoJCWw0LjQtNC40Qy0xNTMuOSwzODguOC0xNTIuNywzOTIuOS0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjZjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOA0KCQljLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4Lj'+
			'ItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6DQoJCSBNLTEzNi4yLDM2Mi42bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjMNCgkJYzAuMy0wLjMsMC44LTAuNSwxLjItMC41YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44Qy0xMzUuNiwzNjAuOC0xMzUuNiwzNjEuOS0xMzYuMiwzNjIuNnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPHBh'+
			'dGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuMiwzNjAuMmwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNWwtNzMuMyw3My4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjQNCgkJCWwxLjgsMS44YzAuMywwLjMsMC44LDAuNSwxLjIsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw3My4zLTczLjNDLTEzNS42LDM2MS45LTEzNS42LDM2MC44LTEzNi4yLDM2MC4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NC41LDQyNy4xYzEuNCwxLDIuNiwwLjQsMi42LTEuM3YtMjQuNmwtMTYuMywxNi4zTC0xNzQuNSw0MjcuMXoiLz4NCgkJPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xOTYuNiw0MTEuN0wtMTcyLDM4N3YtMTguOGMwLTEuNy0xLjItMi4zLTIuNi0xLjNsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42DQoJCQljMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuNSwzODkuNmMxLjIsMi4zLDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44DQoJCQljMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNC4x'+
			'LTEuMS04LjItMy4zLTExLjhMLTE2MC41LDM4OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS4xLDM3OC4zYzQsNS42LDYsMTIuMSw2LDE4LjdoMGMwLDcuNi0yLjcsMTUuMy04LjIsMjEuM2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjgNCgkJCWMwLjcsMC43LDEuNywwLjcsMi40LDBjNi42LTcuMiw5LjktMTYuNCw5LjktMjUuNmgwYzAtOC4xLTIuNi0xNi4yLTcuNy0yM0wtMTQ5LjEsMzc4LjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;mute;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node0_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt0 && hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_changenodeid = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt0 && hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_visited0 && hotspotTemplates['ht_node'][i]._hs_visited0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower0 && hotspotTemplates['ht_node'][i]._chevron_white_lower0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black0 && hotspotTemplates['ht_node'][i]._chevron_black0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white0 && hotspotTemplates['ht_node'][i]._chevron_white0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited0 && hotspotTemplates['ht_node'][i]._hs_visited0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenodeid = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1 = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node0=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 225px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node0.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node0']=true;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node0']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.ontouchend=function (e) {
			me.elementMouseOver['ht_node0']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
		}
		me._ht_node0.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower0=document.createElement('div');
		els=me._chevron_white_lower0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white_lower0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=1;
				}
				else {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_white_lower0);
		el=me._chevron_black0=document.createElement('div');
		els=me._chevron_black0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_black0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=1;
				}
				else {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=0.4;
				}
			}
		}
		me._chevron_black0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_black0);
		el=me._chevron_white0=document.createElement('div');
		els=me._chevron_white0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=1;
				}
				else {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_white0);
		el=me._hs_preview_image0=document.createElement('div');
		els=me._hs_preview_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image0;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hs_preview_image0.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image0.style.visibility=me._hs_preview_image0.ggVisible?'inherit':'hidden';
					me._hs_preview_image0.style.opacity=1;
				}
				else {
					me._hs_preview_image0.style.visibility="hidden";
					me._hs_preview_image0.style.opacity=0;
				}
			}
		}
		me._hs_preview_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt0=document.createElement('div');
		els=me._hs_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt0.style[domTransition]='';
				if (me._hs_tt0.ggCurrentLogicStateVisible == 0) {
					me._hs_tt0.style.visibility="hidden";
					me._hs_tt0.ggVisible=false;
				}
				else {
					me._hs_tt0.style.visibility=(Number(me._hs_tt0.style.opacity)>0||!me._hs_tt0.style.opacity)?'inherit':'hidden';
					me._hs_tt0.ggVisible=true;
				}
			}
		}
		me._hs_tt0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image0.appendChild(me._hs_tt0);
		el=me._hs_visited0=document.createElement('div');
		els=me._hs_visited0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._hs_visited0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_visited0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._hs_visited0.ggIsActive() == true) || 
				(player.nodeVisited(me._hs_visited0.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited0.style[domTransition]='';
				if (me._hs_visited0.ggCurrentLogicStateVisible == 0) {
					me._hs_visited0.style.visibility=(Number(me._hs_visited0.style.opacity)>0||!me._hs_visited0.style.opacity)?'inherit':'hidden';
					me._hs_visited0.ggVisible=true;
				}
				else {
					me._hs_visited0.style.visibility="hidden";
					me._hs_visited0.ggVisible=false;
				}
			}
		}
		me._hs_visited0.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_visited0);
		me._ht_node0.appendChild(me._hs_preview_image0);
		el=me.__code0=document.createElement('div');
		els=me.__code0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node0.appendChild(me.__code0);
		el=me._tt_ht_3d0=document.createElement('div');
		els=me._tt_ht_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node0'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d0.style[domTransition]='';
				if (me._tt_ht_3d0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d0.style.visibility=(Number(me._tt_ht_3d0.style.opacity)>0||!me._tt_ht_3d0.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d0.ggVisible=true;
				}
				else {
					me._tt_ht_3d0.style.visibility="hidden";
					me._tt_ht_3d0.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node0.appendChild(me._tt_ht_3d0);
		me.__div = me._ht_node0;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -96px;';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview_1') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					me._hs_preview_image.style.visibility="hidden";
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._hs_visited.ggIsActive() == true) || 
				(player.nodeVisited(me._hs_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview_1') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1();;
		} else
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node0_sizechanged();me.callChildLogicBlocksHotspot_ht_node_sizechanged(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_node0_changenodeid();me.callChildLogicBlocksHotspot_ht_node_changenodeid(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node0_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node0_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_node0_active();me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node0_varchanged_opt_3d_preview(); });
	player.addListener('varchanged_opt_3d_preview_1', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};