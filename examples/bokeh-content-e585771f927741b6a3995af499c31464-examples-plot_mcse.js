(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("e7ee326b-edb3-4e31-b9a0-0a6021058fa0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e7ee326b-edb3-4e31-b9a0-0a6021058fa0' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"3cc62213-0fff-4b2e-84f5-66284a24f69f":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"41940"},"glyph":{"id":"41939"},"group":null,"hover_glyph":null,"view":{"id":"41942"}},"id":"41941","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41953"},"selection_policy":{"id":"41952"}},"id":"41915","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41928","type":"Title"},{"attributes":{},"id":"41884","type":"LinearScale"},{"attributes":{"source":{"id":"41915"}},"id":"41920","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41939","type":"Scatter"},{"attributes":{"overlay":{"id":"41904"}},"id":"41898","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41938","type":"Span"},{"attributes":{},"id":"41897","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41937","type":"Span"},{"attributes":{},"id":"41896","type":"ResetTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41969"},"selection_policy":{"id":"41968"}},"id":"41940","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"41882","type":"DataRange1d"},{"attributes":{"below":[{"id":"41852"}],"center":[{"id":"41855"},{"id":"41859"}],"height":500,"left":[{"id":"41856"}],"output_backend":"webgl","renderers":[{"id":"41919"},{"id":"41921"},{"id":"41922"},{"id":"41923"},{"id":"41926"}],"title":{"id":"41928"},"toolbar":{"id":"41870"},"toolbar_location":null,"width":500,"x_range":{"id":"41844"},"x_scale":{"id":"41848"},"y_range":{"id":"41846"},"y_scale":{"id":"41850"}},"id":"41843","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41943","type":"Title"},{"attributes":{"callback":null},"id":"41903","type":"HoverTool"},{"attributes":{"source":{"id":"41940"}},"id":"41942","type":"CDSView"},{"attributes":{},"id":"41848","type":"LinearScale"},{"attributes":{},"id":"41954","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"41870"},{"id":"41906"}],"tools":[{"id":"41860"},{"id":"41861"},{"id":"41862"},{"id":"41863"},{"id":"41864"},{"id":"41865"},{"id":"41866"},{"id":"41867"},{"id":"41896"},{"id":"41897"},{"id":"41898"},{"id":"41899"},{"id":"41900"},{"id":"41901"},{"id":"41902"},{"id":"41903"}]},"id":"41974","type":"ProxyToolbar"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41961"},"group":null,"major_label_policy":{"id":"41962"},"ticker":{"id":"41893"}},"id":"41892","type":"LinearAxis"},{"attributes":{},"id":"41844","type":"DataRange1d"},{"attributes":{},"id":"41902","type":"SaveTool"},{"attributes":{"end":1,"start":-0.05},"id":"41846","type":"DataRange1d"},{"attributes":{},"id":"41955","type":"Selection"},{"attributes":{},"id":"41899","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"41974"},"toolbar_location":"above"},"id":"41975","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"41905"}},"id":"41900","type":"LassoSelectTool"},{"attributes":{},"id":"41901","type":"UndoTool"},{"attributes":{},"id":"41961","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"41925"},"glyph":{"id":"41924"},"group":null,"hover_glyph":null,"view":{"id":"41927"}},"id":"41926","type":"GlyphRenderer"},{"attributes":{},"id":"41962","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41921","type":"Span"},{"attributes":{"below":[{"id":"41888"}],"center":[{"id":"41891"},{"id":"41895"}],"height":500,"left":[{"id":"41892"}],"output_backend":"webgl","renderers":[{"id":"41934"},{"id":"41936"},{"id":"41937"},{"id":"41938"},{"id":"41941"}],"title":{"id":"41943"},"toolbar":{"id":"41906"},"toolbar_location":null,"width":500,"x_range":{"id":"41880"},"x_scale":{"id":"41884"},"y_range":{"id":"41882"},"y_scale":{"id":"41886"}},"id":"41879","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41904","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41916","type":"Circle"},{"attributes":{},"id":"41964","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"41925"}},"id":"41927","type":"CDSView"},{"attributes":{"tools":[{"id":"41860"},{"id":"41861"},{"id":"41862"},{"id":"41863"},{"id":"41864"},{"id":"41865"},{"id":"41866"},{"id":"41867"}]},"id":"41870","type":"Toolbar"},{"attributes":{},"id":"41850","type":"LinearScale"},{"attributes":{},"id":"41965","type":"AllLabels"},{"attributes":{},"id":"41853","type":"BasicTicker"},{"attributes":{"children":[{"id":"41975"},{"id":"41973"}]},"id":"41976","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"41915"},"glyph":{"id":"41916"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41918"},"nonselection_glyph":{"id":"41917"},"view":{"id":"41920"}},"id":"41919","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41950"},"group":null,"major_label_policy":{"id":"41951"},"ticker":{"id":"41853"}},"id":"41852","type":"LinearAxis"},{"attributes":{"tools":[{"id":"41896"},{"id":"41897"},{"id":"41898"},{"id":"41899"},{"id":"41900"},{"id":"41901"},{"id":"41902"},{"id":"41903"}]},"id":"41906","type":"Toolbar"},{"attributes":{"callback":null},"id":"41867","type":"HoverTool"},{"attributes":{"axis":{"id":"41852"},"coordinates":null,"group":null,"ticker":null},"id":"41855","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41918","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41947"},"group":null,"major_label_policy":{"id":"41948"},"ticker":{"id":"41857"}},"id":"41856","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41917","type":"Circle"},{"attributes":{},"id":"41857","type":"BasicTicker"},{"attributes":{"axis":{"id":"41856"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41859","type":"Grid"},{"attributes":{},"id":"41966","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41931","type":"Circle"},{"attributes":{},"id":"41865","type":"UndoTool"},{"attributes":{},"id":"41967","type":"Selection"},{"attributes":{"overlay":{"id":"41868"}},"id":"41862","type":"BoxZoomTool"},{"attributes":{},"id":"41861","type":"PanTool"},{"attributes":{},"id":"41860","type":"ResetTool"},{"attributes":{},"id":"41866","type":"SaveTool"},{"attributes":{},"id":"41863","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41922","type":"Span"},{"attributes":{"overlay":{"id":"41869"}},"id":"41864","type":"LassoSelectTool"},{"attributes":{},"id":"41880","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41868","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"41843"},0,0],[{"id":"41879"},0,1]]},"id":"41973","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41923","type":"Span"},{"attributes":{},"id":"41947","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41964"},"group":null,"major_label_policy":{"id":"41965"},"ticker":{"id":"41889"}},"id":"41888","type":"LinearAxis"},{"attributes":{},"id":"41886","type":"LinearScale"},{"attributes":{},"id":"41948","type":"AllLabels"},{"attributes":{},"id":"41889","type":"BasicTicker"},{"attributes":{"axis":{"id":"41888"},"coordinates":null,"group":null,"ticker":null},"id":"41891","type":"Grid"},{"attributes":{"source":{"id":"41930"}},"id":"41935","type":"CDSView"},{"attributes":{},"id":"41968","type":"UnionRenderers"},{"attributes":{},"id":"41950","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41933","type":"Circle"},{"attributes":{"axis":{"id":"41892"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41895","type":"Grid"},{"attributes":{},"id":"41969","type":"Selection"},{"attributes":{},"id":"41951","type":"AllLabels"},{"attributes":{},"id":"41893","type":"BasicTicker"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41924","type":"Scatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41955"},"selection_policy":{"id":"41954"}},"id":"41925","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41967"},"selection_policy":{"id":"41966"}},"id":"41930","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41936","type":"Span"},{"attributes":{},"id":"41952","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41932","type":"Circle"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41869","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"41930"},"glyph":{"id":"41931"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41933"},"nonselection_glyph":{"id":"41932"},"view":{"id":"41935"}},"id":"41934","type":"GlyphRenderer"},{"attributes":{},"id":"41953","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41905","type":"PolyAnnotation"}],"root_ids":["41976"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"3cc62213-0fff-4b2e-84f5-66284a24f69f","root_ids":["41976"],"roots":{"41976":"e7ee326b-edb3-4e31-b9a0-0a6021058fa0"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();