let latitude=31.43118980897701, longitude= 76.715704984656

mapboxgl.accessToken="pk.eyJ1IjoiYW5pa2EtMTEiLCJhIjoiY2wxdzNkYjZoMHNsNTNrbzVqa2RsazMxbCJ9.YaL9BvzaROAlaTIdmhVUEg"
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
    trackUserLocation:true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)