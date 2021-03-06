<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <script type="text/javascript" src="js/googleapis.js"></script>
    <script src="js/jquery-3.1.1.js"></script>
    <script src="js/isotope.pkgd.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL3o6xsBP7T326KyGaJz-RDS5QhN9Wq_4&callback=initMap" async defer></script> -->
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
    <div class="content-contact">
        <div class="content-container-contact">
            <div class="work-content">
                <div class="work-title">CONTACT US</div>
                <div class="top-right-navigation">
                    <div class="text-top-right-navigation">Go to next / previous page</div>
                    <div class="navigation-arrow">
                        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="border-under-contact-title"></div>
                <div id="google-map"></div>
                <!-- <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2650.3029359002676!2d144.96396132788283!3d-37.819111043529894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1495050211412" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                <div class="pt-title contact">Contact Info</div>
                <div class="contact-description">This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                </div>
                <div class="contact-data">
                    <div class="contact address">
                        <i class="fa fa-home contact" aria-hidden="true"></i>
                        <div class="text-address">lorem ipsum street</div>
                    </div>
                    <div class="contact phone">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <div class="text-phone">+399 (500) 321 9548</div>
                    </div>
                    <div class="contact mail">
                        <i class="fa fa-envelope fa-fw contact" aria-hidden="true"></i>
                        <div class="text-mail">info@domain.com</div>
                    </div>
                </div>
                <div class="border-under-contact-title second"></div>
                <div class="pt-title contact message">Send us a message</div>
                <div class="message-data">
                    <input type="text"  class="message-name" placeholder="name">
                    <input type="text"  class="message-mail" placeholder="e-mail">
                    <input type="text"  class="message-website" placeholder="website">
                </div>
                <textarea class="message-main-text" rows="11" cols="49"></textarea>
                <a class="send-message" href="javascript:void(0)">
                    <div class="send-message-button">Send Message</div>
                </a>

            </div>
        </div>
        <?php include './footer.php'?>
    </div>
</div>
</body>
</html>
