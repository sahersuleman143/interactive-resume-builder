function generateResume() {
    // Input fields se values collect karna
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',');

    // Resume output div ko clear karna
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = '';

    // Resume format create karna
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Resume ko display karna
    resumeOutput.innerHTML = resumeHTML;
}
