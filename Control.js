/**
 * Created by zephyr on 10/30/14.
 */
function Control() {
    var _clikCnt, _bonClik, _modele;

    var _reset = function () {
        _clikCnt = 0;
        _bonClik = 0;
    };
    _modele = new Modele();
    _reset();//Mise à zéro

    this.checkNum=function(event){
        //vérifie les clicks sur les numéros.
        _clikCnt++;
        var source= event.target;
        source.disabled=true;
        jQuery(source).text(source.mem);
        if(source.mem !==_clikCnt-1){
            _reset();
            _modele.set_score(0);
            _modele.set_looser();
            //mettre à jour l'affichage :écran défaite
        }else{
            _bonClik++;
            if(_bonClick==10){
                _reset();
                _modele.set_score(_modele.get_score() +40);
                //mettre à jour l'affichage :écran victoire
            }
        }

    }

    this.checkWord=function(event){
        //vérifie les clicks sur la grille de  mots
        var source=event.target;
        if( jQuery(source).text()== _modele.get_wanted()){
            _modele.set_score(_modele.get_score() +20);
            //mettre à jour l'affichage :écran victoire
        }else{
            _modele.set_score(0);
            _modele.set_looser();
            //mettre à jour l'affichage écran défaite
        }
    }
    this.checkPuzzle=function(){
        var userInput= document.getElementById("puzzle");// a little bit old but workin !
        for(var i=0; i<4; i++){
            if(jQuery(userInput.getElementsByTagName('img')[i]).attr('src')!== _modele.getPicsOrder()[i]){
                _modele.set_score(0);
                _modele.set_looser();
                //mettre à jour l'affichage :écran défaite
                return;
            }
        }
        _modele.set_score(_modele.get_score() +15);
        //mettre à jour l'affichage :écran victoire
    }
    this.getModel=function(){
        return _modele;
    }
}
