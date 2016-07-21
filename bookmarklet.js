//all items or the last item in a check list
javascript:(function(){
    var inp = document.getElementsByTagName('input');
    for(var i=0; i < inp.length; i++) {
	if (inp[i].type == 'checkbox'){
	inp[i].checked = true;
	}
	if (inp[i].type == 'radio'){
	    inp[i].checked = true;
	}
    }
})();



javascript:(function(){
              var inp = document.getElementsByTagName('input');
              for(var i=0; i < inp.length; i++) {
                if (inp[i].type == 'checkbox'){
	          inp[i].checked = true;
                  break
                 }
                if (inp[i].type == 'radio'){
	          inp[i].checked = true;
                  break
                 }
              }
            })();

//Select last checkbox in each table row

javascript: (function(){
               var row_index = -1;
               function forEach (list, callback) {
                 var i, len;
                 for (i = 0, len = list.length; i < len; i++){
                   callback.call(list[i], list[i], i, list);
                 }
               }
               forEach(document.getElementsByTagName("tr"), function (row) {
                 var checkboxes = [];
                 forEach(row.children,function (cell) {
                   if (cell.tagName === 'TD') {
                     forEach(cell.children, function (el) {
                       if (el.tagName === 'INPUT' && el.type === "checkbox") {
                         checkboxes.push(el); }
                     });
                   }
                 });
                 if (checkboxes.length) {
                   var cidx = row_index < 0 ? checkboxes.length + row_index : row_index;
                   checkboxes[cidx].checked = true;
                 }
               });
             })();



//Select first checkbox in each table row

javascript: (function() {
               var row_index = 0;
               function forEach (list, callback) {
                 var i, len;
                 for (i = 0, len = list.length; i < len; i++) {
                   callback.call(list[i], list[i], i, list);
                 }
               }
               forEach(document.getElementsByTagName("tr"), function (row) {
                 var checkboxes = [];
                 forEach(row.children, function (cell) {
                   if (cell.tagName === 'TD') {
                     forEach(cell.children, function (el) {
                       if (el.tagName === 'INPUT' && el.type === "checkbox") {
                         checkboxes.push(el); }
                     });
                   }
                 });
                 if (checkboxes.length) {
                   var cidx = row_index < 0 ? checkboxes.length + row_index : row_index;
                   checkboxes[cidx].checked = true;
                 }
               });
             })();



javascript: (function() {
               var row_index = 0;
               function forEach (list, callback) {
                 var i, len;
                 for (i = 0, len = list.length; i < len; i++) {
                   callback.call(list[i], list[i], i, list);
                 }
               }
               forEach(document.getElementsByTagName("tr"), function (row) {
                 var checkboxes = [];
                 forEach(row.children, function (cell) {
                   if (cell.tagName === 'TD') {
                     forEach(cell.children, function (el) {
                       if (el.tagName === 'INPUT' && el.type === "radio") {
                         checkboxes.push(el); }
                     });
                   }
                 });
                 if (checkboxes.length) {
                   var cidx = row_index < 0 ? checkboxes.length + row_index : row_index;
                   checkboxes[cidx].checked = true;
                 }
               });
             })();