var zuz = {
	lang: {},
	post: function(uri, vars, success, error, tout){	
		zuz.xhr = $.ajax({ type: "POST", url: uri, data: vars, success: success, error: error, timeout: tout });	

	},
	istop: function(e){ e.preventDefault(); e.stopPropagation(); },
	addEvent: function(event, elem, callback){ $("body, document").on(event, elem, callback); },
	randit: function(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; },
	loading: function(w){
		return '<svg class="lds-whirl" width="'+w+'px"  height="'+w+'px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">    <g transform="translate(50,50)">'
		+ '<g transform="scale(0.7)"><g transform="translate(-50,-50)"><g transform="rotate(216.113 50 50)">'
		+ '<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" keySplines="0.5 0.5 0.5 0.5" calcMode="spline"></animateTransform>'
		+ '<path fill="#ff0000" d="M52.5,5c-0.8,0-1.7,0.1-2.5,0.1c9,1.2,16,10.8,16,22.4s-7,21.1-16,22.4c0.8,0.1,1.7,0.1,2.5,0.1 C64.9,50,75,39.9,75,27.5S64.9,5,52.5,5z"></path>'
		+ '<path fill="#000000" d="M83.6,19.9c-0.6-0.6-1.2-1.2-1.9-1.7c5.5,7.2,3.7,18.9-4.5,27.1s-19.9,10-27.1,4.5c0.5,0.6,1.1,1.3,1.7,1.9 c8.8,8.8,23,8.8,31.8,0S92.4,28.7,83.6,19.9z"></path>'
		+ '<path fill="#ff0000" d="M95,52.5c0-0.8-0.1-1.7-0.1-2.5c-1.2,9-10.8,16-22.4,16s-21.1-7-22.4-16c-0.1,0.8-0.1,1.7-0.1,2.5 C50,64.9,60.1,75,72.5,75S95,64.9,95,52.5z"></path>'
		+ '<path fill="#000000" d="M80.1,83.6c0.6-0.6,1.2-1.2,1.7-1.9c-7.2,5.5-18.9,3.7-27.1-4.5s-10-19.9-4.5-27.1c-0.6,0.5-1.3,1.1-1.9,1.7 c-8.8,8.8-8.8,23,0,31.8S71.3,92.4,80.1,83.6z"></path>'
		+ '<path fill="#ff0000" d="M47.5,95c0.8,0,1.7-0.1,2.5-0.1c-9-1.2-16-10.8-16-22.4s7-21.1,16-22.4c-0.8-0.1-1.7-0.1-2.5-0.1 C35.1,50,25,60.1,25,72.5S35.1,95,47.5,95z"></path>'
		+ '<path fill="#000000" d="M16.4,80.1c0.6,0.6,1.2,1.2,1.9,1.7c-5.5-7.2-3.7-18.9,4.5-27.1s19.9-10,27.1-4.5c-0.5-0.6-1.1-1.3-1.7-1.9 c-8.8-8.8-23-8.8-31.8,0S7.6,71.3,16.4,80.1z"></path>'
		+ '<path fill="#ff0000" d="M5,47.5c0,0.8,0.1,1.7,0.1,2.5c1.2-9,10.8-16,22.4-16s21.1,7,22.4,16c0.1-0.8,0.1-1.7,0.1-2.5 C50,35.1,39.9,25,27.5,25S5,35.1,5,47.5z"></path>'
		+ '<path fill="#000000" d="M19.9,16.4c-0.6,0.6-1.2,1.2-1.7,1.9c7.2-5.5,18.9-3.7,27.1,4.5s10,19.9,4.5,27.1c0.6-0.5,1.3-1.1,1.9-1.7 c8.8-8.8,8.8-23,0-31.8S28.7,7.6,19.9,16.4z"></path>'
		+ '</g></g></g></g></svg>';
	},
	loadingC: function(w,b){ return '<svg class="spinner-container" style="width:'+w+'px;height:'+w+'px;" viewBox="0 0 44 44" data-reactid=".0.1.0"><circle class="path" cx="22" cy="22" r="20" fill="none" stroke-width="'+b+'" data-reactid=".0.1.0.0"></circle></svg>'; },
	material: {
		ok: function(wh){
			return '<svg class="checkmark" style="width:'+wh+'px;height:'+wh+'px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">'
			+ '<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>'
			+ '<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>'
			+ '</svg>';
		}
	},	
	hasAttr: function(attr){
		return typeof attr !== typeof undefined && attr !== false ? true : false;
	},
	isValidUrl: function(url) {
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
	},
	isValidEmail: function(em){
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(em);
	},
	ScrollTop: function(elem){ $(elem).animate({ scrollTop: 0 }, 500); },
	setCookie: function(name, value, expiry){ $.cookie(name, value, { expires: expiry, path: '/', domain: zuz.cbase }); },
	getCookie: function(name){ return $.cookie(name); },
	uploadCrop: null,
	scrolls: function(){ if($("body.m").length == 0) $(".scrolls").mCustomScrollbar({ scrollInertia: 0 }); },
	urlencode: function(txt){ return encodeURIComponent(txt); },
	urldecode: function(txt){ return decodeURIComponent(txt); },
	tost: null,
	toast: function(msg, tout, ico){
		clearTimeout(zuz.tost)
		$(".toast .toast-msg").html(msg);
		$("div.toast").show().transition({ y: '-25px' }).transition({ y: '0px' });
		if(tout>0){ zuz.tost = setTimeout(function(){ $("div.toast").transition({ y: '100px' }).fadeOut(400); }, tout * 1000); }
	},
	sendGA: function(title, path){
		if(typeof gtag != "undefined"){
			gtag('event', 'page_view', { 'send_to': zuz.googleGA, 'page_title' : title,  'page_path': path });
			/*gtag('config', , {
			  'page_title' : title,
			  'page_path': path
			});*/
		}
	},
	fire: { user: null, lastRefreshed: null },
	playQue: { ID: -1, Que: [], playlists: [] }
};

function lang(str, arr){	
	for(n = 0; n < arr.length; n++){ str = str.replace('%'+n, arr[n], str); } return $str;
}

function GetAttr(elem, attr){
	var atr = elem.attr(attr);
	if (typeof attr !== typeof undefined && attr !== false){
		return atr;
	}else{
		return false;
	}
}

function cover(mod, content, bSize){
	if(mod==false){
		$(".sidebar, .gbox, .zuzPlayer").removeClass("blur");
		$(".cover .box, .cover .xox").transition({ scale: 0, duration: 200 }, function(){
			$(".cover").hide().html('');
		});				
		return;
	}
	$(".sidebar, .gbox, .zuzPlayer").addClass("blur");
	$(".cover").html(content).show();
	if(typeof bSize != "undefined"){
		$(".cover .box").css("width", bSize+"px");
	}
	$(".cover .box").transition({ scale: 1.1, duration: 400 }).transition({ scale: 1, duration: 400 });
	zuz.scrolls();					
}

