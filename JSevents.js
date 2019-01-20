export function searchGame() {
    
    var snoepCnt = 0;
    var random = Math.floor((Math.random() * 9) + 1);

    document.querySelector('.img').addEventListener('click', function(e)
    {
        if (e.target.tagName === 'IMG') 
        {
            if (snoepCnt < 1)
            {
                if (e.target.alt != 'zoeken' + random.toString())
                {
                var image = e.target;
                image.src = require('./img/Zoeken.jpg');
                }
                else
                {
                var image = e.target;
                image.src = require('./img/Pills.jpg');
                snoepCnt++;
                document.querySelector('#snoepjes').innerHTML = "<p>Tijd voor een feestje!<p>";
                }
            }
            else
            {
                alert('niks meer te vinden hier');
            }
        }
    }, false);
}

export function zoom() {
    document.querySelector('.zoomImg').addEventListener('mouseover' , function(e) {
        if (e.target.tagName === 'IMG') 
        {
            var photo = document.createElement('div');
            photo.className = 'preview';
            e.target.parentNode.appendChild(photo);

            var img = document.createElement('img');
            img.src = require('./img/400x400/space' + e.target.alt + '.jpg');

            photo.style.left = e.offsetX + 40 + 'px';
            photo.style.top = e.offsetY + 40 + 'px';

            photo.appendChild(img);

            e.target.addEventListener('mouseout', function handler(d) {
                var node = d.target.parentNode.querySelector('div.preview');
                node.parentNode.removeChild(node);
                e.target.removeEventListener('mouseout', handler, false);
            }, false);

            e.target.addEventListener('mousemove', function(f) {
                photo.style.left = f.offsetX + 40 + 'px';
                photo.style.top = f.offsetY + 40 + 'px';
            });
        }
    }, false);
}

export function Spinner() {
    document.querySelector('img.preview').addEventListener('click', function() {
        var overlay = document.querySelector('.overlay');
        var highRes = document.createElement('img');
        var spinner = document.createElement('img');

        overlay.style.display = 'block';
        highRes.className = 'bgImg';
        highRes.src = require('./img/spaceManBig.jpg');
        overlay.appendChild(highRes);

        spinner.className = 'spinner';
        spinner.src = require('./img/blockSpinner.gif');
        overlay.appendChild(spinner);

        highRes.addEventListener('load', function() {
            spinner.parentNode.removeChild(spinner);
        });

        highRes.addEventListener('click', function() {
            highRes.parentNode.removeChild(highRes);
            overlay.style.display = 'none';
        });
    }, false);
}