const inputArea = document.getElementById("code");
const fileUpload = document.createElement("input");
fileUpload.type = "file";
fileUpload.style.display = "none";
fileUpload.addEventListener("change", () => {
    const file = fileUpload.files[0];
    file.text().then((content) => {
        inputArea.value = content;
    })
});
inputArea.insertAdjacentElement("afterend", fileUpload);

const submitButton = document.getElementById("submitCode");
const fileUploadButton = document.createElement("button");
fileUploadButton.classList = submitButton.classList;
fileUploadButton.textContent = "上傳檔案";
fileUploadButton.addEventListener("click", () => {
    fileUpload.click();
});
submitButton.insertAdjacentElement("beforebegin", fileUploadButton);
