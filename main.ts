function generateResume(): void {
  const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
  const name = (document.getElementById("name") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement)
      .value;
    const phone = (document.getElementById("phone") as HTMLInputElement)
      .value;
    const address = (
      document.getElementById("address") as HTMLInputElement
    ).value;
    
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (
      document.getElementById("skills") as HTMLTextAreaElement
    ).value;
  
    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    };
  
    const resumeHTML = `
       <img src="${pictureURL}" alt="Profile Picture" width="120" height="140"><br>
       <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    const resumeElement = document.getElementById("resume") as HTMLElement;
    resumeElement.innerHTML = resumeHTML;
  }
  