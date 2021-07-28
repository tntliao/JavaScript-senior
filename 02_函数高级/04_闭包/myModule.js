function myModule() {
    //私有数据
    var msg = 'My atguigu';
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase());
    }
    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase())
    }

    //向外暴露对象(给对象使用的方法)
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}