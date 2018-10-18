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

    for ( i = 0 ; i < t1 ; i++){
     var name = mbs[i].name
     var full_name = mbs[i].full_name
     var entrada = mbs[i].in
     var saida = mbs[i].out
    
     if (saida != "XX/XX/XX") {
        const membrosdata = `
        <p></p>
            <button type="button" class="btn btn-lg btn-purple-disable" data-toggle="modal" data-target="#exampleModal${i}">
            ${name}
            </button>
      <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
            ${full_name}<br>
              Entrada:  ${entrada}<br>
              Saida:    ${saida}
            </div>
          </div>
        </div>
      </div>`
      col1.insertAdjacentHTML('beforeend', membrosdata)
     }else{
        const membrosdata = `
        <p></p>
            <button type="button" class="btn btn-lg btn-purple" data-toggle="modal" data-target="#exampleModal${i}">
            ${name}
            </button>
      <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
            ${full_name}<br>
              Entrada:  ${entrada}<br>
              Saida:    -
            </div>
          </div>
        </div>
      </div>`
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
            const membrosdata = `
            <p></p>
                <button type="button" class="btn btn-lg btn-purple-disable" data-toggle="modal" data-target="#exampleModal${i}">
                ${name}
                </button>
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                ${full_name}<br>
                  Entrada:  ${entrada}<br>
                  Saida:    ${saida}
                </div>
              </div>
            </div>
          </div>`
          col2.insertAdjacentHTML('beforeend', membrosdata)
         }else{
            const membrosdata = `
            <p></p>
                <button type="button" class="btn btn-lg btn-purple" data-toggle="modal" data-target="#exampleModal${i}">
                ${name}
                </button>
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                ${full_name}<br>
                  Entrada:  ${entrada}<br>
                  Saida:    -
                </div>
              </div>
            </div>
          </div>`
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
            const membrosdata = `
            <p></p>
                <button type="button" class="btn btn-lg btn-purple-disable" data-toggle="modal" data-target="#exampleModal${i}">
                ${name}
                </button>
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                ${full_name}<br>
                  Entrada:  ${entrada}<br>
                  Saida:    ${saida}
                </div>
              </div>
            </div>
          </div>`
          col3.insertAdjacentHTML('beforeend', membrosdata)
         }else{
            const membrosdata = `
            <p></p>
                <button type="button" class="btn btn-lg btn-purple" data-toggle="modal" data-target="#exampleModal${i}">
                ${name}
                </button>
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Informações básicas</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                ${full_name}<br>
                  Entrada:  ${entrada}<br>
                  Saida:    -
                </div>
              </div>
            </div>
          </div>`
          col3.insertAdjacentHTML('beforeend', membrosdata)
         }
    }
}
