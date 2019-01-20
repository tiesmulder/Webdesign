import $ from 'jquery';

export function exercise1() {
    $('#btn').on('click', function() {
        alert('Jquery works!');
    });
}

export function mouseMove() {
        $('#mouseField').on('mousemove', function(evt) {
            $('#mouseText').text(evt.type + ': ' + evt.pageX + ', ' + evt.pageY
             + '\n' + 'Button: ' + evt.which);
        });
        $('#mouseField').on('click', function(evt) {
            $('#mouseText').text('Clicked at: ' + evt.pageX + ', ' + evt.pageY);
        });
        $('#mouseField').on('mouseout', function() {
            $('#mouseText').text('fijne dagen!');
        });
        $('#mouseField').bind("contextmenu", function(evt) {
            evt.preventDefault();
        });
}

export function getContent() {
    $("#dataBtn").on('click', function() {
        $("#dataField").load("samplehtml.html");
    });
}

export function animation() {
    $("#animationBtn").click(function() {
        $("#animation").animate({width: 400}, 300)
        .animate({height: 300}, 400)
        .animate({left: 200}, 500)
        .animate({top: "+=100", borderWidth: 10}, "slow")
        .animate({top: "-=100", borderWidth: 0}, "slow")
        .animate({left: 0}, 500)
        .animate({height: 100}, 400)
        .animate({width: 150}, 300)
    });
}

export function traversing() {
    var leftMargin = 0;
    var rightMargin = 0;
    var border = 3;
    var text = 25;
    $("#selector p").each(function(index, element) {
        $(element).css('border', border + 'px solid red')
                .css('font-size', text + 'px')
                .css('margin-left', leftMargin)
                .css('margin-right', rightMargin);
        border += 2;
        text -= 3;
        leftMargin += 20;
        rightMargin += 20;
    });

    var elem = $('#para1');
    elem.prev().css('border', 'solid blue');
    elem.next().css('border', '7px solid green');
}

export function inputStyle() {
    $('input[type=number]').css('width', '40px');
}

export function fillRandom() {
    $('#randomizer').click(function() {
        var string = "zeekomkommer123!@#";
        var char = "k";

        $('input[type=number]').each(function(index, element) {
            var random = Math.floor((Math.random() * 9) + 1);

            $(element).attr('value', random);
        });
        $('input[type=text]').each(function(index, element) {

            $(element).attr('value', string);
            $('input:last').attr('value', string.substr(3, 3));
            $('input.char').attr('value', char);
        });
    });
}