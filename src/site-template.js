function cardBuilder(employee){
    console.log(employee);
    if(employee.getRole() === 'Manager'){
        return `
        <section class="card col-3 mx-3">
            <div class="card-header">
                <h2>${employee.name}</h2>
                <i></i><h2>${employee.getRole()}</h2>
            </div>
            
            <div>
                <div>
                    ID: ${employee.id}
                </div>
                <div>
                    Email: <a href="mailto: ${employee.email}">${employee.email}</a>
                </div>
                <div>
                    Office Number: ${employee.officeNumber}
                </div>
            </div>
        </section>
        `
    }
    else if(employee.getRole() === 'Engineer'){
        return `
        <section class="card col-3 mx-3">
            <div class="card-header">
                <h2>${employee.name}</h2>
                <i></i><h2>${employee.getRole()}</h2>
            </div>
            
            <div>
                <div>
                    ID: ${employee.id}
                </div>
                <div>
                    Email: <a href="mailto: ${employee.email}">${employee.email}</a>
                </div>
                <div>
                    GitHub: <a href="github.com/${employee.github}">${employee.github}</a>
                </div>
            </div>
        </section>
        `
    }
    else if(employee.getRole() === 'Intern') {
        return `
        <section class="card col-3 mx-3">
            <div class="card-header">
                <h2>${employee.name}</h2>
                <i></i><h2>${employee.getRole()}</h2>
            </div>
            
            <div>
                <div>
                    ID: ${employee.id}
                </div>
                <div>
                    Email: <a href="mailto: ${employee.email}">${employee.email}</a>
                </div>
                <div>
                    School: ${employee.school}
                </div>
            </div>
        </section>
        `
    }
    else {
        return "Something went wrong"
    }
}

function generateSite(managers,engineers,interns){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main class="row justify-content-around">

            ${cardBuilder(managers)}

            ${engineers.map(cardBuilder)}

            ${interns.map(cardBuilder)}

        </main>

    </body>
    </html>
    `
}

module.exports = generateSite;