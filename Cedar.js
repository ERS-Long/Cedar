define([
	'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'gis/dijit/_FloatingWidgetMixin',
    'dojo/query',
    'dojo/topic',
    'dojo/text!./Cedar/templates/Cedar.html',
    './Cedar/cedar',
	'dijit/layout/ContentPane',
    'dijit/registry'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _FloatingWidgetMixin, query, topic, Template, Cedar, ContentPane, registry) {
    var mapurl;
    var cedarChart;
    var pane;
	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _FloatingWidgetMixin], {
		widgetsInTemplate: true,
        templateString: Template,

		postCreate: function () {
			this.inherited(arguments);
		},

        onCreateCedar: function()
        {
            mapurl = document.getElementById('mapSvrUrl').value;

            if (!pane)
            {
                var tabsid = query(".attributesTabContainer")[0].id;
                var tabs = registry.byId(tabsid);

                pane = new ContentPane({ title: "Cedar Chart", content: '<div id="cedarchart"></div>' });            
                tabs.addChild(pane);
                tabs.selectChild(pane);    
            }

            //open the bottom pane
            topic.publish('viewer/togglePane', {
                pane: 'bottom',
                show: 'block'
            });              

            cedarChart = new Cedar({
                "type":"scatter",
                "dataset":{
                    "url": mapurl,
                    "query":{},
                    "mappings":{
                        "x": {"field":"Number_of","label":"Student Enrollment (2008)"},
                        "y": {"field":"F_of_teach","label":"Fraction of Teachers"},
                        "color":{"field":"Type","label":"Facility Type"}
                    }
                }
            });

            cedarChart.tooltip = {
                "title": "{Name}",
                "content": "{Number_of} students"
            }

            cedarChart.show({
                elementId: "#cedarchart",
                autolabels: true
            });            
        }
	});
});
