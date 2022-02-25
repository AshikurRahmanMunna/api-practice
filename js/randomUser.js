const loadUser = () => {
    const url = 'https://randomuser.me/api/?results=1';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}
loadUser();
const displayUser = user => {
    const userContainer = document.getElementById('user-container');
    userContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('mx-auto');
    div.classList.add('mt-5');
    div.innerHTML = `
        <img class="rounded-circle border border-warning border-3" src="${user.picture.large}">
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Phone: ${user.cell}</p>
    `;
    console.log(user);
    userContainer.appendChild(div);
}