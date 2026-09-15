/* =========================================================
   Interactive Student Profile Controller
   Module 4 — DOM Selection & Manipulation
   ========================================================= */

/* ---------------------------------------------------------
   1. DOM SELECTION
   Elements are queried once and stored in variables so we
   never re-query the same node twice.
   --------------------------------------------------------- */

// getElementById() — profile card + its display fields (4+)
const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");

// getElementById() — controls
const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");
const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");
const formMessage = document.getElementById("formMessage");

// querySelector() — the form itself (also demonstrates CSS-selector based lookup)
const profileForm = document.querySelector("#profileForm");

/* ---------------------------------------------------------
   2. INITIAL STATE (used by resetProfile)
   --------------------------------------------------------- */
const INITIAL_STATE = {
  name: "Maria Santos",
  program: "BS Information Technology",
  year: "3rd Year",
  status: "active",
};

/* ---------------------------------------------------------
   3. REQUIRED FUNCTIONS
   --------------------------------------------------------- */

// Returns true when the trimmed name has at least 2 characters.
function isValidStudentName(name) {
  return typeof name === "string" && name.trim().length >= 2;
}

// Maps the lowercase status value to its display label.
function formatStudentStatus(status) {
  if (status === "active") return "Active";
  if (status === "inactive") return "Inactive";
  return "";
}

// Updates the profile status text, data-status attribute, and
// active/inactive CSS classes using classList only.
function setStatus(status) {
  if (!profileCard || !profileStatus) return;

  const normalized = status === "inactive" ? "inactive" : "active";

  profileStatus.textContent = formatStudentStatus(normalized);
  profileCard.dataset.status = normalized;

  if (normalized === "active") {
    profileCard.classList.add("active");
    profileCard.classList.remove("inactive");
  } else {
    profileCard.classList.add("inactive");
    profileCard.classList.remove("active");
  }
}

// Validates the form, then updates the profile card using the
// current control values. All user-entered text is written with
// textContent so it is never interpreted as HTML.
function updateProfile() {
  if (!nameInput || !isValidStudentName(nameInput.value)) {
    if (formMessage) {
      formMessage.textContent = "Student name is required";
    }
    return;
  }

  if (profileName) {
    profileName.textContent = nameInput.value.trim();
  }
  if (profileProgram && programInput) {
    profileProgram.textContent = programInput.value;
  }
  if (profileYear && yearInput) {
    profileYear.textContent = yearInput.value;
  }
  if (statusInput) {
    setStatus(statusInput.value);
  }

  if (formMessage) {
    formMessage.textContent = "";
  }
}

// Shows or hides the details panel using classList.toggle().
function toggleDetails() {
  if (!detailsPanel) return;
  detailsPanel.classList.toggle("hidden");
}

// Toggles the dark-theme class on <body>.
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Restores the exact initial profile data, status, controls,
// message, details visibility, and theme.
function resetProfile() {
  if (profileName) profileName.textContent = INITIAL_STATE.name;
  if (profileProgram) profileProgram.textContent = INITIAL_STATE.program;
  if (profileYear) profileYear.textContent = INITIAL_STATE.year;
  setStatus(INITIAL_STATE.status);

  if (studentIdDisplay && profileCard) {
    studentIdDisplay.textContent = "Student ID: " + profileCard.dataset.studentId;
  }

  if (nameInput) nameInput.value = "";
  if (programInput) programInput.value = INITIAL_STATE.program;
  if (yearInput) yearInput.value = INITIAL_STATE.year;
  if (statusInput) statusInput.value = INITIAL_STATE.status;

  if (formMessage) formMessage.textContent = "";

  if (detailsPanel) detailsPanel.classList.remove("hidden");
  document.body.classList.remove("dark-theme");
}

/* ---------------------------------------------------------
   4. EVENT LISTENERS
   --------------------------------------------------------- */

if (profileForm) {
  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    updateProfile();
  });
}

if (toggleDetailsBtn) {
  toggleDetailsBtn.addEventListener("click", toggleDetails);
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

if (resetBtn) {
  resetBtn.addEventListener("click", resetProfile);
}

/* ---------------------------------------------------------
   5. INITIAL SYNC
   Make sure the controls reflect the initial card state on load.
   --------------------------------------------------------- */
if (programInput) programInput.value = INITIAL_STATE.program;
if (yearInput) yearInput.value = INITIAL_STATE.year;
if (statusInput) statusInput.value = INITIAL_STATE.status;