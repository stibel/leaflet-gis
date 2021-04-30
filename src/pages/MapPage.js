import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import LayerControl from "../components/LayerControl";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import sovietBases from "../geojsonData/sovietBases";
import chineseBases from "../geojsonData/chineseBases";
import americanBases from "../geojsonData/americanBases";
import polishNukes from "../geojsonData/polishNukes";
import bear from "../images/markers/bear.png";
import bearGray from "../images/markers/bearGray.png";
import xian from "../images/markers/xian.png";
import xianGray from "../images/markers/xianGray.png";
import spirit from "../images/markers/spirit.png";
import spiritGray from "../images/markers/spiritGray.png";
import missileBW from "../images/markers/missileBW.png";
import b29 from "../images/markers/b29.png"
require('leaflet.animatedmarker/src/AnimatedMarker');


const darkStadia = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=';
const normalStadia = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=';
const key = process.env["REACT_APP_API_KEY"];

const pageWrapper = {
        paddingTop: '0',
        marginTop: '0',
        width: '100vw',
        height: '90vh',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        backgroundColor: 'pink'
}

const mapWrapper = {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 1
}

//due to usage of useEffect myMap needs to be initialized before Map component
let myMap;

const generateLayer = (icon, data, yOffset) => {

    const marker = new L.Icon({
        iconUrl: icon,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, yOffset]
    });

    return L.geoJSON(data, {
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: marker
            }).on('mouseover', function() {
                this.bindPopup(() => {
                    let info = "<span style=\"display: flex; justify-content: center; align-items: center; flex-flow: column\">";
                    info +=  "<span style=\"text-align: center\">" + feature.properties.name + "</span>";
                    return info
                }).openPopup().on('click', () => {
                    myMap.flyTo(latlng, 15);
                })
            })
        }
    });
}

const generateCluster = (className) => {
    return L.markerClusterGroup({
        showCoverageOnHover: true,
        iconCreateFunction: (cluster) => {
            return L.divIcon({
                html: "<div style=\"height: 40px; width: 40px; display: flex !important; justify-content: center; align-items: center; color: #212121; text-align: center; -webkit-text-fill-color: black\">" + cluster.getChildCount() + "</div>",
                className: className,
                iconSize: L.point(40, 40)
            })
        }
    });
}

const usCluster = generateCluster('cluster');
const sovCluster = generateCluster('cluster');
const chiCluster = generateCluster('cluster');

