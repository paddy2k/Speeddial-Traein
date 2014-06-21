opera.isReady(function(){
(function() {
  var new_api = "http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=";
  widget.preferences.setItem('feedUrl', widget.preferences.feedUrl == new_api ? widget.preferences.feedUrl : new_api);
  var _data = {
    feed: '',
    count: 1,
    interval: 7,
    prefs: widget.preferences,
    items: [],
    timer: null,
    station: ''
  };
  function _updateFeeds() {
    clearTimeout(_data.timer);
    for (i = 0; i < _data.count; i++) {
      var arrival = document.createElement('div');
      arrival.className = 'arrival';
      var to = document.createElement('div');
      to.className = 'to';
      to.textContent = _data.items[i].title;
      var from = document.createElement('div');
      from.className = 'arrival';
      from.textContent = _data.items[i].desc;
      arrival.appendChild(to);
      arrival.appendChild(from);
      document.getElementById('arrivals').appendChild(arrival);
    }
  }
  function _processData(xmlDoc) {
    var items = xmlDoc.getElementsByTagName('objStationData');
    document.getElementById('english').innerHTML = stations[_data.station].en;
    document.getElementById('irish').innerHTML = stations[_data.station].ga;
    opera.contexts.speeddial.title = stations[_data.station].en;
    opera.contexts.speeddial.url = "http://www.irishrail.ie/timetables/live-departure-times?code=" + _data.station;
    document.getElementById('arrivals').innerHTML = '';
    var len = items.length;
    if (len == 0) {
      document.getElementById('noTrains').style.display = 'block';
      opera.contexts.speeddial.title = "No Trains";
      opera.contexts.speeddial.url = "http://www.irishrail.ie/timetables/live-map";
      return false;
    }
    if (_data.count > len) _data['count'] = len;
    _data['items'] = [];
    for (var i = 0; i < items.length; i++) {
      _parseItem(items[i]);
    }
    _data.items.sort(function(a, b) {
      var c = new Date(Date.parse(a.time));
      if (c.getHours() == 0) {
        c.setDate(c.getDate() + 1);
      }
      var d = new Date(Date.parse(b.time));
      if (d.getHours() == 0) {
        d.setDate(d.getDate() + 1);
      }
      return c.getTime() - d.getTime();
    });
    _updateFeeds();
  }
  function _parseItem(item) {
    var Destination = item.getElementsByTagName('Destination')[0].textContent;
    var Expdepart = item.getElementsByTagName('Expdepart')[0].textContent;
    var Exparrival = item.getElementsByTagName('Exparrival')[0].textContent;
    var Origin = item.getElementsByTagName('Origin')[0].textContent;
    var Locationtype = item.getElementsByTagName('Locationtype')[0].textContent;
    var Traindate = item.getElementsByTagName('Traindate')[0].textContent;
    var Direction = item.getElementsByTagName('Direction')[0].textContent;
    if (!(Direction != widget.preferences.direction)) {
      return false;
    }
    if (Locationtype == 'D') {
      var title = Exparrival + ' Terminates';
      var time = Exparrival;
    } else {
      var title = Expdepart + ' ' + Destination;
      var time = Expdepart;
    }
    _data.items.push({
      title: title,
      desc: "Arriving from " + Origin,
      time: Traindate + "," + time
    });
    return true;
  }
  function _XHRFeed() {
    clearTimeout(_updateTimer);
    document.getElementById('noTrains').style.display = 'none';
    if (_data.station == '' || _data.station == null) {
      document.getElementById('irish').innerHTML = "Socraigh an Stáisiúin";
      document.getElementById('english').innerHTML = "Set Station";
      opera.contexts.speeddial.url = "options.html";
      _updateTimer = setTimeout(_XHRFeed, 1000 * _data.interval);
      return false;
    }
    xhr = new XMLHttpRequest();
    d = new Date().getTime();
    xhr.open('GET', _data.feed + _data.station + '&rand=' + d, true);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) {
        return false;
      }
      ;
      _processData(this.responseXML);
      _updateTimer = setTimeout(_XHRFeed, 1000 * _data.interval);
    };
    xhr.send(null);
  }
  function _storageHandler() {
    clearTimeout(_updateTimer);
    _data['feed'] = _data.prefs.getItem('feedUrl');
    _data['station'] = _data.prefs.getItem('stationCode');
    _data['count']= _data.prefs.getItem('count');
    _data['interval']= _data.prefs.getItem('interval');
    _XHRFeed();
  }
  var _updateTimer = setTimeout(_storageHandler, 100);
  addEventListener('storage', function() {
    _updateTimer = setTimeout(_storageHandler, 500);
  }, false);
})();
});
