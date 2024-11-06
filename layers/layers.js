var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ElectoralDistricts_1 = new ol.format.GeoJSON();
var features_ElectoralDistricts_1 = format_ElectoralDistricts_1.readFeatures(json_ElectoralDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_1.addFeatures(features_ElectoralDistricts_1);
var lyr_ElectoralDistricts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_1, 
                style: style_ElectoralDistricts_1,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_1_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_1_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_1_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_1_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_1_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_1_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_1_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_1_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_1_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_1_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ElectoralDistricts_1.setVisible(true);lyr_Roads_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ElectoralDistricts_1,lyr_Roads_2];
lyr_ElectoralDistricts_1.set('fieldAliases', {'fid': 'fid', 'Councillor': 'Councillor', 'Chairman of Committee': 'Chairman of Committee', 'Electoral District': 'Electoral District', 'Email': 'Email', 'Contact Number': 'Contact Number', });
lyr_Roads_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_ElectoralDistricts_1.set('fieldImages', {'fid': 'TextEdit', 'Councillor': 'TextEdit', 'Chairman of Committee': 'TextEdit', 'Electoral District': 'TextEdit', 'Email': 'TextEdit', 'Contact Number': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_ElectoralDistricts_1.set('fieldLabels', {'fid': 'header label', 'Councillor': 'header label', 'Chairman of Committee': 'header label', 'Electoral District': 'header label', 'Email': 'header label', 'Contact Number': 'header label', });
lyr_Roads_2.set('fieldLabels', {'fid': 'header label', 'name': 'header label', });
lyr_Roads_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});