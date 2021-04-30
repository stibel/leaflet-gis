const americanBases = {
    "type": "FeatureCollection",
    "name": "sovietLongRangeAviationBases",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features":
        [
            { "type": "Feature", "properties": {"name": "Baza Lackland w San Antonio (Teksas)"},
                "geometry": { "type": "Point", "coordinates": [ -98.586646, 29.380109 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Langley (Wirginia)"},
                "geometry": { "type": "Point", "coordinates": [ -76.355680, 37.082171 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Eglin (Floryda)"},
                "geometry": { "type": "Point", "coordinates": [ -86.518126, 30.472008 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Hulburt Field (Floryda)"},
                "geometry": { "type": "Point", "coordinates": [ -86.687978, 30.418755 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Nellis (Nevada)"},
                "geometry": { "type": "Point", "coordinates": [ -115.038571, 36.234296 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Travis (Kalifornia)"},
                "geometry": { "type": "Point", "coordinates": [ -121.939762, 38.262910 ] }
            },
            { "type": "Feature", "properties": {"name": "Lotnisko Akademii Sił Powietrznych (Kolorado)"},
                "geometry": { "type": "Point", "coordinates": [ -104.814787, 38.970411 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Davis-Monthan (Arizona)"},
                "geometry": { "type": "Point", "coordinates": [ -110.877611, 32.165230 ] }
            },
            { "type": "Feature", "properties": {"name": "Baza Elmendorf (Alaska)"},
                "geometry": { "type": "Point", "coordinates": [ -149.797960, 61.252590 ] }
            }
        ]
}

export default americanBases;