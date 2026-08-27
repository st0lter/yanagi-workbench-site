const now = new Date();
const header = document.querySelector('header');
const headerTitle = document.querySelector('header h1');
const headerSubtitle = document.querySelector('header p');

function updateHeader() {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 6 && hours < 12) {
        header.style.backgroundImage = "url('images/morning.jpg')";
    } else if (hours >= 12 && hours < 18) {
        header.style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hours >= 18 && hours < 21) {
        header.style.backgroundImage = "url('images/evening.jpg')";
    } else {
        header.style.backgroundImage = "url('images/night.jpg')";
    }
}

updateHeader();