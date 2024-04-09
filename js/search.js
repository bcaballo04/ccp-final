document.getElementById('search').addEventListener('input', function(e) {
    var searchQuery = e.target.value.toLowerCase();
    var elements = document.querySelectorAll('.divider');

    elements.forEach(function(elem) {
        var elemName = elem.querySelector('h2').textContent.toLowerCase();
        if (elemName.includes(searchQuery)) {
            elem.style.display = '';
        } else {
            elem.style.display = 'none';
        }
    });
});