function getBox(title, content, actionOk, actionOkLabel, actionOkMod, actionCancel, actionCancelLabel){
	var msg = '<div class="box rel">'
		+ '<div class="loadingCover abs"><div class="loc abs">'+zuz.loading(50)+'</div></div>'
		+ '<div class="head rel">'
			+ '<h2 class="size14 fontn title color999">'+title+'</h2>'
			+ '<button class="closexcover abs size24">&times;</button>'
		+ '</div>'
		+ '<div class="content rel">'+content+'</div>';
		if(actionOk==true || actionCancel==true){
			msg += '<div class="ftr rel">';
			if(actionCancel==true){
				msg += '<button class="closexcover actionBtnC anim actionBtn ibl size14 fontb">'+actionCancelLabel+'</button>';
			}
			if(actionOk==true){
				msg += '<button data-mod="'+actionOkMod+'" class="actionokxcover actionBtn anim ibl size14 fontb">'+actionOkLabel+'</button>';
			}
			msg += '</div>';
		}
	msg += '</div>';
	return msg;
}

function ShakeBox(){
	$(".cover .box")
		.transition({ left: 10, duration: 100 })
		.transition({ left: -10, duration: 100 })
		.transition({ left: 10, duration: 100 })
		.transition({ left: -10, duration: 100 })
		.transition({ left: 0 });
}

function ShakeXox(){
	$(".cover .xox")
		.transition({ top: 10, duration: 100 })
		.transition({ top: -10, duration: 100 })
		.transition({ top: 10, duration: 100 })
		.transition({ top: -10, duration: 100 })
		.transition({ top: 0 });
}

function OnGoogleLoad(){
	if(typeof gapi != 'undefined'){
		gapi.load('auth2', function(){
			auth2 = gapi.auth2.init({
				client_id: zuz.googleClient,
				cookiepolicy: 'single_host_origin', fetch_basic_profile: true, scope: 'profile',
				redirect_uri: zuz.base + 'login-with-google'
			});
			var element = document.getElementById('SenseWithGoogle');
			auth2.attachClickHandler(element, {}, function(googleUser){						
				$(".loginSP .loading").html(zuz.loading(30)).fadeIn(200);
				var gool = googleUser.getBasicProfile();							
				zuz.post(zuz.app+'loginwithgoogle', 'with=google&offline='+$(".loginFireSP").attr("data-offline")+'&token='+googleUser.getAuthResponse().id_token+'&gid='+zuz.urlencode(gool.getId())+'&em='+zuz.urlencode(gool.getEmail())+'&nm='+zuz.urlencode(gool.getName()), function(data){
					zuz.toast(data.message, 6);
					if(data.result=="ok"){ 
						window.location.href = data.uri; 
					}else{
						$(".loginSP .loading").fadeOut(200);
					}
				}, function(){ 
					$(".loginSP .loading").fadeOut(200);
					zuz.toast(zuz.lang.unable_to_process_request, 6); 
				});
			}, function(error) {  });
		});		
	}
}

function toHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
	h = Math.round(h);
	m = Math.round(m);
	s = Math.round(s);
	if(h > 0){
		return (h < 10 ? '0'+h : h)+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s);
	}else{
		return (m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s);
	}
}

function History(ptitle, uri, ntype, id, token){
	if(window.location.href!=uri){
		var obj = {type: ntype, title: ptitle, link: uri, tid: id, access: token};
		window.history.pushState(obj, ptitle, uri);
		document.title = ptitle;
		zuz.sendGA(ptitle, window.location.pathname);
	}
}

function switchPlayerBtns(){
	if(zuz.playQue.Que.length==1){
		$(".btnNext, .btnPrev").attr("disabled", "true");		
	}else{		
		if(zuz.playQue.ID==0){
			$(".btnNext").removeAttr("disabled");
			$(".btnPrev").attr("disabled", "true");			
		}else if(zuz.playQue.ID < zuz.playQue.Que.length-1){
			$(".btnNext, .btnPrev").removeAttr("disabled");
		}else if(zuz.playQue.ID==zuz.playQue.Que.length-1){
			$(".btnPrev").removeAttr("disabled");
			$(".btnNext").attr("disabled", "true");	
		}
	} 
}

