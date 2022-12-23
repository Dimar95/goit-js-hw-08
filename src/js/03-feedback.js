import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const formData = {
    message: "",
    email: ""
};
const STORAGE_KEY = "feedback-form-state";
const localData = localStorage.getItem(STORAGE_KEY);


onCurrentContent()
formRef.addEventListener('submit', onFormSubmit)
formRef.addEventListener('input', throttle (onFormData, 500))



function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData)
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
} 

function onCurrentContent() {
    const currentlocalStorage = JSON.parse(localData)
    if (currentlocalStorage) {
        formRef.message.value = currentlocalStorage.message;
        formRef.email.value = currentlocalStorage.email;

    }
}

function onFormData(e) {
        formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({ ...formData }));
};