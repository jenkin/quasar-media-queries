document.getElementById("input-border").checked = document.getElementById("style-border").disabled ? null : 'disabled';
document.getElementById("input-layout").checked = document.getElementById("style-layout").disabled ? null : 'disabled';
document.getElementById("style-responsiveness").disabled = document.getElementById("style-layout").disabled;

document.getElementById("input-border").addEventListener('change', function(e) {
    document.getElementById("style-border").disabled = e.target.checked ? null : 'disabled';
});

document.getElementById("input-layout").addEventListener('change', function(e) {
    document.getElementById("style-layout").disabled = e.target.checked ? null : 'disabled';
    document.getElementById("style-responsiveness").disabled = e.target.checked ? null : 'disabled';
});