function initPlayer(){
	$(".sidebar, .gbox").removeClass("isPlayBtm").addClass("isPlayBtm");
	var item = zuz.playQue.Que[zuz.playQue.ID];
	switchPlayerBtns();
	if($(".zuzPlayer").length > 0){
		$(".zuzPlayer").attr("data-id", item.ID);
		$(".zuzPlayer .playerBG").css("background", "url("+item.poster+") no-repeat center;");			
		$(".zuzPlayer .cTrack .thumb .imag").attr("src", item.poster);
		$(".zuzPlayer .cTrack .naam").html(item.title);
		$(".zuzPlayer .cTrack .album").html(item.artist);
		$(".zuzPlayer .ctrls .btns .working").fadeIn(200);
		$(".zuzPlayer .ctrls .durationTotal, .zuzPlayer .ctrls .durationCurrent").html("--:--");
		if($("body.m").length > 0){ $(".btnShowPlayer").click(); }
	}else{
		var loop = zuz.getCookie("_loop")=="1" ? "" : " disabled",
		shuffle = zuz.getCookie("_shfl")=="1" ? "" : " disabled",
		btnDownload = zuz.canDownload === true ? '<li><button class="bl anim btn bto btnDownload" title="Shkarko"><div class="ibl icon-download"></div></button></li>' : '',
		p = '<div class="zuzPlayer player fixed" data-id="'+item.ID+'">'
			+ '<div class="playerBG abs" style="background: url('+item.poster+') no-repeat center;background-size: cover;"></div>'
			+ '<div class="playerSP rel">'
				+ '<div class="hoc playlistBox abs">'
					+ '<h2 class="hd size13 fontb rel">My Playlists<button class="icon-plus anim btnNewPlayList abs"></button></h2>'
					+ '<ul class="list scrolls"></ul>'
				+ '</div>'
				+ '<div class="hoc shareBox abs">'
					+ '<h2 class="hd size13 fontb rel">'+zuz.lang.share_this_track+'</h2>'
					+ '<ul class="list ibl">'
						+ '<li><a href="javascript:;" class="ss-facebook social-share bl noul" data-network="facebook"><div class="icon-social-facebook"></div></a></li>'
						+ '<li><a href="javascript:;" class="ss-twitter social-share bl noul" data-network="twitter"><div class="icon-social-twitter"></div></a></li>'
						+ '<li><a href="javascript:;" class="ss-linkedin social-share bl noul" data-network="linkedin"><div class="icon-social-linkedin"></div></a></li>'
					+ '</ul>'
				+ '</div>'
				+ '<div class="cTrack abs">'
					+ '<div class="ibl thumb"><img src="'+item.poster+'" class="imag bl"></div>'
					+ '<div class="ibl nfo">'
						+ '<h2 class="size14 fontb naam wordwrap">'+item.title+'</h2>'
						+ '<h2 class="size12 fontn album wordwrap">'+item.artist+'</h2>'
					+ '</div>'
				+ '</div>'
				+ '<div class="ctrls rel">'
					+ '<ul class="ibl btns">'
						+ '<li class="btnShfl"><button class="bl anim btn btnShuffle"'+shuffle+'><div class="ico icon-arrow-shuffle"></div></button></li>'
						+ '<li><button class="bl anim btn bto btnPrev" disabled><div class="ico icon-skip_previous"></div></button></li>'
						+ '<li class="rel"><div class="working abs">'+zuz.loadingC(50, 2)+'</div><button class="bl anim btn bto btnPlay" disabled><div class="ico icon-play_arrow"></div></button></li>'
						+ '<li><button class="bl anim btn bto btnNext" disabled><div class="ico icon-skip_next"></div></button></li>'
						+ '<li class="btnLoop"><button class="bl anim btn btnRepeat"'+loop+'><div class="ico icon-arrow-repeat"></div></button></li>'
					+ '</ul>'
					+ '<div class="progress rel">'
						+ '<h2 class="ibl size12 dur durationCurrent">00:00</h2>'
						+ '<div class="ibl prog rel seekbar"><div class="handle abs anim"></div><div class="bar abs"></div><div class="buffer abs"></div></div>'
						+ '<h2 class="ibl size12 dur durationTotal">00:00</h2>'
					+ '</div>'
				+ '</div>'
				+ '<div class="volBox abs">'
					+ '<ul class="ibl btns">'
						+ '<li><button class="bl anim btn bto btnHidePlayer"><div class="ico icon-call_received"></div></button></li>'
						+ btnDownload
						+ '<li><button class="bl anim btn btnVolume"><div class="ico icon-volume_up"></div></button></li>'
						+ '<li><div class="volume rel"><div class="handle abs anim"></div><div class="bar abs"></div></div></li>'
					+ '</ul>'
				+ '</div>'
			+ '</div>'
		+ '</div>';
		$("body").append(p);
		if($("body.m").length > 0){
			var mH = parseInt(document.documentElement.clientHeight) + 100;
			$(".zuzPlayer").transition({y: mH, duration: 1, complete: function(){
				$(".zuzPlayer").transition({y: 0, duration: 500});
			}});			
		}else { $(".zuzPlayer").transition({y: 0});	}
	}	
	GPlayer.setTrack(zuz.app+'stream?token='+item.stream);
	History(item.title, zuz.base+'track/'+item.slug, 'track', item.slug, item);		
	$(".player .shareBox .list li a.ss-facebook").attr("href", 'https://www.facebook.com/sharer/sharer.php?u='+zuz.urlencode(zuz.base+'track/'+item.slug)+'&t='+zuz.urlencode(item.title));
	$(".player .shareBox .list li a.ss-twitter").attr("href", 'https://twitter.com/share?url='+zuz.urlencode(zuz.base+'track/'+item.slug)+'&text='+zuz.urlencode(item.title));
	$(".player .shareBox .list li a.ss-linkedin").attr("href", 'https://www.linkedin.com/shareArticle?mini=true&source='+zuz.base+'&url='+zuz.urlencode(zuz.base+'track/'+item.slug)+'&title='+zuz.urlencode(item.title));
	zuz.sendGA(item.title, '/track/'+item.slug);
}

function addToPlayQue(item, json){
	var canAdd = true, index = -1,
	itemID, itemTitle, itemSlug, itemArtist, itemPoster, itemStream, itemDuration, itemFormats;
	if(json == true){
		itemID = item.ID;
		itemTitle = item.title;
		itemSlug = item.slug;
		itemArtist = item.artist;
		itemPoster = item.poster;
		itemStream = item.stream;
		itemDuration = item.duration;
		itemFormats = item.formats;
	}else{
		itemID = item.attr("data-id");
		itemTitle = item.attr("title");
		itemSlug = item.attr("data-slug");
		itemArtist = item.attr("data-artist");
		itemPoster = item.attr("data-img");
		itemStream = item.attr("data-stream");
		itemDuration = item.attr("data-duration");
		itemFormats = item.attr("data-formats");
	}
	
	for(var n = 0; n < zuz.playQue.Que.length; n++){
		if(zuz.playQue.Que[n].ID==itemID){
			index = n;
			canAdd = false;
		}
	}
	if(canAdd==true){
		zuz.playQue.ID = zuz.playQue.Que.push({
			ID: itemID,
			title: itemTitle,
			slug: itemSlug,
			artist: itemArtist,
			poster: itemPoster,
			stream: itemStream,
			duration: itemDuration,
			formats: itemFormats
		}) - 1;	
		switchPlayerBtns();			
	}else{
		zuz.playQue.ID = index;
	}
	initPlayer();
}

function loadPlaylistToPlayQue(items){
	zuz.playQue.Que.length = 0;
	zuz.playQue.ID = 0;
	for(var x = 0; x < items.length; x++){
		var item = items[x];
		zuz.playQue.Que.push({
			ID: item.ID,
			title: item.title,
			slug: item.slug,
			artist: item.artist,
			poster: item.poster,
			stream: item.stream,
			duration: item.duration,
			formats: item.formats
		});			
		switchPlayerBtns();
	}	
	initPlayer();	
	var s = zuz.playQue.Que.length > 1 ? "s" : "";
	zuz.toast(zuz.playQue.Que.length + lang(zuz.lang.tracks_added_to_play_que, [s], 6));
}

function Search(){
	var q = $(".searchq").val();
	if(q==""){ $(".searchq").focus(); return; }
	var qry = q.replace(/ /g,"+"), href = zuz.base+'search?q='+qry;
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(href, '', function(data){
		$(".pageLoader").transition({ y: -250 });
		History('Search: '+q, href, 'nstate', 'search', null);		
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}	
	}, function(){
		$(".pageLoader").transition({ y: -250 });
		toast(zuz.lang.unable_to_process_request, 6);
	});
}

