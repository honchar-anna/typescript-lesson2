const getS = (selector) => document.querySelector(selector);
const login = getS('.login');
const password = getS('.password');
const email = getS('.email');
let masUser = [];
function addUser() {
    let objUser = {
        login: getS('.login').value,
        password: getS('.password').value,
        email: getS('.email').value
    };
    masUser.push(objUser);
    getS('.login').value = '';
    getS('.password').value = '';
    getS('.email').value = '';
    render();
}
function render() {
    getS('.tbody').innerHTML = "";
    for (let i = 0; i <= masUser.length; i++) {
        getS('.tbody').insertAdjacentHTML('beforeend', `<tr>
           <td>${i + 1}</td>
           <td>${masUser[i].login}</td>
           <td>${masUser[i].password}</td>
           <td>${masUser[i].email}</td>
           <td><input class="edit_button" onclick="editUser(${i})" type="button" value="Edit"></td>
           <td><input class="delete_button" onclick="deleteUser(${i})" type="button" value="Delete"></td>
       </tr>`);
    }
}
function deleteUser(i) {
    event.target.parentElement.remove();
    masUser.splice(i, 1);
    render();
}
let userIndex = 0;
function editUser(i) {
    getS('.login').value = masUser[i].login;
    getS('.password').value = masUser[i].password;
    getS('.email').value = masUser[i].email;
    userIndex = i;
    getS('.addButton').style.display = 'none';
    getS('.editUser').style.display = 'block';
}
function saveEditUser() {
    let objUser2 = {
        login: getS('.login').value,
        password: getS('.password').value,
        email: getS('.email').value
    };
    masUser[userIndex] = objUser2;
    getS('.login').value = '';
    getS('.password').value = '';
    getS('.email').value = '';
    getS('.addButton').style.display = 'block';
    getS('.editUser').style.display = 'none';
    render();
}