const MapPage = () => {

    const B29 = L.icon({
        iconUrl: b29,
        iconSize: [30, 30],
        iconAnchor: [15, 0]
    })

    const [PZGiK, setPZGiK] = useState(false);
    const [dark, setDark] = useState(true);
    const [ortophoto, setOrtophoto] = useState(false);
    const [lBases, setLBases] = useState(generateLayer(bearGray, sovietBases, -32));
    const [uBases, setUBases] = useState(generateLayer(spiritGray, americanBases, -15));
    const [pBases, setPBases] = useState(generateLayer(xianGray, chineseBases, -36));
    const [pNukes, setPNukes] = useState(generateLayer(missileBW, polishNukes, -36));

    const [activeLayers, setActiveLayers] = useState(["LRA", "USAF", "PLAAF"]);

    const returnHandler = () => {
        myMap.flyTo([40, 15], 3);
        setPZGiK(false);
        if (activeLayers.includes("PPA")) {
            const copy = activeLayers;
            const index = copy.indexOf("PPA");
            copy.splice(index, 1);
            setActiveLayers([...copy]);
        }

    }

    const pNukesHandler = () => {
        myMap.flyTo([53, 16], 8);
    }

    const modeHandler = (comp, setFun) => {
        setFun(!comp);
        console.log(comp.toString());
    }

    useEffect(() => {
        myMap = L.map('map', {minZoom: 2.5, zoomControl: false, zoomDelta: 0.5}).setView([40, 15], 2.5);
        usCluster.addLayer(uBases);
        sovCluster.addLayer(lBases);
        chiCluster.addLayer(pBases);

        return function cleanup() {
            usCluster.removeLayer(uBases);
            sovCluster.removeLayer(lBases);
            chiCluster.removeLayer(pBases);
        }
    }, []);

    useEffect(() => {
        if(PZGiK) {
            L.tileLayer.wms('https://mapy.geoportal.gov.pl/wss/service/img/guest/TOPO/MapServer/WMSServer', {
                    layers: 'Raster',
                    format: 'image/png'
                }
            ).addTo(myMap);
        }
        else if (ortophoto) {
            L.tileLayer.wms('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                {foo: 'bar'}
            ).addTo(myMap);

        }
        else {
            L.tileLayer.wms(dark ?
                darkStadia + key : normalStadia + key,
                {foo: 'bar'}
            ).addTo(myMap);
        }
    }, [PZGiK, ortophoto, dark]);

    useEffect(() => {
        if (myMap) {
            // if (activeLayers.includes("LRA"))
            //     myMap.addLayer(sovCluster)
            // else
            //     myMap.removeLayer(sovCluster)
            //
            // if (activeLayers.includes("USAF"))
            //     myMap.addLayer(usCluster)
            // else
            //     myMap.removeLayer(usCluster)
            //
            // if (activeLayers.includes("PLAAF"))
            //     myMap.addLayer(chiCluster)
            // else
            //     myMap.removeLayer(chiCluster)
            if (activeLayers.includes("LRA"))
                myMap.addLayer(lBases)
            else
                myMap.removeLayer(lBases)

            if (activeLayers.includes("USAF"))
                myMap.addLayer(uBases)
            else
                myMap.removeLayer(uBases)

            if (activeLayers.includes("PLAAF"))
                myMap.addLayer(pBases)
            else
                myMap.removeLayer(pBases)
            if (activeLayers.includes("PPA"))
                myMap.addLayer(pNukes)
            else
                myMap.removeLayer(pNukes)
        }
    }, [activeLayers])

    // useEffect(() => {
    //     if (!activeLayers.includes("PPA") && !ortophoto) {
    //         setLBases(generateLayer(bear, sovietBases, -32));
    //         setUBases(generateLayer(spirit, americanBases, -15));
    //         setPBases(generateLayer(xian, chineseBases, -36));
    //     }
    //     else {
    //         setLBases(generateLayer(bearGray, sovietBases, -32));
    //         setUBases(generateLayer(spiritGray, americanBases, -15));
    //         setPBases(generateLayer(xianGray, chineseBases, -36));
    //     }
    // }, [ortophoto])
    const fly = (line, icon, latLng) => {
        myMap.flyTo(latLng, 5);
        console.log("line created");
        const path = L.animatedMarker(line.getLatLngs(), {
            icon: icon,
            autoStart: true
        });
        console.log("marker animated");
        myMap.addLayer(path);
        console.log("flying");
        setTimeout(() => {myMap.removeLayer(path)}, 5000);
    }

    const bombings = () => {
        fly(L.polyline([[14.998000, 145.624942], [34.395327, 132.453612]]), B29, [23, 140]);
        fly(L.polyline([[14.998000, 145.624942], [32.771468, 129.864824]]), B29, [23, 140]);
    }

    return (
        <main style={pageWrapper}>
            <div id='map' style={mapWrapper}/>
            <LayerControl modeHandler={() => modeHandler(dark, setDark)} ortophotoHandler={() => modeHandler(ortophoto, setOrtophoto)}/>
            <Sidebar fly={() => bombings()} pNukesHandler={() => pNukesHandler()} setOrtophoto={setOrtophoto} setPZGiK={setPZGiK} returnHandler={() => returnHandler()} activeLayers={activeLayers} set={setActiveLayers}/>
        </main>
    )
}

export default MapPage;