var GPlayer = {
	ID: function(){
		return $(".zuzPlayer").attr("data-id");
	},
	track: "",
	loading: function(mod){
		if(mod==true){
			$(".zuzPlayer .ctrls .working").fadeIn(300);
		}else{
			$(".zuzPlayer .ctrls .working").fadeOut(300);
		}
	},
	setTrack: function(stream){
		GPlayer.loading(true);		
		if(typeof this.track == 'object'){
			this.track.src = stream;
			this.track.load();			
		}else{
			GPlayer.track = new Audio(stream);
		}		
		GPlayer.setVolume();
		GPlayer.SwitchMute();
		GPlayer.track.preload = true;
		GPlayer.track.addEventListener('loadedmetadata', GPlayer.onReady);
		GPlayer.track.addEventListener('timeupdate', function(){
			zuz.setCookie('_seek'+GPlayer.ID(), this.currentTime, 7);
			$(".zuzPlayer").removeAttr("data-ended");
			$(".btnShowPlayer .lbl, .zuzPlayer .durationCurrent").html(toHMS(this.currentTime));
			var perc = this.currentTime * 100 / this.duration;
			$(".zuzPlayer .progress .prog .bar").css("width", perc+"%");
			$(".zuzPlayer .progress .prog .handle").css("left", perc+"%");
		});
		GPlayer.track.addEventListener('progress', function(){
			if(this.readyState === 4){
				var perc = this.buffered.end(0) * 100 / this.duration;
				$(".zuzPlayer .progress .prog .buffer").css("width", perc+"%");
			}
		});
		GPlayer.track.addEventListener('error', function(e){
			switch (e.target.error.code) {
				case e.target.error.MEDIA_ERR_ABORTED:
					console.log('You aborted the video playback.');
				break;
				case e.target.error.MEDIA_ERR_NETWORK:
					console.log('A network error caused the audio download to fail.');
				break;
				case e.target.error.MEDIA_ERR_DECODE:
					console.log('The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.');
				break;
				case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
					console.log('The video audio not be loaded, either because the server or network failed or because the format is not supported.');
				break;
				default:
					console.log('An unknown error occurred.');
				break;
			}
			GPlayer.loading(false);
			$(".zuzPlayer .btnPlay").attr("disabled", true);
			$(".zuzPlayer .btnPlay").find(".ico").removeClass("icon-play_arrow icon-flash icon-pause").addClass("icon-flash");
		});
		GPlayer.track.addEventListener('ended', function(){
			if(zuz.playQue.Que.length==1 && zuz.getCookie("_loop")=="1"){
				GPlayer.Replay();
			}else{
				if(zuz.getCookie("_shfl")=="1"){
					zuz.playQue.ID = zuz.randit(0, zuz.playQue.Que.length - 1);				
				}else{
					zuz.playQue.ID++;					
				}
				if(zuz.playQue.ID >= zuz.playQue.Que.length){
					zuz.playQue.ID = 0;
				}
				initPlayer();
			}
		});
		if($(".btnDownload").length > 0){ $(".btnDownload").attr("data-stream", stream + '&__get=true'); }		
	},
	SwitchMute: function(){
		var mco = zuz.getCookie('_muted') || 0;
		mco == 1 ? GPlayer.Mute() : GPlayer.UnMute();
	},
	Mute: function(){
		zuz.setCookie('_muted', 1, 365);
		GPlayer.track.muted = true;
		$(".zuzPlayer .btnVolume .ico").removeClass('icon-volume_up icon-volume_off icon-volume_down').addClass('icon-volume_off');
		$(".zuzPlayer .volBox .volume .bar").animate({ width : '0px' });
	},
	UnMute: function(){ 
		zuz.setCookie('_muted', 0, 365);
		GPlayer.track.muted = false;
		GPlayer.setVolume();
	},
	setVolume: function(){
		var m = zuz.getCookie('_vlm') || 1,
		m = m >= 1 ? 1 : 1-m;
		$(".zuzPlayer .volBox .volume").attr("val", m);
		GPlayer.track.volume = m;
		if(m <= 0){
			$(".zuzPlayer .btnVolume .ico").removeClass('icon-volume_up icon-volume_off icon-volume_down').addClass('icon-volume_off');
		}else if(m <= 0.5){			
			$(".zuzPlayer .btnVolume .ico").removeClass('icon-volume_up icon-volume_off icon-volume_down').addClass('icon-volume_down');
		}else if(m >= 0.5){
			$(".zuzPlayer .btnVolume .ico").removeClass('icon-volume_up icon-volume_off icon-volume_down').addClass('icon-volume_up');
		}		
		var m = (m*100);
		$(".zuzPlayer .volBox .volume .bar").css("width", m+"%");
		$(".zuzPlayer .volBox .btnVolume, .zuzPlayer .volBox .volume").attr("title", Math.round(m));
	},
	Play: function(){
		$(".zuzPlayer .btnPlay").removeAttr("disabled");
		$(".zuzPlayer .btnPlay .ico").removeClass("icon-play_arrow icon-flash icon-pause").addClass("icon-pause");
		try{ GPlayer.track.play(); }catch(error){}
	},
	Pause: function(){
		$(".zuzPlayer .btnPlay").removeAttr("disabled");
		$(".zuzPlayer .btnPlay .ico").removeClass("icon-play_arrow icon-flash icon-pause").addClass("icon-play_arrow");
		try{ GPlayer.track.pause(); }catch(error){}
	},
	Replay: function(){
		$(".zuzPlayer .btnPlay").removeAttr("disabled");
		$(".zuzPlayer .btnPlay .ico").removeClass("icon-play_arrow icon-flash icon-pause icon-replay").addClass("icon-pause");
		GPlayer.track.currentTime = 0; try{ GPlayer.track.play(); }catch(error){}
	},
	Seek: function(time){
		if(time==-9 && zuz.getCookie('_seek'+GPlayer.ID()) != 'undefind'){
			var ntime = parseInt(zuz.getCookie('_seek'+GPlayer.ID()));
			time = ntime > 0 && ntime <= GPlayer.getDuration() ? ntime : 0;
			if(time == 0){ return; }
		}
		GPlayer.track.currentTime = time;
		if(GPlayer.track.readyState === 4){
			if(time > GPlayer.track.buffered.end(0)){
				var perc = time * 100 / GPlayer.track.duration;
				$(".zuzPlayer .prog .buffer").css("width", perc+"%");
			}
		}
	},
	getDuration: function(){
		return typeof GPlayer.track === 'object' ? GPlayer.track.duration : 0;
	},
	onReady: function(){
		GPlayer.loading(true);
		$(".zuzPlayer .durationTotal").html(toHMS(this.duration));
		//if(GPlayer.inline==false) GPlayer.Seek(-9);
		setTimeout(function(){
			GPlayer.loading(false);
			GPlayer.Play();
		}, 500);
	}

	
};

$(document).ready(function(){
	zuz.scrolls();	
	if($(".listenTrack").length > 0){
		addToPlayQue($(".listenTrack"), false);
	}
});

$("html, body").on("click", function(){ $(".hoc").hide(); });
$(document).on("keyup", function(e){
	if(e.keyCode==32 && $(".zuzPlayer").length > 0){
		if(!GPlayer.track.paused){
			GPlayer.Pause();
		}else{
			GPlayer.Play();
		}
	}
});

