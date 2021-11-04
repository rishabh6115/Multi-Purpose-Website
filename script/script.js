const user_logo = document.querySelector('#nav-logo');
const drop_down = document.querySelector('.drop-down-menu');
const toggle_color = document.querySelector('.toggle-color');
const colors_menu = document.querySelector('.colors-menu');
const back = document.querySelector('.back');
const color_scheme = document.querySelectorAll('.colors');
const body = document.body;
const bots_h3 = document.querySelectorAll('.cg');
const head = document.querySelectorAll('.head');
const container_top = document.querySelector('#container-top');
const bottom = document.querySelector('.bottom');
const d = document.documentElement;
const search_icon = document.querySelector('.search-icon');
const nav_search_bar = document.querySelector('.nav-bar-search-bar-container');

user_logo.addEventListener('click', () => {
    drop_down.classList.toggle('drop-down-menu-display');
    user_logo.classList.toggle('nav-log-hover-transition');
    if (colors_menu.classList.contains('display-flex')) {
        colors_menu.classList.toggle('display-flex')
    }

});

toggle_color.addEventListener('click', () => {
    colors_menu.classList.toggle('display-flex')
})

back.addEventListener('click', () => {
    colors_menu.classList.toggle('display-flex')
})

color_scheme.forEach(individual_color => {
    individual_color.addEventListener('click', (e) => {
        let name = e.target.outerText;
        let new_color = document.querySelector('.color-toggle-changed-color');
        let login_button_color = document.querySelector('.color-change');


        if (name === 'Red') {
            new_color.style.backgroundColor = 'var(--red-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--red-color)';
            login_button_color.style.backgroundColor = 'var(--red-color)';
            search_icon.style.backgroundColor = 'var(--red-color)';
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 101, 102, 0.3) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--red-color);");
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--red-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--red-color)'
            }

        } else if (name === 'Pink') {
            new_color.style.backgroundColor = 'var(--pink-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--pink-color)';
            login_button_color.style.backgroundColor = 'var(--pink-color)';
            search_icon.style.backgroundColor = 'var(--pink-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--pink-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(250, 138, 187, 0.3)  10.8%, rgba(255, 201, 202, 0.3) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--pink-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--pink-color)'
            }

        } else if (name === 'Purple') {
            new_color.style.backgroundColor = 'var(--purple-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--purple-color)';
            login_button_color.style.backgroundColor = 'var(--purple-color)';
            search_icon.style.backgroundColor = 'var(--purple-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--purple-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(137, 87, 255, 0.25) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--purple-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--purple-color)'
            }

        } else if (name === 'Blue') {
            new_color.style.backgroundColor = 'var(--blue-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--blue-color)';
            login_button_color.style.backgroundColor = 'var(--blue-color)';
            search_icon.style.backgroundColor = 'var(--blue-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--blue-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(0, 187, 255, 0.15) 10.8%, rgba(205, 180, 219, 0.5) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--blue-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--blue-color)'
            }

        } else if (name === 'Green') {
            new_color.style.backgroundColor = 'var(--green-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--green-color)';
            login_button_color.style.backgroundColor = 'var(--green-color)';
            search_icon.style.backgroundColor = 'var(--green-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--green-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(0, 204, 137, 0.2) 10.8%, rgba(220, 240, 249, 0.8) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--green-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--green-color)'
            }

        } else if (name === 'Yellow') {
            new_color.style.backgroundColor = 'var(--yellow-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--yellow-color)';
            login_button_color.style.backgroundColor = 'var(--yellow-color)';
            search_icon.style.backgroundColor = 'var(--yellow-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--yellow-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 187, 0, 0.2) 10.8%, rgba(220, 240, 0, 0.15) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--yellow-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--yellow-color)'
            }

        } else if (name == 'Orange') {
            new_color.style.backgroundColor = 'var(--orange-color)';
            new_color.style.boxShadow = '0px 0px 4px 1px var(--orange-color)';
            login_button_color.style.backgroundColor = 'var(--orange-color)';
            search_icon.style.backgroundColor = 'var(--orange-color)';
            document.styleSheets[1].addRule("::-webkit-scrollbar-thumb", "background: var(--orange-color);");
            body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255, 107, 0, 0.3) 10.8%, rgba(255, 101, 102, 0.3) 90%)';
            for (let b of bots_h3) {
                b.style.borderBottom = '1px solid var(--orange-color)';
            }
            for (let h of head) {
                h.style.color = 'var(--orange-color)'
            }
        }
    });
});

window.addEventListener('scroll', (e) => {
    container_top.style.background = '#ffffffE6';
    container_top.style.opacity = '0.95';
    
    if(window.scrollY < 200) {
        scroll_value = 0 + window.scrollY/200;
        nav_search_bar.style.opacity = scroll_value;
    }

    else {
        nav_search_bar.style.opacity = '1';
    }

    colors_menu.style.transform = 'translate(0,24px)';
    drop_down.style.transform = 'translate(0,24px)';
    container_top.style.backdropFilter = 'blur(10px)';
    if (d.scrollTop === 0) {
        container_top.style.background = 'transparent';
        container_top.style.opacity = '1';
        colors_menu.style.transform = 'translate(0,0)';
        drop_down.style.transform = 'translate(0,0)'; 
        nav_search_bar.style.opacity = '0';   
    }   
})