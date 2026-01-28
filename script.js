// Sample script.js
document.addEventListener('DOMContentLoaded', () => {
    // Assuming the data is loaded into a global variable 'resumeData' 
    // or fetched from a JSON file.
    // For this example, we assume it's available.

    const { name, title, contact, skills, experience, education } = resumeData;

    // --- Header Section ---
    document.getElementById('header').innerHTML = `
        <h1>${name}</h1>
        <p>${title}</p>
        <p>Email: <a href="mailto:${contact.email}">${contact.email}</a> | Phone: ${contact.phone} | Location: ${contact.location}</p>
    `;

    // --- Skills Section ---
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // --- Experience Section ---
    const experienceSection = document.getElementById('experience-section');
    experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job-entry'); // Add CSS class for styling
        jobDiv.innerHTML = `
            <h3>${job.title} at ${job.company}</h3>
            <p class="dates">${job.dates}</p>
            <p>${job.description}</p>
        `;
        experienceSection.appendChild(jobDiv);
    });

    // --- Education Section ---
    const educationSection = document.getElementById('education-section');
    education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.classList.add('education-entry'); // Add CSS class for styling
        eduDiv.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.university}</p>
            <p class="dates">${edu.dates}</p>
        `;
        educationSection.appendChild(eduDiv);
    });

    // Example of simple interactivity: alert on contact click
    const emailLink = document.querySelector('#header a');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            console.log(`Contacting ${name} via email`);
        });
    }
});

// script.js 
// Taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");
let isHidden = true;
// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
    
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputField["name"].value}</h1>
                    <h4>${inputField["title"].value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputField["objective"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputField["skills"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${inputField["academic_details"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${inputField["contact"].value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${inputField["work_experience"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${inputField["achievements"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputField["projects"].value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
