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
    
      
      
    
      const element = document.getElementById("f3d66a79-58a8-4621-9cc8-dcb2aa790d11");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3d66a79-58a8-4621-9cc8-dcb2aa790d11' but no matching script tag was found.")
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
                    
                  const docs_json = '{"5b04441c-de3e-4a01-8b86-b5108a5f77fd":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23925","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23951","type":"Patch"},{"attributes":{"coordinates":null,"data_source":{"id":"23942"},"glyph":{"id":"23943"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23945"},"nonselection_glyph":{"id":"23944"},"view":{"id":"23947"}},"id":"23946","type":"GlyphRenderer"},{"attributes":{},"id":"23962","type":"UnionRenderers"},{"attributes":{},"id":"23967","type":"Selection"},{"attributes":{},"id":"23903","type":"DataRange1d"},{"attributes":{},"id":"23907","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23945","type":"Patch"},{"attributes":{},"id":"23965","type":"Selection"},{"attributes":{},"id":"23957","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"23936"}},"id":"23941","type":"CDSView"},{"attributes":{"toolbars":[{"id":"23927"}],"tools":[{"id":"23917"},{"id":"23918"},{"id":"23919"},{"id":"23920"},{"id":"23921"},{"id":"23922"},{"id":"23923"},{"id":"23924"}]},"id":"23972","type":"ProxyToolbar"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23943","type":"Patch"},{"attributes":{},"id":"23958","type":"AllLabels"},{"attributes":{},"id":"23910","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23944","type":"Patch"},{"attributes":{},"id":"23923","type":"SaveTool"},{"attributes":{"toolbar":{"id":"23972"},"toolbar_location":"above"},"id":"23973","type":"ToolbarBox"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23949","type":"Patch"},{"attributes":{"source":{"id":"23948"}},"id":"23953","type":"CDSView"},{"attributes":{"coordinates":null,"group":null},"id":"23954","type":"Title"},{"attributes":{"axis":{"id":"23913"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23916","type":"Grid"},{"attributes":{"coordinates":null,"formatter":{"id":"23957"},"group":null,"major_label_policy":{"id":"23958"},"ticker":{"id":"23914"}},"id":"23913","type":"LinearAxis"},{"attributes":{},"id":"23961","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"23948"},"glyph":{"id":"23949"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23951"},"nonselection_glyph":{"id":"23950"},"view":{"id":"23953"}},"id":"23952","type":"GlyphRenderer"},{"attributes":{},"id":"23960","type":"BasicTickFormatter"},{"attributes":{},"id":"23966","type":"UnionRenderers"},{"attributes":{"source":{"id":"23942"}},"id":"23947","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"23960"},"group":null,"major_label_policy":{"id":"23961"},"ticker":{"id":"23910"}},"id":"23909","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23950","type":"Patch"},{"attributes":{"callback":null},"id":"23924","type":"HoverTool"},{"attributes":{"children":[{"id":"23973"},{"id":"23971"}]},"id":"23974","type":"Column"},{"attributes":{},"id":"23914","type":"BasicTicker"},{"attributes":{},"id":"23922","type":"UndoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23938","type":"Patch"},{"attributes":{"axis":{"id":"23909"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23912","type":"Grid"},{"attributes":{"tools":[{"id":"23917"},{"id":"23918"},{"id":"23919"},{"id":"23920"},{"id":"23921"},{"id":"23922"},{"id":"23923"},{"id":"23924"}]},"id":"23927","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"23936"},"glyph":{"id":"23937"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23939"},"nonselection_glyph":{"id":"23938"},"view":{"id":"23941"}},"id":"23940","type":"GlyphRenderer"},{"attributes":{},"id":"23917","type":"ResetTool"},{"attributes":{},"id":"23901","type":"DataRange1d"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23926","type":"PolyAnnotation"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23937","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"nR6niand8D8FVM+oibTwP148zZG6mvA/11q1piGl8D9g8cYAG8DwP3KUaBQ66fA/7OeRTT4u8T+Qbkjx6znxPzYCvMgWqfE/k7xvrkoo8j8cDxeEa27yP5uYHquvsvI/vD9wAR5U8z9MNpy6mK7zP139XfpsEfQ/jwz8GEPm9D93XSHxxe70P42AjsD84/U/qISmJ/Mu9j/cuiZBhQH3P9irK14gb/c/glK9FH8t+D8I07CUTa/4Pwlohb6Dbvk/NPo1y3rv+T8+GmIrufL6P2QhuwGoL/s/lEhAONVv/D9H5py41Oz8P8BvxW4CsP0/8JZKpS/w/j9PhDJPrvT+PxDf520uGABA1Jf2lpiKAECmcioJRbgAQD4GbaRbWAFA1pmvP3L4AUAkeKjVVk0CQGwt8tqImAJABME0dp84A0CcVHcRttgDQDTouazMeARAFkZeuZywBEDKe/xH4xgFQGIPP+P5uAVA+qKBfhBZBkBqgocOSYkGQJA2xBkn+QZAbJR+SrsqB0Aoyga1PZkHQO46BCNxqQdASNvgRe7rB0BU5/NHnRYIQMBdSVBUOQhA5BaZCdpCCEBRI/+GVU0IQKcfZgldOghAwF1JUFQ5CECr+vuhCiAIQDaawiRqAAhASyBu2WrVB0AYfd3MuqMHQCjKBrU9mQdAma0+L9lvB0BSg7J5JDMHQJA2xBkn+QZAZVeDj0bqBkAkFabcdY4GQPqigX4QWQZAhTdkZsQeBkBiDz/j+bgFQLl4Ekl/owVAynv8R+MYBUBhCxALVBMFQDTouazMeARAEHauanBcBECcVHcRttgDQMSzWtwdlQNABME0dp84A0BG145yx9cCQGwt8tqImAJAFU/jpBYZAkDWma8/cvgBQD4GbaRbWAFAoG2baq08AUCmcioJRbgAQBDf520uGABAWwlP4Ljs/z/wlkqlL/D+P8BvxW4CsP0/lEhAONVv/D8cv2LR6mT7P2MhuwGoL/s/NPo1y3rv+T8I07CUTa/4P9Lqx1QCPPg/2KsrXiBv9z+ohKYn8y72P3ddIfHF7vQ/On5bkkuX9D9MNpy6mK7zP05b5WmMwPI/HA8XhGtu8j+dmo36w9TxP+znkU0+LvE/nR6niand8D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"fHWM64Wx9z/+7QeqXsj4P4Bmg2g33/k/BN/+JhD2+j+FV3rl6Az8PwjQ9aPBI/0/sHO5Z4UR/j+ISHFimjr+PwzB7CBzUf8/yBy07yU0AEBQ9yA1FHsAQAjZ8U6SvwBASpUvrv5KAUCwORaqjJABQIpRbQ1r1gFAzA2rbNdhAkBRmqeC32YCQAzK6MtD7QJAc5rKO7MRA0BOhiYrsHgDQPzE8SUPqwNAjkJkihwEBEA1jI4MTj4EQND+oemIjwRAtyHZ4kfCBEATu99I9RoFQBriu0JlLgVAdT5G+daFBUBSdx2oYaYFQNo8Obco2gVAKK+765UwBkCUM1sHzjEGQGsYEnaviAZA1O+YZjq9BkDaqaISMNIGQB1u/W3qCgdAQ10TVtU2B0AWrNbFpkgHQIC99oqdWAdAGhW1Gg5pB0DZSrjgk2IHQG68k7LXTgdAFqzWxaZIB0CVRDfSeDwHQHvsPh9yHwdACoDIvZTfBkDU75hmOr0GQK3VghErYQZAlDNbB84xBkC52TSLu7oFQFN3HahhpgVAErvfSPUaBUDQ/qHpiI8EQDdvt1W+IgRAjkJkihwEBEBOhiYrsHgDQAzK6MtD7QJAfWpNt9TnAkDMDats12ECQIpRbQ1r1gFASpUvrv5KAUAI2fFOkr8AQPcjcZR2pQBAyBy07yU0AEAMwewgc1H/P5wUwbancf4/iEhxYpo6/j8I0PWjwSP9P8fjWzaznvw/hFd65egM/D+Cww0q9yT7PwTf/iYQ9vo/NMco0Kbo+T+AZoNoN9/5P6hJb+dL7/g//u0Hql7I+D9mAvmtExD4P3x1jOuFsfc/3UQBsCYs9z/6/BAtrZr2P61a2DQYPfY/eYSVbtSD9T8PMpbYXlf1P1mSX+hUi/Q/9gsasPts9D8+lYd18OPzP23x01ogafM/dJOe8SJW8z8mEuI0MwrzPwydHdtcvfI/uhfnBf508j/wGiMzSj/yP7BmXUezM/I/8t05zngV8j+7ffMcGyryP/AaIzNKP/I/5jqZZtlo8j8VqShznL/yP26ejCXmLfM/dJOe8SJW8z+AbGiw7MbzP/YLGrD7bPQ/yCrxFHu89D94hJVu1IP1P/r8EC2tmvY/fHWM64Wx9z8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"23967"},"selection_policy":{"id":"23966"}},"id":"23948","type":"ColumnDataSource"},{"attributes":{},"id":"23963","type":"Selection"},{"attributes":{},"id":"23905","type":"LinearScale"},{"attributes":{},"id":"23964","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"23925"}},"id":"23919","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23939","type":"Patch"},{"attributes":{},"id":"23920","type":"WheelZoomTool"},{"attributes":{},"id":"23918","type":"PanTool"},{"attributes":{"overlay":{"id":"23926"}},"id":"23921","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[532]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[532]}},"selected":{"id":"23963"},"selection_policy":{"id":"23962"}},"id":"23936","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[317]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[317]}},"selected":{"id":"23965"},"selection_policy":{"id":"23964"}},"id":"23942","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"23909"}],"center":[{"id":"23912"},{"id":"23916"}],"height":500,"left":[{"id":"23913"}],"output_backend":"webgl","renderers":[{"id":"23940"},{"id":"23946"},{"id":"23952"}],"title":{"id":"23954"},"toolbar":{"id":"23927"},"toolbar_location":null,"width":500,"x_range":{"id":"23901"},"x_scale":{"id":"23905"},"y_range":{"id":"23903"},"y_scale":{"id":"23907"}},"id":"23900","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"23900"},0,0]]},"id":"23971","type":"GridBox"}],"root_ids":["23974"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"5b04441c-de3e-4a01-8b86-b5108a5f77fd","root_ids":["23974"],"roots":{"23974":"f3d66a79-58a8-4621-9cc8-dcb2aa790d11"}}];
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