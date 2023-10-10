console.log("!!!!!!")

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM content fully loaded and parsed')

    const url ='http://localhost:8000/api/locations/'

    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)

            const selectTag = document.getElementById('location')
            for (let location of data.locations) {
                const option = document.createElement('option')
                option.value = location.id
                option.innerHTML = location.name
                selectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-conference-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault()

                const formData = new FormData(formTag)
                const dataObject = Object.fromEntries(formData)
                console.log(dataObject)

                const conferenceUrl = 'http://localhost:8000/api/conferences/'
                const fetchConfig = {
                    method: "POST",
                    body: JSON.stringify(dataObject),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
                const response = await fetch(conferenceUrl, fetchConfig)
                if (response.ok) {
                    formTag.reset()
                    const newConference = await response.json()
                    console.log(newConference)
                }
            })
        }
    } catch(error) {
        console.error('error:', error)
    }


})
