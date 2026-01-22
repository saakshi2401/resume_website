function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
        orientation: "p",
        unit: "pt",
        format: "a4"
    });

    const resume = document.querySelector(".resume");
    if (!resume) return;

    pdf.html(resume, {
        x: 20,
        y: 20,
        width: 555,
        windowWidth: resume.scrollWidth,
        callback: () => {
            pdf.save("Resume.pdf");
        }
    });
}
document.querySelector(".download-btn").addEventListener("click", downloadPDF);