fetch ("students.json")
    .then(response => response.json())
    .then(data => cardStudents(data));

    function cardStudents(students){
        bigDiv = document.querySelector('.studentCards div');
        for (const s of students){
            const div = document.createElement('div');
            div.innerHTML +=
             ` <div class="card">
            <div class="card-body">
                <h3>${s.firstName} ${s.lastName}</h3>
                <p>${s.phone}</p>
                <p>${s.email}</p>
            </div>
            </div>`

            bigDiv.appendChild(div)
        }
    }