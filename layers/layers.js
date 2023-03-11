var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PMC_Ward_1 = new ol.format.GeoJSON();
var features_PMC_Ward_1 = format_PMC_Ward_1.readFeatures(json_PMC_Ward_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMC_Ward_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMC_Ward_1.addFeatures(features_PMC_Ward_1);
var lyr_PMC_Ward_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMC_Ward_1, 
                style: style_PMC_Ward_1,
                interactive: true,
    title: 'PMC_Ward<br />\
    <img src="styles/legend/PMC_Ward_1_0.png" /> AUNDH,BANER<br />\
    <img src="styles/legend/PMC_Ward_1_1.png" /> BHAVANI_PETH<br />\
    <img src="styles/legend/PMC_Ward_1_2.png" /> BIBVEWADI<br />\
    <img src="styles/legend/PMC_Ward_1_3.png" /> DHANKAVADI,SAHAKAR_NAGAR<br />\
    <img src="styles/legend/PMC_Ward_1_4.png" /> DHOLE_PATIL_ROAD<br />\
    <img src="styles/legend/PMC_Ward_1_5.png" /> HADAPSAR,MUNDHAVA<br />\
    <img src="styles/legend/PMC_Ward_1_6.png" /> KASABA_VISHRAMBAG_WADA<br />\
    <img src="styles/legend/PMC_Ward_1_7.png" /> KONDHVA,YEVALEWADI<br />\
    <img src="styles/legend/PMC_Ward_1_8.png" /> KOTHRUD,BAVDHAN<br />\
    <img src="styles/legend/PMC_Ward_1_9.png" /> NAGAR_ROAD<br />\
    <img src="styles/legend/PMC_Ward_1_10.png" /> SHIVAJI_NAGAR,GHOLE_ROAD<br />\
    <img src="styles/legend/PMC_Ward_1_11.png" /> SINHAGAD_ROAD<br />\
    <img src="styles/legend/PMC_Ward_1_12.png" /> WANVADI,RAMTEKADI<br />\
    <img src="styles/legend/PMC_Ward_1_13.png" /> WARJE-KARVE_NAGAR<br />\
    <img src="styles/legend/PMC_Ward_1_14.png" /> YERWADA,KALAS<br />\
    <img src="styles/legend/PMC_Ward_1_15.png" /> <br />'
        });
var format_PMC_Slums_2 = new ol.format.GeoJSON();
var features_PMC_Slums_2 = format_PMC_Slums_2.readFeatures(json_PMC_Slums_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMC_Slums_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMC_Slums_2.addFeatures(features_PMC_Slums_2);
var lyr_PMC_Slums_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMC_Slums_2, 
                style: style_PMC_Slums_2,
                interactive: true,
                title: '<img src="styles/legend/PMC_Slums_2.png" /> PMC_Slums'
            });
var format_Kishkinda_Nagar_3 = new ol.format.GeoJSON();
var features_Kishkinda_Nagar_3 = format_Kishkinda_Nagar_3.readFeatures(json_Kishkinda_Nagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kishkinda_Nagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kishkinda_Nagar_3.addFeatures(features_Kishkinda_Nagar_3);
var lyr_Kishkinda_Nagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kishkinda_Nagar_3, 
                style: style_Kishkinda_Nagar_3,
                interactive: true,
                title: '<img src="styles/legend/Kishkinda_Nagar_3.png" /> Kishkinda_Nagar'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PMC_Ward_1.setVisible(true);lyr_PMC_Slums_2.setVisible(true);lyr_Kishkinda_Nagar_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PMC_Ward_1,lyr_PMC_Slums_2,lyr_Kishkinda_Nagar_3];
lyr_PMC_Ward_1.set('fieldAliases', {'WARD': 'WARD', });
lyr_PMC_Slums_2.set('fieldAliases', {'NAME': 'NAME', 'AREA': 'AREA', 'WARD': 'WARD', 'PRABHAG': 'PRABHAG', 'OWNERSHIP': 'OWNERSHIP', 'S_NO': 'S_NO', });
lyr_Kishkinda_Nagar_3.set('fieldAliases', {'Roof_Type': 'Roof_Type', 'Floors': 'Floors', 'AADHAR': 'AADHAR', 'GAS': 'GAS', 'BANK': 'BANK', 'HUT_NO': 'HUT_NO', });
lyr_PMC_Ward_1.set('fieldImages', {'WARD': 'TextEdit', });
lyr_PMC_Slums_2.set('fieldImages', {'NAME': 'TextEdit', 'AREA': 'TextEdit', 'WARD': 'TextEdit', 'PRABHAG': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'S_NO': 'TextEdit', });
lyr_Kishkinda_Nagar_3.set('fieldImages', {'Roof_Type': '', 'Floors': '', 'AADHAR': '', 'GAS': '', 'BANK': '', 'HUT_NO': '', });
lyr_PMC_Ward_1.set('fieldLabels', {'WARD': 'inline label', });
lyr_PMC_Slums_2.set('fieldLabels', {'NAME': 'inline label', 'AREA': 'inline label', 'WARD': 'inline label', 'PRABHAG': 'no label', 'OWNERSHIP': 'inline label', 'S_NO': 'inline label', });
lyr_Kishkinda_Nagar_3.set('fieldLabels', {'Roof_Type': 'inline label', 'Floors': 'inline label', 'AADHAR': 'inline label', 'GAS': 'inline label', 'BANK': 'inline label', 'HUT_NO': 'inline label', });
lyr_Kishkinda_Nagar_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});