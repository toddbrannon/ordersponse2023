/*$(document).ready(function() {

    
    $('#example').DataTable( {
        responsive: true
    });
    
});*/


/* MODAL DETAILS DISPLAY (https://datatables.net/extensions/responsive/examples/display-types/modal.html) */

$(document).ready(function() {
    $('#example').DataTable( {
        "deferRender": true,
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Details for '+data[0]+' '+data[1];
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll()
            }
        }
    } );
} );


////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    //Get current path and find target length
    var path = window.location.pathname.split("/").pop();


//Account for homepage with empty path
if(path == '') {
    path = 'landing.ejs';
}

var target = $('nav a[href="'+ path +'"]');
//Add active class to the target link
target.addClass('active');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*$(document).ready(function() {
    $.fn.dataTable.moment( 'HH:mm MMM D, YY' );
    $.fn.dataTable.moment( 'dddd, MMMM Do, YYYY' );
 
    $('#example').DataTable();
} );*/