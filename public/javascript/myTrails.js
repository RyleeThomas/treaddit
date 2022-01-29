const { response } = require("express");

//add delete trail api fetch
const deleteTrail = document.querySelector("#destroyTrailBtn");

deleteTrail.addEventListener( 'click', async (e) => {
    var traidID = document.querySelector("#destroyTrailBtn").value;
    await fetch(`/api/trails/${traidID}`, {
        method: 'DELETE'
    })
    .then(
        window.location.reload()
        )
});

//add update user trail code