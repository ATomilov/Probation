<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <script src="js/jquery-3.1.1.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

    <!-- Add your site or application content here -->
    <div class="container">
        <?php include './left-sidebar.php'?>
        <div class="content">
            <div class="content-container">
                <div class="profile-content">
                    <div class="welcome-text">
                        Hello, I am <div class="welcome-text-name">Robb Armstrong</div> Designer and Front-end Developer
                    </div>
                    <div class="border-under-welcome-text"></div>
                    <div class="exp-text">
                        I have ten years experience as a web/interface designer.
                        I have a love of clean, elegant styling, and I have lots of experience
                        in the production of CSS and (X)HTML for modern websites. I have a
                        reasonable grasp of using JavaScript frameworks, specifically jQuery.
                    </div>
                    <div class="border-under-exp-text"></div>
                    <div class="pt-title">Personal Info</div>
                    <div class="border-under-pi-title"></div>
                    <div class="data-inputs">
                        <span class="label-data-inputs">name</span>
                        <input type="text" class="data-text-inputs name" placeholder="Robb Armstrong">
                    </div>
                    <div class="data-inputs">
                        <span class="label-data-inputs">date of birth</span>
                        <input type="text" class="data-text-inputs birth" placeholder="September 06, 1976">
                    </div>
                    <div class="data-inputs">
                        <span class="label-data-inputs">e-mail</span>
                        <input type="text" class="data-text-inputs e-mail" placeholder="info@yourdomain.com">
                    </div>
                    <div class="data-inputs">
                        <span class="label-data-inputs">address</span>
                        <input type="text" class="data-text-inputs address" placeholder="121 King St, Melbourne VIC">
                    </div>
                    <div class="data-inputs">
                        <span class="label-data-inputs">phone</span>
                        <input type="text" class="data-text-inputs phone" placeholder="012-3456-7890">
                    </div>
                    <div class="data-inputs last">
                        <span class="label-data-inputs">website</span>
                        <input type="text" class="data-text-inputs website" placeholder="www.themeforest.net">
                    </div>
                </div>
            </div>
            <?php include './footer.php'?>
        </div>
    </div>
</body>
</html>
