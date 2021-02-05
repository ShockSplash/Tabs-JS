window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabContent = document.querySelectorAll('.tabs-content'),
         tabsBtn = document.querySelector('.tabs-btn'),
         btns= document.querySelectorAll('.btn');
    function hideContent(a){
        for (let i=a; i<tabContent.length;i++){
            tabContent[i].style.display = 'none';
        };
    };
    hideContent(1);
    function showContent(b){
        if (tabContent[b].style.display = 'none'){
            tabContent[b].style.display = 'flex';
        }
    }
    tabsBtn.addEventListener('click', function(e){
        let target = e.target;
        if (target){
            for (let i=0;i<btns.length;i++){
                if (target == btns[i]){
                    hideContent(0);
                    showContent(i);
                };
            };
        };
    });

});