opera.isReady(function(){
(function() {
  var storage = window.widget.preferences;
  var formElements = document.querySelectorAll('input,select');
  function addStations() {
    var list = document.getElementById('stationCode');
    for (station in stations) {
      var option = document.createElement('option');
      option.value = station;
      option.innerHTML = stations[station].en;
      list.appendChild(option);
    }
  }
  addStations();
  function walkElements() {
    var type, value;
    for (var i = 0, element = null; element = formElements[i++]; ) {
      value = storage.getItem(element.name);
      type = element.type.toLowerCase();
      if (type == 'number') element.value = value; else if (type == 'select-one') {
        for (var j = 0, option = null; option = element.options[j++]; ) {
          if (option.value == value) {
            option.selected = true;
            break;
          }
        }
      }
      element.addEventListener('change', changedElement, true);
    }
  }
  function changedElement(e) {
    var element = e.currentTarget;
    var type = element.type.toLowerCase();
    var name = element.name;
    var value = element.value;
    if (type == 'number') {
      var patt = /\D/;
      if (patt.test(value) || value == '') value = element.min;
    } else if (type == 'select-one') {
      value = element.options[element.selectedIndex].value;
    }
    storage.setItem(name, value);
  }
  walkElements();
  function $(id, txt, href) {
    var e = document.getElementById(id);
    if (e) {
      e.textContent = txt;
      if (href || '') {
        e.href = href || '#';
      }
    }
  }
  $('widget-title', widget.name);
  $('widget-name', widget.name);
  $('widget-author', widget.author, widget.authorHref);
})();
});
