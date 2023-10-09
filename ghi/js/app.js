function createCard(title, description, pictureUrl, starts, ends, name) {
    return `
    <div class="col" style="margin: 1em;">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-right: 1em; margin-left: 1em;">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer text-muted">
            ${starts}-${ends}
            </div>
        </div>
    </div>
    `
}

window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/'
    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error("Failed to fetch conference data")
            const errorSection = document.getElementById('errorSection')
            errorSection.textContent = "Error: Failed to fetch conference data"
            errorSection.style.display = 'block'
        } else {
            const data = await response.json()

            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`
                const detailResponse = await fetch(detailUrl)
                if (detailResponse.ok) {
                    const details = await detailResponse.json()
                    const title = details.conference.name
                    const description = details.conference.description
                    const pictureUrl = details.conference.location.picture_url
                    const starts = new Date(details.conference.starts).toLocaleDateString()
                    const ends = new Date(details.conference.ends).toLocaleDateString()
                    const name = details.conference.location.name
                    const html = createCard(title, description,pictureUrl, starts, ends, name)
                    const column = document.querySelector('.row')
                    column.innerHTML += html
                }

            }
        }
    } catch (e) {
        console.error("Failed to fetch conference details")
        const errorSection = document.getElementById('errorSection')
        errorSection.textContent = "Error: Failed to fetch conference details"
        errorSection.style.display = 'block'
    }

});
