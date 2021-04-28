import React, { useState, useEffect } from 'react';
import './header.scss';

const Header = (props) => {
    const fillBackgroundClass = 'fill-background';

    const [collapse, setCollapse] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [menuItems, setMenuItems] = useState(props.menuItems);
    const [detail, setDetail] = useState();

    const handleClick = () => {
        console.log('button header clicked', props);

        if (!collapse) {
            const el = document.querySelector('#navbarToggler');
            el.classList.add('show');
            el.classList.remove('collapsed');
            el.classList.add('collapsing');

            //TRY TO LISTEN TO MUTATION OBSERVER https://medium.com/@shuvohabib/listening-to-dom-changes-by-javascript-web-api-mutation-observer-hint-its-the-best-practice-3ee92dc8aac6
            setTimeout(() => {
                el.style.height = '238px';
            }, 1);
            setCollapse(true);
        }
        else {
            const el = document.querySelector('#navbarToggler');
            el.classList.remove('collapsed');
            el.classList.add('collapsing');

            setTimeout(() => {
                el.style.height = '0px';
                setCollapse(false);
            }, 1);
        }


    }


    const menuList = () => {
        return menuItems.map(e => {
            return (
                <>
                    <li key={e.value} className="nav-item">
                        <a key={e.value + 'h'} className="nav-link" href={e.href}>{e.value}</a>
                    </li>
                </>
            )
        });
    }

    useEffect(() => {
        console.log('detail is', detail);
        if(detail){
            console.log()
            document.querySelectorAll('.fill-background').forEach(e => {
                e.classList.remove('fill-background');
                e.classList.add('fill-background-detail');
            });
        }else{
            document.querySelectorAll('.fill-background-detail').forEach(e => {
                e.classList.add('fill-background');
                e.classList.remove('fill-background-detail');
            });
        }
    }, [detail]);

    useEffect(() => {
        
        setDetail(props.detail);
    
    }, [props.detail])

    useEffect(() => {
        setDetail(props.detail);
        let observer = undefined;
        const el = document.querySelector('#navbarToggler');
        const elBtn = document.querySelector('#navbarTogglerBtn');
        observer = new ResizeObserver(entries => {
            const entry = entries[0];
            const height = entry.contentRect.height;
            const width = entry.contentRect.width;
            //const visible =  elBtn? elBtn: false;
            console.log('width is', elBtn.clientWidth, height);
            if (elBtn.clientWidth <= 0 && height >= 238) {

                el.style.height = '0px';
                setTimeout(() => {
                    el.classList.remove('collapsing');
                    el.classList.remove('collapsed');
                    el.classList.remove('show');
                }, 300);
                //setCollapse(false);

                /*  else{
                   /*   el.classList.add('collapsed');
                     el.classList.remove('collapsing'); 
                 } */

            }



        });
        observer.observe(el);
        setInitialized(true);
    }, [])


    useEffect(() => {

        console.log('initialized state processed', initialized, collapse);

        if (!initialized) {
        }
        if (collapse) {

        }
    }, [initialized, collapse]);

    return (
        <>
            <div className={'debug-border container-fluid ' + fillBackgroundClass + ' sticky-top'}>
                <nav className="navbar navbar-expand-lg navbar-light d-header fill-background">
                    <a className="navbar-brand" href="#">Postmates </a>
                    <button id="navbarTogglerBtn" onClick={handleClick} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <form className="form-inline mx-auto">
                            <span><i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <input className="form-control mr-sm-2 d-search" type="search" placeholder="Search" />
                        </form>
                        <ul className="nav navbar-nav ml-auto mt-2 mt-lg-0 justify-content-end">
                            {menuList()}
                        </ul>
                        <form className="form-inline">
                            <button key='Login' className="btn btn-outline-success my-2 my-sm-0 text-uppercase d-button" type="submit">Login</button>
                            <button key='Signup' className="btn btn-outline-success my-2 my-sm-0 text-uppercase d-button" type="submit">Signup</button>
                        </form>
                    </div>

                </nav>
            </div>
        </>
    );
};

export default Header;