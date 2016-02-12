(function () {
  var chart = new CanvasJS.Chart("chart",
  {
   title:{
     horizontalAlign: "right"
  },
  axisX:{
    title: "aantal interacties met medestudenten",
    minimum: -0.1,
    maximum: 18.5,
    gridThickness: 0,
  },
  axisY:{
    title: "examenscore",
    gridThickness: 0,
  },
  legend: {
    verticalAlign: "bottom",
    horizontalAlign: "left"
  },
  data: [
        {
   type: "scatter",
   color: "#1a4175",
   dataPoints: [
{ x:  2.9, y: 10.57 },
{ x:  12.93, y: 15.29 },
{ x:  7.28, y: 12.75 },
{ x:  3.98, y: 9.94 },
{ x:  1, y: 10.07 },
{ x:  1.36, y: 9.75 },
{ x:  1.53, y: 10.75 },
{ x:  7.43, y: 12.95 },
{ x:  11.87, y: 15.67 },
{ x:  1.17, y: 9.41 },
{ x:  7.35, y: 12.77 },
{ x:  4.89, y: 13.8 },
{ x:  .44, y: 8.87 },
{ x:  1.64, y: 9.87 },
{ x:  7.4, y: 13.25 },
{ x:  .5, y: 9.88 },
{ x:  1.34, y: 10.4 },
{ x:  1.16, y: 10.04 },
{ x:  5.31, y: 11.73 },
{ x:  1.76, y: 11.2 },
{ x:  6.43, y: 12.08 },
{ x:  2.48, y: 10.72 },
{ x:  5.19, y: 12.97 },
{ x:  3.05, y: 12 },
{ x:  4.4, y: 10.84 },
{ x:  6.26, y: 12.76 },
{ x:  2.24, y: 10.9 },
{ x:  1.13, y: 10.36 },
{ x:  .25, y: 9.45 },
{ x:  5.68, y: 11.87 },
{ x:  1.48, y: 9.83 },
{ x:  5.77, y: 14.16 },
{ x:  6.48, y: 12.46 },
{ x:  2.89, y: 9.76 },
{ x:  3.69, y: 10.94 },
{ x:  2.25, y: 11.67 },
{ x:  .99, y: 10.04 },
{ x:  8.31, y: 13.49 },
{ x:  1.02, y: 8.06 },
{ x:  4.53, y: 11.25 },
{ x:  .73, y: 7.93 },
{ x:  12.75, y: 15.33 },
{ x:  2.83, y: 11.9 },
{ x:  .62, y: 9.38 },
{ x:  2.12, y: 12.38 },
{ x:  1.14, y: 9.98 },
{ x:  1.65, y: 10.41 },
{ x:  2.04, y: 10.61 },
{ x:  3.27, y: 11.53 },
{ x:  2.13, y: 9.78 },
{ x:  1.22, y: 8.76 },
{ x:  13.57, y: 15.21 },
{ x:  11.89, y: 14.07 },
{ x:  3.92, y: 10.02 },
{ x:  10.62, y: 14.74 },
{ x:  2.63, y: 10.54 },
{ x:  .24, y: 9.09 },
{ x:  1.44, y: 10.64 },
{ x:  .63, y: 9.91 },
{ x:  6.77, y: 13.12 },
{ x:  5.88, y: 13.85 },
{ x:  1.12, y: 9.85 },
{ x:  1.46, y: 13.28 },
{ x:  6.65, y: 12.44 },
{ x:  2.33, y: 12.31 },
{ x:  .53, y: 10.34 },
{ x:  3.02, y: 10.47 },
{ x:  4.75, y: 11.45 },
{ x:  2.75, y: 13.67 },
{ x:  1.68, y: 14.12 },
{ x:  5.95, y: 10.93 },
{ x:  .36, y: 9.35 },
{ x:  14.24, y: 15.69 },
{ x:  5.46, y: 12.36 },
{ x:  3.67, y: 10.81 },
{ x:  6.09, y: 11.96 },
{ x:  .69, y: 8.28 },
{ x:  1.52, y: 11.21 },
{ x:  .48, y: 9.25 },
{ x:  1.35, y: 9.78 },
{ x:  .54, y: 10.03 },
{ x:  .55, y: 9.83 },
{ x:  .95, y: 9.35 },
{ x:  15.39, y: 18 },
{ x:  4.24, y: 10.75 },
{ x:  2.81, y: 9.33 },
{ x:  5.11, y: 11.48 },
{ x:  .59, y: 9.28 },
{ x:  4.86, y: 11.23 },
{ x:  1.42, y: 9.53 },
{ x:  .21, y: 9.92 },
{ x:  1.8, y: 9.41 },
{ x:  2.66, y: 10.36 },
{ x:  5.26, y: 11.87 },
{ x:  3.87, y: 11.71 },
{ x:  2.07, y: 11.71 },
{ x:  2.48, y: 11.78 },
{ x:  3.66, y: 11.49 },
{ x:  .85, y: 9.95 },
{ x:  .99, y: 9.91 },
{ x:  2.72, y: 10.67 },
{ x:  6.12, y: 12.31 },
{ x:  .39, y: 9.33 },
{ x:  7.58, y: 12.93 },
{ x:  1.17, y: 10.19 },
{ x:  4.82, y: 11.33 },
{ x:  6.43, y: 12.53 },
{ x:  1.76, y: 8.81 },
{ x:  4.59, y: 11.18 },
{ x:  .79, y: 10.38 },
{ x:  5.43, y: 12.06 },
{ x:  2.6, y: 10.76 },
{ x:  3.95, y: 10.88 },
{ x:  1.11, y: 9.74 },
{ x:  5.29, y: 10.92 },
{ x:  2.66, y: 11.08 },
{ x:  2.63, y: 10.92 },
{ x:  3.75, y: 11.2 },
{ x:  3.38, y: 12.51 },
{ x:  1.14, y: 10.17 },
{ x:  1.85, y: 10.67 },
{ x:  1.66, y: 9.9 },
{ x:  11.85, y: 15.21 },
{ x:  1.72, y: 12.59 },
{ x:  3.52, y: 11.25 },
{ x:  3.5, y: 11.01 },
{ x:  4.2, y: 12.53 },
{ x:  1.07, y: 11.47 },
{ x:  2.15, y: 10.88 },
{ x:  2.39, y: 11.01 },
{ x:  .44, y: 9.83 },
{ x:  17.44, y: 17.37 },
{ x:  1, y: 9.18 },
{ x:  2.02, y: 10.38 },
{ x:  1.29, y: 10.21 },
{ x:  3.45, y: 11.41 },
{ x:  1.36, y: 10.33 },
{ x:  2.18, y: 10.23 },
{ x:  1.91, y: 9.52 },
{ x:  2.2, y: 7.31 },
{ x:  2.12, y: 10.24 },
{ x:  3.5, y: 10.95 },
{ x:  11.15, y: 14.49 },
{ x:  2.77, y: 10.59 },
{ x:  1.24, y: 10.22 },
{ x:  6.47, y: 13.34 },
{ x:  4.17, y: 11.28 },
{ x:  1.79, y: 9.23 },
{ x:  9.67, y: 13.74 },
{ x:  .37, y: 8.31 },
{ x:  .63, y: 10.2 },
{ x:  1.18, y: 9.67 },
{ x:  2.64, y: 10.94 },
{ x:  3.27, y: 11.87 },
{ x:  5.69, y: 13.78 },
{ x:  2.49, y: 9.63 },
{ x:  4.82, y: 12.3 },
{ x:  5.04, y: 11.11 },
{ x:  2.86, y: 10.11 },
{ x:  6.24, y: 13.51 },
{ x:  .48, y: 8.93 },
{ x:  9.93, y: 15.69 },
{ x:  5.2, y: 12.09 },
{ x:  15.51, y: 17.61 },
{ x:  2.23, y: 10.47 },
{ x:  .37, y: 8.71 },
{ x:  10.03, y: 12.21 },
{ x:  .5, y: 8.68 },
{ x:  .68, y: 11.03 },
{ x:  5.46, y: 13.28 },
{ x:  2.17, y: 10.92 },
{ x:  2.15, y: 10.02 },
{ x:  9.82, y: 15.27 },
{ x:  1.94, y: 11.64 },
{ x:  1.21, y: 11.87 },
{ x:  4.25, y: 10.97 },
{ x:  4.82, y: 11.46 },
{ x:  6.73, y: 12.75 },
{ x:  9.28, y: 13.62 },
{ x:  2.92, y: 11.23 },
{ x:  .19, y: 9.07 },
{ x:  6.3, y: 13.31 },
{ x:  .32, y: 11.59 },
{ x:  .18, y: 10.09 },
{ x:  2.23, y: 10.2 },
{ x:  2.49, y: 11.33 },
{ x:  9.72, y: 14.63 },
{ x:  1.16, y: 10.1 },
{ x:  3.84, y: 10.19 },
{ x:  2.87, y: 10.14 },
{ x:  5.59, y: 11.17 },
{ x:  17.55, y: 19.61 },
{ x:  2.62, y: 11.42 },
{ x:  3.91, y: 11.97 },
{ x:  2.17, y: 10.07 },
{ x:  3.91, y: 12.02 },
{ x:  1.14, y: 9.45 },
{ x:  3.29, y: 13.53 },
{ x:  2.02, y: 10 },
     ]
     },
  {
   type: "scatter",
   color: "#FBBA00",
   dataPoints: [


{ x:  0, y: 9.06 },
{ x:  0, y: 11.39 },
{ x:  0, y: 9.34 },
{ x:  0, y: 8.94 },
{ x:  0, y: 9.48 },
{ x:  0, y: 8.38 },
{ x:  0, y: 9.66 },
{ x:  0, y: 9.52 },
{ x:  0, y: 9.79 },
{ x:  0, y: 9.14 },
{ x:  0, y: 9.59 },
{ x:  0, y: 8.74 },
{ x:  0, y: 9.13 },
{ x:  0, y: 8.81 },
{ x:  0, y: 10.3 },
{ x:  0, y: 8.91 },
{ x:  0, y: 8.81 },
{ x:  0, y: 8.92 },
{ x:  0, y: 9.12 },
{ x:  0, y: 9.42 },
{ x:  0, y: 9.73 },
{ x:  0, y: 8.45 },
{ x:  0, y: 9.49 },
{ x:  0, y: 11.32 },
{ x:  0, y: 9.06 },
{ x:  0, y: 9.07 },
{ x:  0, y: 8.91 },
{ x:  0, y: 9.12 },
{ x:  0, y: 8.46 },
{ x:  0, y: 9.55 },
{ x:  0, y: 9.07 },
{ x:  0, y: 9.86 },
{ x:  0, y: 9.75 },
{ x:  0, y: 6.96 },
{ x:  0, y: 9.34 },
{ x:  0, y: 11.47 },
{ x:  0, y: 9.06 },
{ x:  0, y: 7.98 },
{ x:  0, y: 9.66 },
{ x:  0, y: 9.11 },
{ x:  0, y: 12.27 },
{ x:  0, y: 9.89 },
{ x:  0, y: 9.17 },
{ x:  0, y: 9.32 },
{ x:  0, y: 8.67 },
{ x:  0, y: 9.25 },
{ x:  0, y: 8.59 },
{ x:  0, y: 10.99 },
{ x:  0, y: 9.18 },
{ x:  0, y: 9.15 },
{ x:  0, y: 7.13 },
{ x:  0, y: 12.03 },
{ x:  0, y: 9.23 },
{ x:  0, y: 9.81 },
{ x:  0, y: 11.06 },
{ x:  0, y: 9.71 },
{ x:  0, y: 9.07 },
{ x:  0, y: 10.23 },
{ x:  0, y: 12.62 },
{ x:  0, y: 15.92 },
{ x:  0, y: 9.37 },
{ x:  0, y: 9.64 },
{ x:  0, y: 8.78 },
{ x:  0, y: 9.05 },
{ x:  0, y: 10.07 },
{ x:  0, y: 8.57 },
{ x:  0, y: 10.06 },
{ x:  0, y: 9.6 },
{ x:  0, y: 8.51 },
{ x:  0, y: 8.97 },
{ x:  0, y: 10.79 },
{ x:  0, y: 10.54 },
{ x:  0, y: 10.56 },
{ x:  0, y: 9.33 },
{ x:  0, y: 8.15 },
{ x:  0, y: 9.17 },
{ x:  0, y: 9.01 },
{ x:  0, y: 9.5 },
{ x:  0, y: 10.04 },
{ x:  0, y: 8.95 },
{ x:  0, y: 9.13 },
{ x:  0, y: 9.18 },
{ x:  0, y: 9.11 },
{ x:  0, y: 8.98 },
{ x:  0, y: 9.7 },
{ x:  0, y: 9.97 },
{ x:  0, y: 8.4 },
{ x:  0, y: 9.44 },
{ x:  0, y: 14.74 },
{ x:  0, y: 10.22 },
{ x:  0, y: 9.96 },
{ x:  0, y: 9.37 },
{ x:  0, y: 9.34 },
{ x:  0, y: 8.83 },
{ x:  0, y: 8.84 },
{ x:  0, y: 8.2 },
{ x:  0, y: 9.95 },
{ x:  0, y: 12.28 },
{ x:  0, y: 9.88 },
{ x:  0, y: 9.42 },
{ x:  0, y: 10.51 },
{ x:  0, y: 11.29 },
{ x:  0, y: 9.08 },
{ x:  0, y: 8.3 },
{ x:  0, y: 10.96 },
{ x:  0, y: 8.85 },
{ x:  0, y: 9.87 },
{ x:  0, y: 7.9 },
{ x:  0, y: 8.79 },
{ x:  0, y: 10.1 },
{ x:  0, y: 10.5 },
{ x:  0, y: 9.99 },
{ x:  0, y: 9.18 },
{ x:  0, y: 9.99 },
{ x:  0, y: 9.71 },
{ x:  0, y: 10.2 },
{ x:  0, y: 9.14 },
{ x:  0, y: 10.71 },
{ x:  0, y: 10.09 },
{ x:  0, y: 13.14 },
{ x:  0, y: 8.7 },
{ x:  0, y: 9.28 },
{ x:  0, y: 10.15 },
{ x:  0, y: 10 },
{ x:  0, y: 9.2 },
{ x:  0, y: 9.2 },
{ x:  0, y: 10.21 },
{ x:  0, y: 9.55 },
{ x:  0, y: 9.1 },
{ x:  0, y: 9.07 },
{ x:  0, y: 8.53 },
{ x:  0, y: 8.93 },
{ x:  0, y: 7.6 },
{ x:  0, y: 9.26 },
{ x:  0, y: 9.73 },
{ x:  0, y: 8.71 },
{ x:  0, y: 8.19 },
{ x:  0, y: 9.34 },
{ x:  0, y: 8.26 },
{ x:  0, y: 6.38 },
{ x:  0, y: 9.02 },
{ x:  0, y: 9.05 },
{ x:  0, y: 8.92 },
{ x:  0, y: 8.34 },
{ x:  0, y: 9.83 },
{ x:  0, y: 9.86 },
{ x:  0, y: 9.13 },
{ x:  0, y: 9.17 },
{ x:  0, y: 9.95 },
{ x:  0, y: 7.32 },
{ x:  0, y: 9.79 },
{ x:  0, y: 9.86 },
{ x:  0, y: 8.56 },
{ x:  0, y: 8.84 },
{ x:  0, y: 8.92 },
{ x:  0, y: 8.86 },
{ x:  0, y: 9.4 },
{ x:  0, y: 11.03 },
{ x:  0, y: 9.18 },
{ x:  0, y: 9.44 },
{ x:  0, y: 9.68 },
{ x:  0, y: 9.65 },
{ x:  0, y: 9.57 },
{ x:  0, y: 8.62 },
{ x:  0, y: 9.36 },
{ x:  0, y: 9.47 },
{ x:  0, y: 9.98 },
{ x:  0, y: 9.45 },
{ x:  0, y: 8.56 },
{ x:  0, y: 9.26 },
{ x:  0, y: 9.79 },
{ x:  0, y: 9.5 },
{ x:  0, y: 8.74 },
{ x:  0, y: 9.48 },
{ x:  0, y: 10.24 },
{ x:  0, y: 8.99 },
{ x:  0, y: 9.12 },
{ x:  0, y: 9.06 },
{ x:  0, y: 9.79 },
{ x:  0, y: 8.91 },
{ x:  0, y: 9.16 },
{ x:  0, y: 9.43 },
{ x:  0, y: 10.19 },
{ x:  0, y: 10.95 },
{ x:  0, y: 9.53 },
{ x:  0, y: 8.39 },
{ x:  0, y: 8.96 },
{ x:  0, y: 9.05 },
{ x:  0, y: 5.39 },
{ x:  0, y: 9.21 },
{ x:  0, y: 8.86 },
{ x:  0, y: 9.64 },
{ x:  0, y: 8.78 },
{ x:  0, y: 9.15 },
{ x:  0, y: 10.63 },
{ x:  0, y: 6.59 },
{ x:  0, y: 9.42 },
{ x:  0, y: 8.76 },
{ x:  0, y: 10.55 },

   ]
 }
 ]
});

chart.render();
})();