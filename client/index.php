<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Worona</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <style>
        body {padding:1em;margin:0;font-size:14px;}
        button {padding:10px;}
        button:hover {cursor:pointer;}
        #preloader{position:relative;display:none;width:100%;height:100vh;background-color:rgba(255,100,0,0.15);z-index:999;}
        #preloader img {position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);}
        .posts h1 {color:tomato;font-family:'Arial';}
    </style>
</head>
<body>
    <div id="preloader">
        <img src="https://s-media-cache-ak0.pinimg.com/originals/4f/9b/63/4f9b6352fa82dfe82e27a2c52989aaa9.gif" />
    </div>

    <button id="all-posts">Display all posts</button>
    <button id="gadget-posts">Display gadget posts</button>
    <div class="posts"></div>

</body>
</html>