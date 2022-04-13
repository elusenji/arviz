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
    
      
      
    
      const element = document.getElementById("2bd04e10-b560-4790-9f1b-47461e7a5785");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2bd04e10-b560-4790-9f1b-47461e7a5785' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7e231d81-e5fe-4603-b74e-d76e188c72cc":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18216","type":"ResetTool"},{"attributes":{},"id":"18276","type":"Selection"},{"attributes":{"axis":{"id":"18208"},"coordinates":null,"group":null,"ticker":null},"id":"18211","type":"Grid"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18235","type":"FixedTicker"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18250","type":"Circle"},{"attributes":{"coordinates":null,"group":null},"id":"18268","type":"Title"},{"attributes":{"axis":{"id":"18212"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18215","type":"Grid"},{"attributes":{},"id":"18278","type":"Selection"},{"attributes":{},"id":"18219","type":"WheelZoomTool"},{"attributes":{},"id":"18221","type":"UndoTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18244","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18258","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18262","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18263","type":"Circle"},{"attributes":{},"id":"18282","type":"Selection"},{"attributes":{"toolbar":{"id":"18289"},"toolbar_location":"above"},"id":"18290","type":"ToolbarBox"},{"attributes":{"data":{"xs":[[-30.896720059785245,-30.72439675060665]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18278"},"selection_policy":{"id":"18277"}},"id":"18243","type":"ColumnDataSource"},{"attributes":{},"id":"18209","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18245","type":"MultiLine"},{"attributes":{"children":[{"id":"18290"},{"id":"18288"}]},"id":"18291","type":"Column"},{"attributes":{},"id":"18279","type":"UnionRenderers"},{"attributes":{},"id":"18274","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18251","type":"Circle"},{"attributes":{"coordinates":null,"formatter":{"id":"18270"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18271"},"ticker":{"id":"18235"}},"id":"18212","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18252","type":"Circle"},{"attributes":{},"id":"18277","type":"UnionRenderers"},{"attributes":{},"id":"18280","type":"Selection"},{"attributes":{"below":[{"id":"18208"}],"center":[{"id":"18211"},{"id":"18215"}],"height":500,"left":[{"id":"18212"}],"output_backend":"webgl","renderers":[{"id":"18241"},{"id":"18247"},{"id":"18253"},{"id":"18259"},{"id":"18265"},{"id":"18267"}],"title":{"id":"18268"},"toolbar":{"id":"18226"},"toolbar_location":null,"width":500,"x_range":{"id":"18200"},"x_scale":{"id":"18204"},"y_range":{"id":"18202"},"y_scale":{"id":"18206"}},"id":"18199","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18270","type":"BasicTickFormatter"},{"attributes":{},"id":"18281","type":"UnionRenderers"},{"attributes":{},"id":"18284","type":"Selection"},{"attributes":{},"id":"18275","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"18261"},"glyph":{"id":"18262"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18264"},"nonselection_glyph":{"id":"18263"},"view":{"id":"18266"}},"id":"18265","type":"GlyphRenderer"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18273"},"group":null,"major_label_policy":{"id":"18274"},"ticker":{"id":"18209"}},"id":"18208","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"18243"},"glyph":{"id":"18244"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18246"},"nonselection_glyph":{"id":"18245"},"view":{"id":"18248"}},"id":"18247","type":"GlyphRenderer"},{"attributes":{},"id":"18200","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18257","type":"MultiLine"},{"attributes":{},"id":"18217","type":"PanTool"},{"attributes":{"source":{"id":"18243"}},"id":"18248","type":"CDSView"},{"attributes":{},"id":"18283","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18264","type":"Circle"},{"attributes":{},"id":"18204","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18237"},"glyph":{"id":"18238"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18240"},"nonselection_glyph":{"id":"18239"},"view":{"id":"18242"}},"id":"18241","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18246","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18280"},"selection_policy":{"id":"18279"}},"id":"18249","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18225","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18240","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18239","type":"Scatter"},{"attributes":{"data":{"xs":[[-32.05318232491158,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18282"},"selection_policy":{"id":"18281"}},"id":"18255","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18261"}},"id":"18266","type":"CDSView"},{"attributes":{"source":{"id":"18237"}},"id":"18242","type":"CDSView"},{"attributes":{},"id":"18273","type":"BasicTickFormatter"},{"attributes":{"end":0.5,"start":-1.5},"id":"18202","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18224","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"18223","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18284"},"selection_policy":{"id":"18283"}},"id":"18261","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18276"},"selection_policy":{"id":"18275"}},"id":"18237","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"18199"},0,0]]},"id":"18288","type":"GridBox"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18238","type":"Scatter"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18256","type":"MultiLine"},{"attributes":{"overlay":{"id":"18224"}},"id":"18218","type":"BoxZoomTool"},{"attributes":{},"id":"18222","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"18226"}],"tools":[{"id":"18216"},{"id":"18217"},{"id":"18218"},{"id":"18219"},{"id":"18220"},{"id":"18221"},{"id":"18222"},{"id":"18223"}]},"id":"18289","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"18249"},"glyph":{"id":"18250"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18252"},"nonselection_glyph":{"id":"18251"},"view":{"id":"18254"}},"id":"18253","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18267","type":"Span"},{"attributes":{"source":{"id":"18255"}},"id":"18260","type":"CDSView"},{"attributes":{"overlay":{"id":"18225"}},"id":"18220","type":"LassoSelectTool"},{"attributes":{},"id":"18271","type":"AllLabels"},{"attributes":{"tools":[{"id":"18216"},{"id":"18217"},{"id":"18218"},{"id":"18219"},{"id":"18220"},{"id":"18221"},{"id":"18222"},{"id":"18223"}]},"id":"18226","type":"Toolbar"},{"attributes":{"source":{"id":"18249"}},"id":"18254","type":"CDSView"},{"attributes":{},"id":"18206","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18255"},"glyph":{"id":"18256"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18258"},"nonselection_glyph":{"id":"18257"},"view":{"id":"18260"}},"id":"18259","type":"GlyphRenderer"}],"root_ids":["18291"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"7e231d81-e5fe-4603-b74e-d76e188c72cc","root_ids":["18291"],"roots":{"18291":"2bd04e10-b560-4790-9f1b-47461e7a5785"}}];
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