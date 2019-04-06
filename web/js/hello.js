layui.use(['form', 'layer', 'jquery', 'table'], function () {
    var form = layui.form;
    var layer = layui.layer;
    var $ = layui.jquery;
    var table = layui.table;

    $("#tanchu").click(function () {
        layer.open({
           type: 1,
           title: '信息提示',
            area: ['800px', '500px'],
            content: $("#win")
        });

        table.render({
            elem: '#test'
            ,page: true
            ,height: 312
            ,url: 'http://192.168.221.137:7099/user/list' //数据接口
            ,cols: [[ //表头
                 {type:'checkbox'}
                ,{field:'userId', width:80, title: 'ID', sort: true}
                ,{field:'userName', width:80, title: '用户名'}
                ,{field:'sex', width:80, title: '性别', sort: true}
                ,{field:'city', width:80, title: '城市'}
                ,{field:'sign', title: '签名', minWidth: 100}
                ,{field:'experience', width:80, title: '积分', sort: true}
                ,{field:'score', width:80, title: '评分', sort: true}
                ,{field:'classify', width:80, title: '职业'}
                ,{field:'wealth', width:135, title: '财富', sort: true}
            ]]
        });
    });
});
