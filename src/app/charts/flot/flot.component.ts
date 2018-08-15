import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //Flot Line Chart
    $(document).ready(function() {
      var offset = 0;
      plot();

      function plot() {
        var sin = [],
          cos = [];
        for (var i = 0; i < 12; i += 0.2) {
          sin.push([i, Math.sin(i + offset)]);
          cos.push([i, Math.cos(i + offset)]);
        }

        var options = {
          series: {
            lines: {
              show: true
            },
            points: {
              show: true
            }
          },
          grid: {
            hoverable: true //IMPORTANT! this is needed for tooltip to work
          },
          yaxis: {
            min: -1.2,
            max: 1.2
          },
          tooltip: true,
          tooltipOpts: {
            content: "'%s' of %x.1 is %y.4",
            shifts: {
              x: -60,
              y: 25
            }
          }
        };

        var plotObj = $.plot(
          $('#flot-line-chart'),
          [
            {
              data: sin,
              label: 'sin(x)'
            },
            {
              data: cos,
              label: 'cos(x)'
            }
          ],
          options
        );
      }
    });

    //Flot Pie Chart
    $(function() {
      var data = [
        {
          label: 'Series 0',
          data: 1
        },
        {
          label: 'Series 1',
          data: 3
        },
        {
          label: 'Series 2',
          data: 9
        },
        {
          label: 'Series 3',
          data: 20
        }
      ];

      var plotObj = $.plot($('#flot-pie-chart'), data, {
        series: {
          pie: {
            show: true
          }
        },
        grid: {
          hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
          content: '%p.0%, %s', // show percentages, rounding to 2 decimal places
          shifts: {
            x: 20,
            y: 0
          },
          defaultTheme: false
        }
      });
    });

    //Flot Multiple Axes Line Chart
    $(function() {
      var oilprices = [
        [1167692400000, 61.05],
        [1167778800000, 58.32],
        [1167865200000, 57.35],
        [1167951600000, 56.31],
        [1168210800000, 55.55],
        [1168297200000, 55.64],
        [1168383600000, 54.02],
        [1168470000000, 51.88],
        [1168556400000, 52.99],
        [1168815600000, 52.99],
        [1168902000000, 51.21],
        [1168988400000, 52.24],
        [1169074800000, 50.48],
        [1169161200000, 51.99],
        [1169420400000, 51.13],
        [1169506800000, 55.04],
        [1169593200000, 55.37],
        [1169679600000, 54.23],
        [1169766000000, 55.42],
        [1170025200000, 54.01],
        [1170111600000, 56.97],
        [1170198000000, 58.14],
        [1170284400000, 58.14],
        [1170370800000, 59.02],
        [1170630000000, 58.74],
        [1170716400000, 58.88],
        [1170802800000, 57.71],
        [1170889200000, 59.71],
        [1170975600000, 59.89],
        [1171234800000, 57.81],
        [1171321200000, 59.06],
        [1171407600000, 58.0],
        [1171494000000, 57.99],
        [1171580400000, 59.39],
        [1171839600000, 59.39],
        [1171926000000, 58.07],
        [1172012400000, 60.07],
        [1172098800000, 61.14],
        [1172444400000, 61.39],
        [1172530800000, 61.46],
        [1172617200000, 61.79],
        [1172703600000, 62.0],
        [1172790000000, 60.07],
        [1173135600000, 60.69],
        [1173222000000, 61.82],
        [1173308400000, 60.05],
        [1173654000000, 58.91],
        [1173740400000, 57.93],
        [1173826800000, 58.16],
        [1173913200000, 57.55],
        [1173999600000, 57.11],
        [1174258800000, 56.59],
        [1174345200000, 59.61],
        [1174518000000, 61.69],
        [1174604400000, 62.28],
        [1174860000000, 62.91],
        [1174946400000, 62.93],
        [1175032800000, 64.03],
        [1175119200000, 66.03],
        [1175205600000, 65.87],
        [1175464800000, 64.64],
        [1175637600000, 64.38],
        [1175724000000, 64.28],
        [1175810400000, 64.28],
        [1176069600000, 61.51],
        [1176156000000, 61.89],
        [1176242400000, 62.01],
        [1176328800000, 63.85],
        [1176415200000, 63.63],
        [1176674400000, 63.61],
        [1176760800000, 63.1],
        [1176847200000, 63.13],
        [1176933600000, 61.83],
        [1177020000000, 63.38],
        [1177279200000, 64.58],
        [1177452000000, 65.84],
        [1177538400000, 65.06],
        [1177624800000, 66.46],
        [1177884000000, 64.4],
        [1178056800000, 63.68],
        [1178143200000, 63.19],
        [1178229600000, 61.93],
        [1178488800000, 61.47],
        [1178575200000, 61.55],
        [1178748000000, 61.81],
        [1178834400000, 62.37],
        [1179093600000, 62.46],
        [1179180000000, 63.17],
        [1179266400000, 62.55],
        [1179352800000, 64.94],
        [1179698400000, 66.27],
        [1179784800000, 65.5],
        [1179871200000, 65.77],
        [1179957600000, 64.18],
        [1180044000000, 65.2],
        [1180389600000, 63.15],
        [1180476000000, 63.49],
        [1180562400000, 65.08],
        [1180908000000, 66.3],
        [1180994400000, 65.96],
        [1181167200000, 66.93],
        [1181253600000, 65.98],
        [1181599200000, 65.35],
        [1181685600000, 66.26],
        [1181858400000, 68.0],
        [1182117600000, 69.09],
        [1182204000000, 69.1],
        [1182290400000, 68.19],
        [1182376800000, 68.19],
        [1182463200000, 69.14],
        [1182722400000, 68.19],
        [1182808800000, 67.77],
        [1182895200000, 68.97],
        [1182981600000, 69.57],
        [1183068000000, 70.68],
        [1183327200000, 71.09],
        [1183413600000, 70.92],
        [1183586400000, 71.81],
        [1183672800000, 72.81],
        [1183932000000, 72.19],
        [1184018400000, 72.56],
        [1184191200000, 72.5],
        [1184277600000, 74.15],
        [1184623200000, 75.05],
        [1184796000000, 75.92],
        [1184882400000, 75.57],
        [1185141600000, 74.89],
        [1185228000000, 73.56],
        [1185314400000, 75.57],
        [1185400800000, 74.95],
        [1185487200000, 76.83],
        [1185832800000, 78.21],
        [1185919200000, 76.53],
        [1186005600000, 76.86],
        [1186092000000, 76.0],
        [1186437600000, 71.59],
        [1186696800000, 71.47],
        [1186956000000, 71.62],
        [1187042400000, 71.0],
        [1187301600000, 71.98],
        [1187560800000, 71.12],
        [1187647200000, 69.47],
        [1187733600000, 69.26],
        [1187820000000, 69.83],
        [1187906400000, 71.09],
        [1188165600000, 71.73],
        [1188338400000, 73.36],
        [1188511200000, 74.04],
        [1188856800000, 76.3],
        [1189116000000, 77.49],
        [1189461600000, 78.23],
        [1189548000000, 79.91],
        [1189634400000, 80.09],
        [1189720800000, 79.1],
        [1189980000000, 80.57],
        [1190066400000, 81.93],
        [1190239200000, 83.32],
        [1190325600000, 81.62],
        [1190584800000, 80.95],
        [1190671200000, 79.53],
        [1190757600000, 80.3],
        [1190844000000, 82.88],
        [1190930400000, 81.66],
        [1191189600000, 80.24],
        [1191276000000, 80.05],
        [1191362400000, 79.94],
        [1191448800000, 81.44],
        [1191535200000, 81.22],
        [1191794400000, 79.02],
        [1191880800000, 80.26],
        [1191967200000, 80.3],
        [1192053600000, 83.08],
        [1192140000000, 83.69],
        [1192399200000, 86.13],
        [1192485600000, 87.61],
        [1192572000000, 87.4],
        [1192658400000, 89.47],
        [1192744800000, 88.6],
        [1193004000000, 87.56],
        [1193090400000, 87.56],
        [1193176800000, 87.1],
        [1193263200000, 91.86],
        [1193612400000, 93.53],
        [1193698800000, 94.53],
        [1193871600000, 95.93],
        [1194217200000, 93.98],
        [1194303600000, 96.37],
        [1194476400000, 95.46],
        [1194562800000, 96.32],
        [1195081200000, 93.43],
        [1195167600000, 95.1],
        [1195426800000, 94.64],
        [1195513200000, 95.1],
        [1196031600000, 97.7],
        [1196118000000, 94.42],
        [1196204400000, 90.62],
        [1196290800000, 91.01],
        [1196377200000, 88.71],
        [1196636400000, 88.32],
        [1196809200000, 90.23],
        [1196982000000, 88.28],
        [1197241200000, 87.86],
        [1197327600000, 90.02],
        [1197414000000, 92.25],
        [1197586800000, 90.63],
        [1197846000000, 90.63],
        [1197932400000, 90.49],
        [1198018800000, 91.24],
        [1198105200000, 91.06],
        [1198191600000, 90.49],
        [1198710000000, 96.62],
        [1198796400000, 96.0],
        [1199142000000, 99.62],
        [1199314800000, 99.18],
        [1199401200000, 95.09],
        [1199660400000, 96.33],
        [1199833200000, 95.67],
        [1200351600000, 91.9],
        [1200438000000, 90.84],
        [1200524400000, 90.13],
        [1200610800000, 90.57],
        [1200956400000, 89.21],
        [1201042800000, 86.99],
        [1201129200000, 89.85],
        [1201474800000, 90.99],
        [1201561200000, 91.64],
        [1201647600000, 92.33],
        [1201734000000, 91.75],
        [1202079600000, 90.02],
        [1202166000000, 88.41],
        [1202252400000, 87.14],
        [1202338800000, 88.11],
        [1202425200000, 91.77],
        [1202770800000, 92.78],
        [1202857200000, 93.27],
        [1202943600000, 95.46],
        [1203030000000, 95.46],
        [1203289200000, 101.74],
        [1203462000000, 98.81],
        [1203894000000, 100.88],
        [1204066800000, 99.64],
        [1204153200000, 102.59],
        [1204239600000, 101.84],
        [1204498800000, 99.52],
        [1204585200000, 99.52],
        [1204671600000, 104.52],
        [1204758000000, 105.47],
        [1204844400000, 105.15],
        [1205103600000, 108.75],
        [1205276400000, 109.92],
        [1205362800000, 110.33],
        [1205449200000, 110.21],
        [1205708400000, 105.68],
        [1205967600000, 101.84],
        [1206313200000, 100.86],
        [1206399600000, 101.22],
        [1206486000000, 105.9],
        [1206572400000, 107.58],
        [1206658800000, 105.62],
        [1206914400000, 101.58],
        [1207000800000, 100.98],
        [1207173600000, 103.83],
        [1207260000000, 106.23],
        [1207605600000, 108.5],
        [1207778400000, 110.11],
        [1207864800000, 110.14],
        [1208210400000, 113.79],
        [1208296800000, 114.93],
        [1208383200000, 114.86],
        [1208728800000, 117.48],
        [1208815200000, 118.3],
        [1208988000000, 116.06],
        [1209074400000, 118.52],
        [1209333600000, 118.75],
        [1209420000000, 113.46],
        [1209592800000, 112.52],
        [1210024800000, 121.84],
        [1210111200000, 123.53],
        [1210197600000, 123.69],
        [1210543200000, 124.23],
        [1210629600000, 125.8],
        [1210716000000, 126.29],
        [1211148000000, 127.05],
        [1211320800000, 129.07],
        [1211493600000, 132.19],
        [1211839200000, 128.85],
        [1212357600000, 127.76],
        [1212703200000, 138.54],
        [1212962400000, 136.8],
        [1213135200000, 136.38],
        [1213308000000, 134.86],
        [1213653600000, 134.01],
        [1213740000000, 136.68],
        [1213912800000, 135.65],
        [1214172000000, 134.62],
        [1214258400000, 134.62],
        [1214344800000, 134.62],
        [1214431200000, 139.64],
        [1214517600000, 140.21],
        [1214776800000, 140.0],
        [1214863200000, 140.97],
        [1214949600000, 143.57],
        [1215036000000, 145.29],
        [1215381600000, 141.37],
        [1215468000000, 136.04],
        [1215727200000, 146.4],
        [1215986400000, 145.18],
        [1216072800000, 138.74],
        [1216159200000, 134.6],
        [1216245600000, 129.29],
        [1216332000000, 130.65],
        [1216677600000, 127.95],
        [1216850400000, 127.95],
        [1217282400000, 122.19],
        [1217455200000, 124.08],
        [1217541600000, 125.1],
        [1217800800000, 121.41],
        [1217887200000, 119.17],
        [1217973600000, 118.58],
        [1218060000000, 120.02],
        [1218405600000, 114.45],
        [1218492000000, 113.01],
        [1218578400000, 116.0],
        [1218751200000, 113.77],
        [1219010400000, 112.87],
        [1219096800000, 114.53],
        [1219269600000, 114.98],
        [1219356000000, 114.98],
        [1219701600000, 116.27],
        [1219788000000, 118.15],
        [1219874400000, 115.59],
        [1219960800000, 115.46],
        [1220306400000, 109.71],
        [1220392800000, 109.35],
        [1220565600000, 106.23],
        [1220824800000, 106.34]
      ];
      var exchangerates = [
        [1167606000000, 0.758],
        [1167692400000, 0.758],
        [1167778800000, 0.7547],
        [1167865200000, 0.7549],
        [1167951600000, 0.7613],
        [1168038000000, 0.7655],
        [1168124400000, 0.7693],
        [1168210800000, 0.7694],
        [1168297200000, 0.7688],
        [1168383600000, 0.7678],
        [1168470000000, 0.7708],
        [1168556400000, 0.7727],
        [1168642800000, 0.7749],
        [1168729200000, 0.7741],
        [1168815600000, 0.7741],
        [1168902000000, 0.7732],
        [1168988400000, 0.7727],
        [1169074800000, 0.7737],
        [1169161200000, 0.7724],
        [1169247600000, 0.7712],
        [1169334000000, 0.772],
        [1169420400000, 0.7721],
        [1169506800000, 0.7717],
        [1169593200000, 0.7704],
        [1169679600000, 0.769],
        [1169766000000, 0.7711],
        [1169852400000, 0.774],
        [1169938800000, 0.7745],
        [1170025200000, 0.7745],
        [1170111600000, 0.774],
        [1170198000000, 0.7716],
        [1170284400000, 0.7713],
        [1170370800000, 0.7678],
        [1170457200000, 0.7688],
        [1170543600000, 0.7718],
        [1170630000000, 0.7718],
        [1170716400000, 0.7728],
        [1170802800000, 0.7729],
        [1170889200000, 0.7698],
        [1170975600000, 0.7685],
        [1171062000000, 0.7681],
        [1171148400000, 0.769],
        [1171234800000, 0.769],
        [1171321200000, 0.7698],
        [1171407600000, 0.7699],
        [1171494000000, 0.7651],
        [1171580400000, 0.7613],
        [1171666800000, 0.7616],
        [1171753200000, 0.7614],
        [1171839600000, 0.7614],
        [1171926000000, 0.7607],
        [1172012400000, 0.7602],
        [1172098800000, 0.7611],
        [1172185200000, 0.7622],
        [1172271600000, 0.7615],
        [1172358000000, 0.7598],
        [1172444400000, 0.7598],
        [1172530800000, 0.7592],
        [1172617200000, 0.7573],
        [1172703600000, 0.7566],
        [1172790000000, 0.7567],
        [1172876400000, 0.7591],
        [1172962800000, 0.7582],
        [1173049200000, 0.7585],
        [1173135600000, 0.7613],
        [1173222000000, 0.7631],
        [1173308400000, 0.7615],
        [1173394800000, 0.76],
        [1173481200000, 0.7613],
        [1173567600000, 0.7627],
        [1173654000000, 0.7627],
        [1173740400000, 0.7608],
        [1173826800000, 0.7583],
        [1173913200000, 0.7575],
        [1173999600000, 0.7562],
        [1174086000000, 0.752],
        [1174172400000, 0.7512],
        [1174258800000, 0.7512],
        [1174345200000, 0.7517],
        [1174431600000, 0.752],
        [1174518000000, 0.7511],
        [1174604400000, 0.748],
        [1174690800000, 0.7509],
        [1174777200000, 0.7531],
        [1174860000000, 0.7531],
        [1174946400000, 0.7527],
        [1175032800000, 0.7498],
        [1175119200000, 0.7493],
        [1175205600000, 0.7504],
        [1175292000000, 0.75],
        [1175378400000, 0.7491],
        [1175464800000, 0.7491],
        [1175551200000, 0.7485],
        [1175637600000, 0.7484],
        [1175724000000, 0.7492],
        [1175810400000, 0.7471],
        [1175896800000, 0.7459],
        [1175983200000, 0.7477],
        [1176069600000, 0.7477],
        [1176156000000, 0.7483],
        [1176242400000, 0.7458],
        [1176328800000, 0.7448],
        [1176415200000, 0.743],
        [1176501600000, 0.7399],
        [1176588000000, 0.7395],
        [1176674400000, 0.7395],
        [1176760800000, 0.7378],
        [1176847200000, 0.7382],
        [1176933600000, 0.7362],
        [1177020000000, 0.7355],
        [1177106400000, 0.7348],
        [1177192800000, 0.7361],
        [1177279200000, 0.7361],
        [1177365600000, 0.7365],
        [1177452000000, 0.7362],
        [1177538400000, 0.7331],
        [1177624800000, 0.7339],
        [1177711200000, 0.7344],
        [1177797600000, 0.7327],
        [1177884000000, 0.7327],
        [1177970400000, 0.7336],
        [1178056800000, 0.7333],
        [1178143200000, 0.7359],
        [1178229600000, 0.7359],
        [1178316000000, 0.7372],
        [1178402400000, 0.736],
        [1178488800000, 0.736],
        [1178575200000, 0.735],
        [1178661600000, 0.7365],
        [1178748000000, 0.7384],
        [1178834400000, 0.7395],
        [1178920800000, 0.7413],
        [1179007200000, 0.7397],
        [1179093600000, 0.7396],
        [1179180000000, 0.7385],
        [1179266400000, 0.7378],
        [1179352800000, 0.7366],
        [1179439200000, 0.74],
        [1179525600000, 0.7411],
        [1179612000000, 0.7406],
        [1179698400000, 0.7405],
        [1179784800000, 0.7414],
        [1179871200000, 0.7431],
        [1179957600000, 0.7431],
        [1180044000000, 0.7438],
        [1180130400000, 0.7443],
        [1180216800000, 0.7443],
        [1180303200000, 0.7443],
        [1180389600000, 0.7434],
        [1180476000000, 0.7429],
        [1180562400000, 0.7442],
        [1180648800000, 0.744],
        [1180735200000, 0.7439],
        [1180821600000, 0.7437],
        [1180908000000, 0.7437],
        [1180994400000, 0.7429],
        [1181080800000, 0.7403],
        [1181167200000, 0.7399],
        [1181253600000, 0.7418],
        [1181340000000, 0.7468],
        [1181426400000, 0.748],
        [1181512800000, 0.748],
        [1181599200000, 0.749],
        [1181685600000, 0.7494],
        [1181772000000, 0.7522],
        [1181858400000, 0.7515],
        [1181944800000, 0.7502],
        [1182031200000, 0.7472],
        [1182117600000, 0.7472],
        [1182204000000, 0.7462],
        [1182290400000, 0.7455],
        [1182376800000, 0.7449],
        [1182463200000, 0.7467],
        [1182549600000, 0.7458],
        [1182636000000, 0.7427],
        [1182722400000, 0.7427],
        [1182808800000, 0.743],
        [1182895200000, 0.7429],
        [1182981600000, 0.744],
        [1183068000000, 0.743],
        [1183154400000, 0.7422],
        [1183240800000, 0.7388],
        [1183327200000, 0.7388],
        [1183413600000, 0.7369],
        [1183500000000, 0.7345],
        [1183586400000, 0.7345],
        [1183672800000, 0.7345],
        [1183759200000, 0.7352],
        [1183845600000, 0.7341],
        [1183932000000, 0.7341],
        [1184018400000, 0.734],
        [1184104800000, 0.7324],
        [1184191200000, 0.7272],
        [1184277600000, 0.7264],
        [1184364000000, 0.7255],
        [1184450400000, 0.7258],
        [1184536800000, 0.7258],
        [1184623200000, 0.7256],
        [1184709600000, 0.7257],
        [1184796000000, 0.7247],
        [1184882400000, 0.7243],
        [1184968800000, 0.7244],
        [1185055200000, 0.7235],
        [1185141600000, 0.7235],
        [1185228000000, 0.7235],
        [1185314400000, 0.7235],
        [1185400800000, 0.7262],
        [1185487200000, 0.7288],
        [1185573600000, 0.7301],
        [1185660000000, 0.7337],
        [1185746400000, 0.7337],
        [1185832800000, 0.7324],
        [1185919200000, 0.7297],
        [1186005600000, 0.7317],
        [1186092000000, 0.7315],
        [1186178400000, 0.7288],
        [1186264800000, 0.7263],
        [1186351200000, 0.7263],
        [1186437600000, 0.7242],
        [1186524000000, 0.7253],
        [1186610400000, 0.7264],
        [1186696800000, 0.727],
        [1186783200000, 0.7312],
        [1186869600000, 0.7305],
        [1186956000000, 0.7305],
        [1187042400000, 0.7318],
        [1187128800000, 0.7358],
        [1187215200000, 0.7409],
        [1187301600000, 0.7454],
        [1187388000000, 0.7437],
        [1187474400000, 0.7424],
        [1187560800000, 0.7424],
        [1187647200000, 0.7415],
        [1187733600000, 0.7419],
        [1187820000000, 0.7414],
        [1187906400000, 0.7377],
        [1187992800000, 0.7355],
        [1188079200000, 0.7315],
        [1188165600000, 0.7315],
        [1188252000000, 0.732],
        [1188338400000, 0.7332],
        [1188424800000, 0.7346],
        [1188511200000, 0.7328],
        [1188597600000, 0.7323],
        [1188684000000, 0.734],
        [1188770400000, 0.734],
        [1188856800000, 0.7336],
        [1188943200000, 0.7351],
        [1189029600000, 0.7346],
        [1189116000000, 0.7321],
        [1189202400000, 0.7294],
        [1189288800000, 0.7266],
        [1189375200000, 0.7266],
        [1189461600000, 0.7254],
        [1189548000000, 0.7242],
        [1189634400000, 0.7213],
        [1189720800000, 0.7197],
        [1189807200000, 0.7209],
        [1189893600000, 0.721],
        [1189980000000, 0.721],
        [1190066400000, 0.721],
        [1190152800000, 0.7209],
        [1190239200000, 0.7159],
        [1190325600000, 0.7133],
        [1190412000000, 0.7105],
        [1190498400000, 0.7099],
        [1190584800000, 0.7099],
        [1190671200000, 0.7093],
        [1190757600000, 0.7093],
        [1190844000000, 0.7076],
        [1190930400000, 0.707],
        [1191016800000, 0.7049],
        [1191103200000, 0.7012],
        [1191189600000, 0.7011],
        [1191276000000, 0.7019],
        [1191362400000, 0.7046],
        [1191448800000, 0.7063],
        [1191535200000, 0.7089],
        [1191621600000, 0.7077],
        [1191708000000, 0.7077],
        [1191794400000, 0.7077],
        [1191880800000, 0.7091],
        [1191967200000, 0.7118],
        [1192053600000, 0.7079],
        [1192140000000, 0.7053],
        [1192226400000, 0.705],
        [1192312800000, 0.7055],
        [1192399200000, 0.7055],
        [1192485600000, 0.7045],
        [1192572000000, 0.7051],
        [1192658400000, 0.7051],
        [1192744800000, 0.7017],
        [1192831200000, 0.7],
        [1192917600000, 0.6995],
        [1193004000000, 0.6994],
        [1193090400000, 0.7014],
        [1193176800000, 0.7036],
        [1193263200000, 0.7021],
        [1193349600000, 0.7002],
        [1193436000000, 0.6967],
        [1193522400000, 0.695],
        [1193612400000, 0.695],
        [1193698800000, 0.6939],
        [1193785200000, 0.694],
        [1193871600000, 0.6922],
        [1193958000000, 0.6919],
        [1194044400000, 0.6914],
        [1194130800000, 0.6894],
        [1194217200000, 0.6891],
        [1194303600000, 0.6904],
        [1194390000000, 0.689],
        [1194476400000, 0.6834],
        [1194562800000, 0.6823],
        [1194649200000, 0.6807],
        [1194735600000, 0.6815],
        [1194822000000, 0.6815],
        [1194908400000, 0.6847],
        [1194994800000, 0.6859],
        [1195081200000, 0.6822],
        [1195167600000, 0.6827],
        [1195254000000, 0.6837],
        [1195340400000, 0.6823],
        [1195426800000, 0.6822],
        [1195513200000, 0.6822],
        [1195599600000, 0.6792],
        [1195686000000, 0.6746],
        [1195772400000, 0.6735],
        [1195858800000, 0.6731],
        [1195945200000, 0.6742],
        [1196031600000, 0.6744],
        [1196118000000, 0.6739],
        [1196204400000, 0.6731],
        [1196290800000, 0.6761],
        [1196377200000, 0.6761],
        [1196463600000, 0.6785],
        [1196550000000, 0.6818],
        [1196636400000, 0.6836],
        [1196722800000, 0.6823],
        [1196809200000, 0.6805],
        [1196895600000, 0.6793],
        [1196982000000, 0.6849],
        [1197068400000, 0.6833],
        [1197154800000, 0.6825],
        [1197241200000, 0.6825],
        [1197327600000, 0.6816],
        [1197414000000, 0.6799],
        [1197500400000, 0.6813],
        [1197586800000, 0.6809],
        [1197673200000, 0.6868],
        [1197759600000, 0.6933],
        [1197846000000, 0.6933],
        [1197932400000, 0.6945],
        [1198018800000, 0.6944],
        [1198105200000, 0.6946],
        [1198191600000, 0.6964],
        [1198278000000, 0.6965],
        [1198364400000, 0.6956],
        [1198450800000, 0.6956],
        [1198537200000, 0.695],
        [1198623600000, 0.6948],
        [1198710000000, 0.6928],
        [1198796400000, 0.6887],
        [1198882800000, 0.6824],
        [1198969200000, 0.6794],
        [1199055600000, 0.6794],
        [1199142000000, 0.6803],
        [1199228400000, 0.6855],
        [1199314800000, 0.6824],
        [1199401200000, 0.6791],
        [1199487600000, 0.6783],
        [1199574000000, 0.6785],
        [1199660400000, 0.6785],
        [1199746800000, 0.6797],
        [1199833200000, 0.68],
        [1199919600000, 0.6803],
        [1200006000000, 0.6805],
        [1200092400000, 0.676],
        [1200178800000, 0.677],
        [1200265200000, 0.677],
        [1200351600000, 0.6736],
        [1200438000000, 0.6726],
        [1200524400000, 0.6764],
        [1200610800000, 0.6821],
        [1200697200000, 0.6831],
        [1200783600000, 0.6842],
        [1200870000000, 0.6842],
        [1200956400000, 0.6887],
        [1201042800000, 0.6903],
        [1201129200000, 0.6848],
        [1201215600000, 0.6824],
        [1201302000000, 0.6788],
        [1201388400000, 0.6814],
        [1201474800000, 0.6814],
        [1201561200000, 0.6797],
        [1201647600000, 0.6769],
        [1201734000000, 0.6765],
        [1201820400000, 0.6733],
        [1201906800000, 0.6729],
        [1201993200000, 0.6758],
        [1202079600000, 0.6758],
        [1202166000000, 0.675],
        [1202252400000, 0.678],
        [1202338800000, 0.6833],
        [1202425200000, 0.6856],
        [1202511600000, 0.6903],
        [1202598000000, 0.6896],
        [1202684400000, 0.6896],
        [1202770800000, 0.6882],
        [1202857200000, 0.6879],
        [1202943600000, 0.6862],
        [1203030000000, 0.6852],
        [1203116400000, 0.6823],
        [1203202800000, 0.6813],
        [1203289200000, 0.6813],
        [1203375600000, 0.6822],
        [1203462000000, 0.6802],
        [1203548400000, 0.6802],
        [1203634800000, 0.6784],
        [1203721200000, 0.6748],
        [1203807600000, 0.6747],
        [1203894000000, 0.6747],
        [1203980400000, 0.6748],
        [1204066800000, 0.6733],
        [1204153200000, 0.665],
        [1204239600000, 0.6611],
        [1204326000000, 0.6583],
        [1204412400000, 0.659],
        [1204498800000, 0.659],
        [1204585200000, 0.6581],
        [1204671600000, 0.6578],
        [1204758000000, 0.6574],
        [1204844400000, 0.6532],
        [1204930800000, 0.6502],
        [1205017200000, 0.6514],
        [1205103600000, 0.6514],
        [1205190000000, 0.6507],
        [1205276400000, 0.651],
        [1205362800000, 0.6489],
        [1205449200000, 0.6424],
        [1205535600000, 0.6406],
        [1205622000000, 0.6382],
        [1205708400000, 0.6382],
        [1205794800000, 0.6341],
        [1205881200000, 0.6344],
        [1205967600000, 0.6378],
        [1206054000000, 0.6439],
        [1206140400000, 0.6478],
        [1206226800000, 0.6481],
        [1206313200000, 0.6481],
        [1206399600000, 0.6494],
        [1206486000000, 0.6438],
        [1206572400000, 0.6377],
        [1206658800000, 0.6329],
        [1206745200000, 0.6336],
        [1206831600000, 0.6333],
        [1206914400000, 0.6333],
        [1207000800000, 0.633],
        [1207087200000, 0.6371],
        [1207173600000, 0.6403],
        [1207260000000, 0.6396],
        [1207346400000, 0.6364],
        [1207432800000, 0.6356],
        [1207519200000, 0.6356],
        [1207605600000, 0.6368],
        [1207692000000, 0.6357],
        [1207778400000, 0.6354],
        [1207864800000, 0.632],
        [1207951200000, 0.6332],
        [1208037600000, 0.6328],
        [1208124000000, 0.6331],
        [1208210400000, 0.6342],
        [1208296800000, 0.6321],
        [1208383200000, 0.6302],
        [1208469600000, 0.6278],
        [1208556000000, 0.6308],
        [1208642400000, 0.6324],
        [1208728800000, 0.6324],
        [1208815200000, 0.6307],
        [1208901600000, 0.6277],
        [1208988000000, 0.6269],
        [1209074400000, 0.6335],
        [1209160800000, 0.6392],
        [1209247200000, 0.64],
        [1209333600000, 0.6401],
        [1209420000000, 0.6396],
        [1209506400000, 0.6407],
        [1209592800000, 0.6423],
        [1209679200000, 0.6429],
        [1209765600000, 0.6472],
        [1209852000000, 0.6485],
        [1209938400000, 0.6486],
        [1210024800000, 0.6467],
        [1210111200000, 0.6444],
        [1210197600000, 0.6467],
        [1210284000000, 0.6509],
        [1210370400000, 0.6478],
        [1210456800000, 0.6461],
        [1210543200000, 0.6461],
        [1210629600000, 0.6468],
        [1210716000000, 0.6449],
        [1210802400000, 0.647],
        [1210888800000, 0.6461],
        [1210975200000, 0.6452],
        [1211061600000, 0.6422],
        [1211148000000, 0.6422],
        [1211234400000, 0.6425],
        [1211320800000, 0.6414],
        [1211407200000, 0.6366],
        [1211493600000, 0.6346],
        [1211580000000, 0.635],
        [1211666400000, 0.6346],
        [1211752800000, 0.6346],
        [1211839200000, 0.6343],
        [1211925600000, 0.6346],
        [1212012000000, 0.6379],
        [1212098400000, 0.6416],
        [1212184800000, 0.6442],
        [1212271200000, 0.6431],
        [1212357600000, 0.6431],
        [1212444000000, 0.6435],
        [1212530400000, 0.644],
        [1212616800000, 0.6473],
        [1212703200000, 0.6469],
        [1212789600000, 0.6386],
        [1212876000000, 0.6356],
        [1212962400000, 0.634],
        [1213048800000, 0.6346],
        [1213135200000, 0.643],
        [1213221600000, 0.6452],
        [1213308000000, 0.6467],
        [1213394400000, 0.6506],
        [1213480800000, 0.6504],
        [1213567200000, 0.6503],
        [1213653600000, 0.6481],
        [1213740000000, 0.6451],
        [1213826400000, 0.645],
        [1213912800000, 0.6441],
        [1213999200000, 0.6414],
        [1214085600000, 0.6409],
        [1214172000000, 0.6409],
        [1214258400000, 0.6428],
        [1214344800000, 0.6431],
        [1214431200000, 0.6418],
        [1214517600000, 0.6371],
        [1214604000000, 0.6349],
        [1214690400000, 0.6333],
        [1214776800000, 0.6334],
        [1214863200000, 0.6338],
        [1214949600000, 0.6342],
        [1215036000000, 0.632],
        [1215122400000, 0.6318],
        [1215208800000, 0.637],
        [1215295200000, 0.6368],
        [1215381600000, 0.6368],
        [1215468000000, 0.6383],
        [1215554400000, 0.6371],
        [1215640800000, 0.6371],
        [1215727200000, 0.6355],
        [1215813600000, 0.632],
        [1215900000000, 0.6277],
        [1215986400000, 0.6276],
        [1216072800000, 0.6291],
        [1216159200000, 0.6274],
        [1216245600000, 0.6293],
        [1216332000000, 0.6311],
        [1216418400000, 0.631],
        [1216504800000, 0.6312],
        [1216591200000, 0.6312],
        [1216677600000, 0.6304],
        [1216764000000, 0.6294],
        [1216850400000, 0.6348],
        [1216936800000, 0.6378],
        [1217023200000, 0.6368],
        [1217109600000, 0.6368],
        [1217196000000, 0.6368],
        [1217282400000, 0.636],
        [1217368800000, 0.637],
        [1217455200000, 0.6418],
        [1217541600000, 0.6411],
        [1217628000000, 0.6435],
        [1217714400000, 0.6427],
        [1217800800000, 0.6427],
        [1217887200000, 0.6419],
        [1217973600000, 0.6446],
        [1218060000000, 0.6468],
        [1218146400000, 0.6487],
        [1218232800000, 0.6594],
        [1218319200000, 0.6666],
        [1218405600000, 0.6666],
        [1218492000000, 0.6678],
        [1218578400000, 0.6712],
        [1218664800000, 0.6705],
        [1218751200000, 0.6718],
        [1218837600000, 0.6784],
        [1218924000000, 0.6811],
        [1219010400000, 0.6811],
        [1219096800000, 0.6794],
        [1219183200000, 0.6804],
        [1219269600000, 0.6781],
        [1219356000000, 0.6756],
        [1219442400000, 0.6735],
        [1219528800000, 0.6763],
        [1219615200000, 0.6762],
        [1219701600000, 0.6777],
        [1219788000000, 0.6815],
        [1219874400000, 0.6802],
        [1219960800000, 0.678],
        [1220047200000, 0.6796],
        [1220133600000, 0.6817],
        [1220220000000, 0.6817],
        [1220306400000, 0.6832],
        [1220392800000, 0.6877],
        [1220479200000, 0.6912],
        [1220565600000, 0.6914],
        [1220652000000, 0.7009],
        [1220738400000, 0.7012],
        [1220824800000, 0.701],
        [1220911200000, 0.7005]
      ];

      function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals) + '€';
      }

      function doPlot(position) {
        $.plot(
          $('#flot-line-chart-multi'),
          [
            {
              data: oilprices,
              label: 'Oil price ($)'
            },
            {
              data: exchangerates,
              label: 'USD/EUR exchange rate',
              yaxis: 2
            }
          ],
          {
            xaxes: [
              {
                mode: 'time'
              }
            ],
            yaxes: [
              {
                min: 0
              },
              {
                // align if we are to the right
                alignTicksWithAxis: position == 'right' ? 1 : null,
                position: position,
                tickFormatter: euroFormatter
              }
            ],
            legend: {
              position: 'sw'
            },
            grid: {
              hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
              content: '%s for %x was %y',
              xDateFormat: '%y-%0m-%0d',

              onHover: function(flotItem, $tooltipEl) {
                // console.log(flotItem, $tooltipEl);
              }
            }
          }
        );
      }

      doPlot('right');

      $('button').click(function() {
        doPlot($(this).text());
      });
    });

    //Flot Moving Line Chart

    $(function() {
      var container = $('#flot-line-chart-moving');

      // Determine how many data points to keep based on the placeholder's initial size;
      // this gives us a nice high-res plot while avoiding more than one point per pixel.

      var maximum = container.outerWidth() / 2 || 300;

      //

      var data = [];

      function getRandomData() {
        if (data.length) {
          data = data.slice(1);
        }

        while (data.length < maximum) {
          var previous = data.length ? data[data.length - 1] : 50;
          var y = previous + Math.random() * 10 - 5;
          data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]]);
        }

        return res;
      }

      //

      let series = [
        {
          data: getRandomData(),
          lines: {
            fill: true
          }
        }
      ];

      //

      var plot = $.plot(container, series, {
        grid: {
          borderWidth: 1,
          minBorderMargin: 20,
          labelMargin: 10,
          backgroundColor: {
            colors: ['#fff', '#e4f4f4']
          },
          margin: {
            top: 8,
            bottom: 20,
            left: 20
          },
          markings: function(axes) {
            var markings = [];
            var xaxis = axes.xaxis;
            for (
              var x = Math.floor(xaxis.min);
              x < xaxis.max;
              x += xaxis.tickSize * 2
            ) {
              markings.push({
                xaxis: {
                  from: x,
                  to: x + xaxis.tickSize
                },
                color: 'rgba(232, 232, 255, 0.2)'
              });
            }
            return markings;
          }
        },
        xaxis: {
          tickFormatter: function() {
            return '';
          }
        },
        yaxis: {
          min: 0,
          max: 110
        },
        legend: {
          show: true
        }
      });

      // Update the random dataset at 25FPS for a smoothly-animating chart

      setInterval(function updateRandom() {
        series[0].data = getRandomData();
        plot.setData(series);
        plot.draw();
      }, 40);
    });

    //Flot Bar Chart

    $(function() {
      var barOptions = {
        series: {
          bars: {
            show: true,
            barWidth: 43200000
          }
        },
        xaxis: {
          mode: 'time',
          timeformat: '%m/%d',
          minTickSize: [1, 'day']
        },
        grid: {
          hoverable: true
        },
        legend: {
          show: false
        },
        tooltip: true,
        tooltipOpts: {
          content: 'x: %x, y: %y'
        }
      };
      var barData = {
        label: 'bar',
        data: [
          [1354521600000, 1000],
          [1355040000000, 2000],
          [1355223600000, 3000],
          [1355306400000, 4000],
          [1355487300000, 5000],
          [1355571900000, 6000]
        ]
      };
      $.plot($('#flot-bar-chart'), [barData], barOptions);
    });
  }
}
