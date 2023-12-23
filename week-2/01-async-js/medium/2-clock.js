// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock24() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds}`;
  console.log(time);
}

// const clock24_interval_id = setInterval(clock24, 1000);
// setTimeout(() => {
//     clearInterval(clock24_interval_id)
// }, 10000)

function clock12() {
  const now = new Date();
  const hours = (now.getHours() % 12).toString().padStart(2, '0');
  const ampm = now.getHours() < 12 ? 'AM' : 'PM';
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds} ${ampm}`;
  console.log(time);
}

const clock12_interval_id = setInterval(clock12, 1000);
setTimeout(() => {
  clearInterval(clock12_interval_id);
}, 10000);
