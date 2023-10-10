console.log("!!!!!!")

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM content fully loaded and parsed')

    const url ='http://localhost:8000/api/states/'

    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)

            const selectTag = document.getElementById('state')
            for (let state of data.states) {
                const option = document.createElement('option')
                option.value = state.abbreviation
                option.innerHTML = state.name
                selectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-location-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault()

                const formData = new FormData(formTag)
                const dataObject = Object.fromEntries(formData)

                const locationUrl = 'http://localhost:8000/api/locations/'
                const fetchConfig = {
                    method: "POST",
                    body: JSON.stringify(dataObject),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
                const response = await fetch(locationUrl, fetchConfig)
                if (response.ok) {
                    formTag.reset()
                    const newLocation = await response.json()
                }
            })
        }
    } catch(error) {
        console.error('error:', error)
    }


})
