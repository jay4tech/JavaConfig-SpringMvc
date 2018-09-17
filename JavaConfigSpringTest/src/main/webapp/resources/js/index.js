$(document).ready(function () {
    IndexPage.getMap();
});

var IndexPage = {
    map: null,
    getMap: function () {
        IndexPage.map = new MapmyIndia.Map("mapdiv", {
            center: [28.633292972120625, 77.22049713134767],
            zoomControl: true,
            hybrid: true
        });
    }
};