new Vue({
    el:"#EventApp",
    data:{
        len:13,
        x:0,
        y:0,
        sObj:'',
        sObj2:''
    },
    methods: {
        add: function(num){
            this.len+=num;
        },
        dec: function(num){
            this.len-=num;
        },
        print: function(s){
            console.log(s);
        },
        updateXY: function(event) {
            console.log(event);
            this.x=event.x;
            this.y=event.y;
            this.sObj={
                position:'absolute',
                fontSize: '20px',
                left: (this.x-5)+'px',
                top: (this.y-5)+'px'
            };
            
        }
    },
    computed: {
        
    }
});