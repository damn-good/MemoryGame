/**
 * Created by zephyr on 10/29/14.
 */
function Modele() {
    var _gameNum, _score, _panelIds, _wanted, _picsOrder, _looser, _memory;
    _panelIds= null;
    _wanted = "";
    _gameNum = -1;
    _memory=0;
    _score = 0;
    _picsOrder = null;
    _looser =false;

    this.set_panelIds=function(tble) {
        _panelIds=tble;
    };
    this.get_panelIds= function(){
        return _panelIds;
    };
    this.set_wanted= function(wanted){
        _wanted= wanted;
    };
    this.get_wanted= function(){
        return _wanted ;
    };
    this.set_gameNum= function(num){
        _gameNum= num;
    };
    this.get_gameNum= function(){
        return _gameNum ;
    };
    this.set_score= function (score){
        _memory=_score;
        _score=score;
    };
    this.get_score=function (){
        return _score;
    };
    this.setPicsOrder=function (pics){
        _picsOrder=pics;
    };
    this.get_picsOrder=function (){
        return _picsOrder;
    };
    this.set_looser=function(){
        _looser=true;
    };
    this.get_looser=function(){
        return _looser;
    };
    this.get_memory=function(){
        return _memory;
    }
}

