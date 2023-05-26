        var map = new BMapGL.Map("map1");
        var point = new BMapGL.Point(114.21808570548943,30.77633908614269);
        map.centerAndZoom(point, 0); 
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.setHeading(64.5);   //设置地图旋转角度
        map.setTilt(73);       //设置地图的倾斜角度
        map.setMapType(BMAP_EARTH_MAP);     // 设置地图类型为地球模式
        map.enableScrollWheelZoom(true);     //设置鼠标滚轮
        var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
        map.addControl(scaleCtrl);
        



