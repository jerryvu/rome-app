var currentPage;
var app = {
	
    // Application Constructor
    //
    // Fired once the HTML has loaded.
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    //
    // Triggered when the device is ready.
    onDeviceReady: function() {
        app.loadMainPage();
    },
    
    // Load Main Page
    //
    // Sets display of the main page to 'block'.
    loadMainPage: function() {
    	var mainPage = document.getElementById('main-page');
    	
    	mainPage.style.display = 'block';
    	currentPage = mainPage;
    },
    
    // Switch Pages
    //
    // Unloads current page and loads up new page.
    pageSwitch: function(page) {
    	var pageToLoad = document.getElementById(page);
    	
    	currentPage.style.display = 'none';
    	pageToLoad.style.display = 'block';
    	
    	currentPage = pageToLoad;
    },
    
    // Open Image
    //
    // Opens image page, adjusts image size to fit the screen and allows zooming.
    openIMG: function(id) {
    	var viewport = document.getElementById('viewport');
		var img = document.getElementById(id);
		
		if (img.height / img.width > screen.height / screen.width) {
			img.height = screen.height;
		} else {
			img.width = screen.width;
		}
		
    	app.pageSwitch("page-" + id);
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=10, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
	},
	
	menu: function(display) {
		var menuPage = document.getElementById('menu-page');
		
		menuPage.style.display = display;
	}
};

