let demodata = [
    {
        index: 0,
        steamflowchartpath: "../../static/pics/evt1.png",
        data_statistic: { success: 2000, fail: 100 },
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
                            color: 'rgb(255, 70, 131)'
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
                            color: 'rgb(255, 70, 131)'
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
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            series: [
                {
                    name: "CPU使用率",
                    type: "gauge",
                    splitNumber: 10, // 分割段数，默认为5
                    axisLine: {
                        // 坐标轴线
                        lineStyle: {
                            // 属性lineStyle控制线条样式
                            color: [[0.2, "#228b22"], [0.8, "#48b"], [1, "#ff4500"]],
                            width: 8
                        }
                    },
                    axisTick: {
                        // 坐标轴小标记
                        splitNumber: 10, // 每份split细分多少段
                        length: 12, // 属性length控制线长
                        lineStyle: {
                            // 属性lineStyle控制线条样式
                            color: "auto"
                        }
                    },
                    axisLabel: {
                        // 坐标轴文本标签，详见axis.axisLabel
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: "auto"
                        }
                    },
                    splitLine: {
                        // 分隔线
                        show: true, // 默认显示，属性show控制显示与否
                        length: 30, // 属性length控制线长
                        lineStyle: {
                            // 属性lineStyle（详见lineStyle）控制线条样式
                            color: "auto"
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    title: {
                        show: true,
                        textStyle: {
                            color: "#EEE"
                        },
                        offsetCenter: [0, "-40%"], // x, y，单位px
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: "bolder",
                            color: "auto"
                        }
                    },
                    detail: {
                        formatter: "{value}%",
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: "auto",
                            fontWeight: "bolder"
                        }
                    },
                    data: [{ value: 70, name: "内存比例" }]
                }
            ]
        },
        cpuRateChartDataOption: {
            color: ["#67C23A", "#E6A23C"],
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
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: [50, 45, 49, 55, 51]
                }
            ]
        },
        streamEventsOutputDataChartDataOption: {
            color: ["#983C8F", "#2F81C4"],
            title: {
                text: "作业流事件处理数据量",
                textStyle: {
                    color: "#EEE"
                },
                subtext: "Demo"
            },
            textStyle: {
                color: "#AAA"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["demo1", "event2"],
                textStyle: {
                    color: "#AAA"
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                }
            ],
            yAxis: {
                type: "value"
            },
            series: [
                {
                    name: "demo1",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name: "event2",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [30, 182, 434, 791, 390, 30, 10]
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
                            color: 'rgb(255, 70, 131)'
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
                            color: 'rgb(255, 70, 131)'
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
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            series: [
                {
                    name: "CPU使用率",
                    type: "gauge",
                    splitNumber: 10, // 分割段数，默认为5
                    axisLine: {
                        // 坐标轴线
                        lineStyle: {
                            // 属性lineStyle控制线条样式
                            color: [[0.2, "#228b22"], [0.8, "#48b"], [1, "#ff4500"]],
                            width: 8
                        }
                    },
                    axisTick: {
                        // 坐标轴小标记
                        splitNumber: 10, // 每份split细分多少段
                        length: 12, // 属性length控制线长
                        lineStyle: {
                            // 属性lineStyle控制线条样式
                            color: "auto"
                        }
                    },
                    axisLabel: {
                        // 坐标轴文本标签，详见axis.axisLabel
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: "auto"
                        }
                    },
                    splitLine: {
                        // 分隔线
                        show: true, // 默认显示，属性show控制显示与否
                        length: 30, // 属性length控制线长
                        lineStyle: {
                            // 属性lineStyle（详见lineStyle）控制线条样式
                            color: "auto"
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    title: {
                        show: true,
                        textStyle: {
                            color: "#EEE"
                        },
                        offsetCenter: [0, "-40%"], // x, y，单位px
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: "bolder",
                            color: "auto"
                        }
                    },
                    detail: {
                        formatter: "{value}%",
                        textStyle: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: "auto",
                            fontWeight: "bolder"
                        }
                    },
                    data: [{ value: 30, name: "内存比例" }]
                }
            ]
        },
        cpuRateChartDataOption: {
            color: ["#67C23A", "#E6A23C"],
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
                    areaStyle: {
                        normal: {
                            color: null
                        }
                    },
                    data: [35, 25, 45, 50, 40]
                }
            ]
        },
        streamEventsOutputDataChartDataOption: {
            color: ["#983C8F", "#2F81C4", "#A3BE4C"],
            title: {
                text: "作业流事件处理数据量",
                textStyle: {
                    color: "#EEE"
                },
                subtext: "Demo"
            },
            textStyle: {
                color: "#AAA"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["evt1001", "evt1002", "测试名称2"],
                color: ["#67C23A", "#57B22A", "#47A21A"],
                textStyle: {
                    color: "#AAA"
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                }
            ],
            yAxis: {
                type: "value"
            },
            series: [
                {
                    name: "evt1001",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [30, 22, 25, 29, 160, 120, 210]
                },
                {
                    name: "evt1002",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [90, 120, 234, 331, 290, 40, 80]
                },
                {
                    name: "测试名称2",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [120, 182, 134, 291, 90, 230, 110]
                }
            ]
        }
    }
];

export default demodata;