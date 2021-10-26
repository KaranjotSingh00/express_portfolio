$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});


var url = '/getcontact'
    var Table = $('#view-contact-table').DataTable({
      rowReorder: {
          dataSrc: 'order',
          selector: 'tr'
      },
      columns: [{
              data: 'firstName'
          }, {
              data: 'lastName'
          }, {
              data: 'email'
          }, {
              data: 'number'
          },
          {
            data : 'id',
            render : function(data, type, row) {
            return '<i class="fa fa-pencil edit" onclick="editcontact('+data+');" ></i>  <i class="far fa-trash-alt red delete" onclick="deletecontact('+data+');" ></i>'
          } 
             
          }
      ],
      language: {
          //customize pagination prev and next buttons: use arrows instead of words
          'paginate': {
              'previous': '<span class="fa fa-chevron-left round"></span>',
              'next': '<span class="fa fa-chevron-right round"></span>'
          }
      }
  });
    $.ajax({
        type: "get",
        url: url,
        data: '',
        processData: false,
        contentType: false,
        cache: false,
        success: function (data, status, jqXHR) {
            Table.clear();
            Table.rows.add(data).draw();
        },
        error: function (jqXHR, status, err) {
            console.log('error occured');
        },
    });

     

});
function deletecontact(id){

    Swal.fire({
        title: 'Do you want to Delete!!?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Don't Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var Table = $('#view-contact-table').DataTable();
            $.ajax({
                type: "get",
                url: '/deletegetcontact',
                data: 'id='+id,
                processData: false,
                contentType: false,
                cache: false,
                success: function (data, status, jqXHR) {
                    Table.clear();
                    Table.rows.add(data).draw();
                },
                error: function (jqXHR, status, err) {
                    console.log('error occured');
                },
            })
            Swal.fire('Succesfully Deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire(' Not Deleted! ', '', 'info')
        }
      })

  
}

function editcontact(id){
    $.ajax({
        type: "get",
        url: '/getsinglecontact',
        data: 'id='+id,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data, status, jqXHR) {
            $('#id').val(data[0].id);
            $('#fname').val(data[0].firstName);
            $('#lname').val(data[0].lastName);
            $('#email').val(data[0].email);
            $('#number').val(data[0].number);
            var modal = document.getElementById('updatemodal');
            modal.style.display='block';
        },
        error: function (jqXHR, status, err) {
            console.log('error occured');
        },
    })
    
}