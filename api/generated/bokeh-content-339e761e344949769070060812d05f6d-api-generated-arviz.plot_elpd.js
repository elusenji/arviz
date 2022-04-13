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
    
      
      
    
      const element = document.getElementById("0a391846-43e7-4f07-9b86-25f068d39268");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0a391846-43e7-4f07-9b86-25f068d39268' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f27180f4-f1f4-474b-beb8-9784f9020e60":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17453","type":"UnionRenderers"},{"attributes":{},"id":"17448","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"17459"},"toolbar_location":"above"},"id":"17460","type":"ToolbarBox"},{"attributes":{},"id":"17427","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17441"},"glyph":{"id":"17440"},"group":null,"hover_glyph":null,"view":{"id":"17443"}},"id":"17442","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17430"}},"id":"17425","type":"LassoSelectTool"},{"attributes":{},"id":"17452","type":"AllLabels"},{"attributes":{},"id":"17426","type":"UndoTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17451"},"group":null,"major_label_policy":{"id":"17452"},"ticker":{"id":"17414"}},"id":"17413","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17430","type":"PolyAnnotation"},{"attributes":{},"id":"17449","type":"AllLabels"},{"attributes":{},"id":"17407","type":"DataRange1d"},{"attributes":{},"id":"17411","type":"LinearScale"},{"attributes":{"axis":{"id":"17417"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17420","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17444","type":"Title"},{"attributes":{"callback":null},"id":"17428","type":"HoverTool"},{"attributes":{"axis":{"id":"17413"},"coordinates":null,"group":null,"ticker":null},"id":"17416","type":"Grid"},{"attributes":{},"id":"17422","type":"PanTool"},{"attributes":{"toolbars":[{"id":"17431"}],"tools":[{"id":"17421"},{"id":"17422"},{"id":"17423"},{"id":"17424"},{"id":"17425"},{"id":"17426"},{"id":"17427"},{"id":"17428"}]},"id":"17459","type":"ProxyToolbar"},{"attributes":{},"id":"17418","type":"BasicTicker"},{"attributes":{},"id":"17421","type":"ResetTool"},{"attributes":{"below":[{"id":"17413"}],"center":[{"id":"17416"},{"id":"17420"}],"height":288,"left":[{"id":"17417"}],"output_backend":"webgl","renderers":[{"id":"17442"}],"title":{"id":"17444"},"toolbar":{"id":"17431"},"toolbar_location":null,"width":432,"x_range":{"id":"17405"},"x_scale":{"id":"17409"},"y_range":{"id":"17407"},"y_scale":{"id":"17411"}},"id":"17404","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17454"},"selection_policy":{"id":"17453"}},"id":"17441","type":"ColumnDataSource"},{"attributes":{},"id":"17451","type":"BasicTickFormatter"},{"attributes":{},"id":"17414","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17440","type":"Scatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17429","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17441"}},"id":"17443","type":"CDSView"},{"attributes":{"children":[{"id":"17460"},{"id":"17458"}]},"id":"17461","type":"Column"},{"attributes":{},"id":"17405","type":"DataRange1d"},{"attributes":{},"id":"17409","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17448"},"group":null,"major_label_policy":{"id":"17449"},"ticker":{"id":"17418"}},"id":"17417","type":"LinearAxis"},{"attributes":{},"id":"17424","type":"WheelZoomTool"},{"attributes":{},"id":"17454","type":"Selection"},{"attributes":{"children":[[{"id":"17404"},0,0]]},"id":"17458","type":"GridBox"},{"attributes":{"overlay":{"id":"17429"}},"id":"17423","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"17421"},{"id":"17422"},{"id":"17423"},{"id":"17424"},{"id":"17425"},{"id":"17426"},{"id":"17427"},{"id":"17428"}]},"id":"17431","type":"Toolbar"}],"root_ids":["17461"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"f27180f4-f1f4-474b-beb8-9784f9020e60","root_ids":["17461"],"roots":{"17461":"0a391846-43e7-4f07-9b86-25f068d39268"}}];
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