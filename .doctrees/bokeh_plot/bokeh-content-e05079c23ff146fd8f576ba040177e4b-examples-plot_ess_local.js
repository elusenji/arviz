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
    
      
      
    
      const element = document.getElementById("cfb44b92-7f90-43e3-83ad-1c908e0a09d6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cfb44b92-7f90-43e3-83ad-1c908e0a09d6' but no matching script tag was found.")
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
                    
                  const docs_json = '{"ffc5ccb8-9aed-44da-a776-a6ffa9ae68fe":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21193","type":"Circle"},{"attributes":{"tools":[{"id":"21172"},{"id":"21173"},{"id":"21174"},{"id":"21175"},{"id":"21176"},{"id":"21177"},{"id":"21178"},{"id":"21179"}]},"id":"21182","type":"Toolbar"},{"attributes":{},"id":"21213","type":"Selection"},{"attributes":{},"id":"21165","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21213"},"selection_policy":{"id":"21212"}},"id":"21191","type":"ColumnDataSource"},{"attributes":{},"id":"21211","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21202","type":"Span"},{"attributes":{},"id":"21215","type":"Selection"},{"attributes":{},"id":"21178","type":"SaveTool"},{"attributes":{},"id":"21160","type":"LinearScale"},{"attributes":{"axis":{"id":"21168"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21171","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"21191"},"glyph":{"id":"21192"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21194"},"nonselection_glyph":{"id":"21193"},"view":{"id":"21196"}},"id":"21195","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21192","type":"Circle"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21207"},"group":null,"major_label_policy":{"id":"21208"},"ticker":{"id":"21169"}},"id":"21168","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21180","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"21198"},"glyph":{"id":"21197"},"group":null,"hover_glyph":null,"view":{"id":"21200"}},"id":"21199","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21215"},"selection_policy":{"id":"21214"}},"id":"21198","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"21221"},{"id":"21219"}]},"id":"21222","type":"Column"},{"attributes":{},"id":"21173","type":"PanTool"},{"attributes":{"below":[{"id":"21164"}],"center":[{"id":"21167"},{"id":"21171"}],"height":500,"left":[{"id":"21168"}],"output_backend":"webgl","renderers":[{"id":"21195"},{"id":"21199"},{"id":"21201"},{"id":"21202"}],"title":{"id":"21203"},"toolbar":{"id":"21182"},"toolbar_location":null,"width":500,"x_range":{"id":"21156"},"x_scale":{"id":"21160"},"y_range":{"id":"21158"},"y_scale":{"id":"21162"}},"id":"21155","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21207","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21203","type":"Title"},{"attributes":{},"id":"21177","type":"UndoTool"},{"attributes":{},"id":"21169","type":"BasicTicker"},{"attributes":{"source":{"id":"21191"}},"id":"21196","type":"CDSView"},{"attributes":{},"id":"21162","type":"LinearScale"},{"attributes":{},"id":"21212","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"21179","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21194","type":"Circle"},{"attributes":{"overlay":{"id":"21181"}},"id":"21176","type":"LassoSelectTool"},{"attributes":{},"id":"21172","type":"ResetTool"},{"attributes":{"source":{"id":"21198"}},"id":"21200","type":"CDSView"},{"attributes":{},"id":"21214","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21201","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21197","type":"Scatter"},{"attributes":{},"id":"21210","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"21180"}},"id":"21174","type":"BoxZoomTool"},{"attributes":{},"id":"21175","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"21164"},"coordinates":null,"group":null,"ticker":null},"id":"21167","type":"Grid"},{"attributes":{"children":[[{"id":"21155"},0,0]]},"id":"21219","type":"GridBox"},{"attributes":{},"id":"21208","type":"AllLabels"},{"attributes":{},"id":"21156","type":"DataRange1d"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21181","type":"PolyAnnotation"},{"attributes":{},"id":"21158","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"21182"}],"tools":[{"id":"21172"},{"id":"21173"},{"id":"21174"},{"id":"21175"},{"id":"21176"},{"id":"21177"},{"id":"21178"},{"id":"21179"}]},"id":"21220","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"21220"},"toolbar_location":"above"},"id":"21221","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21210"},"group":null,"major_label_policy":{"id":"21211"},"ticker":{"id":"21165"}},"id":"21164","type":"LinearAxis"}],"root_ids":["21222"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"ffc5ccb8-9aed-44da-a776-a6ffa9ae68fe","root_ids":["21222"],"roots":{"21222":"cfb44b92-7f90-43e3-83ad-1c908e0a09d6"}}];
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