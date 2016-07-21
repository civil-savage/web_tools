function getdata() {
    var proj_id = $(this).closest("tr").find("input").attr("value")
    $.get("data",{proj_id:proj_id},
          function(data){
              $(data).dialog({
		  dialogClass: "no-close",
		  closeOnEscape: false,
		  modal: true,
		  width: 350,
		  show: {
		      effect: "clip",
                      duration: 500,
		  },
		  hide: {
		      effect: "clip",
		      duration: 500,
		  },
		  buttons: {
		      OK: function () {
			  $( this ).dialog("close");
			  $( this ).remove();
		      }},
		  open: function(){
		      $( "#accordion" ).accordion({autoHeight: true, header: "h4", collapsible: true, active: false});
		  },
              });
          });
};


function submit_record(proj_info){
    $.get("record",{proj_info: proj_info},
          function(data){
              $(data).dialog({
		  dialogClass: "no-close",
		  closeOnEscape: false,
		  modal: true,
		  height: 600,
		  width: 500,
		  open:  function(){
		      $( "#accordion" ).accordion({
			  autoHeight: true,
			  header: "h4",
			  collapsible: true,
			  active: false});
		      $("textarea").change(function(){
			  $( this ).closest("div").next(".hide").show();
		      });
		      $( "select" ).selectmenu({});
		  },
		  show: {
		      effect: "clip",
		      duration: 500,
		  },
		  hide: {
		      effect: "clip",
		      duration: 500,
		  },
		  buttons: {
		      Cancel: function(){
			  $(this).remove();
		      },
		      Submit: function() {
			  var reviewer2  =  $( this ).closest("#record-box").find("select[name='reviewer2']").val()
			  var err_types  =  $( this ).closest("div").find("select").serializeArray()
			  var comments   =  $( this ).closest("#record-box").find("textarea").serializeArray()
			  var dialog     =  $( this )
			  $.post("record",{
			      err_types: err_types,
			      reviewer2: reviewer2,
			      comments: comments,
			      proj_info: proj_info},
				 function(data) {
				     if (data != "success") {
					 $(data).dialog({
					     modal: true,
					     dialogClass: "no-close",
					     closeOnEscape: false,
					     show:{
						 effect: "shake",
						 duration: 500,
					     },
					     hide: {
						 effect: "clip",
						 duration: 500,
					     },
					     buttons: {
						 Close: function(){
						     $( this ).dialog("close")
						 }}
					 });
				     }else{
					 dialog.remove();
					 $.get(proj_info['tab'],{},function(data){
					     $("#" + proj_info['tab']).html(data);
					     
					 });
					 
				     }
				 });
		      }
		  }
              });
          })
}

$(document).on("click", ".record", function(){
    var proj_id  = $(this).closest("td").find("input").attr("value")
    var tab      = $( this ).closest("div").attr("id")
    var record_ready   = $(this).closest("button").attr("class")
    $.post(tab,{pid: proj_id,  record_ready: record_ready},
           function(data){
               if (data == "success"){
		   submit_record({proj_id: proj_id, tab: tab});
               }else{
		   $(data).dialog({
		       dialogClass: "no-close",
		       closeOnEscape: false,
		       modal: true,
		       show:{
			   effect: "shake",
			   duration: 500,
		       },
		       buttons:{
			   Close: function(){
			       $( this ).dialog("close");
			       $( this ).remove();
			   }}
		   });
               }
           });
});


$(document).on("click", ".ready", function() {
    var proj_id = $(this).closest("td").find("input").attr("value")
    var tab     = $(this).closest("div").attr("id")
    $.post(tab,{pid: proj_id},
           function(data){
               $(data).dialog({
		   dialogClass: "no-close",
		   closeOnEscape: false ,
		   modal: true,
		   show: {
		       effect: "shake",
		       duration: 500,
		   },
		   hide: {
		       effect: "clip",
		       duration: 500,
		   },
		   buttons: {
		       Ok: function () {
			   $( this ).dialog("close");
		       }}
               });
	       
               $.get(tab,{},function(data){
		   $("#" + tab).html(data);
               });
           });
});

$(document).on("dblclick", ".row", getdata);