(function(){
	window.onpopstate = function(e){
		if(!e.state){ window.location = window.location.href; return; }
		var state = e.state;
		if(typeof state === 'object'){			
			switch(state.type){
				case "nstate":
					$(".sidebar .nav .nstate").removeClass('on');
					$(".sidebar .nav .nstate-"+state.tid).addClass('on');
					$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");					
					$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
					zuz.post(state.link, "", function(data){
						if($(".gbox .mCSB_container").length > 0){
							$(".gbox .mCSB_container").html(data);
						}else{
							$(".gbox").html(data);	
						}		
						$(".pageLoader").transition({ y: -100 });			
						History(state.title, state.link, 'nstate', state.tid, state.access);
					}, function(){
						zuz.toast(zuz.lang.unable_to_process_request, 6);
					});	
				break;
				case "pstate":
					$(".htabs .pstate").removeClass('on');
					$(".pstate-"+state.tid).addClass("on");
					$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");
					$(".gbox").addClass("gbox-"+state.tid);	
					$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
					zuz.post(state.link, "", function(data){
						if($(".gbox .mCSB_container").length > 0){
							$(".gbox .mCSB_container").html(data);
						}else{
							$(".gbox").html(data);	
						}		
						$(".pageLoader").transition({ y: -100 });			
						History(state.title, state.link, 'pstate', state.tid, state.access);
					}, function(){
						zuz.toast(zuz.lang.unable_to_process_request, 6);
					});	
				break;
				case "bstate":
					$(".htabs .pstate").removeClass('on');
					$(".pstate-genres").addClass("on");
					$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");
					$(".gbox").addClass("gbox-genres");	
					$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
					zuz.post(state.link, "", function(data){
						if($(".gbox .mCSB_container").length > 0){
							$(".gbox .mCSB_container").html(data);
						}else{
							$(".gbox").html(data);	
						}		
						$(".pageLoader").transition({ y: -100 });			
						History(state.title, state.link, 'bstate', state.tid, state.access);
					}, function(){
						zuz.toast(zuz.lang.unable_to_process_request, 6);
					});	
				break;
				case "bnstate":
					$(".htabs .pstate").removeClass('on');
					$(".pstate-newreleases").addClass("on");
					$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");
					$(".gbox").addClass("gbox-newreleases");	
					$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
					zuz.post(state.link, "", function(data){
						if($(".gbox .mCSB_container").length > 0){
							$(".gbox .mCSB_container").html(data);
						}else{
							$(".gbox").html(data);	
						}		
						$(".pageLoader").transition({ y: -100 });			
						History(state.title, state.link, 'bnstate', state.tid, state.access);
					}, function(){
						zuz.toast(zuz.lang.unable_to_process_request, 6);
					});	
				break;
				case "plist":
					$(".sidebar .nav .nstate").removeClass('on');
					$(".sidebar .nav .nstate-library").addClass('on');
					$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");					
					$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
					zuz.post(state.link, "", function(data){
						if($(".gbox .mCSB_container").length > 0){
							$(".gbox .mCSB_container").html(data);
						}else{
							$(".gbox").html(data);	
						}		
						$(".pageLoader").transition({ y: -100 });			
						History(state.title, state.link, 'plist', state.tid, state.access);
					}, function(){
						zuz.toast(zuz.lang.unable_to_process_request, 6);
					});	
				break;
				case "track":
					addToPlayQue(state.access, true);
				break;
			}
		}
	};
})();

zuz.addEvent("click", ".closexcover", function(){ cover(false); });
zuz.addEvent("click", ".pstate", function(e){
	zuz.istop(e);
	var that = $(this);
	$(".htabs .pstate").removeClass('on');
	that.addClass("on");
	$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");
	$(".gbox").addClass("gbox-"+that.attr('data-mod'));	
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		$(".pageLoader").transition({ y: -100 });			
		History(that.html(), that.attr("href"), 'pstate', that.attr("data-mod"), null);		
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});	
});
zuz.addEvent("click", ".bstate", function(e){
	zuz.istop(e);
	var that = $(this);
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		$(".pageLoader").transition({ y: -100 });			
		History(that.attr("data-title"), that.attr("href"), 'bstate', that.attr("data-slug"), null);
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});	
});
zuz.addEvent("click", ".pagesGenre li a.withpstate", function(e){
	zuz.istop(e);
	var that = $(this);
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		$(".pageLoader").transition({ y: -100 });			
		History(that.attr("title"), that.attr("href"), 'bstate', $(".pagesGenre").attr("data-slug"), null);
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});	
});
zuz.addEvent("click", ".pagesNewest li a.withpstate", function(e){
	zuz.istop(e);
	var that = $(this);
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		$(".pageLoader").transition({ y: -100 });			
		History(that.attr("title"), that.attr("href"), 'bnstate', $(".pagesNewest").attr("data-pg"), null);
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});	
});
zuz.addEvent("click", ".pagesSearch li a.withpstate", function(e){
	zuz.istop(e);
	var that = $(this);
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		$(".pageLoader").transition({ y: -100 });			
		History(that.attr("title"), that.attr("href"), 'nstate', 'search', null);
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});	
});
zuz.addEvent("click", ".nstate", function(e){
	zuz.istop(e); var that = $(this), mod = that.attr("mod");
	$(".sidebar .nav li .nstate").removeClass('on');
	that.addClass("on");
	$(".pageLoader").html(zuz.loading(40)).transition({ y: 0 });		
	if(mod=="home"){
		$(".gbox").removeClass("gbox-featured gbox-genres gbox-newreleases gbox-discover");
	}else{
		$(".gbox").addClass("gbox-featured");
	}
	$(".menuBtn").click();
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		if(mod=="account"){			
			OnGoogleLoad();
		}
		$(".pageLoader").transition({ y: -100 });			
		History(that.attr("data-title"), that.attr("href"), 'nstate', that.attr("mod"), null);
	}, function(){ zuz.toast(zuz.lang.unable_to_process_request, 6); });
});
zuz.addEvent("click", ".init-track", function(e){
	zuz.istop(e); addToPlayQue($(this), false);	
	if($(".errorNote").length > 0){ $(".errorNote").css("bottom", "100px"); }
});

