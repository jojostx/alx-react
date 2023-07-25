import $ from "jquery";

const paragraphs = [
  "Holberton Dashboard",
  "Dashboard data for the students",
  "Copyright - Holberton School",
];

paragraphs.forEach((para) => $("body").append(`<p>${para}</p>`));
