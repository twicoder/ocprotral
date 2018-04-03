let demodata = [
    {
        index: 0,
        steamflowchartpath: "../../static/pics/evt1.png",
        data_statistic: { success: 2000, fail: 100 },
        usefulDataTrendChartDataOption: {
            color: ["#0098FF", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '有效数据统计图',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#FCC391'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: []
                }
            ]
        },
        uselessDataTrendChartDataOption: {
            color: ["#640346", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '无效数据统计图',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#FCC391'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: []
                }
            ]
        },
        memoryRateChartDataOption: {
            color: ["#0098FF", "#A3F889"],
            title: {
                text: "内存比例",
                x: "center",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "auto"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["流TestA", "流TestB"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "auto"
                }
            },
            calculable: true,
            series: [
                {
                    name: "内存比例信息",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 50, name: "流TestA" },
                        { value: 30, name: "流TestB" }
                    ]
                }
            ]
        },
        cpuRateChartDataOption: {
            color: ["#0098FF", "#A3F889"],
            title: {
                text: "CPU核数比例",
                x: "center",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "auto"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["流TestA", "流TestB"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "auto"
                }
            },
            calculable: true,
            series: [
                {
                    name: "CPU比例信息",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 10, name: "流TestA" },
                        { value: 90, name: "流TestB" }
                    ]
                }
            ]
        },
        batchProcessTimeChartDataOption: {
            color: ["#6BF5F5", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ["每批次处理时间（s）"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                }
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "value"
            },
            yAxis: {
                type: "category",
                data: ["批次1", "批次2", "批次3", "批次4", "批次5"]
            },
            series: [
                {
                    name: "每批次处理时间（s）",
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: true,
                            position: "insideRight"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: [50, 45, 49, 55, 51]
                }
            ]
        },
        streamEventsOutputDataChartDataOption: {
            color: ["#C6EB89", "#17DB54"],
            title: {
                text: '作业流事件处理数据量',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['事件Demo1','事件Demo2'],
                textStyle: {
                    color: "#aaa"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'事件Demo1',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'事件Demo2',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220, 182, 191, 234, 290, 330, 310]
                }
            ]
        }
    },

    {
        index: 1,
        steamflowchartpath: "../../static/pics/evt2.png",
        data_statistic: { success: 3000, fail: 200 },
        usefulDataTrendChartDataOption: {
            color: ["#640346", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '有效数据统计图',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#FCC391'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: []
                }
            ]
        },
        uselessDataTrendChartDataOption: {
            color: ["#640346", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '无效数据统计图',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#FCC391'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: []
                }
            ]
        },
        memoryRateChartDataOption: {
            color: ["#0098FF", "#A3F889"],
            title: {
                text: "内存比例",
                x: "center",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "auto"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["流TestA", "流TestB"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "auto"
                }
            },
            calculable: true,
            series: [
                {
                    name: "内存比例信息",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 40, name: "流TestA" },
                        { value: 50, name: "流TestB" }
                    ]
                }
            ]
        },
        cpuRateChartDataOption: {
            color: ["#0098FF", "#A3F889"],
            title: {
                text: "CPU核数比例",
                x: "center",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["流TestA", "流TestB"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                }
            },
            calculable: true,
            series: [
                {
                    name: "CPU比例信息",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 30, name: "流TestA" },
                        { value: 70, name: "流TestB" }
                    ]
                }
            ]
        },
        batchProcessTimeChartDataOption: {
            color: ["#6BF5F5", "#67C23A"],
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ["每批次处理时间（s）"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                }
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "value"
            },
            yAxis: {
                type: "category",
                data: ["批次1", "批次2", "批次3", "批次4", "批次5"]
            },
            series: [
                {
                    name: "每批次处理时间（s）",
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: true,
                            position: "insideRight"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: [35, 25, 45, 50, 40]
                }
            ]
        },
        streamEventsOutputDataChartDataOption: {
            color: ["#C6EB89", "#17DB54","#79CDD9"],
            title: {
                text: '作业流事件处理数据量',
                textStyle: {
                    fontWeight: "bolder",
                    color: "#aaa"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['事件Demo1','事件Demo2','事件Demo3'],
                textStyle: {
                    color: "#aaa"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'事件Demo1',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[85, 94, 152, 111, 126, 94, 220]
                },
                {
                    name:'事件Demo2',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 282, 91, 134, 190, 230, 270]
                },
                {
                    name:'事件Demo3',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[90, 141, 124, 112, 170, 130, 210]
                }
            ]
        }
    }
];

export default demodata;