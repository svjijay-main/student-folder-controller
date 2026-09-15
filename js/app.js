
const INITIAL_PROFILE = {
  name: "Maria Santos",
  program: "BS Information Technology",
  year: "3rd Year",
  status: "active",
  studentId: "2026-001",
};

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");
const formMessage = document.getElementById("formMessage");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const profileCardBySelector = document.querySelector(".profile-card");

function isValidStudentName(name) {
  if (typeof name !== "string") return false;
  return name.trim().length >= 2;
}

function formatStudentStatus(status) {
  if (status === "active") return "Active";
  if (status === "inactive") return "Inactive";
  return status;
}

function setStatus(status) {
  if (!profileCard || !profileStatus) return;

  profileCard.dataset.status = status;
  profileStatus.textContent = formatStudentStatus(status);

  if (status === "active") {
    profileCard.classList.add("active");
    profileCard.classList.remove("inactive");
  } else if (status === "inactive") {
    profileCard.classList.add("inactive");
    profileCard.classList.remove("active");
  }
}

function updateProfile() {
  if (!nameInput || !programInput || !yearInput || !statusInput) return;

  const nameValue = nameInput.value;

  if (!isValidStudentName(nameValue)) {
    if (formMessage) {
      formMessage.textContent = "Student name is required";
    }
    return;
  }

  if (formMessage) {
    formMessage.textContent = "";
  }

  if (profileName) profileName.textContent = nameValue.trim();
  if (profileProgram) profileProgram.textContent = programInput.value;
  if (profileYear) profileYear.textContent = yearInput.value;

  setStatus(statusInput.value);
}

 */
function toggleDetails() {
  if (!detailsPanel) return;
  detailsPanel.classList.toggle("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function resetProfile() {
  if (profileName) profileName.textContent = INITIAL_PROFILE.name;
  if (profileProgram) profileProgram.textContent = INITIAL_PROFILE.program;
  if (profileYear) profileYear.textContent = INITIAL_PROFILE.year;

  setStatus(INITIAL_PROFILE.status);

  if (studentIdDisplay && profileCard) {
    studentIdDisplay.textContent = "Student ID: " + profileCard.dataset.studentId;
  }

  if (nameInput) nameInput.value = "";
  if (programInput) programInput.value = INITIAL_PROFILE.program;
  if (yearInput) yearInput.value = INITIAL_PROFILE.year;
  if (statusInput) statusInput.value = INITIAL_PROFILE.status;

  if (formMessage) formMessage.textContent = "";

  if (detailsPanel) detailsPanel.classList.remove("hidden");

  document.body.classList.remove("dark-theme");
}

if (studentIdDisplay && profileCard) {
  studentIdDisplay.textContent = "Student ID: " + profileCard.dataset.studentId;
}

if (updateBtn) {
  updateBtn.addEventListener("click", updateProfile);
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
