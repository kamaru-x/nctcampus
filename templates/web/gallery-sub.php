<!DOCTYPE html>
<html lang="en">

<!-- Basic -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">   

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Site Metas -->
<title>National College</title>  
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="">

<!-- Site Icons -->

<!--<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">-->

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<!-- Site CSS -->
	<link rel="stylesheet" href="style.css">
	<!-- ALL VERSION CSS -->
	<link rel="stylesheet" href="css/versions.css">
	<!-- Responsive CSS -->
	<link rel="stylesheet" href="css/responsive.css">
	<!-- Custom CSS -->
	<link rel="stylesheet" href="css/custom.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css">
	<!-- Modernizer for Portfolio -->
	<script src="js/modernizer.js"></script>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    </head>
    <body class="host_version"> 

    	<!-- Modal -->
    	<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    			<div class="modal-content">
    				<div class="modal-header tit-up">
    					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    					<h4 class="modal-title">Customer Login</h4>
    				</div>
    				<div class="modal-body customer-box">
    					<!-- Nav tabs -->
    					<ul class="nav nav-tabs">
    						<li><a class="active" href="#Login" data-toggle="tab">Login</a></li>
    						<li><a href="#Registration" data-toggle="tab">Registration</a></li>
    					</ul>
    					<!-- Tab panes -->
    					<div class="tab-content">
    						<div class="tab-pane active" id="Login">
    							<form role="form" class="form-horizontal">
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" id="email1" placeholder="Name" type="text">
    									</div>
    								</div>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" id="exampleInputPassword1" placeholder="Email" type="email">
    									</div>
    								</div>
    								<div class="row">
    									<div class="col-sm-10">
    										<button type="submit" class="btn btn-light btn-radius btn-brd grd1">
    											Submit
    										</button>
    										<a class="for-pwd" href="javascript:;">Forgot your password?</a>
    									</div>
    								</div>
    							</form>
    						</div>
    						<div class="tab-pane" id="Registration">
    							<form role="form" class="form-horizontal">
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" placeholder="Name" type="text">
    									</div>
    								</div>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" id="email" placeholder="Email" type="email">
    									</div>
    								</div>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" id="mobile" placeholder="Mobile" type="email">
    									</div>
    								</div>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input class="form-control" id="password" placeholder="Password" type="password">
    									</div>
    								</div>
    								<div class="row">							
    									<div class="col-sm-10">
    										<button type="button" class="btn btn-light btn-radius btn-brd grd1">
    											Save &amp; Continue
    										</button>
    										<button type="button" class="btn btn-light btn-radius btn-brd grd1">
    										Cancel</button>
    									</div>
    								</div>
    							</form>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    	<!-- LOADER -->
    	<!--<div id="preloader">
    		<div class="loader-container">
    			<div class="progress-br float shadow">
    				<div class="progress__item"></div>
    			</div>
    		</div>
    	</div>-->
    	<!-- END LOADER -->	

