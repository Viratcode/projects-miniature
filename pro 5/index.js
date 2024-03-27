const insert = document.querySelector('.insert'); // Using querySelector to select the element with the class 'insert'
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='key'>
    <table>
    <tr>
    <th>Key</th>
    <th>Event</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.type}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>`;
});