//Player
zuz.addEvent("click", ".zuzPlayer .btnPlay", function(){
	var ico = $(this).find(".ico");
	if(ico.hasClass("icon-replay")){
		GPlayer.Replay();
	}else if(ico.hasClass("icon-pause")){
		GPlayer.Pause()
	}else{
		GPlayer.Play()
	}
});
zuz.addEvent("click", ".zuzPlayer .btnShfl", function(){
	var btn = $(this).find(".btnShuffle");
	if(typeof btn.attr("disabled") == "undefined"){
		btn.attr("disabled", "true");
		zuz.setCookie('_shfl', 0, 365);	
	}else{
		btn.removeAttr("disabled");
		zuz.setCookie('_shfl', 1, 365);
	}	
});
zuz.addEvent("click", ".zuzPlayer .btnLoop", function(){
	var btn = $(this).find(".btnRepeat");
	if(typeof btn.attr("disabled") == "undefined"){
		btn.attr("disabled", "true");
		zuz.setCookie('_loop', 0, 365);			
	}else{
		btn.removeAttr("disabled");
		zuz.setCookie('_loop', 1, 365);		
	}	
});
zuz.addEvent("click", ".zuzPlayer .prog", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $(".zuzPlayer .prog").width();
    var percentage = ( left / totalWidth );
    var vidTime = GPlayer.getDuration() * percentage;
    GPlayer.Seek(vidTime);
});
zuz.addEvent("click", ".zuzPlayer .volBox .volume", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $(".zuzPlayer .volBox .volume").width();
    var percentage = 100 - ((left / totalWidth ) * 100);
	zuz.setCookie('_vlm', percentage / 100, 365);
	GPlayer.setVolume();
});
zuz.addEvent("click", ".zuzPlayer .btnDownload", function(e){
   window.open($(this).attr("data-stream"));
});
zuz.addEvent("click", ".zuzPlayer .btnVolume", function(e){
   GPlayer.track.muted == true ? GPlayer.UnMute() : GPlayer.Mute(); 
});
zuz.addEvent("click", ".zuzPlayer .btnHidePlayer", function(e){
	var mH = parseInt(document.documentElement.clientHeight) + 100;
	$(".zuzPlayer").transition({y: mH, duration: 500});			
	$(".isPlayBtm").removeClass("isPlayBtm");
	$(".btnShowPlayer").transition({ y : 0 });
});
zuz.addEvent("click", ".btnShowPlayer", function(e){
	var mH = parseInt(document.documentElement.clientHeight) + 100;
	$(".zuzPlayer").transition({y: 0, duration: 500});			
	$(".isPlayBtm").removeClass("isPlayBtm");
	$(".btnShowPlayer").transition({ y : -120 });
});
zuz.addEvent("click", ".zuzPlayer .btnAddToPlaylist", function(e){
    var Track = $(this).attr("data-id");
    
    // Animacion për hapjen e playlist box
    $(".zuzPlayer .playlistBox").css({
        opacity: 0,
        transform: 'translateY(20px)'
    }).show().animate({
        opacity: 1,
        transform: 'translateY(0)'
    }, 300);
    
    // Pastro dhe shto playlists
    $(".zuzPlayer .playlistBox .list").empty();
    for(var n = 0; n < zuz.me.playlists.length; n++){
        var playlist = $('<li class="plst">')
            .attr('data-id', zuz.me.playlists[n].ID)
            .css({
                opacity: 0,
                transform: 'translateX(-20px)'
            });
            
        playlist.append(
            '<h2 class="lbl size13 fontn wordwrap">' + zuz.me.playlists[n].title + '</h2>' +
            '<div class="cnt size13 fontn">' + zuz.me.playlists[n].count + '</div>'
        );
        
        $(".zuzPlayer .playlistBox .list").append(playlist);
        
        playlist.delay(n * 100).animate({
            opacity: 1,
            transform: 'translateX(0)'
        }, 300);
    }
    
    $(".hoc").hide();
    zuz.scrolls();
});
zuz.addEvent("click", ".zuzPlayer .btnShareTrack", function(e){ 
	zuz.istop(e); $(".hoc").hide(); $(".zuzPlayer .shareBox").show();
});
zuz.addEvent("click", ".player .shareBox .list li a", function(e){ zuz.istop(e);
	var $link = $(this), href = $link.attr('href'), network = $link.attr('data-network');
	var networks = {
		facebook : { width : 600, height : 300 }, twitter  : { width : 600, height : 254 },
		google   : { width : 515, height : 490 }, linkedin : { width : 600, height : 473 }
	};
	var popup = function(network){
		var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
		window.open(href, '', options+'height='+networks[network].height+',width='+networks[network].width);
	}; popup(network); $(".hoc").hide();
});
zuz.addEvent("click", ".btnNewPlayList", function(){
    $(".lightBox")
        .html(
            '<div class="newPlaylist rel">' +
            '<h2 class="size40 fontb cfff titl">' + zuz.lang.create_new_playlist + '</h2>' +
            '<div class="formBox rel">' +
                '<div class="iput rel">' +
                    '<h2 class="xitl size13 fontb cfff">' + zuz.lang.playlist_name + '</h2>' +
                    '<input type="text" class="put size16 fontn cfff naam" placeholder="' + zuz.lang.playlist_name + '">' +
                '</div>' +
                '<button class="btn size13 fontb savePlaylist">' + zuz.lang.create_playlist + '</button>' +
            '</div>' +
            '</div>'
        )
        .css({
            opacity: 0,
            transform: 'scale(0.9)'
        })
        .show()
        .animate({
            opacity: 1,
            transform: 'scale(1)'
        }, 300);
});
zuz.addEvent("click", ".zuzPlayer .playlistBox .list .plst", function(){
	$(".zuzPlayer .playlistBox").hide();
	var ID = $(this).attr("data-id"), Track = $(".zuzPlayer").attr("data-id"),
	Poster = $(".zuzPlayer .cTrack .thumb .imag").attr("src");
	zuz.post(zuz.app+'addToPlaylist', 'uid='+zuz.me.ID+'&token='+zuz.me.token+'&pid='+ID+'&tid='+Track, function(resp){		
		zuz.toast(resp.message, 6);
		if(resp.result=="ok"){
			for(var n = 0; n < zuz.me.playlists.length; n++){
				if(zuz.me.playlists[n].ID==ID){
					zuz.me.playlists[n].count = resp.count;					
				}
			}
			if($(".play-list").length > 0){
				$(".play-list .plist"+ID+" .mg img").attr("src", Poster);
				$(".play-list .plist"+ID+" .ctr").html(resp.countLabel);
				$(".play-list .initplist"+ID).attr("data-count", resp.count);				
			}
		}
	}, function(){ zuz.toast(zuz.lang.unable_to_process_request, 6); });
});
zuz.addEvent("click", ".zuzPlayer .btnNext", function(){ zuz.playQue.ID++; switchPlayerBtns(); initPlayer(); });
zuz.addEvent("click", ".zuzPlayer .btnPrev", function(){ zuz.playQue.ID--; switchPlayerBtns(); initPlayer(); });
zuz.addEvent("click", ".cover .xox .cancel", function(){ cover(false); });
zuz.addEvent("click", ".cover .xox .btn-ok", function(){
	switch($(this).attr("data-mod")){
		case "_cnpnforme":
			var nam = $("._plnaam").val();
			if(nam==""){
				$("._plnaam").focus();
				ShakeXox();
			}else{
				$(".cover .xCover").fadeIn(200);
				$(".blurify").addClass("blur");
				zuz.post(zuz.app + 'createPlaylist', 'uid='+zuz.me.ID+'&token='+zuz.me.token+'&naam='+zuz.urlencode(nam), function(resp){
					zuz.toast(resp.message, 6);
					if(resp.result=="ok"){
						zuz.me.playlists.push({ ID: resp.ID, title: resp.name, count: 0});
						if($(".play-list").length > 0){
							$(".play-list").prepend(
								'<li class="rel plist'+resp.ID+'"><div class="cvr cvr'+resp.ID+' abs"></div><a href="'+zuz.base+'playlist/'+resp.ID+'" class="bl noul viewplist" data-id="'+resp.ID+'" data-title="'+resp.name+'" data-count="0">'
								+ '<div class="bl mg"><img src="'+zuz.base+'ui/no-image.png" class="bl"></div>'
								+ '<h2 class="size14 fontb cfff lbl wordwrap bl">'+resp.name+'</h2>'
								+ '<h2 class="size13 fontn cfff ctr wordwrap bl">0 '+zuz.lang.track+'</h2></a>'				
								+ '<button  data-id="'+resp.ID+'" data-title="'+resp.name+'" data-count="0" class="bl anim initplaylist'+resp.ID+' initplist size13 fontn">'+zuz.lang.play+'</button></li>'
							).show();
						}
						cover(false);
					}else{
						$(".cover .xCover").fadeOut(200);
						$(".blurify").removeClass("blur");
						ShakeXox();
					}
				}, function(){
					$(".cover .xCover").fadeOut(200);
					$(".blurify").removeClass("blur");
					zuz.toast(zuz.lang.unable_to_process_request, 6);
					ShakeXox();
				});
			}
			//cover(false);
		break;
	}
});

