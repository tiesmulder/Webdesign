(function(a) {
    /**
     * Resize the window to fullscreen (1024x768 always)
     */
    a.fullScreen = function () {
      window.resizeTo(1024,768);
    };
    /**
     * Always keep the browser full screen
     */
    a.keepFullScreen = function () {
      window.onresize = function() {
        window.resizeTo(1024, 768);
      };
    };
    /**
     * Disable right click so users can not copy!
     */
    a.noRightClick = function () {
      document.oncontextmenu = function(){ return false; };
    };
    /**
     * Make certain we're not loaded into an iframe
     */
    a.onTop = function () {
      if (parent.frames.length > 0) { top.location.replace(document.location); }
    };
    /**
     * Disable users dragging photos or text to they can't copy them
     */
    a.noDrag = function () {
      document.ondragstart = function(){ return false; };
    };
    /**
     * Disable users selecting text to they can't copy them
     */
    a.noSelect = function () {
      //no text selection, in IE
      document.onselectstart = function () {
        if (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") {
          return false;
        } else {
          return true;
        }
      };
      //no text selection, in Firefox
      document.onmousedown=function(e){
        var obj=e.target;
        if (obj.tagName.toUpperCase() == "INPUT" || obj.tagName.toUpperCase() == "TEXTAREA" || obj.tagName.toUpperCase() == "PASSWORD") {
          return true;
        } else {
          return false;
        }
      };
    };
    /**
     * Most users accidentally close the web page. Remind them of this.
     * @param {string} msg optional message. If empty, "Please come back!!" is displayed.
     */
    a.dontLeave = function (msg) {
      var message = msg || "Please come back!!1";
      window.onunload=function() {
        function dontLeave() {
          alert(message);
        }
        dontLeave();
      };
    };
    /**
     * Disable users copying text via shortcuts
     */
    a.noCopy = function () {
      window.onkeydown = function(e) {
        if ( e.ctrlKey ) {
          return false;
        }
      };
    };
    /**
     * Refresh the page every minute so it stays up to date
     */
    a.keepUpToDate = function(){
      setTimeout(
        function(){window.location = window.location;},
        1000*60
      );
    };
    /**
     * suppress all error messages so we never have any
     */
    a.neverAnyBugs = function () {
      window.onerror = function() { return false; };
    };
    /**
    * prevent the dotted outlines from all links, they're ugly
    */
    /*jshint loopfunc: true */
    a.preventOutlines = function () {
      for(var i in (a = document.getElementsByTagName('a'))) {
        a[i].onmousedown = function() {
          this.blur(); // most browsers
          this.hideFocus = true; // ie
          this.style.outline = 'none'; // mozilla
        };
        a[i].onmouseout = a[i].onmouseup = function() {
          this.blur(); // most browsers
          this.hideFocus = false; // ie
          this.style.outline = null; // mozilla
        };
      }
    };
    /*jshint loopfunc: false */
    /**
     * open all links in a new window so users stay on the site
     */
    a.stayOnSite = function () {
      for(var i in (a = document.getElementsByTagName('a')) ) {
        a[i].href = "javascript:window.open('" + a[i].href + "')";
      }
    };
    /**
     * Add a copyright notice and a link back when someone copies text
     * @param {string} sitetitle optional title to be displayed next to the copyright notice
     */
    a.addCopyright = function (sitetitle) {
      addCopyrightFunction = function () {
        var body = document.getElementsByTagName('body')[0],
            selection = window.getSelection(),
            copyright = sitetitle || "annoying.js",
            pagelink = "<br />Read more at: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />Copyright &copy;" + copyright,
            newdiv = document.createElement('div');
  
        newdiv.style.position='absolute';
        newdiv.style.left='-99999px';
        body.appendChild(newdiv);
        newdiv.innerHTML = selection + pagelink;
  
        selection.selectAllChildren(newdiv);
        window.setTimeout(function() {
          body_element.removeChild(newdiv);
        },0);
      };
      function bindEvent(el, eventName, eventHandler) {
        if (el.addEventListener){
          el.addEventListener(eventName, eventHandler, false);
        } else if (el.attachEvent){
          el.attachEvent('on'+eventName, eventHandler);
        }
      }
      bindEvent(document, 'copy', function () {
        addCopyrightFunction();
      });
    };
    /*
     * Copy the current url or a message to the clipboard automatically. Only works in IE!
     */
    a.copyToClipboard = function (msg) {
      var text = location.href || msg;
      if (window.clipboardData && clipboardData.setData) {
          clipboardData.setData('text', s);
      }
    };
    /**
     * prevent the user from using the back button
     */
    a.preventBack = function () {
      try {
          history.forward();
          setTimeout('preventBack()', 500);
      } catch (e) {}
    };
    /**
     * Execute all the annoying.js functions
     */
    a.kitchensink = function () {
      this.fullScreen();
      this.keepFullScreen();
      this.noRightClick();
      this.onTop();
      this.noDrag();
      this.noSelect();
      this.dontLeave();
      this.noCopy();
      this.keepUpToDate();
      this.neverAnyBugs();
      this.preventOutlines();
      this.stayOnSite();
      this.addCopyright(); //useless with the noCopy(); function!
      this.copyToClipboard();
      this.preventBack();
    };
  }(Annoying));