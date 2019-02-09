    // https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
    var supportsES6=function(){try{return new Function("(a=0)=>a"),!0}catch(n){return!1}};
    //console.log("supportsES6: " + supportsES6());
    
    
    // Safari only
    var isSafari = (function (){
      var isIt = false;
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') != -1){
        if (!(ua.indexOf('chrome') > -1)){
    
          // Safari only
          isIt = true;
    //      console.log("99 browsers and Safari's just one.");
          document.documentElement.className += " isSafari";
        }
      }
      return isIt;
    }());
    
    
    
    // Build the SVG elements from a data array
    // Elements reduced drastically to improve performance.
    var svgElements = [
      // First object MUST be an element
      // Sub-elements may follow (only animate currently catered for)
      { 
        ellipse:{id:"drp13",fill:"#CC0000",cx:"30.25%",cy:"-6%"},
        animate:{rx:{values:"1.35%; 0.15%; 1.35%",dur:"6s"},ry:{values:"-6%; 55%; -6%",dur:"6s"}}
      },
      { 
        ellipse:{id:"drp14",fill:"#830303",cx:"30.7%",cy:"-6%"},
        animate:{rx:{values:"1.125%; 0.2%; 1.125%;",dur:"5.5s"},ry:{values:"-5%; 53%; -5%",dur:"5.5s"}}
      },
    
      { 
        ellipse:{id:"drp30",fill:"#CC0000",cx:"45%",cy:"2%",rx:"13.25%"},
        animate:{ry:{values:"-6%; 5%; -6%",dur:"5s"}}
      },
      { 
        ellipse:{id:"drp31",fill:"#8a0707",cx:"34%",cy:"-6%"},
        animate:{rx:{values:"1%; 4%; 1%",dur:"5s"},ry:{values:"40%; 24%; 40%",dur:"5s"}}
      },
      { 
        ellipse:{id:"drp32",fill:"#CC0000",cx:"39.15%",cy:"-6%"},
        animate:{rx:{values:"1.5%; 4%; 1.5%",dur:"6s"},ry:{values:"42%; 20%; 42%",dur:"6s"}}
      },
      { 
        ellipse:{id:"drp33",fill:"#8a0707",cx:"42.8%",cy:"-6%"},
        animate:{rx:{values:"1%; 3%; 1%",dur:"7s"},ry:{values:"40%; 10%; 40%",dur:"7s"}}
      },
      { 
        ellipse:{id:"drp34",fill:"#8a0707",cx:"48%",cy:"-6%"},
        animate:{rx:{values:"5%; 1%; 5%; ",dur:"5s"},ry:{values:"0%; 19%; 0%",dur:"5s"}}
      },
      { 
        ellipse:{id:"drp34a",fill:"#8a0707",cx:"51%",cy:"0%"},
        animate:{rx:{values:"7%; 1.5%; 7%; ",dur:"6s"},ry:{values:"0%; 14%; 0%",dur:"6s"}}
      },
      { 
        ellipse:{id:"drp35",fill:"#8a0707",cx:"56%",cy:"-6%"},
        animate:{rx:{values:"5%; 1%; 5%",dur:"4s"},ry:{values:"5%; 32%; 5%;",dur:"4s"}}
      },
      { 
        ellipse:{id:"drp36",fill:"#CC0000",cx:"56.9%",cy:"-6%"},
        animate:{rx:{values:"1.5%; .6%; 1.5%",dur:"6s"},ry:{values:"15%; 35%; 15%;",dur:"6s"}}
      },
    
      { 
        ellipse:{id:"drp40",fill:"#830303",cx:"63.4%",cy:"3%"},
        animate:{rx:{values:"3%; 2.6%; 3%",dur:"5s"},ry:{values:"5%; 10%; 5%;",dur:"5s"}}
      },
      { 
        ellipse:{id:"drp41",fill:"#CC0000",cx:"62.5%",cy:"-6%"},
        animate:{rx:{values:"0.5%; 1%; 0.5%;",dur:"6s"},ry:{values:"60%; 16%; 60%",dur:"6s"}}
      },
      { 
        ellipse:{id:"drp42",fill:"#830303",cx:"65.25%",cy:"0%"},
        animate:{rx:{values:"0.5%; 1%; 0.5%;",dur:"5s"},ry:{values:"40%; 10%; 40%",dur:"5s"}}
      }
    ];
    
    
    window.addEventListener("load", function(){
    
      var drippy_goo = (function (elementData){
    
        "use strict";
    
        if (!supportsES6()){return;}
        if (document.documentElement.classList.contains("mobile")) {return;}
    
        const svgClass = "svg-drips";
        const siblingClass = "hero_bg";
        const groupId = "gooeyDrips";
    
    
        const _getNode = (node, values) => {
          if (!values || values === ""){return false;}
          node = document.createElementNS("http://www.w3.org/2000/svg", node);
          for (const property in values){
            if (values[property] && values[property]!==""){
              node.setAttributeNS(null, property, values[property]);
            }
          }
          return node;
        };
    
    
        // Possibly update to allow any child element rather than specifically animate
        const _addAnimates = (element, el) => {
          if (el.animate){
            const animateNames = Object.keys(el.animate);
            for (const name of animateNames){
              el.animate[name].attributeName = name;
              el.animate[name].repeatCount = "indefinite";
              const animate = _getNode("animate", el.animate[name]);
              element.appendChild(animate);
            }
          }
          return element;
        };
    
    
        // Add elements
        const _addElements = (svg, elementData) => {
    
          // Add group for reference on other assets
          let g = _getNode("g", {id:groupId});
    
          for (const el of elementData){
    
            // First object MUST be the element
            const elName = Object.keys(el)[0];
            if (!elName){continue;}
            if (isSafari){
              el[elName].fill = ""; // As Safari makes it's own colors up around the edges
            }
            let element = _getNode(elName, el[elName]);
    
            // Animate is the only child-element catered for
            element = _addAnimates(element, el);
            g.appendChild(element);
          }
          svg.appendChild(g);
          return svg;
        };
    
    
        const _embedSVG = (svg, clss) => {
          const referenceNode = document.querySelector(clss);
          if (referenceNode && svg){
            referenceNode.parentNode.insertBefore(svg, referenceNode.nextSibling);
          }
        };
    
    
        const init = (() => {
          let svg = _getNode("svg", {class:svgClass, focusable:"false", role:"presentational"});
          svg = _addElements(svg, elementData);
          _embedSVG(svg, "." + siblingClass);
        })();
    
    
      })(svgElements);
    
    
    }, false);