# Cedar
Widget for CMV to use ESRI <a href="https://github.com/Esri/cedar"> cedar api </a>

1. need to add the required package

            var dojoConfig = {
                async: true,
                packages: [{
                    name: 'viewer',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/viewer'
                },{
                    name: 'config',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/config'
                },{
                    name: 'gis',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/gis'
                },{
                    name: 'widgets',
                    location: location.pathname.replace(/[^\/]+$/, '') + './widgets'
                },{
                    name: 'dgrid1',
                    location: '//cdn.rawgit.com/SitePen/dgrid/v0.4.0'
                },{
                    name: 'dstore1',
                    location: '//cdn.rawgit.com/SitePen/dstore/v1.0.0'
                },{
                    name: 'd3',
                    location: '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.5',
                    main: 'd3.min'
                },{
                    name: 'topojson',
                    location: '//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19',
                    main: 'topojson.min'
                },{
                    name: 'vega',
                    location: '//vega.github.io/vega/',
                    main: 'vega.min'
                }]
            };
            
  2. Viewer.js setting
  
              cedar: {
                include: true,
                id: 'cedar',
                type: 'titlePane',
                path: 'widgets/Cedar',
                canFloat: true,
                title: '<i class="icon-large icon-road"></i>&nbsp;&nbsp;Cedar',
                open: false,
                position: 26,
                options: {
                    map: true
                }
            },
