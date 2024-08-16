let xx = 'yes';

function sidbar() {
    if(xx === 'yes'){
        document.getElementById('nav').style.width = '58px';
        xx = 'no';
    }else{
        document.getElementById('nav').style.width = '';
        xx = 'yes';
    }
} 