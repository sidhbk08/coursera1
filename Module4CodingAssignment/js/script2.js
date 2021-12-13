(function(){
    var byeSpeaker = {};
    var speakWord = "Good bye ";
    byeSpeaker.speak = function(names){
        console.log(speakWord + names);
    }
    window.byeSpeaker = byeSpeaker;
})(window);