<!-- Start header -->
<header class="top-navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
            <!-- <img src="images/LOGO-02.png" alt="" style="height: 93px;background-color: white;
              " /> -->
             <img src="images/logos-01.png" alt="" style="height: 70px;
              " />
              
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbars-host">
              <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="aboutus.html" id="dropdown-a" data-toggle="dropdown">Who we Are</a>
               <div class="dropdown-menu" aria-labelledby="dropdown-a">
                <a class="dropdown-item" href="aboutus.html">About Us</a>
                <a class="dropdown-item" href="office_sub.html">Office_Subordinates</a>
                <a class="dropdown-item" href="rules.html">Rules & Regulations</a>
              </div>
            </li>
            <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Course </a>
             <div class="dropdown-menu" aria-labelledby="dropdown-a">
              <a class="dropdown-item" href="Plusone_Course.html">Plus one</a>
              <a class="dropdown-item" href="Ug_Course.html">UG </a>
              <a class="dropdown-item" href="Pg_Course.html">PG </a>
              <a class="dropdown-item" href="Tally_Course.html">Tally </a>
              <a class="dropdown-item" href="Govt_Course.html">Kerala Govt Course</a>
              <a class="dropdown-item" href="Certification_Course.html">Certified Course </a>
            </div>
          </li>
          <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Gallery </a>
           <div class="dropdown-menu" aria-labelledby="dropdown-a">
            <a class="dropdown-item" href="gallery.html">Photos</a>
            <a class="dropdown-item" href="#vedio.html">Vedios </a>
          </div>
        </li>
        <!-- <li class="nav-item"><a class="nav-link" href="#">Department</a></li> -->
        <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Department </a>
         <div class="dropdown-menu" aria-labelledby="dropdown-a">
          <a class="dropdown-item" href="Dept_Commerce.html">Dept of Commerce</a>
          <a class="dropdown-item" href="Dept_english.html">Dept of English </a>
          <a class="dropdown-item" href="Dept_ss.html">Dept of SocialScience </a>
          <!-- <a class="dropdown-item" href="#">Dept of Statistic </a> -->
          <!-- <a class="dropdown-item" href="#">Dept of Language</a> -->
        </div>
      </li>
     <li class="nav-item"><a class="nav-link" href="activities.html">Activities</a></li>
      <li class="nav-item"><a class="nav-link" href="#form.html">Online</a></li>
      <li class="nav-item"><a class="nav-link" href="contact.html">Contact us</a></li>
  </ul>
        <!--<ul class="nav navbar-nav navbar-right">
          <li><a class="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login"><span>Online</span></a></li>
        </ul>-->
      </div>
    </div>
  </nav>
</header>
	 
<!-- End header -->

<div class="all-title-box">
  <div class="container text-center">
   <h1>Sub Gallery<span class="m_1"></span></h1>
 </div>
</div>

<div class="container padding_top" style="padding-top: 100px;
    padding-bottom: 30px;">
	<div class="row">
	  
	  <?php 
		if($_GET['id'] == 1){
	  ?>
	  
	  
		<div class="col-sm-3">
			<a href="images/gallery/seminar/semi1.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/seminar/semi1.jpg" class="w-100"/>
			</a>
		</div> 
 <div class="col-sm-3">
			<a href="images/gallery/seminar/semi2.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/seminar/semi2.jpg" class="w-100"/>
			</a>
		</div> 
      <div class="col-sm-3">
			<a href="images/gallery/seminar/semi3.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/seminar/semi3.jpg" class="w-100"/>
			</a>
		</div>
    
     
 
 
	  <?php 
		}
	  ?>
	     
 
 
	  <?php 
		if($_GET['id'] == 2){
	  ?>
	  
	  
		<div class="col-sm-3">
			<a href="images/gallery/staff/s1.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s1.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
      <!-- <div class="col-sm-3">
			<a href="images/gallery/staff/s2.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s2.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div>  -->
 
      <div class="col-sm-3">
			<a href="images/gallery/staff/s3.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s3.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
      <div class="col-sm-3">
			<a href="images/gallery/staff/s4.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s4.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
      <div class="col-sm-3">
			<a href="images/gallery/staff/s5.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s5.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
      <div class="col-sm-3">
			<a href="images/gallery/staff/s6.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s6.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
      <div class="col-sm-3">
			<a href="images/gallery/staff/s7.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/staff/s7.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
	  <?php 
		}
	  ?>
      
	  
	  <?php 
		if($_GET['id'] == 3){
	  ?>
	  
	  
		<div class="col-sm-3">
			<a href="images/gallery/classroom/cr1.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr1.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
 <div class="col-sm-3">
			<a href="images/gallery/classroom/cr2.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr2.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
  <div class="col-sm-3">
			<a href="images/gallery/classroom/cr3.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr3.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
      <div class="col-sm-3">
			<a href="images/gallery/classroom/cr4.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr4.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
		<div class="col-sm-3">
			<a href="images/gallery/classroom/cr6.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr6.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
 <div class="col-sm-3">
			<a href="images/gallery/classroom/cr7.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr7.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
  <div class="col-sm-3">
			<a href="images/gallery/classroom/cr8.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr8.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
      <div class="col-sm-3">
			<a href="images/gallery/classroom/cr9.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr9.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div>
		<div class="col-sm-3">
			<a href="images/gallery/classroom/cr10.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr10.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
 <div class="col-sm-3">
			<a href="images/gallery/classroom/cr11.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr11.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
 
  <div class="col-sm-3">
			<a href="images/gallery/classroom/cr12.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr12.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
      <div class="col-sm-3">
			<a href="images/gallery/classroom/cr13.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/classroom/cr13.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div>
       
	  <?php 
		}
	  ?>
	     
 
 
	  <?php 
		if($_GET['id'] == 4){
	  ?>
	  
		<div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g1.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g1.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g2.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g2.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g3.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g3.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g4.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g4.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g5.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g5.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g6.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g6.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g7.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g7.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g8.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g8.jpg" class="w-100"/>
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g9.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g9.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g10.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g10.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g11.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g11.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g12.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g12.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g13.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g13.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
		      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g14.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g14.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g15.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g15.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div> 
     
      <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g16.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g16.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div>
		 <div class="col-sm-3">
			<a href="images/gallery/Collegeday Festival/g17.jpg" data-lightbox="homePortfolio" class="g_img_1">
				<img src="images/gallery/Collegeday Festival/g17.jpg" class="w-100" style="padding-top: 20px;" />
			</a>
		</div>
		 
	  <?php 
		}
	  ?>
	     
 </div>
