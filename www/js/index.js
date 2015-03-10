var previousPage;
var currentPage;
var app = {
	
    // Application Constructor
    //
    // Fired once the HTML has loaded.
    initialize: function() {
        app.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup.
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    //
    // Triggered when the device is ready.
    onDeviceReady: function() {
        app.setSizes();
        app.loadMainPage();
        app.loadXML();
    },
    
    // Load Main Page
    //
    // Sets display of the main page to 'block'.
    loadMainPage: function() {
    	var mainPage = document.getElementById('main-page');
    	
    	mainPage.style.display = 'block';
    	currentPage = mainPage;
    },
    
    loadXML: function() {
    	if (window.XMLHttpRequest) {
    		xhttp = new XMLHttpRequest();
    	}
    	else {
    		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
    	xhttp.open("GET", "index.xml", false);
    	xhttp.send();
    	var xmlDoc = xhttp.responseXML;
    	
    	alert(xmlDoc);
    	document.getElementsByClassName('page-btn')[0].innerHTML = xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue;
    },
    
    // Switch Pages
    //
    // Unloads current page and loads up new page.
    pageSwitch: function(page, resetZoom) {
    	var pageToLoad = document.getElementById(page);
    	
    	if (resetZoom) {
    		viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    	}
    	
    	currentPage.style.display = 'none';
    	pageToLoad.style.display = 'block';
    	
    	currentPage = pageToLoad;
    },
    
    // Open Image
    //
    // Opens image page and allows zooming.
    openIMG: function(id) {
    	var viewport = document.getElementById('viewport');
		
    	app.pageSwitch("page-" + id);
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=10, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    },

    // Set Sizes
    //
    // Adjusts the size of 'page' divs to fill the entire screen and resizes zoomable images to fit the screen.
    setSizes: function() {
        var imgList = document.getElementsByClassName('big-img');

        for (i = 0; i < imgList.length; i++) {
            if (imgList[i].height / imgList[i].width > screen.height / screen.width) {
                imgList[i].height = screen.height;
            } else {
                imgList[i].width = screen.width;
            }
        }
    }
};
