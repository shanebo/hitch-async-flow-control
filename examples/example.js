
var cleanup = new Stack();

cleanup.chain(
    function(when){
        console.log('do dishes' + ' ' + when);
        this.next('tomorrow');
    },

    function(when){
        console.log('put away clean dishes ' + when);
        this.next('Yep.');
    }
);

// add to the same chain later
cleanup.chain(
    function(answer){
        console.log('can i relax now? ' + answer);
    }
);

cleanup.next('now');



var endpoints = new Stack();

endpoints.chain(
    function(when){
        console.log('pages are loaded');
        endpoints.next();
    },

    function(when){
        console.log('schedule is loaded');
        endpoints.next('Yep.');
    }
);

// add to the same chain later
endpoints.chain(
    function(answer){
        console.log('can i relax now? ' + answer);
    }
);

endpoints.next();
