var wms_layers = [];

var format_Mapa_Politico_Segun_OnNet_0 = new ol.format.GeoJSON();
var features_Mapa_Politico_Segun_OnNet_0 = format_Mapa_Politico_Segun_OnNet_0.readFeatures(json_Mapa_Politico_Segun_OnNet_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_Politico_Segun_OnNet_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_Politico_Segun_OnNet_0.addFeatures(features_Mapa_Politico_Segun_OnNet_0);
var lyr_Mapa_Politico_Segun_OnNet_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapa_Politico_Segun_OnNet_0, 
                style: style_Mapa_Politico_Segun_OnNet_0,
                interactive: false,
                title: '<img src="styles/legend/Mapa_Politico_Segun_OnNet_0.png" /> Mapa_Politico_Segun_OnNet'
            });

lyr_Mapa_Politico_Segun_OnNet_0.setVisible(true);
var layersList = [lyr_Mapa_Politico_Segun_OnNet_0];
lyr_Mapa_Politico_Segun_OnNet_0.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CDPMP': 'MPIO_CDPMP', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CSMBL': 'MPIO_CSMBL', 'MPIO_VGNC': 'MPIO_VGNC', 'MPIO_TIPO': 'MPIO_TIPO', 'Shape_Leng': 'Shape_Leng', 'FID_Lte_DT': 'FID_Lte_DT', 'codigo': 'codigo', 'sector': 'sector', 'Shape_Le_1': 'Shape_Le_1', 'FID_Ciudad': 'FID_Ciudad', 'Ciudad': 'Ciudad', 'Acron': 'Acron', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', });
lyr_Mapa_Politico_Segun_OnNet_0.set('fieldImages', {'Join_Count': '', 'TARGET_FID': '', 'DPTO_CCDGO': '', 'MPIO_CCDGO': '', 'MPIO_CDPMP': '', 'DPTO_CNMBR': '', 'MPIO_CNMBR': '', 'MPIO_CRSLC': '', 'MPIO_NAREA': '', 'MPIO_CSMBL': '', 'MPIO_VGNC': '', 'MPIO_TIPO': '', 'Shape_Leng': '', 'FID_Lte_DT': '', 'codigo': '', 'sector': '', 'Shape_Le_1': '', 'FID_Ciudad': '', 'Ciudad': '', 'Acron': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'Shape_Le_3': '', 'Shape_Area': '', });
lyr_Mapa_Politico_Segun_OnNet_0.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CDPMP': 'no label', 'DPTO_CNMBR': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CSMBL': 'no label', 'MPIO_VGNC': 'no label', 'MPIO_TIPO': 'no label', 'Shape_Leng': 'no label', 'FID_Lte_DT': 'no label', 'codigo': 'no label', 'sector': 'no label', 'Shape_Le_1': 'no label', 'FID_Ciudad': 'no label', 'Ciudad': 'no label', 'Acron': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'Shape_Le_3': 'no label', 'Shape_Area': 'no label', });
lyr_Mapa_Politico_Segun_OnNet_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});