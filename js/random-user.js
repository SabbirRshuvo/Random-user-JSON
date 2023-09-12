const randomUser = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => randomDataLoad(data.results));
}

// {7. (randomuser.me)user }

const randomDataLoad = results => {
    console.log(results);

    results.forEach(result => {
        console.log(result.picture);

        const getDataFromWebsite = document.getElementById('get-card');
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="col">
          <div class="card">
            <img src="${result.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>${result.gender}</h4>
              <h5 class="card-title">${result.name.title}, ${result.name.first}, ${result.name.last}</h5>
              <p class="card-text">${result.email}</p>
              <p class="card-text">${result.location.country},
              ${result.location.postcode}, ${result.location.state}</p>
            </div>
          </div>
        </div>
        `
        getDataFromWebsite.appendChild(div);
    })


}