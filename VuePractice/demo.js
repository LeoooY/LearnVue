new Vue({
    el:"#demoApp",
    data:  {
        msg:"hello world",
        count:1,
        name:"Leo",
        job:"web开发",
        time:"morning",
        website:"https://www.thenewstep.com",
        websiteTag:"<a href='https://www.baidu.com'>websiteTag</a>"
    },
    methods: {
        add:function(){
            return  count++;
        },
        greet: function(time){
            return "Good "+time+"!"+" " +this.name;
        }
    }
});