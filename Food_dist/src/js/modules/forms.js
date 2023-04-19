function forms() {
            /// Forms
            const forms = document.querySelectorAll('form');
            const massage = {
                loading: 'Завантаження',
                success: 'Дякую, незабаром з вами зконтактують',
                failure: 'Упс, щось не так'
            };
    
            forms.forEach(item => {
                bindPostData(item);
            });
    
    
            const postData = async (url, data) => {
                const res = await fetch(url, {
                    method: "POST",
                    headers: {'Content-type': 'multipart/form-data'},
                    body: data
                });
    
                return await res.json();
            };
    
            function bindPostData(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
    
                    const statusMassage = document.createElement('div');
                    statusMassage.classList.add('status');
                    statusMassage.textContent = massage.loading;
                    form.append(statusMassage);
                    
                    
                    const formData = new FormData(form);
                                    
                    postData('http://localhost:3000/requests', formData)
                    .then(data => {
                        console.log(data);
                        statusMassage.remove();
                    })
                    .catch(() => {
                        statusMassage.textContent = massage.failure;
                    })
                    .finally(() => {
                        form.reset();
                    });                              
                });
            }
    
            fetch('http://localhost:3000')
                .then(data => data.json())
                .then(res => console.log(res));    
}

module.exports = forms;