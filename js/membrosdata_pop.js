const col1 = document.querySelector('#col1')
const col2 = document.querySelector('#col2')
const col3 = document.querySelector('#col3')

const mbs = `https://raw.githubusercontent.com/angeloplacebo/wie/master/data/membros.json`


fetch(mbs)
    .then(function (res) { return res.json() })
    .then(function (json) { insertMembros(json) })

function insertMembros(mbs) {
    var n = mbs.length
    var t = n / 3;
    var nu = t % 1;
    t = t - nu
    var r = n % 3;
    var t1 = t
    var t2 = t
    var t3 = t
    if (r == 2) {
        t1++;
        t2++;
    }
    if (r < 2 && r > 0) {
        t1++
    }

    for (i = 0; i < t1; i++) {
        var name = mbs[i].name
        var full_name = mbs[i].full_name
        var entrada = mbs[i].in
        var saida = mbs[i].out
        if (saida != "XX/XX/XX") {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple-disable" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col1.insertAdjacentHTML('beforeend', membrosdata)

        } else {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col1.insertAdjacentHTML('beforeend', membrosdata)
        }


    }
    t2 += t1
    for (i = t1; i < t2; i++) {
        var name = mbs[i].name
        var full_name = mbs[i].full_name
        var entrada = mbs[i].in
        var saida = mbs[i].out
        if (saida != "XX/XX/XX") {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple-disable" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col2.insertAdjacentHTML('beforeend', membrosdata)
        } else {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col2.insertAdjacentHTML('beforeend', membrosdata)
        }
    }
    t3 += t2
    for (i = t2; i < t3; i++) {
        var name = mbs[i].name
        var full_name = mbs[i].full_name
        var entrada = mbs[i].in
        var saida = mbs[i].out
        if (saida != "XX/XX/XX") {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple-disable" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col3.insertAdjacentHTML('beforeend', membrosdata)

        } else {
            const membrosdata = `<dd><a tabindex="0" class="btn btn-lg btn-purple" role="button" data-toggle="popover" data-trigger="focus" title="${full_name}" 
    data-content="Entrada: ${entrada} , Saida: ${saida}">${name}</a></dd>`
            col3.insertAdjacentHTML('beforeend', membrosdata)
        }
    }
}
