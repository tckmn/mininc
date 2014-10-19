$(function() {
    $('#intro').show();
    $.mininc(function(g) {
        // event handlers
        $('#startgame').click(function() {
            g.set('startgameclicked', true);
        });
        $('#click').click(function() {
            g.set('clicks', g.get('clicks') + 1);
            g.update('#clickcount [data-mininc]');
        });

        // game hooks
        g.hook('startgameclicked', g.hook.truthy, function() {
            $('#intro').hide('slow');
            $('#game').show('slow');
        });
        g.hook('clicks', g.hook.gte(10), function() {
            $('#click10').show('slow');
        });

        // save / restore
        g.restore(g.autosave = '__example_mininc_game_data');

        // initialize default variables
        g.setDefault('clicks', 0);

        // set everything up
        g.update('*[data-mininc]');
    });
});
