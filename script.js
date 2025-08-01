const affirmations = [
  "Every day I get better",
  "I'm built for this life",
  "New concepts come to me easy",
  "I belong in every room I walk in",
  "Ain’t no imposter syndrome stopping my shine",
  "I know my worth, and I tax it",
  "No one outworks a focused shortieee"
];

function generateAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").textContent = affirmations[randomIndex];
}
