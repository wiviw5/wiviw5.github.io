window.onload = function () {
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            fileDisplayArea.value = reader.result;
        }
        reader.readAsText(file);
    });
}