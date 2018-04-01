let demodata = [
    {
        index: 0,
        steamflowchartpath: "../../static/pics/evt1.png",
        data_statistic: { success: 2000, fail: 100 },
        usefulDataTrendChartDataOption: {
            color: ["#721B6A", "#67C23A"],
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: []
            }]
        },
        uselessDataTrendChartDataOption: {
            color: ["#721B6A", "#67C23A"],
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: []
            }]
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
                data: ["流ii", "流testspark_aa"],
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
                        { value: 10, name: "流ii" },
                        { value: 90, name: "流testspark_aa" }
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
            title: {
                text: "有效数据",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: "axis"
            },
            toolbox: {
                show: true
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                }
            ],
            yAxis: [
                {
                    type: "value"
                }
            ],
            series: [
                {
                    name: "有效数据",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [400, 380, 390, 410, 220, 370, 430]
                }
            ]
        },
        uselessDataTrendChartDataOption: {
            color: ["#721B6A", "#67C23A"],
            title: {
                text: "无效数据",
                textStyle: {
                    color: "#EEE"
                }
            },
            textStyle: {
                fontWeight: "bolder",
                color: "#aaa"
            },
            tooltip: {
                trigger: "axis"
            },
            toolbox: {
                show: true
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                }
            ],
            yAxis: [
                {
                    type: "value"
                }
            ],
            series: [
                {
                    name: "无效数据",
                    type: "line",
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [20, 33, 12, 24, 25, 16, 40]
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
                data: ["空闲CPU", "繁忙CPU"],
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
                        { value: 30, name: "空闲CPU" },
                        { value: 70, name: "繁忙CPU" }
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