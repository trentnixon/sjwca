import { track_ga_event } from "./GA";

export const GA = (Conference) => {
    // Function logic...
   /*  track_ga_event({
        action: "Btn_View_Conference",
        params: { Conference_Selected: Conference ? "Sixers" : "Thunder" },
      }); */
  };

  export const Polypaths = (conferences) => {
    let points = [];

    conferences.regions.map((point, i) => {
      points.push({ lat: parseFloat(point.Lat), lng: parseFloat(point.Long) });
    });
    points.sort(function (a, b) {
      return a.lat != b.lat ? a.lat - b.lat : a.lng - b.lng;
    });

    var n = points.length;
    var hull = [];

    for (var i = 0; i < 2 * n; i++) {
      var j = i < n ? i : 2 * n - 1 - i;
      while (
        hull.length >= 2 &&
        removeMiddle(hull[hull.length - 2], hull[hull.length - 1], points[j])
      )
        hull.pop();
      hull.push(points[j]);
    }

    hull.pop();
    return hull;
  };
  const removeMiddle = (a, b, c) => {
    var cross =
      (a.lat - b.lat) * (c.lng - b.lng) - (a.lng - b.lng) * (c.lat - b.lat);
    var dot =
      (a.lat - b.lat) * (c.lat - b.lat) + (a.lng - b.lng) * (c.lng - b.lng);
    return cross < 0 || (cross == 0 && dot <= 0);
  };