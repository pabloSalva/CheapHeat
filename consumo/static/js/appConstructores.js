//aplicacion para crear nuevas viviendas

//funcion crear nuevo material. agrega un nuevo material a la lista de materiales disponibles

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })


  var formulario = document.getElementById('formulario1'); 



  formulario.addEventListener('submit',function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

  
  // conversion de datos de formuloario a JSON

    var dat = {
      nombre_material: datos.get("nombre_material"),
      tipo : datos.get("tipo"),
      espesor : datos.get("espesor"),
      transmitancia_termica: datos.get("conductividad_termica"),
      estado : datos.get("estado"),
      users : [1]
    };

    var url = 'http://localhost:8000/api/materiales/'

    fetch(url,{
      method:'POST',
      body:JSON.stringify(dat), 
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error: ',error))
    .then(response => console.log('Success: ', response));
    console.log("datos: ",dat);
    
  });



//llamado a ver listado de materiales






  //$("#cargaMaterial").click(function(){
    
    
    //const data = new FormData(document.getElementById('formulario1'));
    //console.log(formData);
    
    //funcion que envìa los datos por post

    //var url = 'http://localhost:8000/api/materiales';
    //var formData = JSON.stringify($("#formulario1").serializeArray());
    //var data = {username: 'example'};

    //fetch(url, {
      // method: 'POST', // or 'PUT'
       //body: JSON.stringify(formData), // data can be `string` or {object}!
       //headers:{
      //'Content-Type': 'application/json'
      //}
    //}).then(res => res.json())
    //.catch(error => console.error('Error:', error))
    //.then(response => console.log('Success:', response));

    
    //$("#cargadeMaterial").text($("form").serialize());
    //console.log("hola");
    
  //});

 



