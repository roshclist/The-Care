import './Main.css'
import imgA from './title.png';
import { Link } from 'react-router-dom';
  
function Main  () {

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

    function login_button_on() {
        var button_font = `#login_button { color :#D8D8D8 ;}`
        document.getElementById('login_button_font').innerHTML = button_font
    }

    function login_button_out(){
        var button_font = ``
        document.getElementById('login_button_font').innerHTML = button_font
    }

    function login_button_down(){

    }




    function signup_button_on() {
        var button_font = `#signup_button { color :#D8D8D8 ;}`
        document.getElementById('signup_button_font').innerHTML = button_font
    }

    function signup_button_out(){   
        var button_font = ``
        document.getElementById('signup_button_font').innerHTML = button_font
    }

    function signup_button_down(){

    }

    
        return (
            <div lang="en">
                <div>
                    <link rel="stylesheet" href="Main.css"/>
                    <title>Main</title>

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

                    <style id = 'login_button_font'></style>
                    <style id = 'signup_button_font'></style>
                    
                </div>
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

                    <div id ="login_frame_2"></div>

                    <div id = "login_frame">
                        <center>
                            <Link to = "/login">
                                <button id = "login_button" class = "login_button" onMouseEnter={login_button_on} onMouseLeave={login_button_out} onMouseDown={login_button_down}>
                                    <b id = "login_button_font">Login</b>
                                </button>
                            </Link>
                            <button id = "signup_button" class = "login_button" onMouseEnter={signup_button_on} onMouseLeave={signup_button_out} onMouseDown={signup_button_down}>
                                <b id = "signup_button_font">Sign Up</b>
                            </button>
                        </center>
                    </div>

                </body>
            </div>
        )
    }


export default Main;