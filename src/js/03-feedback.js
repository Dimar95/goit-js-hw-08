import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const currentlocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY))
const formData = {...currentlocalStorage};

onCurrentContent()
formRef.addEventListener('submit', onFormSubmit)
formRef.addEventListener('input', throttle (onFormData, 500))

function onCurrentContent() {
    if (currentlocalStorage) {
    if (currentlocalStorage.email !== "" && currentlocalStorage.email !== undefined) {
        onStorageEmail()
        }
    if (currentlocalStorage.message !== "" && currentlocalStorage.message !== undefined) {
        onStorageMessage()
    }
    };
}

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify({ ...formData }));
};

function onStorageEmail() {
    formRef.email.value = currentlocalStorage.email;
}

function onStorageMessage() {
    formRef.message.value = currentlocalStorage.message;
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData)
    formData.message = "";
    formData.email = "";
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)

} 
