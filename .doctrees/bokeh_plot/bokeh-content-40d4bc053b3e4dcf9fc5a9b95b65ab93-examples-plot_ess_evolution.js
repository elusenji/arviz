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
    
      
      
    
      const element = document.getElementById("54e76988-447f-4b30-b8cb-03a146186500");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '54e76988-447f-4b30-b8cb-03a146186500' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cd275df8-301a-40a6-8b47-f3f31102b2b5":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21013","type":"BasicTicker"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"21039"},{"id":"21045"}]},"id":"21061","type":"LegendItem"},{"attributes":{},"id":"21073","type":"Selection"},{"attributes":{"axis":{"id":"21008"},"coordinates":null,"group":null,"ticker":null},"id":"21011","type":"Grid"},{"attributes":{},"id":"21074","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21067"},"group":null,"major_label_policy":{"id":"21068"},"ticker":{"id":"21013"}},"id":"21012","type":"LinearAxis"},{"attributes":{"above":[{"id":"21060"}],"below":[{"id":"21008"}],"center":[{"id":"21011"},{"id":"21015"}],"height":500,"left":[{"id":"21012"}],"output_backend":"webgl","renderers":[{"id":"21039"},{"id":"21045"},{"id":"21051"},{"id":"21057"},{"id":"21059"}],"title":{"id":"21063"},"toolbar":{"id":"21026"},"toolbar_location":null,"width":500,"x_range":{"id":"21000"},"x_scale":{"id":"21004"},"y_range":{"id":"21002"},"y_scale":{"id":"21006"}},"id":"20999","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21024","type":"BoxAnnotation"},{"attributes":{},"id":"21071","type":"AllLabels"},{"attributes":{},"id":"21017","type":"PanTool"},{"attributes":{"toolbar":{"id":"21084"},"toolbar_location":"above"},"id":"21085","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21041"},"glyph":{"id":"21042"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21044"},"nonselection_glyph":{"id":"21043"},"view":{"id":"21046"}},"id":"21045","type":"GlyphRenderer"},{"attributes":{},"id":"21004","type":"LinearScale"},{"attributes":{},"id":"21076","type":"UnionRenderers"},{"attributes":{},"id":"21021","type":"UndoTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21042","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21075"},"selection_policy":{"id":"21074"}},"id":"21041","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21054","type":"Circle"},{"attributes":{},"id":"21022","type":"SaveTool"},{"attributes":{},"id":"21068","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21037","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21059","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21038","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21063","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21073"},"selection_policy":{"id":"21072"}},"id":"21035","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21036","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21055","type":"Circle"},{"attributes":{"tools":[{"id":"21016"},{"id":"21017"},{"id":"21018"},{"id":"21019"},{"id":"21020"},{"id":"21021"},{"id":"21022"},{"id":"21023"}]},"id":"21026","type":"Toolbar"},{"attributes":{},"id":"21075","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21056","type":"Circle"},{"attributes":{},"id":"21078","type":"UnionRenderers"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21057"},{"id":"21051"}]},"id":"21062","type":"LegendItem"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21044","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21043","type":"Line"},{"attributes":{"source":{"id":"21035"}},"id":"21040","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21025","type":"PolyAnnotation"},{"attributes":{},"id":"21006","type":"LinearScale"},{"attributes":{},"id":"21070","type":"BasicTickFormatter"},{"attributes":{},"id":"21077","type":"Selection"},{"attributes":{"callback":null},"id":"21023","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21077"},"selection_policy":{"id":"21076"}},"id":"21047","type":"ColumnDataSource"},{"attributes":{},"id":"21002","type":"DataRange1d"},{"attributes":{"overlay":{"id":"21025"}},"id":"21020","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21079"},"selection_policy":{"id":"21078"}},"id":"21053","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21053"},"glyph":{"id":"21054"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21056"},"nonselection_glyph":{"id":"21055"},"view":{"id":"21058"}},"id":"21057","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21041"}},"id":"21046","type":"CDSView"},{"attributes":{"toolbars":[{"id":"21026"}],"tools":[{"id":"21016"},{"id":"21017"},{"id":"21018"},{"id":"21019"},{"id":"21020"},{"id":"21021"},{"id":"21022"},{"id":"21023"}]},"id":"21084","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21047"},"glyph":{"id":"21048"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21050"},"nonselection_glyph":{"id":"21049"},"view":{"id":"21052"}},"id":"21051","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21053"}},"id":"21058","type":"CDSView"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21061"},{"id":"21062"}],"location":"center_right","orientation":"horizontal"},"id":"21060","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21049","type":"Line"},{"attributes":{},"id":"21009","type":"BasicTicker"},{"attributes":{"children":[[{"id":"20999"},0,0]]},"id":"21083","type":"GridBox"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21050","type":"Line"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21070"},"group":null,"major_label_policy":{"id":"21071"},"ticker":{"id":"21009"}},"id":"21008","type":"LinearAxis"},{"attributes":{"overlay":{"id":"21024"}},"id":"21018","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"21012"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21015","type":"Grid"},{"attributes":{},"id":"21079","type":"Selection"},{"attributes":{},"id":"21000","type":"DataRange1d"},{"attributes":{"children":[{"id":"21085"},{"id":"21083"}]},"id":"21086","type":"Column"},{"attributes":{},"id":"21019","type":"WheelZoomTool"},{"attributes":{},"id":"21072","type":"UnionRenderers"},{"attributes":{"source":{"id":"21047"}},"id":"21052","type":"CDSView"},{"attributes":{},"id":"21067","type":"BasicTickFormatter"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21048","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21035"},"glyph":{"id":"21036"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21038"},"nonselection_glyph":{"id":"21037"},"view":{"id":"21040"}},"id":"21039","type":"GlyphRenderer"},{"attributes":{},"id":"21016","type":"ResetTool"}],"root_ids":["21086"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cd275df8-301a-40a6-8b47-f3f31102b2b5","root_ids":["21086"],"roots":{"21086":"54e76988-447f-4b30-b8cb-03a146186500"}}];
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