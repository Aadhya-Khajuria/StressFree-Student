const date = document.getElementById("date");
if (date) date.valueAsDate = new Date();

const groups = [".mood-options", ".energy-options", ".stress-options"];

groups.forEach((selector, index) => {
  const group = document.querySelector(selector);
  if (!group) return;

  const saved = localStorage.getItem(`btn_${index}`);
  if (saved !== null && group.children[saved]) {
    group.children[saved].style.background = "#E6A5A9";
  }

  group.onclick = (e) => {
    if (e.target.tagName !== "BUTTON") return;

    [...group.children].forEach((b) => (b.style.background = "#CC7178"));
    e.target.style.background = "#E6A5A9";

    localStorage.setItem(`btn_${index}`, [...group.children].indexOf(e.target));
  };
});

const fields = [
  "notes",
  "goals",
  "events",
  "appointment",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

fields.forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.value = localStorage.getItem(id) || "";
});

const save = document.getElementById("savePlanner");

if (save) {
  save.onclick = () => {
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (el) localStorage.setItem(id, el.value);
    });
    alert("Planner saved!");
  };
}
