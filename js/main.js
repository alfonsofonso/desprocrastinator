

var Init=new function(){

    this.go=function(){
        console.log("voy");

        Assets.createTitle();
        Assets.createButton();


    };



};


onload=Init.go();