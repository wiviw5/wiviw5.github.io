window.onload = function () {
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    const button = document.getElementById("downloadDataButton");
    function onButtonPress() {
        if (fileDisplayArea.value === "") {
            return;
        }
        var file = fileInput.files[0];
        if (file == null) {
            file = new File([""], "defaultname.txt");
            file.type = "text/plain"
        }
        const a = document.createElement('a');
        a.setAttribute('href', 'data:' + file.type + '; encoding:utf-8,' + encodeURIComponent(fileDisplayArea.value));
        a.setAttribute('download', file.name);
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    button.addEventListener("click", onButtonPress);

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