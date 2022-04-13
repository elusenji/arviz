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
    
      
      
    
      const element = document.getElementById("0a865382-1f3e-4e75-b99e-b43b84f7c9ed");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0a865382-1f3e-4e75-b99e-b43b84f7c9ed' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1ce71748-f589-426c-8c2e-b802efba7dcd":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20744","type":"BasicTickFormatter"},{"attributes":{},"id":"20703","type":"DataRange1d"},{"attributes":{},"id":"20717","type":"ResetTool"},{"attributes":{"tools":[{"id":"20717"},{"id":"20718"},{"id":"20719"},{"id":"20720"},{"id":"20721"},{"id":"20722"},{"id":"20723"},{"id":"20724"}]},"id":"20727","type":"Toolbar"},{"attributes":{},"id":"20701","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"20737"},"glyph":{"id":"20736"},"group":null,"hover_glyph":null,"view":{"id":"20739"}},"id":"20738","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20709"}],"center":[{"id":"20712"},{"id":"20716"}],"height":288,"left":[{"id":"20713"}],"output_backend":"webgl","renderers":[{"id":"20738"}],"title":{"id":"20740"},"toolbar":{"id":"20727"},"toolbar_location":null,"width":432,"x_range":{"id":"20701"},"x_scale":{"id":"20705"},"y_range":{"id":"20703"},"y_scale":{"id":"20707"}},"id":"20700","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20748","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"20727"}],"tools":[{"id":"20717"},{"id":"20718"},{"id":"20719"},{"id":"20720"},{"id":"20721"},{"id":"20722"},{"id":"20723"},{"id":"20724"}]},"id":"20755","type":"ProxyToolbar"},{"attributes":{},"id":"20747","type":"BasicTickFormatter"},{"attributes":{},"id":"20707","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20736","type":"Scatter"},{"attributes":{"overlay":{"id":"20725"}},"id":"20719","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20740","type":"Title"},{"attributes":{},"id":"20723","type":"SaveTool"},{"attributes":{},"id":"20745","type":"AllLabels"},{"attributes":{"source":{"id":"20737"}},"id":"20739","type":"CDSView"},{"attributes":{"overlay":{"id":"20726"}},"id":"20721","type":"LassoSelectTool"},{"attributes":{},"id":"20749","type":"UnionRenderers"},{"attributes":{},"id":"20718","type":"PanTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20750"},"selection_policy":{"id":"20749"}},"id":"20737","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20709"},"coordinates":null,"group":null,"ticker":null},"id":"20712","type":"Grid"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20744"},"group":null,"major_label_policy":{"id":"20745"},"ticker":{"id":"20714"}},"id":"20713","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20725","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"20724","type":"HoverTool"},{"attributes":{},"id":"20720","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"20755"},"toolbar_location":"above"},"id":"20756","type":"ToolbarBox"},{"attributes":{},"id":"20714","type":"BasicTicker"},{"attributes":{"children":[[{"id":"20700"},0,0]]},"id":"20754","type":"GridBox"},{"attributes":{"axis":{"id":"20713"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20716","type":"Grid"},{"attributes":{},"id":"20710","type":"BasicTicker"},{"attributes":{"children":[{"id":"20756"},{"id":"20754"}]},"id":"20757","type":"Column"},{"attributes":{"coordinates":null,"formatter":{"id":"20747"},"group":null,"major_label_policy":{"id":"20748"},"ticker":{"id":"20710"}},"id":"20709","type":"LinearAxis"},{"attributes":{},"id":"20705","type":"LinearScale"},{"attributes":{},"id":"20750","type":"Selection"},{"attributes":{},"id":"20722","type":"UndoTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20726","type":"PolyAnnotation"}],"root_ids":["20757"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"1ce71748-f589-426c-8c2e-b802efba7dcd","root_ids":["20757"],"roots":{"20757":"0a865382-1f3e-4e75-b99e-b43b84f7c9ed"}}];
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