zuz.addEvent("keyup", ".searchq", function(e){ if(e.keyCode==13) Search(); });
zuz.addEvent("click", ".srchbtn", function(){ Search(); });

zuz.addEvent("click", ".initplist, .initplistB", function(e){
	zuz.istop(e);
	var ID = $(this).attr("data-id"), count = parseInt($(this).attr("data-count"));
	if(count <= 0){
		zuz.toast(zuz.lang.empty_playlist, 6);
		return;
	}
	if($.inArray(ID, zuz.playQue.playlists) > -1){
		zuz.toast(zuz.lang.playlist_already_in_que, 6);
		return;
	}
	$(".plist"+ID+" a.viewplist, .initplist"+ID).addClass("blur");
	$(".cvr"+ID).html('<div class="abs pnd">'+zuz.loading(30)+'</div>').show();
	zuz.post(zuz.app+'getPlaylist', 'uid='+zuz.me.ID+'&token='+zuz.me.token+'&pid='+ID, function(resp){
		zuz.toast(resp.message, 6);	
		$(".cvr"+ID).fadeOut(200);
		$(".plist"+ID+" a.viewplist, .initplist"+ID).removeClass("blur");
		if(resp.result=="ok"){
			loadPlaylistToPlayQue(resp.list);			
		}
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
		$(".cvr"+ID).fadeOut(200);
		$(".plist"+ID+" a.viewplist, .initplist"+ID).removeClass("blur");
	});
});
zuz.addEvent("click", ".viewplist", function(e){
	zuz.istop(e); var that = $(this), ID = that.attr("data-id");	
	$(".cvr"+ID).html('<div class="abs pnd">'+zuz.loading(30)+'</div>').show();
	$(".initplist"+ID).addClass("blur");
	that.addClass("blur");
	zuz.post(that.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		History(that.attr("data-title"), that.attr("href"), 'plist', ID, null);
	}, function(){
		zuz.toast(zuz.lang.unable_to_process_request, 6);
	});
});
zuz.addEvent("click", ".playlisting li .removeFromPlist", function(){
	var ID = $(this).attr("data-id"), token = $(this).attr("data-token");
	if(confirm(zuz.lang.confirm_remove_track_from_playlist)){
		$(".playlisting .pitem"+ID+" .spinner").html('<div class="abs sp">'+zuz.loadingC(30, 2)+'</div>').show();
		zuz.post(zuz.app+'removeFromPlaylist', 'uid='+zuz.me.ID+'&token='+zuz.me.token+'&pti='+token, function(resp){
			zuz.toast(resp.message, 6);
			if(resp.result=="ok"){
				$(".playlisting .pitem"+ID).remove();
				if($(".playlisting li.rel").length > 0){
					$(".play-list .ctr").html(resp.countLabel);				
				}else{
					$(".dataBox").html('<h2 class="size30 fontb cfff areaTitle">'+zuz.lang.view_playlist+'</h2>'
					+ '<div class="emptyTracks rel size30 cfff fontl"><div class="icon-line_style ico"></div>'+zuz.lang.empty_playlist+'</div>');
				}
			}else{
				$(".playlisting .pitem"+ID+" .spinner").hide();
			}
		}, function(){
			$(".playlisting .pitem"+ID+" .spinner").hide();
			zuz.toast(zuz.lang.unable_to_process_request, 6);
		});
	}
});

