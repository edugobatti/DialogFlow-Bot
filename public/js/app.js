
function addPerg(text, tipo) {
    switch (tipo) {
        case 'user':
            $('#painel').append(
                ' <div class="line"><div class="rigthBuble"><span class="spanDialog">' + text + '</span></div></div><br>'
            );
            $(".chatBody").animate({ scrollTop: 1000 }, 500)
            break;
        case 'robo':
            $('#painel').append(
                ' <div class="line"><div class="leftBuble"><span class="spanDialog">' + text + '</span></div></div><br>'
            );
            $(".chatBody").animate({ scrollTop: 1000 }, 500)
            break;
        default:
            console.log('não entendi essa porra');
    }
}


$('#msgText').on('keypress',function(e){
    var code = e.keyCode || e.which;
    if (code == 13) {
        send()
    }
})


function send() {
    if ($('#icon').text() == 'send') {
        const texto = $('#msgText').val()
        if(texto != ''){
        $('#icon').text('cancel_schedule_send')
        $('#msgText').val('')
        addPerg(texto, 'user')
        $.post('/chat/msgUser', { msg: texto }).then(resp => {
            addPerg(resp, 'robo')
            $('#icon').text('send')
        })}else{
            addPerg('Seu bosta tem que escrever alguma porra!', 'robo')
        }
    } else {
        alert('Espera caralho!')
    }
    
}
