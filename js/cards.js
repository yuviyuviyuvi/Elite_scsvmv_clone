function openKCornerModal() {
  document.getElementById("kCornerModal").style.display = "flex";
}

function closeKCornerModal() {
  document.getElementById("kCornerModal").style.display = "none";
}

function openSoftwareDebuggingModal() {
  document.getElementById("softwareDebuggingModal").style.display = "flex";
}

function closeSoftwareDebuggingModal() {
  document.getElementById("softwareDebuggingModal").style.display = "none";
}

function openPaperPresentationModal() {
  document.getElementById("paperPresentationModal").style.display = "flex";
}

function closePaperPresentationModal() {
  document.getElementById("paperPresentationModal").style.display = "none";
}

function openPosterPresentationModal() {
  document.getElementById("posterPresentationModal").style.display = "flex";
}

function closePosterPresentationModal() {
  document.getElementById("posterPresentationModal").style.display = "none";
}

function openGroupDiscussionModal() {
  document.getElementById("groupDiscussionModal").style.display = "flex";
}

function closeGroupDiscussionModal() {
  document.getElementById("groupDiscussionModal").style.display = "none";
}
function openMockInterviewModal() {
  document.getElementById("mockInterviewModal").style.display = "flex";
}

function closeMockInterviewModal() {
  document.getElementById("mockInterviewModal").style.display = "none";
}

function openQuizModal() {
  document.getElementById("quizModal").style.display = "flex";
}

function closeQuizModal() {
  document.getElementById("quizModal").style.display = "none";
}

function openShortFilmModal() {
  document.getElementById("shortFilmModal").style.display = "flex";
}

function closeShortFilmModal() {
  document.getElementById("shortFilmModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

// Close modal if user presses the 'Esc' key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
});
