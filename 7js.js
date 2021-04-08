function updatePowersTable(button) {
    const max_power = parseInt(document.getElementById('max_power').value);
    const table = document.getElementById('power_table');
    let tableHTML = '<tr><th>i</th><th>8<sup>i</sup></th></tr>'

        // Initialization; continuation test; update
    for (let i = 0; i <= max_power; i++) {
        tableHTML = tableHTML + '<tr><td>' + i + '</td><td>' + (2**i) + '</td></tr>';
    }

    table.innerHTML = tableHTML;
}

function updateThresholdTable(button) {
    const threshold = parseInt(document.getElementById('power_threshold').value);
    const table = document.getElementById('threshold_table');
    let tableHTML = '<tr><th>i</th><th>4<sup>i</sup></th></tr>'

    let i = 0;
    while (4**i < threshold) {
        tableHTML = tableHTML + '<tr><td>' + i + '</td><td>' + (4**i) + '</td></tr>';
        i = i + 1;
    }
    table.innerHTML = tableHTML;
}