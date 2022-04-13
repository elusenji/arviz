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
    
      
      
    
      const element = document.getElementById("af5af709-c0f0-482e-9ade-e018beddc9db");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af5af709-c0f0-482e-9ade-e018beddc9db' but no matching script tag was found.")
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
                    
                  const docs_json = '{"daa321ac-87fa-466b-90de-40f6e30c213b":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"21311"}},"id":"21316","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21312","type":"Circle"},{"attributes":{},"id":"21322","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21301","type":"PolyAnnotation"},{"attributes":{},"id":"21327","type":"UnionRenderers"},{"attributes":{},"id":"21292","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21313","type":"Circle"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21325"},"group":null,"major_label_policy":{"id":"21326"},"ticker":{"id":"21285"}},"id":"21284","type":"LinearAxis"},{"attributes":{"tools":[{"id":"21292"},{"id":"21293"},{"id":"21294"},{"id":"21295"},{"id":"21296"},{"id":"21297"},{"id":"21298"},{"id":"21299"}]},"id":"21302","type":"Toolbar"},{"attributes":{},"id":"21326","type":"AllLabels"},{"attributes":{},"id":"21276","type":"DataRange1d"},{"attributes":{},"id":"21328","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21318","type":"Title"},{"attributes":{},"id":"21278","type":"DataRange1d"},{"attributes":{"axis":{"id":"21284"},"coordinates":null,"group":null,"ticker":null},"id":"21287","type":"Grid"},{"attributes":{},"id":"21323","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21314","type":"Circle"},{"attributes":{"callback":null},"id":"21299","type":"HoverTool"},{"attributes":{},"id":"21295","type":"WheelZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21322"},"group":null,"major_label_policy":{"id":"21323"},"ticker":{"id":"21289"}},"id":"21288","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"21333"},"toolbar_location":"above"},"id":"21334","type":"ToolbarBox"},{"attributes":{},"id":"21325","type":"BasicTickFormatter"},{"attributes":{},"id":"21298","type":"SaveTool"},{"attributes":{},"id":"21285","type":"BasicTicker"},{"attributes":{"below":[{"id":"21284"}],"center":[{"id":"21287"},{"id":"21291"}],"height":500,"left":[{"id":"21288"}],"output_backend":"webgl","renderers":[{"id":"21315"},{"id":"21317"}],"title":{"id":"21318"},"toolbar":{"id":"21302"},"toolbar_location":null,"width":500,"x_range":{"id":"21276"},"x_scale":{"id":"21280"},"y_range":{"id":"21278"},"y_scale":{"id":"21282"}},"id":"21275","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"21300"}},"id":"21294","type":"BoxZoomTool"},{"attributes":{},"id":"21282","type":"LinearScale"},{"attributes":{"children":[{"id":"21334"},{"id":"21332"}]},"id":"21335","type":"Column"},{"attributes":{"children":[[{"id":"21275"},0,0]]},"id":"21332","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21311"},"glyph":{"id":"21312"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21314"},"nonselection_glyph":{"id":"21313"},"view":{"id":"21316"}},"id":"21315","type":"GlyphRenderer"},{"attributes":{},"id":"21293","type":"PanTool"},{"attributes":{"overlay":{"id":"21301"}},"id":"21296","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"21302"}],"tools":[{"id":"21292"},{"id":"21293"},{"id":"21294"},{"id":"21295"},{"id":"21296"},{"id":"21297"},{"id":"21298"},{"id":"21299"}]},"id":"21333","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21300","type":"BoxAnnotation"},{"attributes":{},"id":"21289","type":"BasicTicker"},{"attributes":{},"id":"21280","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21328"},"selection_policy":{"id":"21327"}},"id":"21311","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21317","type":"Span"},{"attributes":{},"id":"21297","type":"UndoTool"},{"attributes":{"axis":{"id":"21288"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21291","type":"Grid"}],"root_ids":["21335"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"daa321ac-87fa-466b-90de-40f6e30c213b","root_ids":["21335"],"roots":{"21335":"af5af709-c0f0-482e-9ade-e018beddc9db"}}];
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