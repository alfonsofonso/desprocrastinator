/**
 User: alfonso
 Data: 1/07/14 , 17:29
 */

    var numProjects=0;
    var miTime;
    var activo;
    var contador=0;

var Assets=new function(){


    this.createTitle=function(){///////////////////////  C A B E C E R A
        $('<div/>', {
            id: 'title',
            class:"title",
            text: 'Tus proyectos  '
        }).appendTo('#canvas');
    };

    this.createButton=function(){ /////////////////////   A D D   B U T T O N

        $('<button/>', {
            id: 'addProject',
            class:"boton",
            click: Assets.createProject,
            text: 'añadir proyecto '

        }).appendTo('#title');

    };

    this.createProject=function(){///////////////////////////////  I N P U T   P R O J E C T
        console.log("creo project");

        numProjects++;

                    // creo una capa para el projecto
        var proj=$('<div/>', {
            id: "project"+numProjects,
            class:"project"
        }).appendTo('#canvas');

        $.data(proj,"projecto",{"num":numProjects,"tiempo":0});

                        /// input text para el nombre del projecto
        var inp=$('<input/>', {

            id: "input"+numProjects,
            class:"input",
            placeholder:"nombre del proyecto"

        }).appendTo(proj);


                 // submit button para el nombre
        var but=$('<button/>', {

            id: "buttonInput"+numProjects,
            class:"button",
            text:"crear",
            click:function(){Assets.fillProject(proj,inp,but)}

        }).appendTo(proj);
    };

    this.fillProject=function(proj,inpu,but){/// crear

        var projTit= $('<div/>', {

            id: "projTit"+numProjects,
            class:"projTit",
            text:inpu[0].value,
            width:"100px"
        }).appendTo(proj);

        var projTime= $('<div/>', {
            id: "projTime"+numProjects,
            class:"projTime",
            text:"0:00:00"
        }).appendTo(proj);

        var projDo= $('<button/>', {
            id: "projDo"+numProjects,
            class:"boton projDo",
            text:"empezar",
            click:function(){Assets.empiezoProj(proj)}
        }).appendTo(proj);


        $(but).remove();
        $(inpu).remove();

    };

    this.empiezoProj=function(proj){/// empezar

        console.log("empiezo Porject: "+proj);
        activo=proj;
        miTime=setInterval(Assets.contar,1000);

        activo.css("background-color","gold");

        activo[0].children[2].innerText="parar";

        activo[0].children[1].innerText="0 s";
        $(activo[0].children[2]).unbind('click');
        $(activo[0].children[2]).click(Assets.parar);
    };

    this.contar=function(){

        contador=$.data(activo,"projecto").tiempo;
        contador++;
        activo[0].children[1].innerText=contador+" s";
        $.data(activo,"projecto").tiempo++;

    };


    this.parar=function(){

        console.log("pararrr");

        clearInterval(miTime);
        $(activo[0].children[2]).text("seguir");
        $(activo[0].children[2]).unbind('click');
        $(activo[0].children[2]).click(Assets.empiezoProj);
        activo.css("background-color","#eed473");
    }




};