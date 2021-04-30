const polishNukes = {
    "type": "FeatureCollection",
    "name": "sovietLongRangeAviationBases",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features":
        [
            { "type": "Feature", "properties": {"name": "Skład broni jądrowej w Podborsku " +
                        "(Kryptonim: 3001)"},
                "geometry": { "type": "Point", "coordinates": [ 16.138056, 53.931389 ] }
            },
            { "type": "Feature", "properties": {"name": "Skład broni jądrowej w Brzeźnicy Kolonii " +
                        "(Kryptonim: 3002)"},
                "geometry": { "type": "Point", "coordinates": [ 16.6525, 53.428333 ] }
            },
            { "type": "Feature", "properties": {"name": "Skład broni jądrowej w Templewie " +
                        "(Kryptonim: 3003)"},
                "geometry": { "type": "Point", "coordinates": [ 15.388056, 52.443333 ] }
            }
        ]
}

export default polishNukes;