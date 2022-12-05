

export default function useToggle() {
    const showToggle = () => {
        const showFilter = document.getElementById("show-filter")
        const toggleDiv = document.querySelector('.togglediv')
        toggleDiv.style.left = 0
        showFilter.style.opacity = 0
    }

    const hideToggle = () => {
        const showFilter = document.getElementById("show-filter")
        const toggleDiv = document.querySelector('.togglediv')
        toggleDiv.style.left = `${-1000}px`
        showFilter.style.opacity = 1
    }

    return {showToggle, hideToggle}
}


