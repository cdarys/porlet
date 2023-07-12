var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Capa_Mapa_de_Calor_1 = new ol.format.GeoJSON();
var features_Capa_Mapa_de_Calor_1 = format_Capa_Mapa_de_Calor_1.readFeatures(json_Capa_Mapa_de_Calor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capa_Mapa_de_Calor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capa_Mapa_de_Calor_1.addFeatures(features_Capa_Mapa_de_Calor_1);
var lyr_Capa_Mapa_de_Calor_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capa_Mapa_de_Calor_1, 
                style: style_Capa_Mapa_de_Calor_1,
                interactive: false,
    title: 'Capa_Mapa_de_Calor<br />\
    <img src="styles/legend/Capa_Mapa_de_Calor_1_0.png" /> Abierto<br />\
    <img src="styles/legend/Capa_Mapa_de_Calor_1_1.png" /> Cerrado<br />\
    <img src="styles/legend/Capa_Mapa_de_Calor_1_2.png" /> Ocupacion Media<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Capa_Mapa_de_Calor_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Capa_Mapa_de_Calor_1];
lyr_Capa_Mapa_de_Calor_1.set('fieldAliases', {'CAJA': 'CAJA', 'estado_pon': 'estado_pon', });
lyr_Capa_Mapa_de_Calor_1.set('fieldImages', {'CAJA': 'TextEdit', 'estado_pon': 'TextEdit', });
lyr_Capa_Mapa_de_Calor_1.set('fieldLabels', {'CAJA': 'no label', 'estado_pon': 'no label', });
lyr_Capa_Mapa_de_Calor_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});