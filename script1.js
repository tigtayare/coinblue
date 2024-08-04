let coins = 0;
let currentLevel = 1;
const coinsToLevelUp = 100;
const maxLevel = 100;
function addCoins() {
coins += 1;
document.getElementById('score').textContent = `$ ${coins.toLocaleString()}`;
const progressPercent = (coins % coinsToLevelUp) / coinsToLevelUp * 100;
document.getElementById('progress').style.width = progressPercent + '%';
if (coins >= coinsToLevelUp * currentLevel && currentLevel < maxLevel) {
currentLevel++;
document.getElementById('currentLevel').textContent = currentLevel;
}
document.getElementById('clickSound').play();
}
function loadProfile() {
const userName = localStorage.getItem('userName');
const profilePic = localStorage.getItem('profilePic');
if (userName) {
document.getElementById('userName').textContent = userName;
}
if (profilePic) {
document.getElementById('profilePic').src = profilePic;
}
}
window.onload = loadProfile;