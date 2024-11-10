function generateResume() {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById("name")
        .value;
    var email = document.getElementById("email")
        .value;
    var phone = document.getElementById("phone")
        .value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    ;
    var resumeHTML = "\n       <img src=\"".concat(pictureURL, "\" alt=\"Profile Picture\" width=\"120\" height=\"140\"><br>\n       <h2>").concat(name, "</h2>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      <p>Address: ").concat(address, "</p>>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
    var resumeElement = document.getElementById("resume");
    resumeElement.innerHTML = resumeHTML;
}
