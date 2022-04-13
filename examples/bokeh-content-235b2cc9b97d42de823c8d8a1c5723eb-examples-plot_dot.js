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
    
      
      
    
      const element = document.getElementById("b0b51cbb-3cae-4c7c-930c-1ec6d92f1885");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b0b51cbb-3cae-4c7c-930c-1ec6d92f1885' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8cc8e4e1-9022-418e-87a1-3e1557de18ec":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20601","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20599"},"glyph":{"id":"20600"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20602"},"nonselection_glyph":{"id":"20601"},"view":{"id":"20604"}},"id":"20603","type":"GlyphRenderer"},{"attributes":{},"id":"20559","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20602","type":"Circle"},{"attributes":{},"id":"20617","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20584","type":"Line"},{"attributes":{"toolbar":{"id":"20625"},"toolbar_location":"above"},"id":"20626","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20570","type":"BoxAnnotation"},{"attributes":{"source":{"id":"20599"}},"id":"20604","type":"CDSView"},{"attributes":{},"id":"20616","type":"Selection"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20588","type":"Line"},{"attributes":{},"id":"20546","type":"DataRange1d"},{"attributes":{},"id":"20615","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null},"id":"20605","type":"Title"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20600","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20590","type":"Line"},{"attributes":{},"id":"20568","type":"SaveTool"},{"attributes":{},"id":"20614","type":"Selection"},{"attributes":{"toolbars":[{"id":"20572"}],"tools":[{"id":"20562"},{"id":"20563"},{"id":"20564"},{"id":"20565"},{"id":"20566"},{"id":"20567"},{"id":"20568"},{"id":"20569"}]},"id":"20625","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20571","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20596","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20620"},"selection_policy":{"id":"20619"}},"id":"20599","type":"ColumnDataSource"},{"attributes":{},"id":"20608","type":"BasicTickFormatter"},{"attributes":{},"id":"20609","type":"AllLabels"},{"attributes":{},"id":"20555","type":"BasicTicker"},{"attributes":{},"id":"20611","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20587"}},"id":"20592","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"20618"},"selection_policy":{"id":"20617"}},"id":"20593","type":"ColumnDataSource"},{"attributes":{},"id":"20612","type":"AllLabels"},{"attributes":{},"id":"20618","type":"Selection"},{"attributes":{},"id":"20562","type":"ResetTool"},{"attributes":{"overlay":{"id":"20570"}},"id":"20564","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"20554"},"coordinates":null,"group":null,"ticker":null},"id":"20557","type":"Grid"},{"attributes":{"tools":[{"id":"20562"},{"id":"20563"},{"id":"20564"},{"id":"20565"},{"id":"20566"},{"id":"20567"},{"id":"20568"},{"id":"20569"}]},"id":"20572","type":"Toolbar"},{"attributes":{},"id":"20567","type":"UndoTool"},{"attributes":{"source":{"id":"20581"}},"id":"20586","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20593"},"glyph":{"id":"20594"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20596"},"nonselection_glyph":{"id":"20595"},"view":{"id":"20598"}},"id":"20597","type":"GlyphRenderer"},{"attributes":{},"id":"20563","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20583","type":"Line"},{"attributes":{"children":[[{"id":"20545"},0,0]]},"id":"20624","type":"GridBox"},{"attributes":{"overlay":{"id":"20571"}},"id":"20566","type":"LassoSelectTool"},{"attributes":{},"id":"20619","type":"UnionRenderers"},{"attributes":{},"id":"20550","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20595","type":"Circle"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20582","type":"Line"},{"attributes":{"below":[{"id":"20554"}],"center":[{"id":"20557"},{"id":"20561"}],"height":360,"left":[{"id":"20558"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20585"},{"id":"20591"},{"id":"20597"},{"id":"20603"}],"title":{"id":"20605"},"toolbar":{"id":"20572"},"toolbar_location":null,"width":720,"x_range":{"id":"20546"},"x_scale":{"id":"20550"},"y_range":{"id":"20548"},"y_scale":{"id":"20552"}},"id":"20545","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20565","type":"WheelZoomTool"},{"attributes":{},"id":"20552","type":"LinearScale"},{"attributes":{},"id":"20620","type":"Selection"},{"attributes":{"children":[{"id":"20626"},{"id":"20624"}]},"id":"20627","type":"Column"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20614"},"selection_policy":{"id":"20613"}},"id":"20581","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20558"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20561","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20594","type":"Circle"},{"attributes":{"callback":null},"id":"20569","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20587"},"glyph":{"id":"20588"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20590"},"nonselection_glyph":{"id":"20589"},"view":{"id":"20592"}},"id":"20591","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20608"},"group":null,"major_label_policy":{"id":"20609"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20559"}},"id":"20558","type":"LinearAxis"},{"attributes":{},"id":"20613","type":"UnionRenderers"},{"attributes":{},"id":"20548","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20589","type":"Line"},{"attributes":{"coordinates":null,"formatter":{"id":"20611"},"group":null,"major_label_policy":{"id":"20612"},"ticker":{"id":"20555"}},"id":"20554","type":"LinearAxis"},{"attributes":{"source":{"id":"20593"}},"id":"20598","type":"CDSView"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20616"},"selection_policy":{"id":"20615"}},"id":"20587","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20581"},"glyph":{"id":"20582"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20584"},"nonselection_glyph":{"id":"20583"},"view":{"id":"20586"}},"id":"20585","type":"GlyphRenderer"}],"root_ids":["20627"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"8cc8e4e1-9022-418e-87a1-3e1557de18ec","root_ids":["20627"],"roots":{"20627":"b0b51cbb-3cae-4c7c-930c-1ec6d92f1885"}}];
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