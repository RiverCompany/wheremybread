var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Дорога'
            });
var format_Route_csv_2 = new ol.format.GeoJSON();
var features_Route_csv_2 = format_Route_csv_2.readFeatures(json_Route_csv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_csv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_csv_2.addFeatures(features_Route_csv_2);
var lyr_Route_csv_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_csv_2, 
                style: style_Route_csv_2,
                interactive: true,
    title: 'Route_csv<br />\
    <img src="styles/legend/Route_csv_2_0.png" /> Движение<br />\
    <img src="styles/legend/Route_csv_2_1.png" /> Остановка<br />\
    <img src="styles/legend/Route_csv_2_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr_Route_csv_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr_Route_csv_2];
lyr__1.set('fieldAliases', {'id': 'id', });
lyr_Route_csv_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr__1.set('fieldImages', {'id': 'TextEdit', });
lyr_Route_csv_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', });
lyr_Route_csv_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_Route_csv_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});