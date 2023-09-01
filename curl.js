

function simulateFileDownload(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "filename.ext"; // Set the desired file name
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Usage
const fileUrl = "https://www.7-zip.org/a/7z2301-x64.exe";
simulateFileDownload(fileUrl);