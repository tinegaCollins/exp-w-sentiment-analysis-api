// It will be available as useFoo() (camelCase of file name without extension)
export default function (text: string, type: 'success' | 'error' = 'success') {
    //check if the toast is already there
    if (document.querySelector('.toast')) {
        document.querySelector('.toast')?.remove()
    }
    // add a div with class="toast" to the body
    const toast_parent = document.createElement('div')
    toast_parent.classList.add('toast_parent')
    document.body.appendChild(toast_parent)
    const toast = document.createElement('div')
    toast.innerHTML = text
    if (type === 'success') toast.classList.add('success')
    if (type === 'error') toast.classList.add('error')
    toast.classList.add('toast')
    toast_parent.appendChild(toast)
    const unmount = () => setTimeout(() => toast_parent.remove(), 3000)
    unmount()
}