zuz.addEvent("click", ".header .menuBtn", function(){
	if($(this).attr("data-open")=="0"){
		$(this).attr("data-open", "1").addClass("menuBtnO");
		$(".header").transition({ x: $(".sidebar").outerWidth()+"px" });
		$(".sidebar").transition({ x: "0px" });
		$(".sidebar .nav").transition({ x: "0px" });
	}else{
		$(this).attr("data-open", "0").removeClass("menuBtnO");		
		$(".sidebar .nav").transition({ x: "-50px" });	
		$(".sidebar").transition({ x: "-350px" });		
		$(".header").transition({ x: 0 });
	}
});
zuz.addEvent("click", ".playalbum", function(e){	
	zuz.istop(e); var self = $(this); if(self.hasClass("loading")) return;
	self.addClass("loading");
	if($(".albumBig").length > 0){ $(".albumBig .playalbum").hide(); $(".albumBig").addClass("blur"); }
	var ID = $(this).attr("data-id"), count = parseInt($(this).attr("data-count"));
	if(count <= 0){ zuz.toast(zuz.lang.album_is_empty, 6); return; }
	if($.inArray(ID, zuz.playQue.playlists) > -1){ zuz.toast(zuz.lang.album_already_in_que, 6); return; }
	$(".cvr"+ID).html('<div class="abs pnd">'+zuz.loading(30)+'</div>').show();
	zuz.post(zuz.app+'getAlbumtracks', 'aid='+ID, function(resp){
		zuz.toast(resp.message, 6);	self.removeClass("loading");		
		$(".cvr"+ID).fadeOut(200);	
		if($(".albumBig").length > 0){ $(".albumBig").removeClass("blur"); }
		if(resp.result=="ok"){
			$(".albums li a.playalbum").removeClass("on");
			self.addClass("on");
			loadPlaylistToPlayQue(resp.list);			
		}
	}, function(){ zuz.toast(zuz.lang.unable_to_process_request, 6); $(".cvr"+ID).fadeOut(200); });
});
zuz.addEvent("click", ".albums li a.viewalbum", function(e){	
	zuz.istop(e); var self = $(this); if(self.hasClass("loading")) return;
	self.addClass("loading");
	var ID = self.attr("data-id"), count = parseInt(self.attr("data-count")),
	slug = self.attr("data-slug");
	zuz.post(self.attr("href"), "", function(data){
		if($(".gbox .mCSB_container").length > 0){
			$(".gbox .mCSB_container").html(data);
		}else{
			$(".gbox").html(data);	
		}		
		History(self.attr("data-title"), self.attr("href"), 'album', slug, null);
	}, function(){ zuz.toast(zuz.lang.unable_to_process_request, 6); });
});
zuz.addEvent("click", ".ctc-submit", function(){
	var naam = $(".ctc-naam").val(), mail = $(".ctc-email").val(), type = $(".ctc-type").val(), subject = $(".ctc-subject").val(), msg = $(".ctc-msg").val();
	if(naam == ""){
		$(".ctc-naam").focus(); zuz.toast(zuz.lang.contact_error_enter_your_name, 6);
	}else if(mail == "" || zuz.isValidEmail(mail) === false){
		$(".ctc-email").focus(); zuz.toast(zuz.lang.contact_error_enter_your_email, 6);
	}else if(subject == ""){
		$(".ctc-subject").focus(); zuz.toast(zuz.lang.contact_error_enter_subject, 6);
	}else if(msg == ""){
		$(".ctc-msg").focus(); zuz.toast(zuz.lang.contact_error_enter_msg, 6);
	}else{
		$(".contact-box .covr").html('<div class="lod abs">'+zuz.loading(50)+'<h2 class="lbl size16 cfff">'+zuz.lang.please_wait+'</h2></div>').fadeIn(200);
		zuz.post(zuz.app+'contactus', 'nm='+zuz.urlencode(naam)+'&em='+zuz.urlencode(mail)+'&type='+type+'&sub='+zuz.urlencode(subject)+'&msg='+zuz.urlencode(msg), function(resp){
			zuz.toast(resp.message, 10);
			$(".contact-box .covr").fadeOut(200);			
			if(resp.result=="ok"){
				$(".ctc-subject, .ctc-msg").attr("value", "").val("");
			}
		}, function(){ zuz.toast(zuz.lang.unable_to_process_request, 6); $(".contact-box .covr").fadeOut(200); });
	}
});

function loadPlaylistToPlayQue(items){
    if(items.length > 0){
        zuz.playQue.Que.length = 0;
        zuz.playQue.ID = 0;
        
        // Animacion për heqjen e këngëve ekzistuese
        $(".plst").each(function(index) {
            $(this).animate({
                opacity: 0,
                transform: 'translateX(-20px)'
            }, 200, function() {
                $(this).remove();
            });
        });
        
        // Shto këngët e reja me animacion
        for(var x = 0; x < items.length; x++){
            var item = items[x];
            zuz.playQue.Que.push({
                ID: item.ID,
                title: item.title,
                slug: item.slug,
                artist: item.artist,
                poster: item.poster,
                stream: item.stream,
                duration: item.duration,
                formats: item.formats
            });
            
            // Krijo elementin e ri me animacion
            var newItem = $('<div class="plst">')
                .addClass(x === zuz.playQue.ID ? 'playing' : '')
                .css({
                    opacity: 0,
                    transform: 'translateX(-20px)'
                })
                .html(
                    '<h2 class="lbl size13 fontn wordwrap">' + item.title + '</h2>' +
                    '<div class="cnt size13 fontn">' + toHMS(item.duration) + '</div>'
                );
            
            $('.playlist-container').append(newItem);
            
            newItem.delay(x * 100).animate({
                opacity: 1,
                transform: 'translateX(0)'
            }, 300);
        }
        
        switchPlayerBtns();
        initPlayer();
        
        var s = items.length > 1 ? "s" : "";
        zuz.toast(items.length + lang(zuz.lang.tracks_added_to_play_que, [s], 6));
    }
}

// Touch events për progress bar
zuz.addEvent("touchstart", ".zuzPlayer .prog", function(e) {
    e.preventDefault();
    var touch = e.originalEvent.touches[0];
    var offset = $(this).offset();
    var startX = touch.pageX - offset.left;
    $(this).data('touching', true);
});

zuz.addEvent("touchmove", ".zuzPlayer .prog", function(e) {
    e.preventDefault();
    if (!$(this).data('touching')) return;
    
    var touch = e.originalEvent.touches[0];
    var offset = $(this).offset();
    var currentX = touch.pageX - offset.left;
    var totalWidth = $(this).width();
    var percentage = Math.max(0, Math.min(1, currentX / totalWidth));
    
    // Përditëso progress bar-in vizualisht
    $(".zuzPlayer .prog .bar").css("width", (percentage * 100) + "%");
    
    // Përditëso kohën
    var duration = GPlayer.getDuration();
    var newTime = duration * percentage;
    $(".zuzPlayer .time").text(toHMS(Math.floor(newTime)) + " / " + toHMS(Math.floor(duration)));
});

zuz.addEvent("touchend touchcancel", ".zuzPlayer .prog", function(e) {
    e.preventDefault();
    if (!$(this).data('touching')) return;
    
    var touch = e.changedTouches[0];
    var offset = $(this).offset();
    var endX = touch.pageX - offset.left;
    var totalWidth = $(this).width();
    var percentage = Math.max(0, Math.min(1, endX / totalWidth));
    
    // Apliko ndryshimin final të kohës
    var duration = GPlayer.getDuration();
    var newTime = duration * percentage;
    GPlayer.Seek(newTime);
    
    $(this).data('touching', false);
});

// Touch controls për audio player
zuz.addEvent("touchstart", ".zuzPlayer .prog", function(e) {
    e.preventDefault();
    var touch = e.originalEvent.touches[0];
    var startX = touch.pageX;
    var startTime = GPlayer.getDuration() * ($(".zuzPlayer .prog .played").width() / $(".zuzPlayer .prog").width());
    
    $(document).on("touchmove", function(e) {
        e.preventDefault();
        var touch = e.originalEvent.touches[0];
        var offset = $(".zuzPlayer .prog").offset();
        var width = $(".zuzPlayer .prog").width();
        var moveX = touch.pageX - offset.left;
        var percentage = moveX / width;
        
        if (percentage >= 0 && percentage <= 1) {
            var newTime = GPlayer.getDuration() * percentage;
            GPlayer.Seek(newTime);
        }
    });

    $(document).on("touchend touchcancel", function() {
        $(document).off("touchmove touchend touchcancel");
    });
});
