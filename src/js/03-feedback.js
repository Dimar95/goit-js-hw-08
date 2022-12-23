import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = "feedback-form-state";



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
    
    if (localStorage.getItem(STORAGE_KEY)) {
        // const inputValue = )
        formRef.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
        formRef.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;

    }
}

function onFormData(e) {
        formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({ ...formData }));
};