</div>

	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="widget clearfix">
						<div class="widget-title">
							<h3>Gallery</h3>
						</div>
						<p> National college was established in 1975 for imparting tuition classes for school and college
							going students. The classes started in a small rented building with a few students and five
						teachers who were the promoters.</p>   
						<div class="footer-right">
							<ul class="footer-links-soi">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<!-- <li><a href="#"><i class="fa fa-github"></i></a></li> -->
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<!-- <li><a href="#"><i class="fa fa-dribbble"></i></a></li> -->
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							</ul><!-- end links -->
						</div>                      
					</div><!-- end clearfix -->
				</div><!-- end col -->

				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="widget clearfix">
						<div class="widget-title">
							<h3>Information Link</h3>
						</div>
						<ul class="footer-links">
							<li><a href="#">Home</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Course</a></li>
							<li><a href="#">Facilities</a></li>
							<li><a href="#">Contact us</a></li>
						</ul><!-- end links -->
					</div><!-- end clearfix -->
				</div><!-- end col -->

				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="widget clearfix">
						<div class="widget-title">
							<h3>Contact Details</h3>
						</div>

						<ul class="footer-links">
							<li><a href="mailto:#">info@nctcampus.com</a></li>
							<li><a href="#">www.nationalcollege.com</a></li>
							<li>Court Rd, Taliparamba, Kerala 670141</li>
							<li>04602203355</li>
						</ul><!-- end links -->
					</div><!-- end clearfix -->
				</div><!-- end col -->

			</div><!-- end row -->
		</div><!-- end container -->
	</footer><!-- end footer -->

	<div class="copyrights">
		<div class="container">
			<div class="footer-distributed">
				<div class="footer-center">                   
					<p class="footer-company-name">All Rights Reserved. &copy; 2021 <a href="#">NationalCollege</a>
						<!-- Design By : <a href="https://html.design/">html design</a></p> -->
					</div>
				</div>
			</div><!-- end container -->
		</div><!-- end copyrights -->

		<a href="#" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>

		<!-- ALL JS FILES -->
		<script src="js/all.js"></script>
		<!-- ALL PLUGINS -->
		<script src="js/custom.js"></script>
		<script src="js/jquery.prettyPhoto.js"></script> 
		<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
	</body>
	</html>