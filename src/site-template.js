function cardBuilder(manager, engineers, interns){
    let output = `
            <section class="card col-3 mx-3 mb-3">
                <div class="card-header bg-primary ">
                    <h2>${manager.name}</h2>
                    <h2><i class="fa-solid fa-clipboard-list"></i> ${manager.getRole()}</h2>
                </div>
                
                <div>
                    <div>
                        ID: ${manager.id}
                    </div>
                    <div>
                        Email: <a href="mailto: ${manager.email}">${manager.email}</a>
                    </div>
                    <div>
                        Office Number: ${manager.officeNumber}
                    </div>
                </div>
            </section>
        `;
    
    for(engineer of engineers) {
        output+= `
            <section class="card col-3 mx-3 mb-3">
                <div class="card-header bg-primary ">
                    <h2>${engineer.name}</h2>
                    <h2><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h2>
                </div>
                
                <div>
                    <div>
                        ID: ${engineer.id}
                    </div>
                    <div>
                        Email: <a href="mailto: ${engineer.email}">${engineer.email}</a>
                    </div>
                    <div>
                        GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                    </div>
                </div>
            </section>
        `
    }
    for(intern of interns) {
        output+= `
            <section class="card col-3 mx-3 mb-3">
                <div class="card-header bg-primary ">
                    <h2>${intern.name}</h2>
                    <h2><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h2>
                </div>
                
                <div>
                    <div>
                        ID: ${intern.id}
                    </div>
                    <div>
                        Email: <a href="mailto: ${intern.email}">${intern.email}</a>
                    </div>
                    <div>
                        School: ${intern.school}
                    </div>
                </div>
            </section>
        `
    }
    return output;
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
        <script src="https://kit.fontawesome.com/487bb64b3a.js" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
        <header class="bg-danger text-center py-5 mb-2 text-light">
            <h1>My Team</h1>
        </header>

        <main class="row justify-content-around">

            ${cardBuilder(managers,engineers,interns)}

        </main>

    </body>
    </html>
    `
}


// Graphic design is not my passion 
module.exports = generateSite;