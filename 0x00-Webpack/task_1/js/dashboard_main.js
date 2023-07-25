import $ from "jquery";
import _ from "lodash";

const elements = [
  "<p>Holberton Dashboard</p>",
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>",
  "<p>Copyright - Holberton School</p>",
];

elements.forEach((el) => $("body").append(el));

let count = 0;

const updateCounter = (ev) => {
  count += 1;

  $('p#count').append(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));