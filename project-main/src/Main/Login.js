import './Login.css'
import imgA from './title.png';
import { Link } from 'react-router-dom';

function Login () {

    function map_button_on() {
        var button_style = '#map_button { color: #D8D8D8; }'
        document.getElementById('map_button_style').innerHTML = button_style
    
        var map_button_bar_style = '.map_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('map_button_bar_style').innerHTML = map_button_bar_style
    }
    
    function map_button_out() {
        var button_style = '#map_button { color: black; }'
        document.getElementById('map_button_bar_style').innerHTML = button_style
    }
    
    function map_button_down() {
        var button_style = '#map_button { color: #D8D8D8; }'
        document.getElementById('map_click_font').innerHTML = button_style
    
        var button_style = '#compony_button { color: #black; }'
        document.getElementById('compony_click_font').innerHTML = button_style
    
        var button_style = '#my_button { color: #black; }'
        document.getElementById('my_click_font').innerHTML = button_style
    
        var button_style = '#customer_button { color: #black; }'
        document.getElementById('customer_click_font').innerHTML = button_style
    
        var button_style = '#news_button { color: #black; }'
        document.getElementById('news_click_font').innerHTML = button_style
    
    
    
        var button_style = '.map_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('map_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('compony_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('my_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('customer_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('news_click_bar').innerHTML = button_style
    }
    
    
    
    
    function compony_button_on() {
        var button_style = '#compony_button { color: #D8D8D8; }'
        document.getElementById('compony_button_style').innerHTML = button_style
    
        var company_button_bar_style = '.compony_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('compony_button_bar_style').innerHTML = company_button_bar_style
    }
    
    function compony_button_out() {
        var button_style = '#compony_button { color: black; }'
        document.getElementById('compony_button_bar_style').innerHTML = button_style
    }
    
    function compony_button_down() {
        var button_style = '#map_button { color: #black; }'
        document.getElementById('map_click_font').innerHTML = button_style
    
        var button_style = '#compony_button { color: #D8D8D8; }'
        document.getElementById('compony_click_font').innerHTML = button_style
    
        var button_style = '#my_button { color: #black; }'
        document.getElementById('my_click_font').innerHTML = button_style
    
        var button_style = '#customer_button { color: #black; }'
        document.getElementById('customer_click_font').innerHTML = button_style
    
        var button_style = '#news_button { color: #black; }'
        document.getElementById('news_click_font').innerHTML = button_style
    
    
    
        var button_style = ''
        document.getElementById('map_click_bar').innerHTML = button_style
    
        var button_style = '.compony_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('compony_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('my_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('customer_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('news_click_bar').innerHTML = button_style
    }
    
    
    
    
    
    function my_button_on() {
        var button_style = '#my_button { color: #D8D8D8; }'
        document.getElementById('my_button_style').innerHTML = button_style
    
        var my_button_bar_style = '.my_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('my_button_bar_style').innerHTML = my_button_bar_style
    }
    
    function my_button_out() {
        var button_style = '#my_button { color: black; }'
        document.getElementById('my_button_bar_style').innerHTML = button_style
    
    }
    
    function my_button_down() {
        var button_style = '#map_button { color: #black; }'
        document.getElementById('map_click_font').innerHTML = button_style
    
        var button_style = '#componey_button { color: #black; }'
        document.getElementById('compony_click_font').innerHTML = button_style
    
        var button_style = '#my_button { color: #D8D8D8; }'
        document.getElementById('my_click_font').innerHTML = button_style
    
        var button_style = '#customer_button { color: #black; }'
        document.getElementById('customer_click_font').innerHTML = button_style
    
        var button_style = '#news_button { color: #black; }'
        document.getElementById('news_click_font').innerHTML = button_style
    
    
    
        var button_style = ''
        document.getElementById('map_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('compony_click_bar').innerHTML = button_style
    
        var button_style = '.my_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('my_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('customer_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('news_click_bar').innerHTML = button_style
    }
    
    
    
    
    
    function customer_button_on() {
        var button_style = '#customer_button { color: #D8D8D8; }'
        document.getElementById('customer_button_style').innerHTML = button_style
    
        var customer_button_bar_style = '.customer_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('customer_button_bar_style').innerHTML = customer_button_bar_style
    }
    
    function customer_button_out() {
        var button_style = '#customer_button { color: black; }'
        document.getElementById('customer_button_bar_style').innerHTML = button_style
    }
    
    function customer_button_down() {
        var button_style = '#map_button { color: #black; }'
        document.getElementById('map_click_font').innerHTML = button_style
    
        var button_style = '#compony_button { color: #black; }'
        document.getElementById('compony_click_font').innerHTML = button_style
    
        var button_style = '#my_button { color: #black; }'
        document.getElementById('my_click_font').innerHTML = button_style
    
        var button_style = '#customer_button { color: #D8D8D8; }'
        document.getElementById('customer_click_font').innerHTML = button_style
    
        var button_style = '#news_button { color: #black; }'
        document.getElementById('news_click_font').innerHTML = button_style
    
    
    
        var button_style = ''
        document.getElementById('map_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('compony_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('my_click_bar').innerHTML = button_style
    
        var button_style = '.customer_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('customer_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('news_click_bar').innerHTML = button_style
    }
    
    
    
    
    
    function news_button_on() {
        var button_style = '#news_button { color: #D8D8D8; }'
        document.getElementById('news_button_style').innerHTML = button_style
    
        var customer_button_bar_style = '.news_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('news_button_bar_style').innerHTML = customer_button_bar_style
    }
    
    function news_button_out() {
        var button_style = '#news_button { color: black; }'
        document.getElementById('news_button_bar_style').innerHTML = button_style
    }
    
    function news_button_down() {
        var button_style = '#map_button { color: #black; }'
        document.getElementById('map_click_font').innerHTML = button_style
    
        var button_style = '#compony_button { color: #black; }'
        document.getElementById('compony_click_font').innerHTML = button_style
    
        var button_style = '#my_button { color: #black; }'
        document.getElementById('my_click_font').innerHTML = button_style
    
        var button_style = '#customer_button { color: #black; }'
        document.getElementById('customer_click_font').innerHTML = button_style
    
        var button_style = '#news_button { color: #D8D8D8; }'
        document.getElementById('news_click_font').innerHTML = button_style
    
    
    
        var button_style = ''
        document.getElementById('map_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('compony_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('my_click_bar').innerHTML = button_style
    
        var button_style = ''
        document.getElementById('customer_click_bar').innerHTML = button_style
    
        var button_style = '.news_button_bar {background-color: #D8D8D8;width: 60%;height: 4px;margin-top:2px;}'
        document.getElementById('news_click_bar').innerHTML = button_style
    }


    return (
        <div>
            <head>
                <title>Login</title>
            </head>

            <style id = "map_button_style"></style>
            <style id = "compony_button_style"></style>
            <style id = "my_button_style"></style>
            <style id = "customer_button_style"></style>
            <style id = "news_button_style"></style>


            <style id = "map_button_bar_style"></style>
            <style id = "compony_button_bar_style"></style>
            <style id = "my_button_bar_style"></style>
            <style id = "customer_button_bar_style"></style>
            <style id = "news_button_bar_style"></style>


            <style id = 'map_click_bar'></style>
            <style id = 'compony_click_bar'></style>
            <style id = 'my_click_bar'></style>
            <style id = 'customer_click_bar'></style>
            <style id = 'news_click_bar'></style>

            <style id = 'map_click_font'></style>
            <style id = 'compony_click_font'></style>
            <style id = 'my_click_font'></style>
            <style id = 'customer_click_font'></style>
            <style id = 'news_click_font'></style>

            <body>
            <div id = "title_frame">
                <center>
                    <Link to = "/">
                        <img src={ imgA}/>
                    </Link>
                </center>
            </div>
            <div id = "list_frame">
                <div id = "board_frame"></div>
                <div id = "list_button_frame">
                    <center>
                        <button id = "map_button" class = "button" onMouseEnter={map_button_on} onMouseLeave={map_button_out} onMouseDown={map_button_down}>
                            <b class = "button_font">About</b>
                            <hr class = "map_button_bar"></hr>
                        </button>   
                        <button id = "compony_button" class = "button" onMouseEnter={compony_button_on} onMouseLeave={compony_button_out} onMouseDown={compony_button_down}>
                            <b class = "button_font">Search</b>
                            <hr class = "compony_button_bar"></hr>
                        </button>
                        <button id = "my_button" class = "button" onMouseEnter={my_button_on} onMouseLeave={my_button_out} onMouseDown={my_button_down}>
                            <b class = "button_font">Pet Store</b>
                            <hr class = "my_button_bar"></hr>
                        </button>
                        <button id = "news_button" class = "button" onMouseEnter={news_button_on} onMouseLeave={news_button_out} onMouseDown={news_button_down}>
                            <b class = "button_font">Vet</b>
                            <hr class = "news_button_bar"></hr>
                        </button>
                        <button id = "customer_button" class = "button" onMouseEnter={customer_button_on} onMouseLeave={customer_button_out} onMouseDown={customer_button_down}>
                            <b class = "button_font">Service</b>
                            <hr class = "customer_button_bar"></hr>
                        </button>
                    </center>
                </div>
                <div id = "option_frame"></div>
            </div>
            <br/><br/>
                
                
                <center>
                    <section class="login">
                        <h1 id = "haerder_font">Login</h1>
                        <hr id = "login_bar"></hr>
                            <form id="login">
                            <br/><br/>
                                    <input id="userid" type="text" placeholder="&nbsp;&nbsp;ID"/>
                                    <br/><br/>
                                    <input id="userpw" type="password" placeholder="&nbsp;&nbsp;Password" minlength="10"/>
                                    <br/><br/>
                                    <div id = "save_id_frame">
                                        <input type="checkbox" id="chk_id"/><b>Save ID</b>
                                    </div>
                                    <br/>
                                    <button id = "login_submit"><b id = "login_button_page_font">Login</b></button>
                            </form>
                            <br/>
                            <div id = "login_option_frame">
                                <li><a href=""><b>SignUp</b></a></li> &nbsp;&nbsp;<b>/</b>&nbsp;&nbsp;
                                <li><a href=""><b>Find ID</b></a></li> &nbsp;&nbsp;<b>/</b>&nbsp;&nbsp;
                                <li><a href=""><b>Find Password</b></a></li>
                            </div>
                    </section>
                </center>
            </body>
        </div>
    )
}

export default Login;