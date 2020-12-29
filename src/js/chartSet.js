//销售额
let dom = document.getElementById("container");
let myChart = echarts.init(dom);
let app = {};
option = null;
option = {
    /*     title: {
            text: '出版社销售前五名',
            backgroundColor:'#fff',
        }, */
    textStyle: {
        color: '#fff',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['销售额'],
        textStyle: {
            color: 'red',
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['中国华侨出版社', '北京教育出版社', '吉林文史出版社', '四川少年儿童出版社', '明天出版社']
    },
    series: [
        {
            name: '销售额',
            type: 'bar',
            data: [3364367.9, 3696475.06, 3958169.42, 5620157.5, 7160512]
        },
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
//渠道
let ryDOM = document.getElementById("ryCharts");
let ryCharts = echarts.init(ryDOM);
let dataBJ = [
    [20.51, 33.78, 32.06, 41.73, 34.41, 34.31, 31.25],//分渠道退款金额
    [194.098, 328.23, 623.475, 288.653, 387.489, 868.322, 264.339],//分渠道成交金额
    [313.1, 301.1, 321.1, 321.4, 300.7, 280.8, 320.4, 284.2],//分渠道客单价
    [867.6, 1466.6, 3441.7, 1583.9, 4514.7, 1790.7, 0],//分渠道访客获取成本
    [136, 127.5, 126, 120, 136, 128, 126.9],//分渠道平均发货时间
    [434, 426, 422, 435, 425, 428, 0],//分渠道页面访问时长
    [50, 80, 130, 80, 160, 100, 0],//分渠道人均页面访问数
    [132, 110, 109, 124, 120, 31, 0],//分渠道跳出率
    [78, 148, 262, 127, 186, 376, 128],//分渠道总订单数量
    [270, 710, 1100, 650, 840, 1770, 590],//分渠道退款总订单量
    [429.7, 953.6, 1560.8, 8286, 1151.3, 2366, 813.5],//分渠道下单支付时长
    [48.72, 41.89, 30.15, 44.09, 30.65, 26.33, 46.09],//分渠道下单支付买家转化率
];

let lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

ryoption = {
    radar: {
        indicator: [
            {name: '淘宝搜索', max: 1500},
            {name: '淘宝橱窗', max: 1500},
            {name: '淘宝直播', max: 8000},
            {name: '淘宝社区', max: 9000},
            {name: '直通车', max: 5000},
            {name: '聚划算', max: 5000},
            {name: '阿里博客', max: 3000}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '分渠道信息统计',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        },
    ]
};
if (ryoption && typeof ryoption === "object") {
    ryCharts.setOption(ryoption, true);
}
//24小时
let gDOM = document.getElementById("gCharts");
let gCharts = echarts.init(gDOM);
let dataDL = [
    [0, 112],
    [1, 109],
    [2, 119],
    [3, 105],
    [4, 101],
    [5, 101],
    [6, 103],
    [7, 103],
    [8, 117],
    [9, 108],
    [10, 112],
    [11, 106],
    [12, 115],
    [13, 115],
    [14, 105],
    [15, 107],
    [16, 111],
    [17, 104],
    [18, 107],
    [19, 106],
    [20, 112],
    [21, 105],
    [22, 108],
    [23, 115]
];
let dataYM = [
    [0, 484],
    [1, 508],
    [2, 528],
    [3, 538],
    [4, 435],
    [5, 479],
    [6, 511],
    [7, 467],
    [8, 531],
    [9, 546],
    [10, 502],
    [11, 480],
    [12, 477],
    [13, 497],
    [14, 518],
    [15, 483],
    [16, 524],
    [17, 523],
    [18, 489],
    [19, 486],
    [20, 491],
    [21, 493],
    [22, 488],
    [23, 551]
];

let schema = [
    {name: 'date', index: 0, text: '时'},
    {name: 'AQI_index', index: 1, text: '次数'},
];


let itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
};

ptoption = {
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        top: 10,
        data: ['独立访问数', '页面访问数'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        left: '10%',
        right: 150,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            let value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,0.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '时：'
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '时',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 23,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '次数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '独立访问数',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataDL
        },
        {
            name: '页面访问数',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataYM
        },
    ]
};
if (ptoption && typeof ptoption === "object") {
    gCharts.setOption(ptoption, true);
}
//退款
let wlDOM = document.getElementById("wlCharts");
let wlCharts = echarts.init(wlDOM);
wloption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        left: 10,
        data: ['收到商品破损污渍', '拍错/多拍', '材质与商品描述不符'],
        textStyle: {
            color: '#fff',
        }
    },
    series: [
        {
            name: '退款原因',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 67, name: '收到商品破损污渍', selected: true},
                {value: 74, name: '拍错/多拍'},
                {value: 130, name: '材质与商品描述不符'},
            ]
        },
        {
            name: '退款原因占比',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 24.72, name: '收到商品破损污渍'},
                {value: 27.31, name: '拍错/多拍'},
                {value: 47.97, name: '材质与商品描述不符'},
            ]
        }
    ]
};
if (wloption && typeof wloption === "object") {
    wlCharts.setOption(wloption, true);
}
//根据窗口的大小变动图表 --- 重点
window.onresize = function () {
    myChart.resize();
    gCharts.resize();
    ryCharts.resize();
    wlCharts.resize();
}