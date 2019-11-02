;layui.define(function(e) {
    layui.use(["admin", "carousel", "echarts"],
    function() {
        var e = layui.$,
        t = layui.admin,
        a = layui.carousel,
        i = layui.echarts,
        l = [],
        n = [
         {
            title: {
                text: "用户实名分布",
                x: "center",
                textStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: ["实名用户", "未实名用户",]
            },
            series: [{
                name: "访问来源",
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data: [
                { value: 9052, name: "实名用户" },
                { value: 1610, name: "未实名用户" },
                ]
            }]
        },
        {
            title: {
                text: "产品数量统计",
                x: "center",
                textStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: "axis",
                formatter: "{b}：{c}"
            },
            xAxis: [{
                type: "category",
                data: ["托管设备数", "租用设备数", "企业邮箱数", "云建站数", ],
            }],
            yAxis: [{ type: "value" }],
            series: [{
                type: "line",
                data: [200, 300, 400, 610,]
            }]
        }],
        r = e("#LAY-index-dataview").children("div"),
        o = function(e) {
            l[e] = i.init(r[e], layui.echartsTheme),
            l[e].setOption(n[e]),
            t.resize(function() {
                l[e].resize()
            })
        };
        if (r[0]) {
            o(0);
            var d = 0;
            a.on("change(LAY-index-dataview)",
            function(e) {
                o(d = e.index)
            }),
            layui.admin.on("side",
            function() {
                setTimeout(function() {
                    o(d)
                },
                300)
            }),
            layui.admin.on("hash(tab)",
            function() {
                layui.router().path.join("") || o(d)
            })
        }
    }),
    e("console", {})
});