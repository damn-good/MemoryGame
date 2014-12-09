/**
 * Created by zephyr on 10/31/14.
 */
function View(){
    var _cntdwn= 10, _processId=0,_words, _sortable=null,_ctrl=new Control();
    _words=["latte", "maintenance", "maintenant", "maintenir",
                     "maintenu","maintenue","maintenus",  "maintes",
                     "maintien","maintiennent", "maintient", "maints",
                     "maïolique","maire", "maires","mairie",
                     "mairies", "mais","maïs", "maison",
                     "maisonnée","laure","lauréat", "lauréats",
                     "Laurence", "Laurent","Lausanne","lavabo",
                     "Laval","lavé", "lave-auto"];
    this.initUI= function(){
        //iniialisation de la vue html doit s'exécuter obligatoirement auchargement
        // initial du html de l'appli.

    }
    this.chrono= function (widget) {
    //Affiche le chrono et à la fin du décompte modifie
    // le widget du chrono selon le stage.
        if(_cntdwn>1){
            jQuery(widget).text(--_cntdwn);
        }else{
            switch (_ctrl.getModel().get_gameNum()){
                case 0:{
                //Jeu de formes
                    jQuery(widget).text("validez!");
                }
                case 1:{
                    //Jeu de mots
                    jQuery(widget).html('<p></p>');
                }
                case 3:{
                    //Jeu de chiffres
                    Query(widget).html('<p></p>');
                }
            }

            clearInterval(_processId);
            _processId=0;
            _cntdwn=10;
        }
    }
}
