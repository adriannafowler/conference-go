console.log("!!!!!!")

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM content fully loaded and parsed')

    const url ='http://localhost:8000/api/conferences/'

    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)

            const selectTag = document.getElementById('conference')
            for (let conference of data.conferences) {
                const option = document.createElement('option')
                option.value = conference.id
                option.innerHTML = conference.name
                selectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-presentation-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault()

                const formData = new FormData(formTag)
                const dataObject = Object.fromEntries(formData)
                console.log(dataObject)
                delete dataObject.conference

                const conferenceId = selectTag.value

                const presentationUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`
                const fetchConfig = {
                    method: "POST",
                    body: JSON.stringify(dataObject),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
                const response = await fetch(presentationUrl, fetchConfig)
                if (response.ok) {
                    formTag.reset()
                    const newPresentation = await response.json()
                    console.log(newPresentation)
                }
            })
        }
    } catch(error) {
        console.error('error:', error)
    }


})
